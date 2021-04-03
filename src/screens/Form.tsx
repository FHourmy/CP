import React from 'react';
import { useHistory } from 'react-router';

const Form: React.FunctionComponent = () => {
	const [nom, setNom] = React.useState('');
	const [prenom, setPrenom] = React.useState('');
	const history = useHistory();
	return (
		<form
			style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}
			onSubmit={(e) => {
				e.preventDefault();
				history.push('/welcome', { nom, prenom });
			}}
		>
			<label>
				Nom:
				<input
					type="text"
					name="nom"
					value={nom}
					onChange={(e) => {
						setNom(e.target.value);
					}}
				/>
			</label>
			<label>
				Prénom:
				<input
					type="text"
					name="prenom"
					value={prenom}
					onChange={(e) => {
						setPrenom(e.target.value);
					}}
				/>
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default Form;
