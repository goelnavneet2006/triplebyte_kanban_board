import React, { Component } from 'react';
// import classNames from "classnames";
// import logo from './logo.svg';
// import './App.css';

class Card extends Component {

  constructor(props) {
    super(props);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  render() {
    return (
      <div className="card">
        { this.props.isLeft ?
          <a onClick={this.leftClick} href="#" className="card-left">&lt;</a> :
          ""
        }

        <span className="card-content">
          {this.props.content}
        </span>

        { this.props.isRight ?
          <a onClick={this.rightClick} href="#" className="card-right">&gt;</a> :
          ""
        }
      </div>
    );
  }

  leftClick() {
    this.props.leftClick(this.props.cardIndex);
  }

  rightClick() {
    this.props.rightClick(this.props.cardIndex);
  }
}

Card.defaultProps = {
  isLeft: true,
  content: "Test content",
  isRight: true
}

export default Card;
