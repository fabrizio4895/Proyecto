import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DetalleOrden.css';

const DetalleOrden = () => {
    const { orderId } = useParams();
    const [orden, setOrden] = useState(null);

    useEffect(() => {
        axios.get(`/api/ordenes/${orderId}`)
            .then(response => setOrden(response.data))
            .catch(error => console.error('Error al obtener detalles de la orden:', error));
    }, [orderId]);

    if (!orden) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="detalle-orden">
            <h1>Detalle de Orden</h1>
            <p><strong>ID:</strong> {orden.id}</p>
            <p><strong>ID Usuario:</strong> {orden.userId}</p>
            <p><strong>Total:</strong> {orden.total}</p>
            <p><strong>Estado:</strong> {orden.estado}</p>
            <h2>Ítems</h2>
            <ul>
                {orden.items.map(item => (
                    <li key={item.id}>
                        {item.nombre} - {item.cantidad} x {item.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetalleOrden;
