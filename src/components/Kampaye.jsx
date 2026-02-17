
import { useState } from "react";
import '../index.css';
import img2 from "../assets/genz.jpeg";
import img1 from "../assets/genz.jpeg";

function Kampaye() {
  const [noBRi, setBRI] = useState(false);
  const [boxSudahdonasi, setSudahdonasi] = useState(false);
  const [boxDonasi, setDonasi] = useState(true);
  const [openPayment, setPayment] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function tamppilkan_box_sudahdonasi() {
    setSudahdonasi(!boxSudahdonasi);
    setDonasi(!boxDonasi);
  }

  function tampikanRekening() {
    setBRI(!noBRi);
  }

  function tampiljanPayment() {
    setPayment(!openPayment);
  }

  function closepayment() {
    setPayment(false);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  }

  const campaigns = [
    {
      image: img1,
      title: "Ramadhan Ceria Anak Yatim",
      description: "Membantu 50 anak yatim",
      target: 10000000,
      collected: 4050000,
    },
    {
      image: img2,
      title: "Buka Puasa Bersama Anak Yatim",
      description: "Makan & edukasi 30 anak",
      target: 5000000,
      collected: 2500000,
    },
  ];

  return (
    <div className="kampaye" id="Kampaye">
      <h1>Campaign Terbaru</h1>

      <div className="kampaye_card_scrol">
        {campaigns.map((c, i) => {
          const progressPercent = Math.round(
            (c.collected / c.target) * 100
          );

          return (
            <div className="kampaye_card" key={i}>
              <div className="kampaye_img">
                <img src={c.image} alt={c.title} />
              </div>

              <div className="kampaye_text">
                <h3>{c.title}</h3>
                <p>{c.description}</p>
                <h5>Target: Rp {c.target.toLocaleString()}</h5>
                <h5>Terkumpul: Rp {c.collected.toLocaleString()}</h5>
              </div>

              <div className="progress_bar">
                <div
                  className="progress_fill"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>

              <button onClick={tampiljanPayment}>
                Donasi Sekarang
              </button>
            </div>
          );
        })}
      </div>

      {openPayment && (
        <div className="payment_modal">
          <div className="methode_pembayaran">

            <div className="box_clos">
              <h2>Pilih metode Donasi</h2>
              <h3 onClick={closepayment}>X</h3>
            </div>

            <div className="box_bangk">
              {boxDonasi && (
                <div
                  className="box_text"
                  onClick={tampikanRekening}
                >
                  <p>melalui Bank BRI</p>
                  <p className="rekening">
                    Lihat rekening
                  </p>
                </div>
              )}

              {noBRi && (
                <div>
                  <p>rek: 92872782727722</p>
                  <p>nama: Muhammad Hamzah</p>
                </div>
              )}
            </div>

            <div className="box_bangk">
              {boxDonasi && (
                <div
                  className="box_text"
                  onClick={tampikanRekening}
                >
                  <p>melalui Bank BCA</p>
                  <p className="rekening">
                    Lihat rekening
                  </p>
                </div>
              )}

              {noBRi && (
                <div>
                  <p>rek: 92872782727722</p>
                  <p>nama: Muhammad Hamzah</p>
                </div>
              )}

              <p
                className="udahdonasi"
                onClick={tamppilkan_box_sudahdonasi}
              >
                {boxSudahdonasi ? "Close" : "Sudah donasi"}
              </p>

              {boxSudahdonasi && (
                <div className="box_sudah_donasi">
                  <h1>Konfirmasi Donasi</h1>

                  <label>Nama</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                  />

                  <label>Jumlah Donasi</label>
                  <input
                    type="number"
                    placeholder="Masukkan jumlah donasi"
                  />

                  <label>Tujuan Donasi</label>
                  <select>
                    <option value="">Pilih tujuan</option>
                    <option value="anak_yatim">
                      Buat Yatim
                    </option>
                    <option value="makan">
                      Buat Makan
                    </option>
                  </select>

                  <label>Bank donasi</label>
                  <select>
                    <option value="">Pilih tujuan</option>
                    <option>BRI</option>
                    <option>BCA</option>
                    <option>Mandiri</option>
                    <option>Ovo</option>
                    <option>Dana</option>
                    <option>QRIS</option>
                  </select>

                  <label>Nomor HP</label>
                  <input
                    type="tel"
                    placeholder="081234567890"
                  />

                  <label>Upload Bukti Donasi</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  {selectedImage && (
                    <div className="preview_image">
                      <p>Preview Gambar:</p>
                      <img
                        src={selectedImage}
                        alt="Preview"
                        style={{
                          width: "150px",
                          height: "150px",
                          borderRadius: "8px",
                          marginTop: "10px",
                        }}
                      />
                    </div>
                  )}

                  <button className="udahdonasi">
                    Kirim
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Kampaye;
