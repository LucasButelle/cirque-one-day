import React from 'react';
import {IoMdArrowDropright, IoMdWarning} from 'react-icons/io';

const Reservations = () => {
	const dateReservation = {
		1: {
			date: 'Vendredi 22 Octobre',
			hours: ['9h15', '13h45', '20h00'],
		},
		2: {
			date: 'Samedi 23 Octobre',
			hours: ['13h25', '15h55', '18h25', '20h55'],
		},
		3: {
			date: 'Dimanche 24 Octobre',
			hours: ['10h45', '13h45', '16h15', '18h45'],
		},
	};
    
	return Object.keys(dateReservation).map((item, i) => (
        <div className='day-container' key={i}>
			<div className='day'>{dateReservation[item].date}</div>
			<div className='hours'>{dateReservation[item].hours.map((hour, i) => (
                <div key={i}>{dateReservation[hour]}<IoMdArrowDropright className='icons'/>
                <input type="number" name="places" id="places" min={0} />
                <label htmlFor="">Dont</label>
                <input type="number" name="" id="" min={0}/>
                <label htmlFor="">Fauteuil roulants</label>
                </div>
            ))}
            </div>
		</div>
	));

	// <div className='reservation-container'>
	// 	<div className='left-part'>

	//     </div>

	// 	<div className='right-part'>
	//         <div className='nb-places'>
	//             <h4>Nbre total de places</h4>
	//             <p>(Classique + Fauteuil roulant)</p>
	//         </div>
	//         <div className='total-prices'>
	//             <h4>Total TTC à payer</h4>
	//         </div>
	// 	</div>
	// </div>
};

export default Reservations;
