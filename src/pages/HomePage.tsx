import Hero from '../sections/Hero'
import Why from '../sections/Why'
import ProblemSolution from '../sections/ProblemSolution'
import Features from '../sections/Features'
import UseCases from '../sections/UseCases'
import PrivacyBadges from '../sections/PrivacyBadges'
import HowItWorks from '../sections/HowItWorks'
import Vision from '../sections/Vision'
import ComingSoon from '../sections/ComingSoon'

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Why />
      <ProblemSolution />
      <Features />
      <UseCases />
      <PrivacyBadges />
      <HowItWorks />
      <Vision />
      <ComingSoon />
    </main>
  )
}
