import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/firebaseConfig';

import { Link } from 'react-router-dom';

import Error from './Error';
import ItemCotizaciones from './ItemCotizaciones';

const ListaCotizaciones = () => {
	const [error, setError] = useState(false);
	const [cotizaciones, setCotizaciones] = useState([]);

	useEffect(() => {
		// Obtener cotizaciones de firebase
		const obtenerCotizaciones = async () => {
			try {
				const respuesta = await getDocs(collection(db, 'cotizaciones'));

				const arrayCotizaciones = [];

				respuesta.forEach((doc) => {
					const cotizacion = doc.data();
					cotizacion.id = doc.id;
					arrayCotizaciones.push(cotizacion);
				});

				setCotizaciones(arrayCotizaciones);
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
			<Link to={'/'} className="title-lista">
				<h1>
					<span>Listado</span> de Cotizaciones
				</h1>
				<button className="btn">Regresar</button>
			</Link>
			<table className="table">
				<thead className="table-head">
					<tr>
						<th scope="col">Divisa</th>
						<th scope="col">Criptomoneda</th>
						<th scope="col">Precio</th>
						{/* <th scope="col">Precio apertura</th> */}
						{/* <th scope="col">Precio más alto del día</th> */}
						{/* <th scope="col">Precio más bajo del día</th> */}
						{/* <th scope="col">Variación últimas 24 horas</th> */}
						<th scope="col">Última actualización</th>
						<th scope="col">Fecha</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody className="table-body">
					{cotizaciones.length === 0
						? null
						: cotizaciones.map((item) => (
								<ItemCotizaciones
									cotizaciones={cotizaciones}
									setCotizaciones={setCotizaciones}
									item={item}
									key={item.id}
								/>
						  ))}
				</tbody>
			</table>

			{error ? <Error msg="No se han cargado los datos" /> : null}
		</div>
	);
};

export default ListaCotizaciones;
