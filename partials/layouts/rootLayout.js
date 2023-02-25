import Footer from "../sections/Footer"
import Navbar from "../sections/Navbar"

function RootLayout({children}) {
  return (
    <div className="content">
      <Navbar />
      { children }
      <Footer />
    </div>
  )
}

export default RootLayout