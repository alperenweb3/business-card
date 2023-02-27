import React from "react";
import ProfileImg from "../images/alperenweb3_profile.jpg";
import "./styles/Header.css";

function Header() {
	return (
		<div className="bcard__header">
			<img className="bcard__profile-img" src={ProfileImg} alt="Alperen Özkan Profile" />
		</div>
	);
}

export default Header;
