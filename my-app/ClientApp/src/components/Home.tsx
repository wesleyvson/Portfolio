import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import Plaatje1 from '../Images/img1.jpg'

import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <Container>
        <Row>
          <Col><h1>Portfolio Wesley van Son</h1></Col>
        </Row>
        <Row>
          <Col> <p>Welkom op mijn website. Op deze website is alle informatie te vinden over mij. Denk hierbij aan: </p></Col>
        </Row>
        <Row>
          <Col>
            <div className="content_list">
              <ListGroup flush>
                <ListGroupItem>Wie ben ik?</ListGroupItem>
                <ListGroupItem>Opleiding</ListGroupItem>
                <ListGroupItem>Ervaringen</ListGroupItem>
                <ListGroupItem>Projecten</ListGroupItem>
                <ListGroupItem>Curriculum Vitae</ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col>
            <div className="home-image">
              <img src={Plaatje1} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
