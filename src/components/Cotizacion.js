import axios from 'axios';
import React, { Fragment } from 'react';

const Cotizacion = ({ cotizacion, cripto, divisa }) => {
	if (Object.keys(cotizacion).length === 0) return null;

	// Funcion para envia la cotización a la api
	const enviarCotizacion = async () => {
		const cotizacionenviar = {
			divisa,
			cripto,
			precio: cotizacion.PRICE,
			precioApertura: cotizacion.OPENDAY,
			precioAltoDia: cotizacion.HIGHDAY,
			precioBajoDia: cotizacion.LOWDAY,
			variacion: cotizacion.CHANGEPCT24HOUR,
			ultimaActualizacion: cotizacion.LASTUPDATE,
			fecha: Date(),
		};

		try {
			await axios({
				method: 'post',
				url: 'http://localhost:4000/cotizaciones',
				data: cotizacionenviar,
			});
			alert('Cotización guardada');
		} catch (error) {
			console.error(error);
			alert('No se ha podido guardar la cotización, intente nuevamente');
		}
	};

	return (
		<Fragment>
			<div className="cotizacion">
				<p className="precio">
					El precio es: <span>{cotizacion.PRICE}</span>
				</p>
				<p>
					Precio de apertura: <span>{cotizacion.OPENDAY}</span>
				</p>
				<p>
					Precio más alto del día: <span>{cotizacion.HIGHDAY}</span>
				</p>
				<p>
					Precio más bajo del día: <span>{cotizacion.LOWDAY}</span>
				</p>
				<p>
					Variación últimas 24 horas: <span>{cotizacion.CHANGEPCT24HOUR}</span>
				</p>
				<p>
					Última actualización: <span>{cotizacion.LASTUPDATE}</span>
				</p>
			</div>
			<button onClick={enviarCotizacion} className="guardar btn">
				Guardar Cotización
			</button>
		</Fragment>
	);
};

export default Cotizacion;
