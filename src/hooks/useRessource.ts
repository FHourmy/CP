import React from 'react';
import { PartnerContext } from '../components/PartnerContext';
// méthode pour tester si la ressource existe dans le dossier partenaire, renvoie la ressource si trouvée.
// passer le path en paramètre ne fonctionne pas, aurait besoin d'appronfondir pour le pourquoi. En attendant utilisation de paramètre pour partenaire et ressource a tester
const tryRequireRessource = (partner: string, ressource: string) => {
	try {
		return require(`../ressources/${partner}/${ressource}`);
	} catch (err) {
		return null;
	}
};

// hook pour récupérer les ressources, pour l'instant individuelles, dans le cas de beaucoup de ressource il faudrait une méthode plus intélligente allant analyser quels sont les ressources.
const useRessources = () => {
	const { partner } = React.useContext(PartnerContext);
	const logo = `${process.env.PUBLIC_URL}/${partner}/logo.png`;
	let dic = require('../ressources/default/dictionary.json');

	dic = { ...dic, ...tryRequireRessource(partner, 'dictionary.json') };

	return {
		logo,
		dic,
	};
};

export default useRessources;
