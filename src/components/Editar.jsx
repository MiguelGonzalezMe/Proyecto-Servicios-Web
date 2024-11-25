"use client";

import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom'; // Asegúrate de usar React Router para la navegación
import { RiLoader2Fill } from "react-icons/ri";



const Editar = () => {
    const [productos, setProductos] = useState([]); // Estado para almacenar los productos
    const [loading, setLoading] = useState(true); // Estado para manejar el cargando
    const [error, setError] = useState(null); // Estado para manejar errores
    //const navigate = useNavigate(); // Hook para la navegación

    // Función para obtener los productos desde la API
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('/api/products'); // Ruta de tu API
                if (!response.ok) {
                    throw new Error('Error al obtener los productos');
                }
                const data = await response.json();
                setProductos(data); // Guardar productos en el estado
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); // Terminar el estado de cargando
            }
        };

        fetchProductos();
    }, []);

 ////////////// Función para manejar el clic en el botón Editar
    const handleEditar = (id) => {
    // navigate(`/Products/edit-Product/edit-ProductId/${id}`); // Redirige a la página de edición con el ID del producto
    var idd = "/Products/edit-Product/edit-ProductId/?id=" + id;        
    window.location.href = idd;

    //alert("El Id del producto selecccionado es: " + "\n " + id);
    };
//////////////////
    if (loading) return <center><br /> <p>Cargando productos <br /> <RiLoader2Fill />  </p>  </center>;
    if (error) return <p>Error: {error}</p>;

    return (
    <center>
        <div>
         <br />  <strong>  <h1 style={{backgroundColor: 'lightgray'}}>Lista de Productos</h1> </strong><br />
            {productos.length === 0 ? (
                <p>No hay productos disponibles.</p>
            ) : (
              
                <ul>
                    {productos.map((producto) => (
                    
                        <li key={producto._id} style={{ marginBottom: '20px' }}>
                    <div style={{backgroundColor: "lightblue", width: 400, borderRadius: 6, fontFamily: "sans-serif"}}>                            <p><strong>ID:</strong> {producto._id}</p>
                            <p><strong>Marca:</strong> {producto.Marca}</p>
                            <p><strong>Descripción:</strong> {producto.Descripcion}</p>
                            <p><strong>Precio:</strong> ${producto.Precio}</p>
                            <p><strong>Imagen URL:</strong> {producto.imageUrl}</p>
                            <button onClick={() => handleEditar(producto._id)} style={{backgroundColor: "lightskyblue", borderRadius: 5, fontSize: 16}}>
                        
                                Editar                                
                            </button>   
                    </div>
                        </li>
                    
                    ))}
                </ul>

            )}
        </div>
    </center>
    );
};

export default Editar;