import arrow from "./images/icon-arrow.svg";
import background from "./images/pattern-bg.png";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
// import icon from "./icon";
import { Section } from "./cover/cover.elements";
import Markerposition from "./Components/Markerposition";

// import { map } from "leaflet";

//https://geo.ipify.org/api/v2/country?apiKey=at_hNsejjtlZB9giOoN9kFFhE26FvUSY&ipAddress=8.8.8.8

function App() {
  const [position, setPosition] = useState([37.38605, -122.08385]);
  const [address, setAddress] = useState(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    try {
      const getinitalData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=8.8.8.8`
        ); //181.52.252.176`);
        const data = await res.json();
        setAddress(data);
        setPosition([data.location.lat, data.location.lng]);
        await console.log(data, "hola");
      };
      getinitalData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const searchAPI = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${search}`
      );
      if (response.ok) {
        const data = await response.json();
        setAddress(data);
      } else {
        window.alert("IP Address no valid please try again");
      }
    } catch (e) {
      console.log(e);
    }
    setSearch("");
  };
  return (
    <>
      <div className="absolute">
        <img src={background} alt="" className="w-full h-80 object-cover" />
      </div>
      <Section>
        <article>
          <h1>IP Address Tracker</h1>
          <form onSubmit={searchAPI}>
            <input
              type="text"
              name="ipaddress"
              id="ipaddress"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Search for any IP Address or domain"
              required
            />
            <button type="submit">
              {" "}
              <img src={arrow} alt="arrow" />
            </button>
          </form>
        </article>
        <article className="informacion">
          <div className="bord ">
            <h2>IP Address</h2>
            <p>{address && address.ip}</p>
          </div>
          <div className="bord ">
            <h2>Location</h2>
            <p>
              {address && address.location.city},<br />
              {address && address.location.region}
            </p>
          </div>
          <div className="bord ">
            <h2>Timezone</h2>
            <p>UTC {address && address.location.timezone}</p>
          </div>
          <div>
            <h2>ISP</h2>
            <p>{address && address.isp}</p>
          </div>
        </article>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "495px", width: "100vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={position} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
              {address && address.location.city},<br />
              {address && address.location.region}
            </Popup>
          </Marker> */}
          {address ? <Markerposition address={address} /> : ""}
        </MapContainer>
      </Section>
    </>
  );
}

export default App;
