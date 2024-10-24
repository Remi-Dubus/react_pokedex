import "./App.css";
import { useState } from "react";
import pokemonListData from "./assets/data/pokemonListData.json";

import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

import type { PokemonProps } from "./lib/defintions";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	const pokemonList: PokemonProps[] = pokemonListData;
	return (
		<div>
			<NavBar
				pokemonIndex={pokemonIndex}
				setPokemonIndex={setPokemonIndex}
				pokemonList={pokemonListData}
			/>

			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
			/>
		</div>
	);
}

export default App;
