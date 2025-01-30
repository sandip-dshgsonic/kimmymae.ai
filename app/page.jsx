import Navbar from '../components/layout/Header.jsx'
import HeroSection from '@/components/features/home/Herosection.jsx'
import FeaturesSection from '@/components/features/home/Feturesection.jsx'
import CampaignCard from '@/components/features/home/Multiplecards.jsx'
import TeamsSection from '@/components/features/home/TeamsSection.jsx'
import AgentforceLanding from '@/components/features/home/AgentforceLanding.jsx'
import ExperienceSection from '@/components/features/home/ExperienceSection.jsx'
import PartnerNetwork from '@/components/features/home/PartnerNetwork.jsx'
import LearningPlatform from '@/components/features/home/LearningPlatform.jsx'
import TestimonialSection from '@/components/features/home/TestimonialSection.jsx'
import NextStepsSection from '@/components/features/home/NextStepsSection.jsx'
import FAQSection from '@/components/features/home/FAQSection.jsx'
import Footer from '@/components/layout/Footer.jsx'


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <HeroSection />

      <FeaturesSection />

      {/* Adjusting CampaignCard to move slightly upwards and make it responsive */}
      <div className="relative -mt-7 sm:-mt-24 md:-mt-20"> {/* Negative margin with different values for responsiveness */}
        <CampaignCard />
      </div>

      <TeamsSection />
      <AgentforceLanding /> 
      <ExperienceSection /> 
      <PartnerNetwork />  
      <LearningPlatform />  
      <TestimonialSection />  
      <NextStepsSection />  
      <FAQSection />  
      <Footer />  
    
    </div>
  )
}




// import Navbar from '../components/layout/Header.jsx'
// import HeroSection from '@/components/features/home/Herosection.jsx'
// import FeaturesSection from '@/components/features/home/Feturesection.jsx'
// import CampaignCard from '@/components/features/home/Multiplecards.jsx'
// import TeamsSection from '@/components/features/home/TeamsSection.jsx'

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />

//       <HeroSection />

//       <FeaturesSection />

//       <CampaignCard />

//       <TeamsSection />  
//       <div className="container mx-auto px-4 py-8">
//         {/* <h1 className="text-4xl font-bold text-gray-900">
//           Welcome to My Next.js App
//         </h1> */}
//       </div>
//     </div>
//   )
// }