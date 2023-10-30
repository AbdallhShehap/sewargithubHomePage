import React from 'react'
import MenuPages from '../componnent/MenuPages'
import BannerOurStory from '../componnent/BannerOurStory'
import SlideOurStory from '../componnent/SlideOurStory'
import Footer from '../componnent/Footer'


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function OurStory() {
  const OUR = 'OUR '
  const PATH = "STORY"
  return (
    <Container fluid>
      <Row>

        <MenuPages our={OUR} path={PATH}/>
      </Row>

      <Row>
        <BannerOurStory/>
      </Row>
      <br/> <br/>

      {/* slider */}
      <Row>
        <SlideOurStory/>
      </Row>

      {/* footer */}
      <div>
        <Footer/>
      </div>

    </Container>
  )
}

export default OurStory