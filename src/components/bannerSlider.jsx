import React from "react";
import '../index.scss'
import Image1 from "../assets/hero_slides/1.png"
import Image2 from "../assets/hero_slides/2.png"
import Image3 from "../assets/hero_slides/3.png"
import Image4 from "../assets/hero_slides/4.png"
import Image5 from "../assets/hero_slides/5.png"

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let slideStyle = { backgroundImage: `url( ${this.props.background})` };
    return (
        <div
          className="slider__slide"
          data-active={this.props.active}
          style={slideStyle}
        >
        </div>
    );
  }
}

let slides = [
  {
    background: Image1
  },
  {
    background: Image2
  },
  {
    background: Image3
  },
  {
    background: Image4
  },
  {
    background: Image5
  }
];

export class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      activeSlide: 0,
      interval: 3,
      autoplay: true
    };
  }
  
  componentDidMount() {
		this.timerId = setInterval(() => {
      if ( this.state.autoplay ) {
        this.nextSlide();
      }
    },this.state.interval * 1000);
	}
  
  componentWillUnmount() {
		clearInterval( this.timerId );
	}
  
  pause() {
    this.setState({ autoplay: false });
  }
  
  resume() {
    this.setState({ autoplay: true });
  }

  prevSlide() {
    let slide = this.state.activeSlide - 1 < 0
      ? slides.length - 1
      : this.state.activeSlide - 1;
    this.setState({
      activeSlide: slide
    });
  }
  
  nextSlide() {
    let slide = this.state.activeSlide + 1 < slides.length
      ? this.state.activeSlide + 1
      : 0;
    this.setState({
      activeSlide: slide
    });
  }
  
  render() {
    
    return (
      <div>
          {slides.map((slide, index) => {
            return (
              <Slide
                background={slide.background}
                active={index === this.state.activeSlide}
              />
            );
          })}
        
      </div>
    );
  }
}
