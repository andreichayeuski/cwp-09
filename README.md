#Promises ЛР09

function task00() {

Создаем на Github репозиторий cwp-09, клонируем его, открываем в IDE

Создаем файл package.json:

{
  "name": "cwp-09",
  "author": "Your name"
}

С помощью терминала устанавливаем Bluebird npm i bluebird

Проверим что зависимость записалась в наш package.json:

{
  
  "name": "cwp-09",
  
  "author": "Your name",
  
  "dependencies": {
  
    "bluebird": "^3.x.x"
  }
}

Теперь мы можем импортировать библиотеку в наш код - const Promise = require('bluebird');

Также нам понадобиться библиотека для отправки HTTP-запросов - npm i axios
}

function task01() {

Создадим скрипт pokeapi.js, который будет использовать в своей работе http://pokeapi.co/. Далее реализуем операции которые будут выполняться последоватьельно

1. Загрузим из Pokeapi покемона с id 42. Выведем на консоль его имя, вес и размер

2. С помощью метода Promise.all параллельно загрузим 30 покемонов порциями по 10. Выведем имена загруженных покемонов

3. С помощью метода Promise.any параллельно загрузим покемонов с id 1, 4 и 7. Выведем на консоль имя загруженного покемона

4. С помощью метода Promise.props параллельно загрузим по 10 покемонов, предметов (items) и локаций (location). Выведем на консоль их имена по группам

5. Получить 4 первых ягоды (berry), затем с помощью метода Promise.map параллельно загрузим информацию по каждой ягоде. Выведем на консоль их имена и размер

6. Если на каком-то этапе произошла ошибка, то мы выведем информацию о ней на консоль, а скрипт продолжит выполнение

}

function task02() {

Создадим скрипт dirs.js
1. Прочитаем про Promise.promisify и Promise.promisifyAll. Применим второй метод к модулю fs

2. Объявим массив dirs куда запишем 10 имен несуществующих директорий, которые нужно создать. Можно воспользоваться следующим массивом:

const dirs = [
  'dir-1/dir-1-1',
  'dir-1/dir-1-2',
  'dir-1/dir-1-2/dir-1-2-1',
  'dir-2/dir-2-1/dir-2-1-1',
  'dir-2/dir-2-2/dir-2-2-1',
  'dir-2/dir-2-1/dir-2-2-2/dir-2-2-2-1',
  'dir-3/dir-3-1',
  'dir-3',
  'dir-3/dir-3-2/dir-3-2-1',
  'dir-3/dir-3-3/dir-3-3-1'
];

3. С помощью методов Promise.mapSeries и fs.mkdirAsync создадим структуру директорий в которой все пути в объявленном массиве существуют.

4*. Подумайте как можно ускорить процесс создания директорий

Задания со звездочкой предназначены для персонального роста и необязательны к показу при защите лабораторной работы
}

function task03() {

Синхронизируем локальный репозиторий с удаленным (сделаем push на Github)

}