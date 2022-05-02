import './App.css'
import { About, ContactUs, Home, Layout, Pricing } from './containers'

function App() {
  return (
    <Layout className='App'>
      <Home />
      <About />
      <Pricing />
      <ContactUs />
    </Layout>
  )
}

export default App
