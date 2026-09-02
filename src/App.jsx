import Header from './components/Header'
import Hero from './components/Hero'
import MembershipHighlight from './components/MembershipHighlight'
import About from './components/About'
import Training from './components/Training'
import Referral from './components/Referral'
import GymTour from './components/GymTour'
import GymSystem from './components/GymSystem'
import AppPromo from './components/AppPromo'
import Pricing from './components/Pricing'
import Features from './components/Features'
import RegisterCTA from './components/RegisterCTA'
import Footer from './components/Footer'
import { useWebsiteConfig } from './lib/content'
import './App.css'

// Trang render từ `websites/{websiteId}` trên Firestore (xem src/lib/content.js).
// Xem src/data/siteData.js để biết đầy đủ hình dạng dữ liệu cần có trong `config`
// (file đó chỉ để tham khảo — không được import ở đây).
function App() {
  const { config: data, loading, error } = useWebsiteConfig()

  if (loading) return null
  if (error) {
    return <p style={{ padding: 64, textAlign: 'center', color: '#888' }}>Không tải được nội dung.</p>
  }
  if (!data) return null

  return (
    <>
      <Header data={data} />
      <main>
        <Hero data={data} />
        <MembershipHighlight data={data} />

        <About data={data} />
        <Training data={data} />
        <Referral data={data} />

        <GymTour data={data} />
        <GymSystem data={data} />
        <AppPromo data={data} />
        <Pricing data={data} />
        <Features data={data} />
        <RegisterCTA data={data} />
      </main>
      <Footer data={data} />
    </>
  )
}

export default App
