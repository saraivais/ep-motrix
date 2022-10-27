const errorCatalog = {
  userNotFound: {
    msg: 'User not found',
    code: 404,
    alias: 'Not found',
  },
  alreadyInUse: {
    msg: 'User is already registered',
    code: 400,
    alias: 'Bad request',
  },
  wrongPassword: {
    msg: 'Incorrect user/password',
    code: 401,
    alias: 'Unauthorized',
  },
  invalidToken: {
    msg: 'Token must be a valid token',
    code: 401,
    alias: 'Unauthorized',
  },
  contentNotFound: {
    msg: 'This content does not exist',
    code: 404,
    alias: 'Not found',
  },
};

export default errorCatalog;
