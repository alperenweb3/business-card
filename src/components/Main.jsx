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

function Main() {
	return (
		<div className="bcard__body">

			<div className="bcard__heading-wrapper">
				<h1 className="bcard__name">Alperen Özkan</h1>
				<h2 className="bcard__title">Full Stack Web Developer</h2>
				<div className="bcard__website">
					<a style= { LinkStyle } href="https://alperen.co" target="__blank">alperen.co</a>
				</div>
			</div>

			<div className="bcard__btn-wrapper">
				<a href="mailto:alperenweb3@gmail.com" target="__blank"><button className="bcard__btn bcard__btn--email"><FontAwesomeIcon className="bcard__btn-icon" icon={faEnvelope}></FontAwesomeIcon>Email</button></a>
				<a href="https://linkedin.com/in/alperenozkan" target="__blank"><button className="bcard__btn bcard__btn--linkedin"><FontAwesomeIcon className="bcard__btn-icon" icon={faLinkedin}></FontAwesomeIcon>
Linkedin</button></a>
			</div>

			<div className="bcard__text-wrapper">
				<div className="bcard__about">
					<h3 className="bcard__heading">About</h3>
					<p className="bcard__text">AYZÖFL'02 | PA'08 | DCI | USTECH Dreams are the shadows of the Reality. #whoami <span role="img" aria-label="hand-signs">👉🏼</span> #webdeveloper #webdesigner #blockchaindeveloper #freelancer #selflearner</p>
				</div>
				<div className="bcard__interests">
					<h3 className="bcard__heading">Interests</h3>
					<p className="bcard__text">Web3, Blockchain, Playing Ney, Travel</p>
				</div>
			</div>	
		</div>
	);
}
  
export default Main;