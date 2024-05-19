import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListaOrdenes.css';

const ListaOrdenes = () => {
    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        axios.get('/api/ordenes')
            .then(response => setOrdenes(response.data))
            .catch(error => console.error('Error al obtener órdenes:', error));
    }, []);

    return (
        <div className="lista-ordenes">
            <h1>Lista de Órdenes</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID Usuario</th>
                        <th>Total</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ordenes.map(orden => (
                        <tr key={orden.id}>
                            <td>{orden.id}</td>
                            <td>{orden.userId}</td>
                            <td>{orden.total}</td>
                            <td>{orden.estado}</td>
                            <td>
                                <button onClick={() => verDetalleOrden(orden.id)}>Ver</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const verDetalleOrden = (orderId) => {
    window.location.href = `/orden/${orderId}`;
};

export default ListaOrdenes;
