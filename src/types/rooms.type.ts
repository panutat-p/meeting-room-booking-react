export type RoomsPayload = {
  events: Event[];
};

export type Event = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  created_by: string;
};

export type RoomsErrorPayload = {
  message: string;
  statusCode: number;
};
