import { LogOut, MessageSquare, Settings, User } from 'lucide-react'
import React from 'react'
import { Link } from "react-router-dom"
import { useAuthStore } from '../store/useAuthStore'

const Navbar = () => {
  const {logout, authUser} = useAuthStore()
  return (
    <header className=" border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">

          {/* LEFT → Logo */}
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition">
            <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-lg font-bold">Chatty</h1>
          </Link>

          {/* RIGHT → Actions */}
          <div className="flex items-center gap-2">

            {/* Settings → always visible */}
            <Link
              to="/settings"
              className="p-2 rounded-lg hover:bg-base-200 transition"
            >
              <Settings className="size-5" />
      
            </Link>Settings

            {/* Logged-in only */}
            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="p-2 rounded-lg hover:bg-base-200 transition"
                >
                  <User className="size-5" />
                </Link>Profile

                <button
                  onClick={logout}
                  className="p-2 rounded-lg hover:bg-base-200 transition"
                >
                  <LogOut className="size-5" />
                </button>Logout
              </>
            )}

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar