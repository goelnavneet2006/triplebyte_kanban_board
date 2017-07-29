import React, { Component } from 'react';
import Column from "./column";

class App extends Component {

  constructor(props) {
    super(props);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);

    this.state = {
      columnContent: [
        {
          title: "Winnie",
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
          ]
        },
        {
          title: "Bob",
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
          ]
        },
        {
          title: "Thomas",
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
          ]
        },
        {
          title: "George",
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
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Column columnIndex="0" title={this.state.columnContent[0].title} titleBGColor="c1" leftClick={this.leftClick} rightClick={this.rightClick}/>
        <Column columnIndex="1" title="Bob" titleBGColor="c2" leftClick={this.leftClick} rightClick={this.rightClick}/>
        <Column columnIndex="2" title="Thomas" titleBGColor="c3" leftClick={this.leftClick} rightClick={this.rightClick}/>
        <Column columnIndex="3" isLast={true} title="George" titleBGColor="c4" leftClick={this.leftClick} rightClick={this.rightClick}/>
      </div>
    );
  }


leftClick(columnIndex, cardIndex) {

}
rightClick(columnIndex, cardIndex) {

}


}

export default App;
