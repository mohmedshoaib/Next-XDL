import Image from 'next/image'
import HomeFirstSection from './components/HomeFirstSection'
import HomeSecondSection from './components/HomeSecondSection'
import HomeThirdSection from './components/HomeThirdSection'
import HomeFourthSection from './components/HomeFourthSection'
export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <HomeFirstSection />
      
      {/* Our Product Section */}
      <HomeSecondSection />

      {/* Slogan Section */}
      <HomeThirdSection />

      {/* Cards Section */}
      <HomeFourthSection />
    </main>
  )
}
