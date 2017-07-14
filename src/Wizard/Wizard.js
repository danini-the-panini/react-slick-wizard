import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';

const STEPS = [
  'Foo', 'Bar', 'Baz', 'Qux'
];

export default class Wizard extends Component {
  static propTypes = {
    stepChanged: PropTypes.func
  }

  state = {
    step: 0,
    loading: false
  }

  nextStep = () => {
    if (this.isLastStep()) {
      console.log("LAST STEP!");
    } else {
      this.slider.slickNext();
    }
  }

  previousStep = () => {
    if (this.isFirstStep()) {
      console.log("FIRST STEP!");
    } else {
      this.slider.slickPrev();
    }
  }

  afterChange = (i) => {
    this.props.stepChanged(i);
    this.setState({ step: i, loading: true }, () => {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000)
    });
  }

  isLastStep(step = this.state.step) {
    return step >= STEPS.length - 1;
  }

  isFirstStep(step = this.state.step) {
    return step <= 0;
  }

  renderStep(step) {
    return (
      <div>
        <h3>{step}</h3>
        <button onClick={this.nextStep}>Next</button>
      </div>
    );
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: false,
      draggable: false,
      afterChange: this.afterChange
    };
    return (
      <Slider ref={c => this.slider = c} {...settings}>
        {STEPS.map((step, i) => (
          <div key={i}>
            {this.state.loading ? (<p>loading...</p>) : this.renderStep(step)}
          </div>
        ))}
      </Slider>
    );
  }
}
