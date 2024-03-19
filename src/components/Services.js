import React from 'react'
import icon_1 from "../assets/images/icon-1.png";
import icon_2 from "../assets/images/icon-2.png";
import icon_3 from "../assets/images/icon-3.png";
import icon_4 from "../assets/images/icon-4.png";
import Navbar from './Navbar';

function Services() {
  return (
    <div>
      <Navbar />
    <div className="what_we_do_section layout_padding" id='servicesSection'>
      <div className="container">
        <h1 className="what_taital">Што правиме</h1>
        <p className="what_text">Секој ден е нова можност да се направи нешто одлично.</p>
        <div className="what_we_do_section_2">
          <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src={icon_1}/></div>
              <h3 className="accounting_text">Сметководството</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Повеќе </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main active">
              <div className="icon_1"><img src={icon_2}/></div>
              <h3 className="accounting_text">Советуваме</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Повеќе </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src={icon_3}/></div>
              <h3 className="accounting_text">Инвестиции</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Повеќе </a></div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box_main">
              <div className="icon_1"><img src={icon_4}/></div>
              <h3 className="accounting_text">Финансии</h3>
              <p className="lorem_text">Lorem Ipsum is simply dummy text of the printing and</p>
              <div className="moremore_bt_1"><a href="#">Повеќе </a></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services
