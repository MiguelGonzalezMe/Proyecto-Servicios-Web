//const mongoose = require('mongoose');
import clientPromise from '@/lib/mongodb';

//////////////////////////////////////////////////////////Funcion GET para extraer todos los productos
export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('TiendaRopa');
    const products = await db.collection('products').find({}).toArray();

    return new Response(JSON.stringify(products), { status: 200, headers: { 'Content-Type': 'application/json' }, });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500, headers: { 'Content-Type': 'application/json' },
  });
  }

} 

////////////////////////////////////////////////////////Funcion POST para agregar producto


export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("TiendaRopa");

    // Leer los datos enviados en el cuerpo de la solicitud
    const body = await request.json();
    const { Marca, Descripcion, Precio, imageUrl } = body;

    // Validar que todos los campos estén presentes
    if (!Marca || !Descripcion || !Precio || !imageUrl) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }

    // Agregar el nuevo producto a la colección
    const result = await db.collection('products').insertOne({
      Marca,
      Descripcion,
      Precio,
      imageUrl
    });

    return new Response(JSON.stringify({ message: 'Product added successfully'}), { 
      status: 201, 
      headers: { 'Content-Type': 'application/json' } 
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to add product' }), { 
      status: 500, 
      headers: { 'Content-Type': 'application/json' } 
    });
  }
}

////////////////////////////////////////////////////////Funcion PUT para actualizar un producto existente

export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db('TiendaRopa');

// Extraer el ID de los parámetros de la solicitud
const { searchParams } = new URL(request.url);
const id = searchParams.get('id');
////convertir a objectId el id
const ObjectId = require('mongodb').ObjectId; // Importar ObjectId
const _id = new ObjectId(id);


    // Leer los datos enviados en el cuerpo de la solicitud
    const body = await request.json();
    const { Marca, Descripcion, Precio, imageUrl } = body; 

    // Validar que el ID esté presente
    if (!_id) {
      return new Response(JSON.stringify({ error: 'ID is required to update a product' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Crear el objeto de actualización
    const updateFields = {};
    if (Marca) updateFields.Marca = Marca;
    if (Descripcion) updateFields.Descripcion = Descripcion;
    if (Precio) updateFields.Precio = Precio;
    if (imageUrl) updateFields.imageUrl = imageUrl;

    // Realizar la actualización en la base de datos
    const result = await db.collection('products').updateOne(
      { _id }, // Filtro para encontrar el producto por ID
      { $set: updateFields } // Campos a actualizar
    );

    //console.log("El producto actualizado: " + updateFields.json());

    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Product updated successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update product' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


//////////////////////////////////////////////////////////Funcion DELETE para eliminar un producto por su id


export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db('TiendaRopa');

    // Extraer el ID de los parámetros de la solicitud
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    ////convertir a objectId el id
    const ObjectId = require('mongodb').ObjectId; // Importar ObjectId
    const _id = new ObjectId(id);

    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Eliminar el producto de la base de datos
    const result = await db.collection('products').deleteOne({ _id: _id });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Product deleted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete product' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}