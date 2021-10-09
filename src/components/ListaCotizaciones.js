import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';

const ListaCotizaciones = () => {
	const [error, setError] = useState(false);

	return (
		<div className="listado">
			<h1>
				<span>Listado</span> de Cotizaciones
			</h1>
			<table>
				<thead>
					<tr>
						<th scope="col">Criptomoneda</th>
						<th scope="col">Precio apertura</th>
						<th scope="col">Precio más alto del día</th>
						<th scope="col">Precio más bajo del día</th>
						<th scope="col">Variación últimas 24 horas</th>
						<th scope="col">Última actualización</th>
					</tr>
				</thead>
				<tbody>cuerpo</tbody>
			</table>
			{error ? <Error msg="No se han cargado los datos" /> : null}
		</div>
	);
};

export default ListaCotizaciones;
