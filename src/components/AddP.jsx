
"use client";

import React, { useState } from 'react';

const AddP = () => {
    // Definir el estado inicial para los campos del formulario
    const [producto, setProducto] = useState({
        Marca: '',
        Descripcion: '',
        Precio: '',
        imageUrl: ''
    });

    // Manejar el cambio de valores en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({
            ...producto,
            [name]: value
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            });

            if (response.ok) {
                alert('Producto agregado exitosamente');
                setProducto({ Marca: '', Descripcion: '', Precio: '', imageUrl: '' }); // Limpiar el formulario
            } else {
                alert('Error al agregar el producto');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            alert('Hubo un error al enviar el formulario');
        }
    };

    return (
        <>
        <div style={{backgroundColor: 'lightblue'}}>
            <br></br>
            <br></br>
        <form onSubmit={handleSubmit}>
            <div style={{paddingLeft: 600}}>
                <label htmlFor="Marca">Marca:</label>
                <input
                    type="text"
                    id="Marca"
                    name="Marca"
                    value={producto.Marca}
                    onChange={handleChange}
                    required
                style={{paddingLeft: 0}}/>
            </div>
            <br></br>
            <br></br>
            <div style={{paddingLeft: 600}}>
                <label htmlFor="Descripcion">Descripción:</label>
                <input
                    type="text"
                    id="Descripcion"
                    name="Descripcion"
                    value={producto.Descripcion}
                    onChange={handleChange}
                    required
                />
            </div>
            <br></br>
            <br></br>
            <div style={{paddingLeft: 600}}>
                <label htmlFor="Precio">Precio:</label>
                <input
                    type="text"
                    id="Precio"
                    name="Precio"
                    value={producto.Precio}
                    onChange={handleChange}
                    required
                />
            </div>
            <br></br>
            <br></br>
            <div style={{paddingLeft: 600}}>
                <label htmlFor="imageUrl">URL de la Imagen:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={producto.imageUrl}
                    onChange={handleChange}
                    required
                />
            </div>
            <br></br>
            <br></br>
        <center>    <button type="submit">Agregar Producto</button>  </center>
        </form>

        </div>
    



        <center>
        {/* <div className="bg-white max-w-fit rounded-xl shadow-lg p-7 m-9" style={{top: 0}}>
            <img src="/" alt="product image" className="h-96 w-72 object-cover rounded-xl" />

            <div className="mt-8">
                
            </div>



        </div> */}

        </center>

        
        </>        


    );
};

export default AddP;


