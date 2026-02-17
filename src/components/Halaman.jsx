
import Home from "./Home";
import Hero from "./Hero";
import Statistik from "./Statistik";
import About from "./About";
import Kampaye from "./Kampaye";
import MetodeDonasi from "./MetodeDonasi";
import Laporan from "./Laporan";
import Relawan from "./Relawan";
import FAQ from "./FAQ";
import Testimoni from "./Testimoni";
import Pengumuman from "./Pengumuman";
import CeritaAnak from "./CeritaAnak";
import Galeri from "./Galeri";
import Alamat from "./Alamat";
import '../index.css';
export default function Halaman({ page }) {
  if (page === "home") return <Home />;
  if (page === "hero") return <Hero />;
  if (page === "statistik") return <Statistik />;
  if (page === "about") return <About />;
  if (page === "kampaye") return <Kampaye />;
  if (page === "metodeDonasi") return <MetodeDonasi />;
  if (page === "laporan") return <Laporan />;
  if (page === "relawan") return <Relawan />;
  if (page === "FAQ") return <FAQ />;
  if (page === "testimoni") return <Testimoni />;
  if (page === "pengumuman") return <Pengumuman />;
  if (page === "ceritaAnak") return <CeritaAnak />;
  if (page === "galeri") return <Galeri />;
  if (page === "alamat") return <Alamat />;
  return null;
}