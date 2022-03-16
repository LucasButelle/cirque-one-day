import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const navStyle = {
        color: '#DFB639'
    };


	return (
		<nav>
            <Link style={navStyle} to="/">
			    <h1>CALAIS GENEROSITE</h1>
                <h4>- CIRQUE DE HAUTE VOLTIGE -</h4>
			</Link>
			<ul className='nav-links'>
				<Link style={navStyle} to="/artistes">
					<li>Nos Artistes</li>
				</Link>
				<Link style={navStyle} to="/tarifs" to="/reservation">
					<li>Tarifs / Réservations</li>
				</Link>
                <Link style={navStyle} to="/contact">
					<li>Contact</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
