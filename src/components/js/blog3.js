import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import feed3img from '../../assets/blog3.jpg';
import styled from 'styled-components';
const  Blog3 = props  => {

  return(
    <div className = "Blog3">
    	<Header />
    	<Title> WHY WE SHOULD ALL WEAR MASKS </Title>
    	<ImgCss src={feed3img} alt="blog-image"/>
        <p> With everything that’s happening about the Coronavirus, it might be very hard to make a decision of what to do today. Should you wait for more information? Do something today? What?
		Here’s what I’m going to cover in this article, with lots of charts, data and models with plenty of sources:
		How many cases of coronavirus will there be in your area?
		What will happen when these cases materialize?
		What should you do?
		When?
		When you’re done reading the article, this is what you’ll take away:
		The coronavirus is coming to you.
		It’s coming at an exponential speed: gradually, and then suddenly.
		It’s a matter of days. Maybe a week or two.
		When it does, your healthcare system will be overwhelmed.
		Your fellow citizens will be treated in the hallways.
		Exhausted healthcare workers will break down. Some will die.
		They will have to decide which patient gets the oxygen and which one dies.
		The only way to prevent this is social distancing today. Not tomorrow. Today.
		That means keeping as many people home as possible, starting now.
		As a politician, community leader or business leader, you have the power and the responsibility to prevent this.
		You might have fears today: What if I overreact? Will people laugh at me? Will they be angry at me? Will I look stupid? Won’t it be better to wait for others to take steps first? Will I hurt the economy too much?
		But in 2–4 weeks, when the entire world is in lockdown, when the few precious days of social distancing you will have enabled will have saved lives, people won’t criticize you anymore: They will thank you for making the right decision.
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

export default Blog3;
