import '../index.css';
export default function Menu({ setPage, closeMenu }) {
  return (
    <ul>
      <li onClick={() => { setPage("home"); closeMenu(); }}>Home</li>
      <li onClick={() => { setPage("hero"); closeMenu(); }}>Hero</li>
      <li onClick={() => { setPage("statistik"); closeMenu(); }}>Statistik</li>
      <li onClick={() => { setPage("about"); closeMenu(); }}>About</li>
      <li onClick={() => { setPage("kampaye"); closeMenu(); }}>Kampaye</li>
      <li onClick={() => { setPage("metodeDonasi"); closeMenu(); }}>MetodeDonasi</li>
      <li onClick={() => { setPage("laporan"); closeMenu(); }}>Laporan</li>
      <li onClick={() => { setPage("relawan"); closeMenu(); }}>Relawan</li>
      <li onClick={() => { setPage("FAQ"); closeMenu(); }}>FAQ</li>
      <li onClick={() => { setPage("testimoni"); closeMenu(); }}>Testimoni</li>
      <li onClick={() => { setPage("pengumuman"); closeMenu(); }}>Pengumuman</li>
      <li onClick={() => { setPage("ceritaAnak"); closeMenu(); }}>CeritaAnak</li>
      <li onClick={() => { setPage("galeri"); closeMenu(); }}>Galeri</li>
      <li onClick={() => { setPage("alamat"); closeMenu(); }}>Alamat</li>
    </ul>
  );
}