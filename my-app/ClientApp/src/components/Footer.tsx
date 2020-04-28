import React, { Component } from 'react';
import { Container, Navbar } from 'reactstrap';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

import './Footer.css';

type props = {};
type state = { collapsed: boolean }

export class Footer extends Component<props, state> {
  static displayName = Footer.name;

  constructor(props: any) {
    super(props);
  }


  render() {
    return (
      <footer>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-top box-shadow mb-3" light>
          <Container>
            <ul className="footer_bar">
              <SocialIcon url="http://twitter.com/jaketrent" />
              <SocialIcon url="https://www.linkedin.com/in/wesley-van-son-3a2201189/" />
              <SocialIcon url="https://www.instagram.com/wesleyvanson/" />
              <SocialIcon url="https://github.com/wesleyvson" />
            </ul>
          </Container>
        </Navbar>
      </footer>
    );
  }
}
