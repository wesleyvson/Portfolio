import React, { Component } from 'react';

type props = {};
type state = {}


export class Projecten extends Component<props, state> {
  static displayName = Projecten.name;

  constructor(props: any) {
    super(props);
    this.state = { currentCount: 0 };
  }

  render() {
    return (
      <div>
        <h1>Projecten</h1>
        <p>De projecten met uitleg
        </p>
      </div>
    );
  }
}
