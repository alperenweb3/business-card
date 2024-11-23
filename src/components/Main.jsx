import React from "react";
import "./styles/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const LinkStyle = {
	color: "var(--white)",
	fontSize:"1.24rem", 
	fontWeight:400, 
	lineHeight: "15px",
	cursor: "pointer"
};

const AboutLinkStyle = {
	color: "var(--secondary)",
	fontSize:"1.24rem", 
	fontWeight:400, 
	lineHeight: "15px",
	cursor: "pointer"
};

function Main() {
	return (
		<div className="bcard__body">

			<div className="bcard__heading-wrapper">
				<h1 className="bcard__name">Alperen Özkan</h1>
				<h2 className="bcard__title">Software Developer</h2>
				<div className="bcard__website">
					<a style= { LinkStyle } href="https://chartworld.com" target="__blank">7Cs (SevenCs) GmbH</a>
				</div>
			</div>

			<div className="bcard__btn-wrapper">
				<a href="mailto:alperenozkan.official@gmail.com" target="__blank"><button className="bcard__btn bcard__btn--email"><FontAwesomeIcon className="bcard__btn-icon" icon={faEnvelope}></FontAwesomeIcon>Email</button></a>
				<a href="https://linkedin.com/in/alperenozkan" target="__blank"><button className="bcard__btn bcard__btn--linkedin"><FontAwesomeIcon className="bcard__btn-icon" icon={faLinkedin}></FontAwesomeIcon>
Linkedin</button></a>
			</div>

			<div className="bcard__text-wrapper">
				<div className="bcard__about">
					<h3 className="bcard__heading">About Me</h3>
					<p className="bcard__text">
						<a style= { AboutLinkStyle } href="https://antalyafenlisesi.meb.k12.tr/" target="__blank">AYZÖFL'02 |</a>
						<a style= { AboutLinkStyle } href="#"> PA'08 |</a>
						<a style= { AboutLinkStyle } href="https://digitalcareerinstitute.org/" target="__blank"> DCI |</a> 
						<a style= { AboutLinkStyle } href="https://codeworks.me/" target="__blank"> CodeWorks</a>
					</p>  
					<p className="bcard__text">"Dreams are the shadows of the Reality."</p>
					<p className="bcard__text">#whoami <span role="img" aria-label="hand-signs">👉🏼</span> #developer #cybercrimeinvestigator #blockchaindevoper #freelancer #selflearner</p>
				</div>
				<div className="bcard__interests">
					<h3 className="bcard__heading">Interests</h3>
					<p className="bcard__text">Cyber Security, ReactJS, Blockchain, Father, Travel, Ney Music</p>
				</div>
			</div>	
		</div>
	);
}
  
export default Main;
