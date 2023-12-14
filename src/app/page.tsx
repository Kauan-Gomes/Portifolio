import Header from '@/Components/Header'
import Home from '@/Components/Home'
import Portifolio from '@/Components/Portifolio'
import About from '@/Components/About';
import Skills from '@/Components/Skills';

export default function HomePage() {
  return (
    <main className='bg-black/30 bubble-background'>
      <Header />
      <Home />
      <About/>
      <Portifolio />
      <Skills/>
    </main>
  )
}
