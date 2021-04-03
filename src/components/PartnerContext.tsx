import React, { Dispatch, SetStateAction } from 'react';

// initialisation d'un context pour mettre à disposition P1 dans tout les composants enfants au contexte
const PartnerContext = React.createContext<{ partner: string; setPartner: Dispatch<SetStateAction<string>> }>({
	partner: process.env.REACT_APP_PARTNER || 'P1',
	setPartner: () => {},
});

// composant qui initialise et inject le contexte pour faciliter l'utilisation
const PartnerProvider: React.FC = ({ children }) => {
	// si on a un partenaire injecté dans l'environnement on l'utilise, sinon P1 par défaut
	const [partner, setPartner] = React.useState(process.env.REACT_APP_PARTNER || 'P1');
	console.log(partner);
	return <PartnerContext.Provider value={{ partner, setPartner }}>{children}</PartnerContext.Provider>;
};

export default PartnerProvider;
export { PartnerContext };
