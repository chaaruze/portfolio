import React from 'react';
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Skillsets from './Skillsets/Skillsets.jsx';
import Projects from './Project/Projects.jsx';
import Footer from './Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Projects />
            <Skillsets />
            <Footer />
        </>
    );
}

export default App;
