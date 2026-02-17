// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import api from './api.js';
import '../index.css';
import background from "../assets/images-75.jpeg";
import genz from "../assets/genz.jpeg";

function Hero() {
  const [backImage, setBackImage] = useState(null);
  const [heroLogoImg, setHeroLogoImg] = useState(null);
  const [loadingBg, setLoadingBg] = useState(false);
  const [loadingLogo, setLoadingLogo] = useState(false);
  const [heroImage, setHeroImage] = useState(null);
  const [heroImageLogo, setHeroImageLogo] = useState(null);

  const [textLogo, setTextLogo] = useState("");
  const [textDataLogo, setTextDataLogo] = useState("");

  const ubahBackgrount = (e) => setBackImage(e.target.files[0]);
  const ubahLogo = (e) => setHeroLogoImg(e.target.files[0]);

  const upload_backgrount = () => {
    if (!backImage || loadingBg) return;
    setLoadingBg(true);

    const data = new FormData();
    data.append("image", backImage);

    api.post("/upload_hero", data)
      .then(() => {
        alert("Berhasil update background!");
        setHeroImage(api.defaults.baseURL + "/hero_image?" + Date.now());
      })
      .catch(() => alert("Upload gagal!"))
      .finally(() => setLoadingBg(false));
  };

  const upload_Logo = () => {
    if (!heroLogoImg || loadingLogo) return;
    setLoadingLogo(true);

    const data = new FormData();
    data.append("image", heroLogoImg);

    api.post("/upload_hero_logo", data)
      .then(() => {
        alert("Berhasil update logo!");
        setHeroImageLogo(api.defaults.baseURL + "/hero_image_logo?" + Date.now());
      })
      .catch(() => alert("Upload gagal!"))
      .finally(() => setLoadingLogo(false));
  };

  const simpanTextJudul = () => {
    if (!textLogo) return alert("Text kosong!");
    api.post("/save_text_logo_hero", { text: textLogo })
      .then(() => {
        alert("Berhasil disimpan");
        setTextDataLogo(textLogo);
        localStorage.setItem("textLogoHero", textLogo); // simpan di localStorage
        setTextLogo("");
      })
      .catch(() => alert("Gagal simpan text"));
  };

  useEffect(() => {
    setHeroImage(api.defaults.baseURL + "/hero_image?" + Date.now());
    setHeroImageLogo(api.defaults.baseURL + "/hero_image_logo?" + Date.now());

    // Ambil dari localStorage dulu, jika ada
    const savedText = localStorage.getItem("textLogoHero");
    if (savedText) setTextDataLogo(savedText);

    // Ambil dari backend
    api.get("/kirim_text_logo_hero")
      .then(res => {
        const backendText = res.data.text || "";
        setTextDataLogo(backendText);
        localStorage.setItem("textLogoHero", backendText); // update localStorage
      })
      .catch(() => alert("Gagal ambil text judul"));
  }, []);

  return (
    <>
      <div className="Hero" id="Hero">
        <img className="background" src={heroImage || background} alt="Hero" />
        <div className="overlay"></div>
        <div className="img_Gen_z">
          <img src={heroImageLogo || genz} alt="Gen Z" />
        </div>
        <h1 className="hero-text">{textDataLogo || "Pesantren Gen Z Gratis Jakarta"}</h1>
        <p className="hero-subtext">
          Berjuang Bersama Membahagikan Adik Yatim dan
          Membangun Pesantren Gratis Serta Sekolah Gratis di Jakarta
        </p>
      </div>

      <div className="update_Halamn">
        <h1>Update halaman Hero</h1>

        <div className="box_ubah">
          <p>Ubah background belakang Hero</p>
          <input type="file" onChange={ubahBackgrount} />
          <button disabled={loadingBg} onClick={upload_backgrount}>
            {loadingBg ? "Uploading..." : "Simpan"}
          </button>
        </div>

        <div className="box_ubah">
          <p>Ubah Logo depan</p>
          <input type="file" onChange={ubahLogo} />
          <button disabled={loadingLogo} onClick={upload_Logo}>
            {loadingLogo ? "Uploading" : "Simpan"}
          </button>
        </div>

        <div className="box_ubah">
          <p>Ubah Judul Hero</p>
          <textarea
            placeholder="Tulis judul hero di sini..."
            value={textLogo}
            onChange={e => setTextLogo(e.target.value)}
          />
          <button onClick={simpanTextJudul}>Simpan</button>
        </div>

        <div className="box_ubah">
          <p>Ubah text deskripsi Hero</p>
          <textarea placeholder="Tulis deskripsi hero di sini..." />
          <button>Simpan</button>
        </div>
      </div>
    </>
  );
}

export default Hero;