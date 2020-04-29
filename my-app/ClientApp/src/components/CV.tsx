import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';

import './CV.css';

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
      <Container>
        <Row>
          <Col>
            <h1>Curriculum Vitae </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="cv-personalia">
              <ListGroup flush>
                <ListGroupItem><h3>Personalia</h3></ListGroupItem>
              </ListGroup>
              <p> 
                <b>Naam:</b>      Wesley Van Son<br></br>
                <b>Adres:</b>      Maria v/d duinstraat 28<br></br>
                <b>Email:</b>      wesleyvson@hotmail.com<br></br>
                <b>Geboortedatum:</b>      Maria v/d duinstraat 28<br></br>
                <b>Geboorteplaats:</b>      Maria v/d duinstraat 28<br></br>
                <b>Geslacht:</b>      Maria v/d duinstraat 28<br></br>
                <b>Nationaliteit:</b>      Maria v/d duinstraat 28<br></br>
                <b>Burgerlijke staat:</b>      Maria v/d duinstraat 28<br></br>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
