import React, { useState } from 'react';

const Formulario = () => {
	// State con la información seleccionada
	const [selecciondivisa, setSeleccionDivisa] = useState('');
	const [seleccioncripto, setSeleccionCripto] = useState('');

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

	return (
		<form>
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
			<select>
				<option value="">-- Selecione la criptomoneda --</option>
			</select>
			<button type="submit">Calcular</button>
		</form>
	);
};

export default Formulario;
