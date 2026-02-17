import '../index.css';
function Pengumuman() {
  const dataPengumuman = [
    { id: 1, teks: "Sekolah libur tanggal 20-22 Februari." },
    { id: 2, teks: "Ekskul akan mulai pukul 15.00 di lapangan." },
    { id: 3, teks: "Tugas IPA dikumpulkan paling lambat Jumat." },
  ];

  return (
    <div className="pengumuman-all">
      {dataPengumuman.map((item) => (
        <div
          className="pengumuman-item"
          key={item.id}
        >
          📢 {item.teks}
        </div>
      ))}
    </div>
  );
}

export default Pengumuman;