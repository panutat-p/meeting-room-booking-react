import React, { useEffect } from 'react';
import { Divider, Heading } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectAuthState, updateProfileAction } from '../../redux/auth-slice';
import { getRoomsThunk, selectRoomsState } from '../../redux/rooms-slice';

function MeetingRooms() {
  const dispatch = useAppDispatch();
  const { profile, email } = useAppSelector(selectAuthState);
  const { rooms } = useAppSelector(selectRoomsState);
  console.log('🟨 rooms.events:', rooms.events);

  useEffect(() => {
    dispatch(getRoomsThunk());
  }, []);

  function reserveRoom(): void {
    dispatch(updateProfileAction());
  }

  return (
    <>
      <Heading>Meeting Room</Heading>
      <Divider orientation="horizontal" />
      <p>{profile}</p>
      <p>{email}</p>
      <br />
      <Button colorScheme="teal" size="md" onClick={reserveRoom}>
        Transfer to 🐔
      </Button>
      <Divider orientation="horizontal" />
      <p>{JSON.stringify(rooms?.events)}</p>
    </>
  );
}

export default MeetingRooms;
