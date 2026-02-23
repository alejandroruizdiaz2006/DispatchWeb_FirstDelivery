import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-page">
      <h1>Contacto</h1>

      <form className="contact-form">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" rows="4"></textarea>
        <button type="submit">Enviar</button>
      </form>

      <MapContainer
        center={[40.4168, -3.7038]}
        zoom={13}
        className="map"
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.4168, -3.7038]}>
          <Popup>Dispatch HQ (ficticio)</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}

export default Contact;
