import React, { ReactNode } from "react"
import Navbar from "./NavBar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'; 

interface MainLayoutProps { 
    children: ReactNode
    headerTitle: string 
}

export const MainLayout = ({ children, headerTitle }: MainLayoutProps) => {
    return  <div className="flex flex-col min-h-screen bg-gray-50 text-white">
    <main className="h-screen bg-gray-200">
      <Navbar headerTitle={headerTitle}/>
      <div className="md:p-8">{children}</div>
      <ToastContainer autoClose={2000} />
    </main>
    </div>
}