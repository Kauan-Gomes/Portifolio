import Header from '@/Components/Header'
import Home from '@/Components/Home'
import Portifolio from '@/Components/Portifolio'


export default function HomePage() {
  return (
    <div className={`page bubble-background`}>
      <body>
        <Header />
        <Home />
        <Portifolio/>
      </body>
    </div>
  )
}
