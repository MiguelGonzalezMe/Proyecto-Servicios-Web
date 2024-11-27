import { GoAlert, GoPerson } from "react-icons/go";
import { IoSearch, IoSearchCircle, IoSearchOutline, IoSearchSharp } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { SlBag } from "react-icons/sl";

function Navbar(){
    return(
        <div className="bg-zinc-800 text-white h-24 flex items-center justify-between px-4 shadow-2xl fixed left-0 right-0">
            <div className="flex space-x-4 text-xl">
                <a href="/Products"><GoPerson /></a>
                <a href="#"><IoSearch /></a>
            </div>

            <div className="flex flex-col items-center">
                <div className="font-bold text-4xl">
                    <a href="/">LOGO  </a>
                </div>

                <div className="flex space-x-8 mt-1">
                    <a href='/shopping/men/' className="hover:underline"><i>ROPA</i></a>
                    <a href="#" className="hover:underline"><i>ZAPATOS</i></a>
                    <a href="#" className="hover:underline"><i>TENIS</i></a>
                    <a href="#" className="hover:underline"><i>BOLSAS</i></a>
                    <a href="#" className="hover:underline"><i>ACCESORIOS</i></a>
                    <a href="#" className="hover:underline"><i>RELOJES</i></a>
                </div>
            </div> 

            <div className="flex space-x-4 text-xl">
                <a href="#"><FiHeart/></a>
                <a href="#"><SlBag/></a>
            </div> 
        </div>
    );
}

export default Navbar