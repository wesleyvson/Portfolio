import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Plaatje2 from '../Images/img2.png'

import './OverMij.css';


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
      <Container>
        <Row>
          <Col><h1>Wesley van Son</h1></Col>
        </Row>
        <Row>
          <Col sm={2} >
            <div className="overmij-image">
              <img src={Plaatje2} />
            </div></Col>
          <Col sm={10}>
            <div className="overmij-content">
              <h2>Wie ben ik?</h2>
                <p>Ik ben Wesley van Son, 22 jaar en ik kom uit Poortugaal. 
                  In mijn vrije tijd houd ik van sporten, gamen en uiteraard programmeren. 
                  Verder vind ik het leuk om te werken in teamverband en kan ik ook goed zelfstandig werken.</p>
              <h2>Opleiding</h2>
              <p>Ik ben een vierdejaars student op De Hogeschool Rotterdam en volg de opleiding Informatica. 
                Voor deze opleiding heb ik 1 jaar op het VAVO College Rotterdam gezeten en heb hier ook mijn HAVO diploma gehaald. 
                Hiervoor heb ik 6 jaar VWO gevolgd op de Ring van Putten in Spijkenisse, dit heb ik uiteindelijk niet gered, 
                dit is ook de reden dat ik naar het VAVO College Rotterdam ben gegaan op mijn HAVO dimploma te halen.<br></br><br></br>
                In mijn tijd op de middelbare school heb ik in totaal 4 jaar lang het vak Informatica gehad en kennisgemaakt met diverse opmaaktalen als HTML/CSS en programmeertalen als Javascript en PHP. Hierdoor had ik de basis van het programmeren al onder de knie. Ik vond het op de middelbare al een leuk vak en haalde goede cijfers, dit was dus ook de reden om de opleiding Informatica te doen.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={10}>
            <h2>Stage</h2>
            <p>Ik heb mijn stage doorlopen bij Hoppinger. Tijdens mijn stage heb ik veel ervaring opgedaan met het React MVC, C#, Typescript en Ruby. 
              Hierbij was ik vooral verantwoordelijk voor de back-end van de webapplicaties, maar heb ik ook kleine opdrachten gedaan voor de front-end</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
