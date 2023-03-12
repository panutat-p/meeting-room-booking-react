import React, { useEffect } from 'react';
import { Divider, Heading, useToast } from '@chakra-ui/react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectAuthState } from '../../redux/auth-slice';
import { getRoomsThunk, selectRoomsState } from '../../redux/rooms-slice';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function MeetingRooms() {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const { profile, email } = useAppSelector(selectAuthState);
  const { rooms } = useAppSelector(selectRoomsState);

  useEffect(() => {
    dispatch(getRoomsThunk());
  }, []);

  function showToast(event: any) {
    toast({
      title: 'event',
      description: JSON.stringify(event),
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
  }

  return (
    <>
      <Heading>Meeting Room</Heading>
      <Divider orientation="horizontal" />
      <p>{profile}</p>
      <p>{email}</p>
      <br />
      <Divider orientation="horizontal" />
      <Calendar
        localizer={localizer}
        events={...rooms?.events === undefined ? [] : rooms.events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={showToast}
      />
    </>
  );
}

export default MeetingRooms;
