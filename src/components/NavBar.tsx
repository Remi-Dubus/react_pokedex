import type { NavBarProps } from "../lib/defintions";

export default function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
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
