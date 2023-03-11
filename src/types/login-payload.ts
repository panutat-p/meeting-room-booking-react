export type LogInPayload = {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
};

export type LogInErrorPayload = {
  message: string;
  statusCode: number;
};
