import React, { Component } from "react";

export default class Errorbound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error,info){
  console.log(info,'error')
  }

  render() {
    if (this.state.hasError) {
      return <div>something went wrong!</div>;
    }
    return this.props.children;
  }
}
