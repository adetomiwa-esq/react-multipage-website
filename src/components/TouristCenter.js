import React from 'react'
import './TouristCenter.css';
import Center from './Center';


function TouristCenter() {
  return (
    <div className='centers'>
       <ul className='top-two'>
            <Center 
                 img='./images/img-9.jpg'
                 event='Adventure'
                 description='Explore the hidden waterfall deep inside the Amazon Jungle'
                 path='/services'
             />

             <Center 
                img='./images/img-2.jpg'
                event='Luxury'
                description='Travel throught the islands of Bali in a private cruise and protection'
                path='/services'
            />
       </ul>

       <ul className='top-two'>
              <Center 
                 img='./images/img-3.jpg'
                 event='Mystery'
                 description='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                 path='/services'
             />

             <Center 
                img='./images/img-4.jpg'
                event='Adventure'
                description='Experience Football on Top of the Himilayan Mountains'
                path='/products'
              />

              <Center 
                img='./images/img-8.jpg'
                event='Adrenaline'
                description='Ride through the Sahara Desert on a guided camel tour'
                path='sign-up'
              />
       </ul>
    </div>
  )
}

export default TouristCenter