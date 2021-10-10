import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import db from '../firebase/firebaseConfig';

const ItemCotizaciones = ({ item, cotizaciones, setCotizaciones }) => {
	const {
		id,
		divisa,
		cripto,
		precio,
		// precioApertura,
		// precioAltoDia,
		// precioBajoDia,
		// variacion,
		ultimaActualizacion,
		fecha,
	} = item;

	// Eliminar cotizacion de la api
	const eliminarCotizacionApi = async (id) => {
		try {
			await deleteDoc(doc(db, 'cotizaciones', `${id}`));
			console.log(id);
		} catch (error) {
			console.error(error);
		}
	};

	// Funcion eliminar cotizacion
	const eliminarCotizacion = (id) => {
		eliminarCotizacionApi(id);

		// Elimina la cotizacion del estado
		setCotizaciones(cotizaciones.filter((item) => item.id !== id));
	};

	return (
		<tr>
			<td>{divisa}</td>
			<td>{cripto}</td>
			<td>{precio}</td>
			{/* <td>{precioApertura}</td> */}
			{/* <td>{precioAltoDia}</td> */}
			{/* <td>{precioBajoDia}</td> */}
			{/* <td>{variacion}</td> */}
			<td>{ultimaActualizacion}</td>
			<td>{fecha}</td>
			<td>
				<button className="btn" onClick={() => eliminarCotizacion(id)}>
					Eliminar
				</button>
			</td>
		</tr>
	);
};

export default ItemCotizaciones;
