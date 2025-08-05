// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import LandingPage from "./components/LandingPage"
import AdminDashboard from "./components/AdminDashboard"
import InformasiBerkala from "./components/InformasiBerkala"
import InformasiSertaMerta from "./components/InformasiSertaMerta"
import InformasiSetiapSaat from "./components/InformasiSetiapSaat"
import InformasiDikecualikan from "./components/InformasiDikecualikan"
import PencarianInformasi from "./components/PencarianInformasi"
import UnduhDokumen from "./components/UnduhDokumen"
import KeamananData from "./components/KeamananData"

function App() {
  return (
    <Router>
      <Routes>
        {/* Semua halaman dengan Header & Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} /> {/* ← INI PENTING */}
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="informasi-berkala" element={<InformasiBerkala />} />
          <Route path="informasi-serta-merta" element={<InformasiSertaMerta />} />
          <Route path="informasi-setiap-saat" element={<InformasiSetiapSaat />} />
          <Route path="informasi-dikecualikan" element={<InformasiDikecualikan />} />
          <Route path="pencarianinformasi" element={<PencarianInformasi />} />
          <Route path="unduhdokumen" element={<UnduhDokumen />} />
          <Route path="keamanandata" element={<KeamananData />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
