"use client";

import React, { useState, useEffect } from 'react';
import { GrUpdate } from "react-icons/gr";



export default function EditarProducto(){
   /////Extraer el id del producto del parametro de la url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    

////////traer los datos del producto con el id seleccionado por medio de la api para mostrarlos en el formulario

useEffect(() => {
    const fetchProductos = async () => {
        try {
            const response = await fetch(`/api/productos/?id=${id}`);
            if (!response.ok) {
              throw new Error('Error al obtener el producto');           
            }
            const data = await response.json();
            setProducto(data);
        
          } catch (error) {
            console.error('Error:', error);

          }
    };
fetchProductos();
    
}, [id]);

  // Función para manejar los cambios en el formulario

  //const [producto, setProducto] = useState(null); // Estado para almacenar los datos del producto
  const [producto, setProducto] = useState({
    Marca: '',
    Descripcion: '',
    Precio: '',
    imageUrl: ''
});



const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prev) => ({ ...prev, [name]: value }));
   /* setProducto({
      ...producto,
      [name]: value
  });*/

  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`/api/products/?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...producto }), // Envía los datos actualizados
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el producto');
      }

      //setMensaje('Producto actualizado exitosamente');
      alert("Producto actualizado exitosamente");
      
      
    } catch (err) {
      //setMensaje(`Error: ${err.message}`);
      alert(Error);
    }
    finally{
      window.location.href = "/Products/edit-Product";
    }
       

  };

    return(
      <>

<br />
<center>   <strong> <h2 className="text-2xl font-bold text-gray-900"> Editar Producto  <GrUpdate /></h2> </strong>  </center>
<br />
        <div style={{backgroundColor: 'lightblue', height: 420}}>
            <br></br>
            <br></br>
        <form onSubmit={handleSubmit}>
            <div style={{paddingLeft: 600}}>
                <label htmlFor="Marca">Marca:</label>
                <input
                    type="text"
                    id="Marca"
                    name="Marca"
                    value={producto.Marca || ''}
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
                    value={producto.Descripcion || ''}
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
                    value={producto.Precio || ''}
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
                    value={producto.imageUrl || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <br></br>
            <br></br>
        <center>    <button type="submit" style={{backgroundColor: "snow", borderRadius: 5, fontSize: 16, fontFamily: "monospace", }}>Guardar cambios</button>  </center>
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
}

