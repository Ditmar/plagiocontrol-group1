import React from "react";

import Header from "../../organisms/header/header";

const EXCHANGE_RATES = gql`
	query {
		products {
			nodes {
				name
			}
		}
	}
`;

const Homepage = ({ banner, carousel, footer, header }) => {
	const { loading, error, data } = useQuery(EXCHANGE_RATES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<>
			<Header {...header} />
			<h2>Encabezado</h2>
			{data.products.nodes.map(({ name }) => (
				<h3>{name}</h3>
			))}			
		</>
	);
};

export default Homepage;
