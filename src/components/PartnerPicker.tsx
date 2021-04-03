import React from 'react';
import { PartnerContext } from './PartnerContext';

const PartnerPicker = () => {
	const { partner, setPartner } = React.useContext(PartnerContext);
	if (process.env.NODE_ENV === 'production') {
		return null;
	}
	return (
		<>
			En développement vous pouvez choisir un partenaire :
			<select
				value={partner}
				onChange={(e) => {
					setPartner(e.target.value);
				}}
			>
				<option>P1</option>
				<option>P2</option>
				<option>P3</option>
			</select>
		</>
	);
};

export default PartnerPicker;
