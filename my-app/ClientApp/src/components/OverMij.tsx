import React, { Component } from 'react';

type props = {};
type state = {}


export class OverMij extends Component<props, state> {
  static displayName = OverMij.name;

  constructor(props: any) {
    super(props);
    this.state = { currentCount: 0 };
  }

  render() {
    return (
      <div>
        <h1>Over Mij</h1>
        <p>Foto + verhaaltje over leven</p>
      </div>
    );
  }
}
