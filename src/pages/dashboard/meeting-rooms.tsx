import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectAuthState } from '../../redux/auth-slice';

function MeetingRooms() {
  const authState = useAppSelector(selectAuthState);

  return (
    <>
      <h1>Meeting Rooms</h1>
      <br />
      <p>{authState.profile}</p>
    </>
  );
}

export default MeetingRooms;
