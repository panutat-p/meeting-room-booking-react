export type LogInPayload = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export type LogInErrorPayload = {
  message: string;
  statusCode: number;
};
