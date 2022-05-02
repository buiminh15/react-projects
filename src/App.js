import PricingCardItem from 'components/PricingCardItem'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Home, Pricing, ContactUs, Layout } from './containers'

function App() {
  return (
    <Layout className='App'>
      <Home />
      <Pricing />
      <ContactUs />
    </Layout>
  )
}

export default App
