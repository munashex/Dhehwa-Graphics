import './globals.css'
import Navbar from './components/Navbar'
import Quote from './components/Quote'
import Footer from './components/Footer'


export const metadata = {
  title: 'Dhehwa Graphics',
  description: 'Dhehwa Graphics and Prining',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative" style={{fontFamily: ['Arial', 'Helvetica', 'sans-serif']}}> 
      <Navbar/>
        {children} 
        <Quote/> 
        <Footer/>
        </body>
    </html>
  )
}
