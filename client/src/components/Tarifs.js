import React from 'react';
import Reservations from './Reservations';
import {IoMdWarning} from 'react-icons/io';

const Tarifs = () => {
  return (
    <>
        <h3>Tarifs</h3>
        <div className='totalPrice'>
            <div className='firstPrice'>
               <p>De 1 à 99 places ________ 8.00&#x20AC; TTC/Place (7.59&#x20AC; HT)</p>
            </div>
            <div className='secondPrice'>
               <p>De 100 à 499 places _____ 7.60&#x20AC; TTC/Place (7.21&#x20AC; HT)</p>
            </div>
            <div className='thirdPrice'>
               <p>De 500 à 1999 places ____ 7.30&#x20AC; TTC/Place (6.92&#x20AC; HT)</p>
            </div>
            <div className='fourthPrice'>
               <p>De 1999 à 2500 places ___ 7.00&#x20AC; TTC/Place (6.64&#x20AC; HT)</p>
            </div>
            <p>Gratuit pour les - de 2 ans sur les genoux des parents</p>
        </div>

        <h3>Réservations</h3>
        <Reservations />
        <div className='warning'><IoMdWarning/> LES PLACES NE SONT NI REPRISE, NI ÉCHANGEABLES</div>
    </>
  )
}

export default Tarifs