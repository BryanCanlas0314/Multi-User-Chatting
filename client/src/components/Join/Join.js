import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [errors, setErrors] = useState({ name: '', room: '' });
  const checkError = () => {
    console.log("Checking");
    const error = {};
    if (name.length === 0) error.name = 'Name field is required.';
    if (room.length === 0) error.room = 'Room field is required.';
    setErrors(error);
  }
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Multi Users Chatting Room</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
          {errors.name && <div className='joinerror'>{errors.name}</div>}
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
          {errors.room && <div className='joinerror'>{errors.room}</div>}
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit" onClick={checkError}>Join to Room</button>
        </Link>
      </div>
    </div>
  );
}
