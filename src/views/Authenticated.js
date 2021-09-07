import React from 'react';
import { signOutUser } from '../helpers/auth';

export default function Authenticated() {
  return (
    <div className='text-center mt-5'>
      <h1>Welcome, Authenticated User!</h1>
      <button className='btn btn-danger' onClick={signOutUser}>
        Sign Out
      </button>
    </div>
  );
}
