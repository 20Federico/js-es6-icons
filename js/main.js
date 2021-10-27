'use strict'

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
    name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
    name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
const animalFilter = icons.filter(icon => icon.type === 'animal')
const vegetableFilter = icons.filter(icon => icon.type === 'vegetable')
const userFilter = icons.filter(icon => icon.type === 'user')

const cardContainer = document.getElementById('cardContainer');
const filterSelect = document.getElementById('iconsFilter');

icons.forEach(element => createCard(element));
let iconList = document.querySelectorAll('.col .card i');
iconColour(iconList);

filterSelect.addEventListener('change', function () {
  
  cardContainer.innerHTML = ''

  switch (filterSelect.value) {
    case 'all':
      icons.forEach(element => createCard(element));
      break;
    case 'animal':
      animalFilter.forEach(element => createCard(element));
      break;
    case 'vegetable':
      vegetableFilter.forEach(element => createCard(element));
      break;
    case 'user':
      userFilter.forEach(element => createCard(element));
      break;
  }

  iconList = document.querySelectorAll('.col .card i');
  iconColour(iconList)
});

function iconColour(iconsArray) {
  iconsArray.forEach(element => {
    switch (element.getAttribute('type')) {
      case 'animal':
        element.style.color = '#0000FF';
        break;
      case 'vegetable':
        element.style.color = '#FFA500';
        break;
      case 'user':
        element.style.color = '#800080';
        break;
        }  
  });
}

function createCard(element) {
  cardContainer.innerHTML += `
  <div class="col"> 
  <div class="card">
  <i class="${element.family} ${element.prefix}${element.name}" type="${element.type}"></i>
  <h5 class="mb-0 mt-1">${element.name}</h5>
  </div>
  </div>`;
}