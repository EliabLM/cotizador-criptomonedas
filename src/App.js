import React from 'react';

import Formulario from './components/Formulario';

import bitcoin from './assets/undraw_bitcoin2_ave7.svg';

function App() {
	return (
		<div className="contenedor">
			<div>
				<img className="imagen" src={bitcoin} alt="Bitcoin" />
			</div>
			<div>
				<h1>Cotizador de Criptomonedas</h1>
				<Formulario />
			</div>
		</div>
	);
}

export default App;
