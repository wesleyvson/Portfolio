import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, Nav, NavItem, NavLink, CardLink } from 'reactstrap';
import { Redirect } from 'react-router-dom'

import Plaatje3 from '../Images/img3.png'
import Plaatje4 from '../Images/img4.png'
import Plaatje5 from '../Images/img5.png'
import Plaatje6 from '../Images/img6.jpg'
import Plaatje7 from '../Images/img7.jpeg'
import Plaatje8 from '../Images/img8.jpg'


import './Projecten.css';

type props = {};
type state = {redirect : boolean}


export class Projecten extends Component<props, state> {
  static displayName = Projecten.name;

  constructor(props: any) {
    super(props);
    this.state = { redirect: false };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = (url : string) => {
    if (this.state.redirect) {
      return <Redirect to = {url}/>
    }
  }

  render() {
    return (
      <Container className="container-design">
        <Row>
          <Col>
            <h1>Projecten</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="card-design">
              <Card style={{ width: '90%', height: '330px' }}>
                <CardImg variant="top" src={Plaatje3} height='150px' />
                <CardBody>
                  <CardTitle><h4>Battleport</h4></CardTitle>
                  <CardText>
                    <p>Een schoolproject waarin we een videogame moesten ontwikkelen.</p>
                  </CardText>
                  {this.renderRedirect("/projecten/battleport")}
                  <Button variant="primary" block onClick={this.setRedirect}>Go somewhere</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="card-design">
              <Card style={{ width: '90%', maxHeight: '330px' }}>
                <CardImg variant="top" src={Plaatje4} height='150px' />
                <CardBody>
                  <CardTitle><h4>SpaceShooter</h4></CardTitle>
                  <CardText>
                    <p>Een schoolproject waarin we de vrije keuze hadden.</p>
                  </CardText>
                  <Button variant="primary" block>Go somewhere</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="card-design">
              <Card style={{ width: '90%', maxHeight: '330px' }}>
                <CardImg variant="top" src={Plaatje5} height='150px' />
                <CardBody>
                  <CardTitle><h4>Webshop</h4></CardTitle>
                  <CardText>
                    <p>Een schoolproject waarin een Webshop moesten ontwikkelen.</p>
                  </CardText>
                  <Button variant="primary" block>Go somewhere</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="card-design">
              <Card style={{ width: '90%', maxHeight: '330px'}}>
                <CardImg variant="top" src={Plaatje6} height='150px' />
                <CardBody>
                  <CardTitle><h4>Minor AI</h4></CardTitle>
                  <CardText>
                    <p>Leren werken met machine- en deep-learning</p>
                  </CardText>
                  <Button variant="primary" block>Go somewhere</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="card-design">
              <Card style={{ width: '90%', maxHeight: '330px'}}>
                <CardImg variant="top" src={Plaatje7} height='150px' />
                <CardBody>
                  <CardTitle><h4>Advanced Mobility</h4></CardTitle>
                  <CardText>
                    <p>Autonome raceauto ontwikkelen d.m.v objectherkenning.</p>
                  </CardText>
                  <Button variant="primary" block>Go somewhere</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="card-design">
              <Card style={{ width: '90%', height: '330px' }}>
                <CardImg variant="top" src={Plaatje8} height='150px' />
                <CardBody>
                  <CardTitle><h4>Wordt vervolgt</h4></CardTitle>
                  <CardText>
                    <p>Wordt vervolgt</p>
                  </CardText>
                  <Button variant="primary" block>Go somewhere</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="card-design">
              <Card style={{ width: '90%', height: '330px'}}>
                <CardImg variant="top" src={Plaatje8} height='150px' />
                <CardBody>
                  <CardTitle><h4>Wordt vervolgt</h4></CardTitle>
                  <CardText>
                    <p>Wordt vervolgt</p>
                  </CardText>
                  <Button variant="primary" block>Go somewhere</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="card-design">
              <Card style={{ width: '90%', height: '330px'}}>
                <CardImg variant="top" src={Plaatje8} height='150px' />
                <CardBody>
                  <CardTitle><h4>Wordt vervolgt</h4></CardTitle>
                  <CardText>
                    <p>Wordt vervolgt</p>
                  </CardText>
                  <Button variant="primary" block>Go somewhere</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
