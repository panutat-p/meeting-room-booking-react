import React from 'react';
import { Button, Heading } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectAuthState, updateProfileAction } from '../../redux/auth-slice';

function HomePage() {
  const dispatch = useAppDispatch();
  const { profile, email } = useAppSelector(selectAuthState);

  function reserveRoom(): void {
    dispatch(updateProfileAction());
  }

  return (
    <>
      <Heading>Home</Heading>
      <br />
      <p>{profile}</p>
      <p>{email}</p>
      <Button colorScheme="teal" size="md" onClick={reserveRoom}>
        Transfer to 🐔
      </Button>
    </>
  );
}

export default HomePage;
