import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectAuthState, updateProfileAction } from '../../redux/auth-slice';

function MeetingRooms() {
  const { profile, email } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  function reserveRoom(): void {
    dispatch(updateProfileAction());
  }

  return (
    <>
      <Heading>Meeting Room</Heading>
      <br />
      <p>{profile}</p>
      <p>{email}</p>
      <br />
      <Button colorScheme="teal" size="md" onClick={reserveRoom}>
        Transfer to 🐔
      </Button>
    </>
  );
}

export default MeetingRooms;
