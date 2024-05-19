import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DetalleUsuario.css';

const DetalleUsuario = () => {
    const { userId } = useParams();
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        axios.get(`/api/usuarios/${userId}`)
            .then(response => setUsuario(response.data))
            .catch(error => console.error('Error al obtener detalles del usuario:', error));
    }, [userId]);

    if (!usuario) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="detalle-usuario">
            <h1>Detalle de Usuario</h1>
            <p><strong>ID:</strong> {usuario.id}</p>
            <p><strong>Nombre:</strong> {usuario.nombre}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Estado:</strong> {usuario.activo ? 'Activo' : 'Inactivo'}</p>
            <h2>Órdenes</h2>
            <ul>
                {usuario.ordenes.map(orden => (
                    <li key={orden.id}>
                        <a href={`/orden/${orden.id}`}>Orden #{orden.id}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DetalleUsuario;
