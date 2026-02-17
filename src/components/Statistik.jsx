import '../index.css';
function Statistik() {
  const totalDonasi = 6550000;
  const jumlahDonatur = 120;
  const campaignAktif = 2;

  return (
    <div className="statistik" id="Statistik">
      <h1>Statistik Donasi</h1>

      <div className="statistik_box">
        <div className="statistik_item">
          <h2>Rp {totalDonasi.toLocaleString()}</h2>
          <p>Total Donasi</p>
        </div>

        <div className="statistik_item">
          <h2>{jumlahDonatur}</h2>
          <p>Donatur</p>
        </div>

        <div className="statistik_item">
          <h2>{campaignAktif}</h2>
          <p>Campaign Aktif</p>
        </div>
      </div>
    </div>
  );
}

export default Statistik;