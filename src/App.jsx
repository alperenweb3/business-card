import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

import { inject } from '@vercel/analytics';
 
inject();

function App() {
	return (
		<div className="main">
			<div className="bcard">
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export default App;
