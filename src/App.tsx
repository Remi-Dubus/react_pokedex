import "./App.css";
import { useState } from "react";
import pokemon from "./assets/data/pokemon.json";
import PokemonCard from "./components/PokemonCard";

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	const handleClickBefore = () => {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		} else {
			setPokemonIndex(pokemonIndex + (pokemon.length - 1));
		}
	};
	const handleClickAfter = () => {
		if (pokemonIndex < pokemon.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		} else {
			setPokemonIndex(pokemonIndex - pokemonIndex);
		}
	};
	return (
		<div>
			<PokemonCard
				name={pokemon[pokemonIndex].name}
				imgSrc={pokemon[pokemonIndex].imgSrc}
			/>
			<button type="button" onClick={handleClickBefore}>
				Précedent
			</button>
			<button type="button" onClick={handleClickAfter}>
				Suivant
			</button>
		</div>
	);
}

export default App;