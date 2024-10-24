import { useEffect } from "react";
import type { PokemonProps } from "../lib/defintions";

const PokemonCard = ({ name, imgSrc }: PokemonProps) => {
	useEffect(() => {
		alert("hello pokemon trainer :)");
	}, []);
	return (
		<figure>
			{imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
			<figcaption>{name}</figcaption>
		</figure>
	);
};

export default PokemonCard;
