import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
const { MongoClient } = require('mongodb');



//////////////////////////////////////////////////////////Funcion GET para extraer un solo productos por ID

export async function GET(request) {
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

    // Buscar el producto por ID
  
    const product = await db.collection('products').findOne({ _id: _id });
    console.log("El id recibido es: "+ id);
    if (!product) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }, 
      });
    }
    console. log(product);
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch product' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
    
  }
  
}