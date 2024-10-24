import type { PokemonProps } from "../lib/PropsPokemon";

const PokemonCard = ({ name, imgSrc }: PokemonProps) => {
	return (
		<figure>
			{imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
			<figcaption>{name}</figcaption>
		</figure>
	);
};

export default PokemonCard;