import Header from './components/Header'
import Hero from './components/Hero'
import MembershipHighlight from './components/MembershipHighlight'
import SplitSection from './components/SplitSection'
import GymTour from './components/GymTour'
import GymSystem from './components/GymSystem'
import AppPromo from './components/AppPromo'
import Pricing from './components/Pricing'
import Features from './components/Features'
import RegisterCTA from './components/RegisterCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MembershipHighlight />

        <SplitSection
          id="about"
          eyebrow="Về The New Gym"
          title="Không gian tập luyện thoải mái, không phán xét"
          paragraphs={[
            'Chúng tôi tạo ra một môi trường nơi ai cũng có thể tập luyện một cách tự tin — dù bạn là người mới bắt đầu hay đã tập lâu năm — mà không cần lo lắng về ánh nhìn của người khác.',
            'The New Gym hướng đến một cộng đồng tập luyện lành mạnh, thân thiện và dễ tiếp cận với mọi mức chi phí.',
          ]}
          image="https://picsum.photos/seed/thenewgym-about/900/700"
          imageAlt="Không gian phòng tập The New Gym"
          cta={{ href: '#tour', label: 'Khám phá phòng tập' }}
        />

        <SplitSection
          id="training"
          eyebrow="Hướng dẫn tập luyện miễn phí"
          title="Tập đúng kỹ thuật, an toàn ngay từ ngày đầu"
          paragraphs={[
            'Video hướng dẫn bài tập ngay trong ứng dụng cùng đội ngũ huấn luyện viên luôn sẵn sàng hỗ trợ bạn sử dụng thiết bị đúng cách.',
          ]}
          bullets={[
            'Video hướng dẫn từng bài tập trong app',
            'HLV hỗ trợ trực tiếp tại phòng tập',
            'Lộ trình tập luyện theo mục tiêu cá nhân',
          ]}
          image="https://picsum.photos/seed/thenewgym-training/900/700"
          imageAlt="Hướng dẫn tập luyện tại The New Gym"
          reverse
          tint
          cta={{ href: '#app', label: 'Xem trong app' }}
        />

        <SplitSection
          eyebrow="Thêm bạn, thêm vui"
          title="Rủ bạn tập cùng, nhận ngay ưu đãi"
          paragraphs={[
            'Giới thiệu bạn bè đăng ký thành công gói Toàn hệ thống, cả bạn và người được giới thiệu đều nhận 2 tuần tập luyện miễn phí.',
          ]}
          image="https://picsum.photos/seed/thenewgym-referral/900/700"
          imageAlt="Chương trình giới thiệu bạn bè"
          cta={{ href: '#register', label: 'Giới thiệu ngay' }}
        />

        <GymTour />
        <GymSystem />
        <AppPromo />
        <Pricing />
        <Features />
        <RegisterCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
