var lang = window.location.href;
lang = lang.substr(lang.length - 8);
switch (lang) {
   case 'eng.html': Language = 'eng'
      break
   case 'rus.html': Language = 'rus'
      break
   case 'ukr.html': Language = 'ukr'
      break
   case '_ukr.xml': Language = 'ukr'
      break
   case '_rus.xml': Language = 'rus'
      break
   case '_eng.xml': Language = 'eng'
      break
   default: {
    alert('Errors language.  Tips will test in English');
    Language = 'eng';
    break
   }
}

var noSearchResults = {
    'ukr': 'Вибачте, за вашим запитом нічого не знайдено.\nСпробуйте переформулювати пошуковий запит',
    'rus': 'Извините, по вашему запросу ничего не найдено.\nПопытайтесь переформулировать поисковый запрос',
    'eng': 'Sorry , your search did not match.\nTry to reformulate your search query'
};

var errorSearch = {
    'ukr': 'Запити менше 3 символів \nне оброблюються',
    'rus': 'Запросы меньше 3 символов\nне обрабатываются',
    'eng': 'Requests less than 3 characters\n are not processed'
};

var searchAlt = {
    'ukr': 'Пошук',
    'rus': 'Поиск',
    'eng': 'Search'
};    

var searchClearAlt = {
    'ukr': 'Очистити',
    'rus': 'Очистить',
    'eng': 'Clear'
};

var searchInput = {
    'ukr': 'Введіть запит тут',
    'rus': 'Введите запрос здесь',
    'eng': 'Enter your inquiry here'
};

document.getElementById('searchForMenuClear').setAttribute('title',searchClearAlt[Language]);
document.getElementById('searchForMenuSubmit').setAttribute('title',searchAlt[Language]);
document.getElementById('searchForMenuInput').setAttribute('title',searchInput[Language]);