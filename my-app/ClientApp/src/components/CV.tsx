import React, { Component } from 'react';

 type props = {};
 type state = {};

export class CV extends Component<props, state> {
  static displayName = CV.name;

  constructor(props: any) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  render() {
    return (
      <div>
        <h1>Curriculum Vitae </h1>
        <p>Hierin CV gooien</p>
      </div>
    );
  }
}
