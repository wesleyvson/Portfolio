import React, { Component } from 'react';

type props = {};
type state = {}


export class Contact extends Component<props, state> {
  static displayName = Contact.name;

  constructor(props: any) {
    super(props);
    this.state = { currentCount: 0 };
  }

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <p>contact form</p>
      </div>
    );
  }
}
