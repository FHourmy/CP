import './App.css';
import PartnerPicker from './components/PartnerPicker';
import PartnerProvider from './components/PartnerContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './screens/Form';
import Welcome from './screens/Welcome';
import Logo from './components/Logo';

function App() {
	return (
		<PartnerProvider>
			<div className="App">
				<PartnerPicker />
				<Logo />
				<Router>
					<Switch>
						<Route exact path="/welcome">
							<Welcome />
						</Route>
						<Route path="/">
							<Form />
						</Route>
					</Switch>
				</Router>
			</div>
		</PartnerProvider>
	);
}

export default App;
