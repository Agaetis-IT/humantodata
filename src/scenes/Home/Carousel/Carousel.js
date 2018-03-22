import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slide from './Slide'
import peoplesImg from '../../../images/peoples.png'
import factoryImg from '../../../images/factory.png'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

export default () => (
  <Slider {...settings}>
    <div>
      <Slide imgSrc={factoryImg}>Transforming factories...</Slide>
    </div>
    <div>
      <Slide imgSrc={peoplesImg}>...starts with people.</Slide>
    </div>
    <div>
      <Slide>
        Transformation digitale de votre usine :<br />avez-vous pensé à tout ?
      </Slide>
    </div>
    <div>
      <Slide align="left">
        • Définition et mise en oeuvre de la stratégie et des outils IT<br />
        • Modélisation des phénomènes et DataScience<br />• Véracité des données<br />
        • Pilotage de la performance et prise en compte du facteur humain
      </Slide>
    </div>
  </Slider>
)
