import { useState } from "react"
import { Menu, X, Phone, Mail, User } from 'lucide-react'
import { Button } from "../components/ui/button"

interface HeaderProps {
  onLoginClick?: () => void
  isLoggedIn?: boolean
  onLogout?: () => void
}

export default function Header({ onLoginClick, isLoggedIn, onLogout }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(0751) 123456</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>ppid@poldasumbar.go.id</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Jam Layanan: Senin - Jumat, 08:00 - 16:00 WIB</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img src="/logo_polda.png" alt="Logo Polri" className="h-16 w-13" />
              <div>
                <h1 className="text-xl font-bold text-blue-900">PPID POLDA SUMBAR</h1>
                <p className="text-sm text-gray-600">Pejabat Pengelola Informasi dan Dokumentasi</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("beranda")}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("berita")}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Berita
              </button>
              <button
                onClick={() => scrollToSection("layanan")}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("informasi")}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Informasi Publik
              </button>
              <button
                onClick={() => scrollToSection("permohonan")}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Permohonan
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Kontak
              </button>
              
              {/* Auth Buttons */}
              {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Admin
                  </Button>
                  <Button variant="outline" size="sm" onClick={onLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={onLoginClick}>
                  <User className="w-4 h-4 mr-2" />
                  Login Admin
                </Button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("beranda")}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left"
                >
                  Beranda
                </button>
                <button
                  onClick={() => scrollToSection("layanan")}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left"
                >
                  Layanan
                </button>
                <button
                  onClick={() => scrollToSection("informasi")}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left"
                >
                  Informasi Publik
                </button>
                <button
                  onClick={() => scrollToSection("permohonan")}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left"
                >
                  Permohonan
                </button>
                <button
                  onClick={() => scrollToSection("kontak")}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left"
                >
                  Kontak
                </button>
                
                {isLoggedIn ? (
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" size="sm" className="w-fit">
                      <User className="w-4 h-4 mr-2" />
                      Admin
                    </Button>
                    <Button variant="outline" size="sm" className="w-fit" onClick={onLogout}>
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button className="bg-blue-600 hover:bg-blue-700 w-fit" onClick={onLoginClick}>
                    <User className="w-4 h-4 mr-2" />
                    Login Admin
                  </Button>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}