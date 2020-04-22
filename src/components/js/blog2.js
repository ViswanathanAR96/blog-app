import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import feed2img from '../../assets/blog2.gif';
import styled from 'styled-components';
const  Blog2 = props  => {

  return(
    <div className = "Blog2">
    	<Header />
    	<Title> How US is suppressing COVID Pandemic</Title>
    	<ImgCss src={feed2img} alt="blog-image"/>
        <p> Summary: It makes political and economic sense for the US to suppress the coronavirus. For that, states and the federal government each have their own roles that they need to adjust.
		The US is now the country with most coronavirus cases in the world. It is likely to keep that title in the history books. Two key reasons are government decentralization and concerns about the economic impact of aggressive social distancing measures.
		Here’s what we’re going to cover today, with a lot of data, charts and sources:
		What’s the situation in the US and its states
		Why the coronavirus should be a bipartisan issue
		The economics of controlling the virus
		Which decisions should be left to the federal government or to states
		Here’s what you’ll take away:
		The coronavirus is growing everywhere in the US.
		Some states are on their way to controlling it.
		Others have massive outbreaks that make China’s outbreak pale in comparison.
		Many are unprepared, and will suffer some of the worst outbreaks.
		All voters care about this, Democrats and Republicans.
		Democrats were hit first.
		But Republicans have more to lose.
		They’re older and more likely to die.
		Most hesitation comes from the perceived cost of suppressing the virus.
		Fortunately, it’s cheaper to suppress it than to let it run loose.
		We should do it.
		But right now, states are left fending for themselves. It’s a mess.
		They are competing against each other instead of collaborating.
		They might be forced to seal their borders with each other.
		There is a role for states and a role for the federal government. The federal government coordinates, the states execute.
		If both step up, we will save lives and increase the GDP.
		</p>
		<Footer />
    </div>
  );
}

const ImgCss = styled.img`
 	width: 100%;
	height: auto;
	padding: 2px, 2px;
`;

const Title = styled.p`
 	font-weight: bold;
 	 font-size: 24px;
 	 text-align: center;
`;

export default Blog2;
