import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';

// rsc→	stateless component skeleton

const Formulario = ({ setCripto, setDivisa }) => {
	// State con la información seleccionada
	const [selecciondivisa, setSeleccionDivisa] = useState('');
	const [seleccioncripto, setSeleccionCripto] = useState('');

	// State con la lista de criptos desde la api
	const [listacripto, setlistaCripto] = useState([]);

	// State con el error
	const [error, setError] = useState(false);

	const DIVISAS = [
		{
			codigo: 'USD',
			nombre: 'Dolar de Estados Unidos',
		},
		{
			codigo: 'EUR',
			nombre: 'Euro',
		},
		{
			codigo: 'COP',
			nombre: 'Peso Colombiano',
		},
	];

	// Traer información desde  la api
	useEffect(() => {
		const consultarAPI = async () => {
			const respuesta = await axios({
				method: 'get',
				url: 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD',
			});
			setlistaCripto(respuesta.data.Data);
		};

		consultarAPI();
	}, []);

	// Funcion de submit
	const cotizarDivisa = (e) => {
		e.preventDefault();

		// Validar si  los  campos estan vacios
		if (selecciondivisa === '' || seleccioncripto === '') {
			setError(true);
			return;
		}

		// Pasar los datos al componente principal App
		setError(false);
		setDivisa(selecciondivisa);
		setCripto(seleccioncripto);
	};

	return (
		<form onSubmit={cotizarDivisa}>
			{error ? <Error msg="Ambos campos son obligatorios" /> : null}

			<label>Divisa</label>
			<select onChange={(e) => setSeleccionDivisa(e.target.value)}>
				<option value="">-- Seleccione su divisa --</option>
				{DIVISAS.map((opcion) => (
					<option key={opcion.codigo} value={opcion.codigo}>
						{opcion.nombre}
					</option>
				))}
			</select>

			<label>Criptomoneda</label>
			<select onChange={(e) => setSeleccionCripto(e.target.value)}>
				<option value="">-- Selecione la criptomoneda --</option>
				{listacripto.map((opcion) => (
					<option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
						{opcion.CoinInfo.FullName}
					</option>
				))}
			</select>

			<button className="btn" type="submit">
				Calcular
			</button>
		</form>
	);
};

export default Formulario;
