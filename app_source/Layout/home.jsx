'use strict'
import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={this.props.classNameApp}>
        <header className={this.props.classNameAppHeader}>
          <h1 className={this.props.classNameTitle}>Welcome to Webdashstudio</h1>
        </header>
        <p className={this.props.classNameIntro}>
           Under construction
        </p>
      </div>
    );
  }
}
const defaultProps= {
  array:[],
}
const css ={
  classNameApp:"App",
  classNameAppHeader:"App-header",
  classNameTitle:"App-title",
  classNameIntro:"App-intro"

};

Object.assign(defaultProps, css);
export default Home;
