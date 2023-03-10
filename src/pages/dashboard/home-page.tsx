import React from 'react';
import { Heading } from '@chakra-ui/react';

import { useAppSelector } from '../../redux/hooks';
import { selectAuthState } from '../../redux/auth-slice';

function HomePage() {
  const { profile, email } = useAppSelector(selectAuthState);

  return (
    <>
      <Heading>Home</Heading>
      <br />
      <p>{profile}</p>
      <p>{email}</p>
    </>
  );
}

export default HomePage;
