import '../index.css';
function Alamat() {
  return (
    <div className="alamat" id="Alamat">
      <h1>Alamat Kami</h1>
      <p>Pesantren Gen Z Gratis Jakarta</p>
      <p>Jl. Contoh Raya No.12, Jakarta, Indonesia</p>
      <p>Email: info@pesantrengenz.id</p>
      <p>Telepon/WA: +62 812-3456-7890</p>

      <div className="map_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456!2d106.827153!3d-6.175110!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1234567890%3A0xabcdef123456789!2sJl.%20Contoh%20Raya%20No.12%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1671234567890!5m2!1sen!2sid"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Alamat;