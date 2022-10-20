import arrow from "./images/icon-arrow.svg";
import background from "./images/pattern-bg.png";
import {MapContainer, TileLayer, Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { useState } from "react";
import icon from "./icon"

//https://geo.ipify.org/api/v2/country?apiKey=at_hNsejjtlZB9giOoN9kFFhE26FvUSY&ipAddress=8.8.8.8

function App() {
  const [position,setPosition] = useState([51.505,-0.09]);
  
  return (
    <>
    <div className="absolute">
      <img src={background} alt="" className="w-full h-80 object-cover"/>
    </div>
    <section className="relative pt-8">
      <article>
        <h1 className="text-2xl text-center text-white font-bold "> IP Address Tracker</h1>
        <form className="mt-8 flex justify-center max-w-md mx-auto">
          <input type="text" name= "ipaddress" id = "ipaddress" className="pt-6 pb-5 px-5 rounded-l-lg w-full"  placeholder="Search for any IP Address or domain" required/>
          <button onClick={()=> setPosition(position)} type="submit" className="py-7 px-5 rounded-r-lg bg-black hover:opacity-80"> <img src ={arrow} alt ="arrow" className="h-4/5"  /></button> 
        </form>
      </article>
      <article className="bg-white rounded-lg shadow p-8 mt-8 mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl lg:mx-auto lg:-mb-16 md:-mb-24 -mb-60 relative" style={{zIndex:100000,}}>
        <div className="lg:border-r lg:border-slate-400">
          <h2 className="uppercase text-sm font-bold tracking-wider text-center md:mb-2 md:text-left " style={{color:'hsl(0, 0%, 59%)',}}>
            IP Address
          </h2>
          <p className="font-semibold text-lg md:text-xl xl:text-2xl text-center md:text-left" style={{color:'hsl(0, 0%, 17%)',}}>
            192.212.174.101
          </p>
        </div>
        <div className="lg:border-r lg:border-slate-400">
          <h2 className="uppercase text-sm font-bold tracking-wider text-center md:mb-2 md:text-left " style={{color:'hsl(0, 0%, 59%)',}}>
            Location
          </h2>
          <p className="font-semibold text-lg md:text-xl xl:text-2xl text-center md:text-left" style={{color:'hsl(0, 0%, 17%)',}}>
            Brooklyn
          </p>
        </div>
        <div className="lg:border-r lg:border-slate-400">
          <h2 className="uppercase text-sm font-bold tracking-wider text-center md:mb-2 md:text-left " style={{color:'hsl(0, 0%, 59%)',}}>
            Timezone
          </h2>
          <p className="font-semibold text-lg md:text-xl xl:text-2xl text-center md:text-left" style={{color:'hsl(0, 0%, 17%)',}}>
            UTC -5
          </p>
        </div>
        <div >
          <h2 className="uppercase text-sm font-bold tracking-wider text-center md:mb-2 md:text-left " style={{color:'hsl(0, 0%, 59%)',}}>
            ISP
          </h2>
          <p className="font-semibold text-lg md:text-xl xl:text-2xl text-center md:text-left" style={{color:'hsl(0, 0%, 17%)',}}>
            Spacex
            Starlink
          </p>
        </div>
      </article>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true} style ={{height : "495px", width: "100vw",}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
      </MapContainer>
    </section>
    </>
  );
}

export default App;
