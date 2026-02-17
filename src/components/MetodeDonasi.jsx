import '../index.css';
import qrisImg from "../assets/Screenshot_20260216-142338.jpg";

function MetodeDonasi() {
  return (
    <div className="metode_donasi" id="MetodeDonasi">
      <h1>Metode Donasi</h1>

      <div className="donasi_container">

        <div className="donasi_card">
          <img src={qrisImg} alt="QRIS" />
          <h3>Scan QRIS</h3>
          <p>Scan untuk donasi cepat</p>
        </div>

        <div className="donasi_card">
          <h3>Transfer Bank</h3>
          <p>BCA: 1234567890</p>
          <p>a.n Pesantren Gen Z</p>
        </div>

        <div className="donasi_card">
          <h3>WhatsApp Admin</h3>
          <p>Konsultasi donasi langsung</p>

          <a
            href="https://wa.me/6281233063557?text=Assalamualaikum%20ka%0ASaya%20mau%20konsultasi%20Donasi%20langsung%20apakah%20bisa%20di%20batu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat Sekarang
          </a>
        </div>

      </div>
    </div>
  );
}

export default MetodeDonasi;