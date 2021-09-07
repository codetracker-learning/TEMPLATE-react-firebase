import React from 'react';
import { signInUser } from '../helpers/auth';

export default function SignIn() {
  return (
    <div className='text-center mt-5'>
      <h1>Welcome! Sign In!</h1>
      <button className='btn btn-success' onClick={signInUser}>
        Sign In
      </button>
    </div>
  );
}
