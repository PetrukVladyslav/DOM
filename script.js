let background = prompt('Введіть фон сторінки');
let fontFamily = prompt('Тип шрифта на сторінці');
let textAlign = prompt('Вирівнювання');
let backgroundParagraph = prompt('Фон для параграфа з посиланнями');
let textColorP = prompt('Колір тексту у параграфі з посиланнями');
let textColorA = prompt('Колір для самих посилань');
let listItemColor = prompt('Колір тексту у елементі div');
let listItemFontSize = prompt('Розмір тексту у елементі div');
let listItemFontWeight = prompt('Товщину тексту у елементі div');
let listStyle = prompt('Тип маркера для маркованого списку на сторінці');
let link1 = prompt('Введіть 1 посилання, яке веде на потрібний вам сайт');
let link2 = prompt('Введіть 2 посилання, яке веде на потрібний вам сайт');
let link3 = prompt('Введіть 3 посилання, яке веде на потрібний вам сайт');

document.body.style.backgroundColor = background;
document.body.style.fontFamily = fontFamily;
let align = document.getElementsByTagName('h1');
align[0].style.textAlign = textAlign;
document.getElementsByTagName('p')[0].style.backgroundColor = backgroundParagraph;
document.getElementsByTagName('p')[0].style.color = textColorP;
let i = 0;
while(i<document.querySelectorAll('a').length) {
    document.querySelectorAll('a')[i].style.color = textColorA;
    i++;
}
document.querySelector('div').style.color = listItemColor;
document.querySelector('div').style.fontSize = listItemFontSize;
document.querySelector('div').style.fontWeight = listItemFontWeight;
document.querySelector('ul').style.listStyle = listStyle;
document.querySelectorAll('a')[0].textContent = link1;
document.querySelectorAll('a')[1].textContent = link2;
document.querySelectorAll('a')[2].textContent = link3;
document.querySelectorAll('a')[0].href=`https://www.${link1}`;
document.querySelectorAll('a')[1].href=`https://www.${link2}`;
document.querySelectorAll('a')[2].href=`https://www.${link3}`;
document.querySelectorAll('a')[0].target='_blank';
document.querySelectorAll('a')[1].target='_blank';
document.querySelectorAll('a')[2].target='_blank';