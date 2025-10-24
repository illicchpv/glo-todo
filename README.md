# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---
---
---

[github.com](https://github.com/illicchpv/glo-todo)

[опубликовано ](https://illicchpv.github.io/glo-todo/)


### [Урок 1](https://glo-academy.org/react-ts-lesson1). Создание и настройка стартового приложения React.JS + TS 

- >npx create-react-app my-app --template typescript
- >npm ci
- >npm i sass -save-dev

- [Node.JS](https://nodejs.org/en)
- [Reactjs.org](https://ru.legacy.reactjs.org/)
- [React.dev](https://react.dev/learn)
- [create-react-app](https://create-react-app.dev/docs/getting-started/)
- [Руководство по GIT](https://githowto.com/ru)


- [to-do-layout.zip](https://fs02.getcourse.ru/fileservice/file/download/a/12250/sc/250/h/76d24ddfd3b00c816388ad77d0549efc.zip)
- [to-do-master.zip — шаблон приложения с версиями пакетов](https://fs17.getcourse.ru/fileservice/file/download/a/12250/sc/56/h/- dd60acb59d700d3bad9c3adcee0f9bfe.zip)

#### Задание

1. Повторить за уроком. 
2. Создать стартовый шаблон приложения. 
3. Залить на Git


Результат необходимо отправить телеграм-боту — залить на github или отправить архивом

---

### Урок 2. Перенос верстки в приложение [Урок 2. ](https://glo-academy.org/react-ts-lesson2)

[Компоненты](https://reactdev.ru/learn/your-first-component/)
[CSS modules](https://habr.com/ru/articles/335244/)

#### Задание

1. Повторить за уроком. 

---

### Урок 3. Реализация логики ToDo List [Урок 3. ](https://glo-academy.org/react-ts-lesson3)

- useState()   https://ru.legacy.reactjs.org/docs/hooks-intro.html
- useEffect()  https://ru.legacy.reactjs.org/docs/hooks-overview.html
- Списки и ключи  https://ru.legacy.reactjs.org/docs/lists-and-keys.html
- TypeScript для React  https://habr.com/ru/companies/otus/articles/456124/

#### Задание

- Повторить за уроком. 
    (Результат необходимо отправить телеграм-боту — залить на github или отправить архивом)

#### Усложнённое Задание

- Подключить библиотеку react-toastify (или любую другую для работы со всплывающими уведомлениями)
- С помощью данных пакетов при добавлении / удалении / изменении каждого элемента ToDo листа выводить в нижнем правом углу сообщение с соответствующим текстом.


### Урок 4. Маршрутизация React [Урок 4.](https://glo-academy.org/react-ts-lesson4) 

- [React Router (старый синтаксис)](https://v5.reactrouter.com/web/guides/quick-start)
- [React Router (новый синтаксис)](https://reactrouter.com/en/main/upgrading/v6-data)

#### Усложнённое

1. Установить библиотеку react-helmet и react-helmet-async
2. С их помощью вынести из public/index.html все связанное с google (шрифты, link preconnect) и добавить их в layout.component через HelmetProvider
3. Стилизовать страницу 404. Прикрепляйте свои варианты скрином к ДЗ. Ждем красивых страничек ^^

- >npm i react-helmet
- >npm i --save-dev @types/react-helmet
- >npm i react-helmet-async

npm uninstall @types/react-helmet
npm uninstall react-helmet

### Урок 5. Redux [Урок 5.](https://glo-academy.org/react-ts-lesson5)

Реализуем store приложения. Свяжем логику ToDo List с хранилищем Redux

[Redux toolkit](https://redux-toolkit.js.org/tutorials/quick-start)

Пакет react-redux обновился до версии 9-й что изменило типы данных и выскакивает ошибка по типу данных при сериализации через localstorage. 

Чтобы ее избежать установите данные версии данных пакетов:

npm install @reduxjs/toolkit@1 
npm install react-redux@8

#### Задание Усложнённое

- В компоненте Form у нас есть строка состояния поля:
- Написать reducer для данного функционала
- Добавить reducer в store
- Создать необходимые actions
- Работать с value поля ввода через redux-toolkit
- При создании ToDo считывать value из redux-toolkit (передавать в action)


### Урок 6. Styled-components [Урок 6.](https://glo-academy.org/react-ts-lesson6)
Изучим библиотеку styled-component. Стилизуем кастомные элементы

[Styled components](https://styled-components.com/docs/basics#getting-started)
  Используем версию пакета как в уроке "styled-components": "^5.0.0",  
  - > npm install styled-components@5.0.0
  - > npm install --save-dev  @types/styled-components
  - > npm i styled-normalize

#### Задание +

1. Повторить за уроком 
2. Стилизовать все компоненты через styled-components


### Урок 7. Динамические цветовые темы [Урок 7.](https://glo-academy.org/react-ts-lesson7)

[Gh-pages](https://www.npmjs.com/package/gh-pages)
[Мануал по настройке 404](https://github.com/rafgraph/spa-github-pages)
[Пример кода, репозиторий](https://github.com/Velmoren/todo-app/tree/main)

- > npm i uuid
- > npm i --save-dev @types/uuid
- > npm i gh-pages --save-dev
- > npm i env-cmd --save-dev 

#### Усложнённое задание

1) Стилизовать приложение по желанию
2) Установить пакет gh-pages
3) Опубликовать свое приложение
4) Ссылку на приложение прикрепить к комментарию домашнего задания


* .env.development - для того чтобы при запуске start сбросить установку "homepage": "/glo-todo",  
  /glo-todo - корень приложения на gh 
