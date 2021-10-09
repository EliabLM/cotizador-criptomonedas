import React from 'react';

const ItemCotizaciones = ({ item }) => {
	const {
		divisa,
		cripto,
		precio,
		precioApertura,
		precioAltoDia,
		precioBajoDia,
		variacion,
		ultimaActualizacion,
		fecha,
	} = item;

	return (
		<tr>
			<td>{divisa}</td>
			<td>{cripto}</td>
			<td>{precio}</td>
			<td>{precioApertura}</td>
			<td>{precioAltoDia}</td>
			<td>{precioBajoDia}</td>
			<td>{variacion}</td>
			<td>{ultimaActualizacion}</td>
			<td>{fecha}</td>
			<td></td>
		</tr>
	);
};

export default ItemCotizaciones;
