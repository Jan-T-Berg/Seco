import nextAppSession from 'next-app-session';

type MySessionData = {
  user: {},
};

export const session =
  nextAppSession <
  MySessionData >
  {
    name: 'SID',
    secret: process.env.JWT_SECRET,
    cookie: {
      httpOnly: process.env.NODE_ENV == 'production',
      secure: process.env.NODE_ENV == 'production',
      sameSite: 'strict',
    },
  };
