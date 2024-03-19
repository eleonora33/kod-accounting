import React from 'react'
import bannerImg from '../assets/images/banner-img.png';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className="header_section" id='homeSection'>
      <div className="header_left">
    <div className="banner_main">
    <h1 className="banner_taital">сметководствени финансиски услуги</h1>
    <p className="banner_text">Сметководителот им помага на бизнисите да донесуваат критични финансиски одлуки со собирање, следење и корекција на финансиите на компанијата. </p>
    <div className="btn_main">
      <div className="more_bt"><Link to="more-for-us">Повеќе</Link></div>
    </div>
  </div>
</div>
<div className="header_right">
  <img className="banner_img" src={bannerImg} alt='banner'/>
</div>
</div>
  )
}

export default Header;
