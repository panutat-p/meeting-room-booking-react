export type ProfilePayload = {
  message: string;
  status_code: number;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      email_verified_at: Date;
      dob: Date;
      role: string;
      created_at: Date;
      updated_at: Date;
    };
  };
};

export type ProfileErrorPayload = {
  message: string;
  statusCode: number;
};
