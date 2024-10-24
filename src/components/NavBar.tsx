import { useState } from "react";

import type { NavBarProps } from "../lib/defintions";

export default function NavBar({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}: NavBarProps) {
	useState(pokemonIndex);

	return (
		<nav>
			{pokemonList.map((pokemon, index) => (
				<button
					key={pokemon.name}
					type="button"
					onClick={() => setPokemonIndex(index)}
				>
					{pokemon.name}
				</button>
			))}
		</nav>
	);
}
