'use strict';

var wizardsSettingsWindow = document.querySelector('.setup');
wizardsSettingsWindow.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var wizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var SECNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101,137,164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var getRandomDate = function (arr) {
  var randomDate = Math.floor(Math.random() * arr.length);
  return arr[randomDate];
};

var createRandomWizards = function (count) {
  var wizards = [];

  for (var i = 0; i < count; i++) {
    var wizard = {
      name: getRandomDate(NAMES) + ' ' + getRandomDate(SECNAMES),
      coatColor: getRandomDate(COAT_COLORS),
      eyesColor: getRandomDate(EYES_COLORS)
    };

    wizards.push(wizard);
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizarsElement = similarWizardTemplate.cloneNode(true);
  wizarsElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizarsElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizarsElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizarsElement;
};
var renderWizardList = function () {
  var fragment = document.createDocumentFragment();
  var wizards = createRandomWizards(4);

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  return fragment;
};

wizardList.appendChild(renderWizardList());
