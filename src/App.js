import React from 'react';
import Principal from './components/Principal';
import ListaCotizaciones from './components/ListaCotizaciones';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Principal} />
				<Route exact path="/lista" component={ListaCotizaciones} />
			</Switch>
		</Router>
	);
}

export default App;
