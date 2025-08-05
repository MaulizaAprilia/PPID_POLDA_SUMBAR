// src/App.tsx

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import InformationCategories from "./components/InformationCategories"
import RequestForm from "./components/RequestForm"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import LoginForm from "./components/LoginForm"
import News from "./components/News"
import AdminDashboard from "./components/AdminDashboard"
import InformasiBerkala from "./components/InformasiBerkala"
import InformasiSertaMerta from "./components/InformasiSertaMerta"
import InformasiSetiapSaat from "./components/InformasiSetiapSaat"
import InformasiDikecualikan from "./components/InformasiDikecualikan"
import PencarianInformasi from "./components/PencarianInformasi"
import UnduhDokumen from "./components/UnduhDokumen"
import KeamananData from "./components/KeamananData"

function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const handleLoginClick = () => setIsLoginOpen(true)
  const handleLoginClose = () => setIsLoginOpen(false)

  return (
    <div className="min-h-screen bg-white">
      <Header
        onLoginClick={handleLoginClick}
        isLoggedIn={false}
        onLogout={() => console.log("logout")}
      />
      <Hero />
      <News />
      <Services />
      <InformationCategories />
      <RequestForm />
      <Contact />
      <Footer />

      {/* Modal Login */}
      {isLoginOpen && <LoginForm onClose={handleLoginClose} />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<Layout />} />

        {/* Halaman admin */}
        <Route path="/dashboard" element={<AdminDashboard />} />

        {/* Halaman detail kategori */}
        <Route path="/informasi-berkala" element={<InformasiBerkala />} />
        <Route path="/informasi-serta-merta" element={<InformasiSertaMerta />} />
        <Route path="/informasi-setiap-saat" element={<InformasiSetiapSaat />} />
        <Route path="/informasi-dikecualikan" element={<InformasiDikecualikan />} />
        
        
        <Route path="/pencarianinformasi" element={<PencarianInformasi />} />
        <Route path="/unduhdokumen" element={<UnduhDokumen />} />
        <Route path="/keamanandata" element={<KeamananData />} />
      </Routes>
    </Router>
  )
}

export default App
