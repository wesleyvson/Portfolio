import React, { Component } from 'react';
import { Container } from 'reactstrap';

type props = {};
type state = {}


export class Battleport extends Component<props, state> {
  static displayName = Battleport.name;

  constructor(props: any) {
    super(props);
    this.state = { currentCount: 0 };
  }

  render() {
    return (
        <Container>
            <p>test test test</p>
        </Container>
    );
  }
}
