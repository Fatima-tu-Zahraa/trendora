import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth"

function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login")
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [navigate])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return children
}

export default ProtectedRoute