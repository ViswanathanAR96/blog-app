import React, {Component} from 'react';
import styled from 'styled-components';
import Feeds from './feed.js';
import feed1img from '../../assets/blog1.png';
import feed2img from '../../assets/blog2.gif';
import feed3img from '../../assets/blog3.jpg';

class Main extends Component{
  render(){
  return(
    <Body>
      <Title>Stories:</Title>
      <Feeds id="1"
           title = "What should you know about coronavirus"
      		 date = "28/12/2019"
      		 summary = "How hard is it to make a decision on COVID provided the amount of data being circulated around us?"
			 image = {feed1img} />

	 <Feeds id="2"
          title = "How US is suppressing COVID Pandemic"
      		 date = "21/02/2019"
      		 summary = "It makes political and economic sense for the US to suppress the coronavirus. For that, states and the federal government each have their own roles that they need to adjust."
			 image = {feed2img} />

	 <Feeds id="3"
          title = "WHY WE SHOULD ALL WEAR MASKS"
      		 date = "28/07/2018"
      		 summary = "The latest biological findings on SARS-Cov-2 viral entry into human tissue and sneeze/cough-droplet ballistics suggest that the major transmission mechanism is not via the fine aerosols but large droplets, and thus, warrant the wearing of surgical masks by everyone."
			 image = {feed3img} />
    </Body>
  );
}
}

const Title = styled.h2`
  color: palevioletred;
`;

const Body = styled.main`
  padding-left: 2%;
`;

export default Main;