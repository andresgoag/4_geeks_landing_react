import React from "react";

// Components
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { CardsGroup } from "./cardsGroup.jsx";
import { Footer } from "./footer.jsx";

let items = [
	{
		imageUrl:
			"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		title: "Title 1",
		text:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, dignissimos?",
		link: "https://www.google.com/maps"
	},
	{
		imageUrl:
			"https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		title: "Title 2",
		text:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, dignissimos?",
		link: "https://twitter.com"
	},
	{
		imageUrl:
			"https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		title: "Title 3",
		text:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, dignissimos?",
		link: "https://4geeksacademy.com"
	},
	{
		imageUrl:
			"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		title: "Title 4",
		text:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, dignissimos?",
		link: "https://getbootstrap.com"
	}
];

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />

			<div className="container">
				<Jumbotron />

				<div className="row">
					<CardsGroup items={items} />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
