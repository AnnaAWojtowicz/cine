import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mainFilm from "./assets/img/filmMain.jpg";
import Header from './components/Header'
import FilmDetails from './components/FilmDetails'



function App() {
  const [mainFilmImage, setmainFilmImage] = useState(mainFilm);
  function handleMainFilmImageChange() {
    setmainFilmImage();
  }

  return (
    <>
      <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${mainFilmImage})` }}></div>
      <Header />
      <FilmDetails />
      <div>Hello world</div>
    </>
  )
}

export default App
