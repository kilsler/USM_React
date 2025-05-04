
### Лабораторная работа №6 Morozan Nichita IA2303
## Инструкции по запуску проекта

Запуск проходит через терминал из папки c скаченным проектом:  
1.`npm install`  
2.`npm install react-router`  
3.`npm install axios`  
4.`npm install react-hook-form`
5.`npm install yup @hookform/resolvers`
6.`npm install react-loading-skeleton`  
7.`npm install tailwindcss @tailwindcss/cli`  
8.`npm install @reduxjs/toolkit react-redux`  
9.`npm i --save react-toastify`  
10.`npm run tailwind --watch`  
11.`npm run dev`  

Далее переходим по предоставленной в терминале ссылке.

## Описание лабораторной работы
 Познакомиться с концепцией глобального состояния в React и научиться использовать Redux Toolkit для управления общими данными между компонентами. Научиться добавлять, изменять и удалять товары в корзине с использованием глобального хранилища.
## Краткая документация к проекту

- `src/App.jsx` -  главный компонент приложения.
- `src/сomponents/Header.jsx` -  Хэдер компонент приложения. Содержит логотип, строку поиска(не рабочую).  
- `src/сomponents/Footer.jsx` -  Футер компонент приложения. Содержит дату и ссылку на репозиторий.  
- `src/сomponents/PizzaCard.jsx` - Карта-пиццы компонент приложения. Выводит информацию о пицце и её карточку.  
- `src/сomponents/MainLayout.jsx` -  layout-компонент для всех страниц.  
- `src/components/Search.jsx` - Поиск компонент для списка продуктов  
- `src/pages/ProductPage.jsx` - 1 выбрання пицца компонент приложения.
- `src/pages/ProductList.jsx` - Список-пицц компонент приложения.
- `src/pages/ProductEditPage.jsx` - Форма для изменения
- `src/pages/ProductForm.jsx` - Форма для добавления  
- `src/pages/AboutUsPage.jsx` - Компонент выводящй информацию о компании-пиццерии.  
- `src/pages/CartPage.jsx` - Компонент с текущей корзиной покупок.   
- `src/pages/HomePage.jsx` - Главная(домашняя страница).  
- `src/pages/NotFoundPage.jsx` - Страница для отображении ошибки/неверного маршрута.  
- `src/store/store.js` - хранилище состояния.
- `src/store/cart/slice.js` - Слайс для работы с данными корзины.
## Примеры использования проекта  

![image](https://github.com/user-attachments/assets/ac71bb20-3e17-4896-a0f0-dd541b96150f)  
![image](https://github.com/user-attachments/assets/bb33dcd3-33b9-4d83-9ccd-12b5a8fed7b0)  
![image](https://github.com/user-attachments/assets/d13d0629-26ce-439a-896e-b8b848630428)  

## Ответы на контрольные вопросы
  
1. Что такое глобальное состояние и зачем оно нужно?  
  Данные доступные сразу во многих частях приложения, вне зависимости от того, где эти компоненты находятся.  
2. Что такое Redux Toolkit и как он упрощает работу с глобальным состоянием?
  Это официальная надстройка над Redux, созданная разработчиками Redux для упрощения и стандартизации работы с глобальным состоянием.
3. Что такое слайсы и как они помогают организовать код?
  Это логически сгруппированная часть состояния и связанный с ней код.





