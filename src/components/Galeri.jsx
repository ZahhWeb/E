import '../index.css';
import { useState } from "react";

function Galeri() {
  const images = [
    "/images/kegiatan1.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan2.JPEG",
    "/images/kegiatan3.JPEG",
    "/images/kegiatan5.JPG",
    "/images/kegiatan6.JPG",
    "/images/kegiatan6.JPG",
    "/images/kegiatan6.JPG",
    "/images/kegiatan6.JPG",
    "/images/kegiatan6.JPG",
    "/images/kegiatan7.JPG",
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openLightbox = (img) => {
    setCurrentImg(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg("");
  };

  return (
    <div className="galeri" id="Galeri">
      <h1>Dokumentasi Kegiatan</h1>

      <div className="galeri_scroll">
        {images.map((img, i) => (
          <div
            className="galeri_card"
            key={i}
            onClick={() => openLightbox(img)}
          >
            <img src={img} alt={`Kegiatan ${i + 1}`} />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImg} alt="Zoom" />
        </div>
      )}
    </div>
  );
}

export default Galeri;