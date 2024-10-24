import { useState } from "react";

import type { NavBarProps } from "../lib/defintions";

export default function NavBar({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}: NavBarProps) {
	useState(pokemonIndex);
	const handleClickBefore = () => setPokemonIndex(pokemonIndex - 1);
	const handleClickAfter = () => setPokemonIndex(pokemonIndex + 1);
	return (
		<nav>
			{pokemonIndex > 0 && (
				<button type="button" onClick={handleClickBefore}>
					Précedent
				</button>
			)}
			{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={handleClickAfter}>
					Suivant
				</button>
			)}
		</nav>
	);
}
