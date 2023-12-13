import React, { useState } from "react"
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import mockCats from './mockCats';

const App = () => {
  const [cats, setCats] = useState(mockCats)

  const createCat = (createdCat) => {
    console.log(createdCat)
  }

  const updateCat = (cat, id) => {
    console.log('cat:', cat)
    console.log('id:', id)
  }
  
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catedit/:id" element={<CatEdit cats={ cats } updateCat={ updateCat } />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
        <Route path="/catshow/:id" element={<CatShow cats={ cats } />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App;