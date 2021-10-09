import React from 'react';

const Cotizacion = ({ cotizacion }) => {
	if (Object.keys(cotizacion).length === 0) return null;

	return (
		<div>
			<p>
				El precio es: <span>{cotizacion.PRICE}</span>
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
	);
};

export default Cotizacion;
