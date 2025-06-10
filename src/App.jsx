import { useState } from 'react'
import './App.css'
import mainFilm from "./assets/img/filmMain.jpg";
import Header from './components/Header'
import FilmDetailsMain from './components/FilmDetailsMain.jsx'
import FilmSection from './components/FilmSection.jsx'


function App() {
  const [mainFilmImage, setmainFilmImage] = useState(mainFilm);
  function handleMainFilmImageChange() {
    setmainFilmImage();
  }

  return (
    <>
      <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${mainFilmImage})` }}>
        <FilmDetailsMain />
      </div>
      <Header />
      <FilmSection />
    </>
  )
}

export default App
