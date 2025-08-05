import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Download } from "lucide-react"

export default function UnduhDokumen() {
  const dokumen = [
    {
      title: "Laporan Kinerja Tahunan",
      description: "Ringkasan kinerja tahunan Polda Sumbar",
      fileUrl: "/dokumen/laporan-kinerja.pdf",
    },
    {
      title: "Anggaran dan Realisasi",
      description: "Transparansi anggaran dan penggunaannya",
      fileUrl: "/dokumen/anggaran.pdf",
    },
    {
      title: "Struktur Organisasi",
      description: "Struktur organisasi dan unit kerja",
      fileUrl: "/dokumen/struktur-organisasi.pdf",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900 drop-shadow-sm">
          Unduh Dokumen Publik
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dokumen.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-xl"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 mt-1">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <a href={item.fileUrl} download>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 text-indigo-600 hover:text-white hover:bg-indigo-600 border-indigo-600 transition"
                  >
                    <Download className="w-4 h-4" />
                    Unduh PDF
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
