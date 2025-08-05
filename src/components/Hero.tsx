import { Button } from "../components/ui/button"
import { FileText, Users, Clock, Shield } from "lucide-react"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="beranda"
      className="relative text-white min-h-[95vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/polda.jpg')",
      }}
    >
      {/* Overlay lebih gelap */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-blue-900/90 z-0" />

      {/* Konten */}
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-24">
          {/* Kiri: Teks */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              PPID POLDA <br className="hidden sm:block" />
              SUMATERA BARAT
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-xl">
              Melayani permintaan informasi publik dengan <span className="font-semibold text-white">transparan</span>, <span className="font-semibold text-white">akuntabel</span>, dan <span className="font-semibold text-white">profesional</span> sesuai
              <em> Undang-Undang No. 14 Tahun 2008</em>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
                onClick={() => scrollToSection("permohonan")}
              >
                Ajukan Permohonan
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                Panduan Layanan
              </Button>
            </div>
          </div>

          {/* Kanan: Statistik */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <FileText className="w-12 h-12 mx-auto mb-4 text-white" />,
                label: "Dokumen Tersedia",
                value: "1,234",
              },
              {
                icon: <Users className="w-12 h-12 mx-auto mb-4 text-white" />,
                label: "Permohonan Selesai",
                value: "567",
              },
              {
                icon: <Clock className="w-12 h-12 mx-auto mb-4 text-white" />,
                label: "Layanan Online",
                value: "24/7",
              },
              {
                icon: <Shield className="w-12 h-12 mx-auto mb-4 text-white" />,
                label: "Keamanan Data",
                value: "100%",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1e3a8a]/80 hover:bg-[#1e40af]/90 border border-white/10 backdrop-blur-lg rounded-xl p-6 text-center shadow-lg transition duration-300"
              >
                {item.icon}
                <h3 className="text-2xl font-bold mb-2 text-white">{item.value}</h3>
                <p className="text-blue-100 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
