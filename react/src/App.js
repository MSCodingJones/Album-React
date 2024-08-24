import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import ErrorPage from "./components/ErrorPage"
import Home from './components/Home'
import About from './components/About'
import Artists from './components/Artists'
import Bands from './components/Bands'
import Albums from './components/Album'
import Single from  './components/Single'

const App =()=> {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/artist' element={ <Artists />} />
                <Route path='/album' element={ <Albums />} />
                <Route path='/band' element={ <Bands />} />
                <Route path='/:path/:id' element={ <Single />} />
                <Route path='*' element={ <ErrorPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App