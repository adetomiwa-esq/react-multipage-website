import React from 'react'
import { Link } from 'react-router-dom';

function Center(props) {
  return (
    <div className='each'>
        <li className='center'>
            <Link to={props.path} className='center-link'>
                <div className='center-info'>
                    <img className='center-img' src={props.img}/>
                    <div className='event-type'>{props.event}</div>
                </div>
                <div className='description'>{props.description}</div>
            </Link>
        </li>
    </div>
  )
}

export default Center;