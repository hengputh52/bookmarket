import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Books from './components/Books'
import GenreList from './components/GenreList'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element ={<HomePage />}></Route>
        <Route path='/books' element ={<Books />}></Route>
        <Route path='/genres' element ={<GenreList />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
