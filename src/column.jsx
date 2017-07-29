import React, { Component } from 'react';
import Card from "./card";
import classNames from "classnames";
import cloneDeep from "lodash/cloneDeep";
// import logo from './logo.svg';
import './App.css';

class Column extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      cardContentList: this.props.cardContentList
    }
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  render() {
    const classes = classNames({
      "column": true,
      "is-last": this.props.isLast
    })

    return (
      <div className={classes}>
        
        <h3 className={this.props.titleBGColor}>{this.props.title}</h3>

        {
          this.state.cardContentList.map((cardContent, index) =>
            <Card
              isLeft={cardContent.isLeft}
              content={cardContent.content}
              isRight={cardContent.isRight}
              cardIndex={index}
              leftClick={this.leftClick}
              rightClick={this.rightClick} />
          )
        }

        <a href="#" onClick={this.onClick}>+ Add a card</a>

      </div>
    );
  }

  leftClick(cardIndex) {
    this.props.leftClick(this.props.columnIndex, cardIndex);
  }

  rightClick(cardIndex) {
    this.props.rightClick(this.props.columnIndex, cardIndex);
  }

  onClick() {
    var newCardContent = prompt("Enter content for new card");
    
    let cardContentList = cloneDeep(this.state.cardContentList);
    cardContentList.push({
      content: newCardContent,
      isLeft: true,
      isRight: true
    });

    this.setState({
      cardContentList
    });
  }
}

Column.defaultProps = {
  title: "Title",
  cardContentList: [
    {
      isLeft: true,
      content: "Test content1 from parent",
      isRight: true
    },
    {
      isLeft: true,
      content: "Test content2 from parent",
      isRight: true
    }
  ],
  titleBGColor: "c1"
}

export default Column;
