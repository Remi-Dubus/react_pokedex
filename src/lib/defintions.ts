export type PokemonProps = {
	name: string;
	imgSrc?: string;
};

export type NavBarProps = {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: PokemonProps[];
};
