import { useState } from "react";

import React from 'react'
import Menu from "./components/Menu";
import Header from "./components/Header";
import Halaman from "./components/Halaman";
import './index.css';
export default function App() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("hero");

  return (
    <div className="Gride">

      <div className={`Menu ${open ? "active" : ""}`}>
        <Menu
          setPage={setPage}
          closeMenu={() => setOpen(false)}
        />
      </div>

      <div className="Header">
        <Header toggleMenu={() => setOpen(!open)} />
      </div>

      <div className="Halaman">
        <Halaman page={page} />
      </div>

    </div>
  );
}
