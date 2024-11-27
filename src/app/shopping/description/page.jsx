"use client";

//import Products from "@/components/Products";
import { useEffect, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";




export default function ProductDescription(){

/////Extraer el id del producto del parametro de la url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

////////traer los datos del producto con el id seleccionado por medio de la api para mostrarlos en el formulario
const [producto, setProducto] = useState([]); // Estado para almacenar los datos del producto

/////////////llamar a la api para traer un solo producto en base al id seleccionado
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

  /*const [producto, setProducto] = useState({
    Marca: '',
    Descripcion: '',
    Precio: '',
    imageUrl: ''
});*/

return(
        <>
       
       <div className="bg-white shadow-md rounded px-10 py-6 mb-4 flex" style={{height: 650}}>
      <div className="flex-1 ml-48 mt-40">
        <h1 className="text-5xl font-bold -mt-16">{producto.Marca}</h1>
        <br />
        <p className="text-gray-700 mt-2 text-2xl">{producto.Descripcion}</p>
        <br />
        <p className="text-green-900 text-lg">Precio: ${producto.Precio}</p>
        <div className="flex space-x-2 mt-8 -ml-12">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Agregar al carrito <center> <FaCartShopping />  </center>

          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Comprar ahora <center> <BsCashCoin /></center>

          </button>
        </div>
      </div>
      <img src={`/${producto.imageUrl}`} alt={`${producto.Marca} image`} className="w-1/2 h-48 object-cover px-2 mr-48 mt-5" style={{width: 450, height: 550}}/>
    </div>

        </>
    );
}

