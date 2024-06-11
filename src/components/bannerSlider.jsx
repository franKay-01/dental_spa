import React from "react";
import '../index.scss'
import Image1 from "../assets/general_catalogue/12.png"
import Image2 from "../assets/general_catalogue/17.png"
import Image3 from "../assets/general_catalogue/7.png"
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
    background: Image1,
    text: "Road"
  },
  {
    background: Image2,
    text: "America"
  },
  {
    background: Image3,
    text: "Pieapple"
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
                text={slide.text}
                active={index === this.state.activeSlide}
              />
            );
          })}
        
      </div>
    );
  }
}
