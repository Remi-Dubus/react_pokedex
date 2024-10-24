import "./App.css";
import { useState } from "react";
import pokemon from "./assets/data/pokemon.json";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar"

function App() {

	

	return (
		<div>
			<PokemonCard />
			<NavBar />
		</div>
	);
}

export default App;
