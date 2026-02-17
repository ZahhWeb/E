import '../index.css';
import rinaImg from "../assets/kegiatan1.JPEG";

function CeritaAnak() {
  const dataAnak = [
    {
      id: 1,
      nama: "Rina",
      cerita: "ahmad senang belajar menggambar dan bermain musik.",
      foto: rinaImg,
    },
    {
      id: 2,
      nama: "Ahmad",
      cerita: "Ahmad suka membaca buku cerita dan olahraga.",
      foto: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      nama: "Siti",
      cerita: "Siti suka menari dan membantu teman-temannya.",
      foto: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="cerita-anak-container">
      {dataAnak.map((item) => (
        <div
          className="cerita-anak-card"
          key={item.id}
        >
          <img
            src={item.foto}
            alt={item.nama}
          />
          <h3>{item.nama}</h3>
          <p>{item.cerita}</p>
        </div>
      ))}
    </div>
  );
}

export default CeritaAnak;
