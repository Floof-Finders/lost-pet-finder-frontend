import { useState, createContext } from 'react';

export const PetContext = createContext({});

function PetProvider(props) {
	const [petArray, setPetArray] = useState({
    pets: []
  });

	return (
		<PetContext.Provider value={{ petArray, setPetArray }}>
			{props.children}
		</PetContext.Provider>
	);
}

export default PetProvider;
