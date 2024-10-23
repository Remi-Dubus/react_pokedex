type pokemon = {
	name: string;
	imgSrc?: string;
};

const PokemonCard = ({ name, imgSrc }: pokemon) => {
	return (
		<figure>
			{imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
			<figcaption>{name}</figcaption>
		</figure>
	);
};

export default PokemonCard;
