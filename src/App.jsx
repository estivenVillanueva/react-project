import React from 'react'
import { Routes,Route } from 'react-router-dom'

import { Container } from './components/Container/Container'
import { Header } from './components/Layouts/Header/Header'
import { Footer } from './components/Layouts/Footer/Footer'
import { Home } from './components/Pages/Home/Home'
import { Experience } from './components/Pages/Experience/Experience'
import { Studies } from './components/Pages/Studies/Studies'
import { TechnicalSkills } from './components/Pages/technicalSkills/technicalSkills'
import { NotFound } from './components/Pages/NotFound/NotFound'

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Technical-skills' element={<TechnicalSkills />}/>
          <Route path='/experience' element={<Experience />} />
          <Route path='/studies' element={<Studies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>        
      </Container>    
      <Footer />      
    </>
  )
}
