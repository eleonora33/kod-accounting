import React from 'react'
import img_6 from "../assets/images/img-6.png";
import img_2 from "../assets/images/img-2.png";
import search_icon from "../assets/images/search-icon.png";
import img_4 from "../assets/images/img-4.png";
import img_5 from "../assets/images/img-5.png";
import img_3 from "../assets/images/img-3.png";
import icon_3 from "../assets/images/icon-3.png";
import icon_4 from "../assets/images/icon-4.png";
import icon_2 from "../assets/images/icon-2.png";
import icon_1 from "../assets/images/icon-1.png";

function Portfolio() {
  return (
    <div>
       <div className="project_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="project_main">
              <h1 className="services_taital">Успешни Проекти</h1>
              <p className="services_text">Време е постапките да зборуваат погласно од зборовите </p>
              <div className="moremore_bt"><a href="#">Повеќе </a></div>
              <div className="image_6"><img src={img_6}/></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="images_main">
              <div className="images_left">
                <div className="container_1">
                  <img src={img_2} alt="Avatar" className="image" style={{width:"100%"}}/>
                  <div className="middle">
                    <div className="text"><img src={search_icon}/></div>
                    <h2 className="fact_text">Повеќе Факти</h2>
                  </div>
                </div>
                <div className="container_1">
                  <img src={img_3} alt="Avatar" className="image" style={{width:"100%"}}/>
                  <div className="middle">
                    <div className="text"><img src={search_icon}/></div>
                    <h2 className="fact_text">Повеќе Факти</h2>
                  </div>
                </div>
              </div>
              <div className="images_right">
                <div className="container_1">
                  <img src={img_4} alt="Avatar" className="image" style={{width:"100%"}}/>
                  <div className="middle">
                    <div className="text"><img src={search_icon}/></div>
                    <h2 className="fact_text">Повеќе Факти</h2>
                  </div>
                </div>
                <div className="container_1">
                  <img src={img_5} alt="Avatar" className="image" style={{width:"100%"}}/>
                  <div className="middle">
                    <div className="text"><img src={search_icon}/></div>
                    <h2 className="fact_text">Повеќе Факти</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="project_section_2 layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1"><img src={icon_3}/></div>
            <h3 className="accounting_text_1">30+</h3>
            <p className="yers_text">Години во Бизнисот</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1"><img src={icon_4}/></div>
            <h3 className="accounting_text_1">20000+</h3>
            <p className="yers_text">Испорачани Проекти</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1"><img src={icon_2}/></div>
            <h3 className="accounting_text_1">10000+</h3>
            <p className="yers_text">Задоволни Клиенти</p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="icon_1"><img src={icon_1}/></div>
            <h3 className="accounting_text_1">1500+</h3>
            <p className="yers_text">Услуги</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Portfolio
