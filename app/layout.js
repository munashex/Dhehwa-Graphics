import './globals.css'
import Navbar from './components/Navbar'
import Quote from './components/Quote'
import Footer from './components/Footer' 



export const metadata = {
  title: 'Dhehwa Graphics',
  description: 'A company specializing in graphic design and printing services, providing a range of products such as business cards, flyers, calendars, NCR books, stickers, labels, postcards, invitations, and canvas prints.', 
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
