import type { PokemonProps } from "./PropsPokemon";

const PokemonCard = ({ name, imgSrc }: PokemonProps) => {
	return (
		<figure>
			{imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
			<figcaption>{name}</figcaption>
		</figure>
	);
};

export default PokemonCard;
