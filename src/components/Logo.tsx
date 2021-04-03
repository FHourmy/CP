import useRessources from './../hooks/useRessource';

const Logo = () => {
	const { logo } = useRessources();

	return <img src={logo} alt="logo" />;
};

export default Logo;
