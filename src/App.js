import React from 'react';
import './App.css';

const Phone =({content='',children=''})=>{
  return(
  <div class="header__phone"> 
  {content}
  <a href="tel:80508543543" class="header__phone-number">{children}</a>
</div>
  )
}

const MenuItem=({link="#",children})=>{
  return(<li class="menu__item"><a href={link} class="menu__link">{children}</a></li>
  )}

const HeaderTitle = ({children=""})=>{
return(
  <h1 class="header__title">{children}</h1>

)
}

const HeaderDesc=({children=""})=>{
  return(
    <p class="header__descr">{children}</p>
  )
}

const HeaderBtn=({link="#",children=""})=>{
  return(
    <a href={link} class="header__btn">
    {children}
  </a>
  )
}

function App() {
  return (
    <header class="header">
    <div class="container">

      <div class="header__inner">
        <div class="header__top">
          <div class="header__phone__inner">
            <Phone content="Заказ туров и бронирование:">тел. 8-050-8-543-543</Phone>
          </div>
          <nav class="menu">
            <ul class="menu__list">
              <MenuItem>Бронирование</MenuItem>
              <MenuItem>Экскурсии</MenuItem>
              <MenuItem>Туры</MenuItem>
              <MenuItem>Об Африке</MenuItem>
              <MenuItem>О на</MenuItem>
            </ul>
          </nav>
        </div>
    <HeaderTitle>Сафари по Африке</HeaderTitle>
        <div class="header__content">
        <HeaderDesc>Туры по самомым экзотическим местам
    Поехали с нами за новыми впечатлениями!</HeaderDesc>
      <HeaderBtn> Оставить заявку</HeaderBtn>

        </div>
      </div>
  
    </div>
  </header>
  );
}

export default App;
