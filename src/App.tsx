import "./App.css";
import { useState } from "react";
import pokemonListData from "./assets/data/pokemonListData.json";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

import type { PokemonProps } from "./lib/defintions";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	const pokemonList: PokemonProps[] = pokemonListData;
	if (pokemonIndex === 3) {
		alert("pika pikachu !!!");
	}
	return (
		<>
			<NavBar
				pokemonIndex={pokemonIndex}
				setPokemonIndex={setPokemonIndex}
				pokemonList={pokemonListData}
			/>

			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
			/>
		</>
	);
}

export default App;
