import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectAuthState } from '../../redux/auth-slice';

function HomePage() {
  const authState = useAppSelector(selectAuthState);

  return (
    <>
      <h1>Home</h1>
      <br />
      <p>{authState.profile}</p>
    </>
  );
}

export default HomePage;
