import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Articles from './pages/Articles'
import Headings from './pages/Headings'
import ArticleDetail from './pages/ArticleDetail'

import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/headings" element={<Headings />} />
            <Route path="/article/a" element={<ArticleDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
