import React from 'react';
import { Redirect, useHistory } from 'react-router';
import useRessources from './../hooks/useRessource';

const Welcome = () => {
	const history = useHistory();
	const { dic } = useRessources();
	const state = history.location.state as { nom?: string; prenom?: string };

	if (!state || (state.nom === undefined && state.prenom === undefined)) {
		return <Redirect to="/" />;
	}

	return <div>{`${dic.welcome} ${state.prenom} ${state.nom?.toUpperCase()}`}</div>;
};

export default Welcome;
