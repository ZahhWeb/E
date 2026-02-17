import { useState } from "react";
import '../index.css';

function Relawan() {
  const [terkirim, setTerkirim] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerkirim(true);
  };

  return (
    <div className="relawan" id="Relawan">
      <h1>Daftar Relawan</h1>

      {terkirim ? (
        <p style={{ textAlign: "center" }}>
          Pendaftaran berhasil dikirim
        </p>
      ) : (
        <form
          className="relawan_form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Nama Lengkap"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="tel"
            placeholder="Nomor WhatsApp"
            required
          />

          <select required>
            <option value="">
              Pilih Bidang Relawan
            </option>
            <option>Pengajar</option>
            <option>Logistik</option>
            <option>Dokumentasi</option>
            <option>Umum</option>
          </select>

          <textarea
            placeholder="Alasan ingin bergabung"
            required
          ></textarea>

          <button type="submit">
            Daftar Sekarang
          </button>
        </form>
      )}
    </div>
  );
}

export default Relawan;