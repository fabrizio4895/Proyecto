import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListaUsuarios.css';

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get('/api/usuarios')
            .then(response => setUsuarios(response.data))
            .catch(error => console.error('Error al obtener usuarios:', error));
    }, []);

    return (
        <div className="lista-usuarios">
            <h1>Lista de Usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.activo ? 'Activo' : 'Inactivo'}</td>
                            <td>
                                <button onClick={() => verDetalleUsuario(usuario.id)}>Ver</button>
                                <button onClick={() => cambiarEstadoUsuario(usuario.id)}>{usuario.activo ? 'Desactivar' : 'Activar'}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const verDetalleUsuario = (userId) => {
    window.location.href = `/usuario/${userId}`;
};

const cambiarEstadoUsuario = (userId) => {
    console.log(`Cambiado estado para el usuario con ID: ${userId}`);
};

export default ListaUsuarios;
