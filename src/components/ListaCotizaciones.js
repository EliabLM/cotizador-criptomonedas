import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';
import ItemCotizaciones from './ItemCotizaciones';

const ListaCotizaciones = () => {
	const [error, setError] = useState(false);
	const [cotizaciones, setCotizaciones] = useState([]);

	useEffect(() => {
		const obtenerCotizaciones = async () => {
			try {
				const respuesta = await axios({
					method: 'get',
					url: 'http://localhost:4000/cotizaciones',
				});

				setCotizaciones(respuesta.data);
				setError(false);
			} catch (error) {
				console.error(error);
				setError(true);
			}
		};
		obtenerCotizaciones();
	}, []);

	return (
		<div className="listado">
			<h1>
				<span>Listado</span> de Cotizaciones
			</h1>
			<table className="table">
				<thead className="table-head">
					<tr>
						<th scope="col">Divisa</th>
						<th scope="col">Criptomoneda</th>
						<th scope="col">Precio</th>
						<th scope="col">Precio apertura</th>
						<th scope="col">Precio más alto del día</th>
						<th scope="col">Precio más bajo del día</th>
						<th scope="col">Variación últimas 24 horas</th>
						<th scope="col">Última actualización</th>
						<th scope="col">Fecha</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody className="table-body">
					{cotizaciones.length === 0
						? null
						: cotizaciones.map((item) => (
								<ItemCotizaciones item={item} key={item.id} />
						  ))}
				</tbody>
			</table>
			{error ? <Error msg="No se han cargado los datos" /> : null}
		</div>
	);
};

export default ListaCotizaciones;
