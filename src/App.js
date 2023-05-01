import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import React, { Component } from "react";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSackDollar, faSadTear, faGlobeAsia, faSdCard, faSubway } from '@fortawesome/free-solid-svg-icons'


export default function SimpleSlider() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };

    const pictures = ['img_01.jpg', 'img_02.jpg', 'img_03.jpg', 'img_04.jpg', 'img_05.jpg', 'img_06.jpg', 'img_07.jpg', 'img_08.jpg', 'img_09.jpg', 'img_10.jpg']


    return (
      <div>
        <Slider {...settings} className="mx-5">
          {
            pictures.map((pic)=>(
              <div className="img_box">
                <img src={require(`./img/${pic}`)} alt="이미지" height={500}/>
              </div>
            ))
          }
        </Slider>

        <div className="icon_wrap">
          <FontAwesomeIcon icon={faSackDollar} className="icon"/>
          <FontAwesomeIcon icon={faSadTear} className="icon"/>
          <FontAwesomeIcon icon={faGlobeAsia} className="icon"/>
          <FontAwesomeIcon icon={faSdCard} className="icon"/>
          <FontAwesomeIcon icon={faSubway} className="icon"/>
        </div>
      </div>
    );
}