import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    Table, TableHeader, TableBody, TableRow,
    TableHead, TableCell
} from "../components/ui/table"
import { LogOut, Newspaper, Folder } from "lucide-react"

interface RequestData {
    name: string
    email: string
    phone: string
    address: string
    category: string
    subject: string
    description: string
    purpose: string
    timestamp: string
}

export default function AdminDashboard() {
    const [requests, setRequests] = useState<RequestData[]>([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/api/requests")
        .then(res => res.json())
        .then(data => {
            setRequests(data)
            setLoading(false)
        })
        .catch(err => {
            console.error("Failed to fetch requests", err)
            setLoading(false)
        })
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated")
        navigate("/")
    }

    return (
        <div className="min-h-screen flex bg-gray-100 font-sans">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-800 text-white p-6 flex flex-col justify-between shadow-lg">
            <div>
            <h2 className="text-xl font-bold mb-8">📊 Admin Panel</h2>
            <nav className="space-y-4">
                <button
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-700 transition"
                >
                <Folder className="w-5 h-5" /> Permohonan
                </button>
                <button
                onClick={() => navigate("/tambah-berita")}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-blue-700 transition"
                >
                <Newspaper className="w-5 h-5" /> Tambah Berita
                </button>
            </nav>
            </div>
            <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-red-600 hover:bg-red-700 transition"
            >
            <LogOut className="w-5 h-5" /> Keluar
            </button>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-8">
            <div className="bg-white rounded-xl shadow-md p-6">
            <h1 className="text-2xl font-bold mb-6 text-blue-800">Permohonan Informasi Publik</h1>

            {loading ? (
                <p className="text-center py-10 text-gray-500">Memuat data permohonan...</p>
            ) : requests.length === 0 ? (
                <p className="text-center py-10 text-gray-500">Belum ada permohonan yang masuk.</p>
            ) : (
                <div className="overflow-auto">
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Nama Lengkap</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Nomor Telepon</TableHead>
                        <TableHead>Kategori Informasi</TableHead>
                        <TableHead>Alamat Lengkap</TableHead>
                        <TableHead>Judul Permohonan</TableHead>
                        <TableHead>Rincian Informasi</TableHead>
                        <TableHead>Tujuan Penggunaan</TableHead>
                        <TableHead>Waktu Pengajuan</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {requests.map((req, idx) => (
                        <TableRow key={idx}>
                        <TableCell>{req.name}</TableCell>
                        <TableCell>{req.email}</TableCell>
                        <TableCell>{req.phone}</TableCell>
                        <TableCell>{req.category}</TableCell>
                        <TableCell>{req.address}</TableCell>
                        <TableCell>{req.subject}</TableCell>
                        <TableCell>{req.description}</TableCell>
                        <TableCell>{req.purpose}</TableCell>
                        <TableCell>{new Date(req.timestamp).toLocaleString("id-ID", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </div>
            )}
            </div>
        </main>
        </div>
    )
}