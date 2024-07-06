import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div className="container">
				<Jumbotron />
				<div className="d-flex justify-content-around align-items-center flex-wrap p-2 text-center">
					<Card className="m-2" />
					<Card className="m-2" />
					<Card className="m-2" />
					<Card className="m-2" />
				</div>
			</div>
			<div className="text-center">
				<Footer />
			</div>
		</>
	);
};

export default Home;