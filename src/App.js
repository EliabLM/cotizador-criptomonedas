import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import bitcoin from './assets/undraw_bitcoin2_ave7.svg';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';

function App() {
	const [divisa, setDivisa] = useState('');
	const [cripto, setCripto] = useState('');
	const [cotizacion, setCotizacion] = useState({});

	useEffect(() => {
		const cotizarCripto = async () => {
			// Evitar primer llamado
			if (divisa === '') return;

			// Traer la cotización de la api
			const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${divisa}`;

			const respuesta = await axios({
				method: 'get',
				url: url,
			});

			setCotizacion(respuesta.data.DISPLAY[cripto][divisa]);
			console.log(respuesta.data.DISPLAY[cripto][divisa]);
		};
		cotizarCripto();
	}, [divisa, cripto]);

	return (
		<div className="contenedor">
			<div>
				<img className="imagen" src={bitcoin} alt="Bitcoin" />
			</div>
			<div>
				<h1>Cotizador de Criptomonedas</h1>
				<Formulario setDivisa={setDivisa} setCripto={setCripto} />
				<Cotizacion cotizacion={cotizacion} />
			</div>
		</div>
	);
}

export default App;
