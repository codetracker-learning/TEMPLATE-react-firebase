import React from 'react';
import { signOutUser } from '../helpers/auth';

export default function Authenticated({ user }) {
  return (
    <div className='text-center mt-5'>
      <h1>Welcome, {user.fullName}!</h1>
      <img src={user.photo} alt={user.fullName} />
      <div className='mt-2'>
        <button className='btn btn-danger' onClick={signOutUser}>
          Sign Out
        </button>
      </div>
    </div>
  );
}
