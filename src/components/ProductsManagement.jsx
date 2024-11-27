"use client";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { FaReadme } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";


function ProductsManagement() {

    const Crear = async () => {   
        window.location.href = "/Products/add-Product";  
       };

    const Listar = async () => {   
        window.location.href = "/api/products";  
        };

    const Actualizar = async () => {   
        window.location.href = "/Products/edit-Product";  
        };

    const Eliminar = async () => {   
        window.location.href = "/Products/delete-Product";  
       };

  return (
    <div className="bg-gray-100 p-10 m-10">
      
        <div className="max-w gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* /////Create */}
            <div className="bg-white rounded-xl shadow-lg p-5" onClick={() => Crear()}>
              
              <div>
                <center>  <h2 className="text-2xl font-bold text-gray-900">Crear Producto <IoCreateOutline />
                </h2>    </center>
              </div>
              
              <div className="mt-4 text-center">
                    
              </div>

            </div>

<br />
            {/* //////Read */}

            <div className="bg-white rounded-xl shadow-lg p-5" onClick={() => Listar()}>
              
              <div>
                <center>  <h2 className="text-2xl font-bold text-gray-900">Listar Productos <FaReadme />
                </h2>    </center>
              </div>
              
              <div className="mt-4 text-center">
                    
              </div>

            </div>
<br />
            {/* ////// Update*/}

            <div className="bg-white rounded-xl shadow-lg p-5" onClick={() => Actualizar()}>
              
              <div>
                <center> <h2 className="text-2xl font-bold text-gray-900">Actualizar Producto <GrUpdate />
                </h2>    </center>
              </div>
              
              <div className="mt-4 text-center">
                    
              </div>

            </div>

<br />
            {/* //////Delete */}

            <div className="bg-white rounded-xl shadow-lg p-5" onClick={() => Eliminar()}>
             

              <div>
                <center> <h2 className="text-2xl font-bold text-gray-900">Eliminar Producto <RiDeleteBin2Line /></h2>    </center>
              </div>
              
              <div className="mt-4 text-center">
                    
              </div>

            </div>

        
    
      </div>

      

    </div>
    
  );
}

export default ProductsManagement



