import '../index.css';
function Laporan() {
  const dataLaporan = [
    {
      bulan: "Januari 2026",
      masuk: 5000000,
      keluar: 4800000,
    },
    {
      bulan: "Februari 2026",
      masuk: 3200000,
      keluar: 3000000,
    },
  ];

  return (
    <div className="laporan" id="Laporan">
      <h1>Laporan Transparansi</h1>

      <div className="laporan_list">
        {dataLaporan.map((item, i) => (
          <div className="laporan_card" key={i}>
            <h3>{item.bulan}</h3>
            <p>
              Dana masuk: Rp {item.masuk.toLocaleString()}
            </p>
            <p>
              Dana digunakan: Rp{" "}
              {item.keluar.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Laporan;