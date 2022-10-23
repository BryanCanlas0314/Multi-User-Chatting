import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users, room }) => (
  <div className="textContainer">
    <div>
    </div>
    {
      users
        ? (
          <>
            <div className='memberhead'> {users.length} Members</div>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
            <div className='roomhead'> Room : {room} </div>
          </>
        )
        : null
    }
  </div>
);

export default TextContainer;