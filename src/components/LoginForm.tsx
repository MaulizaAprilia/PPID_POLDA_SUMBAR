"use client"

import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { X, User, Lock, Eye, EyeOff } from "lucide-react"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

interface LoginFormProps {
  onClose: () => void
}

export default function LoginForm({ onClose }: LoginFormProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState("")

  const { signIn, signUp } = useAuth()
  const navigate = useNavigate() // ⬅️ Tambahkan ini

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const authFn = isLogin ? signIn : signUp
      const { error } = await authFn(formData.username, formData.password)
      if (error) throw new Error(error)

      if (isLogin) {
        // onClose() // Jangan ditutup modalnya, langsung redirect ke dashboard
        navigate("/dashboard") // ⬅️ Redirect ke dashboard
      } else {
        setError("Akun berhasil dibuat. Silakan login.")
      }
    } catch (err) {
  if (err instanceof Error) {
    setError(err.message || "Terjadi kesalahan")
  } else {
    setError("Terjadi kesalahan yang tidak diketahui")
  }
}
}

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md shadow-2xl border border-gray-200">
        <CardHeader className="relative text-center">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full text-gray-500 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
          <CardTitle className="text-3xl font-semibold text-gray-800">
            {isLogin ? "Admin Login" : "Admin Registration"}
          </CardTitle>
          <CardDescription className="text-gray-500">
            {isLogin ? "Please enter your credentials" : "Create a new admin account"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                  placeholder="Enter your username"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-100 px-3 py-2 rounded-md">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white"
              disabled={loading}
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Register"}
            </Button>

            <div className="text-center text-sm">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin)
                  setError("")
                  setFormData({ username: "", password: "" })
                }}
                className="text-blue-600 hover:underline"
              >
                {isLogin ? "Don't have an account? Register here" : "Already have an account? Login"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}