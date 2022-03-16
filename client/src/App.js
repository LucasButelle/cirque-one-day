import React from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import Presentation from './components/Presentation';
import Artists from './components/Artists';
import Tarifs from './components/Tarifs';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
        <Router>
			<div className='App'>
                <Nav />
                <Routes>
                    <Route exact path='/' element={<Presentation/>} />
                    <Route exact path='/artistes' element={<Artists/>} />
                    <Route exact path='/tarifs' element={<Tarifs/>} />
                    <Route exact path='/reservation' element={<Tarifs/>} />
                    <Route exact path='/contact' element={<Contact/>} />
                </Routes>
			</div>
		</Router>
	);
}

export default App;
