const userMocks = {
  validUser: {
    email: 'admin@admin.com',
    password: '$2b$10$qEGGtrFFKNYt8HrR86CaTeui5gfNHdwW3a3QDB1nVbI5XXLr9f1.m',
  },
  validLogin: {
    email: 'admin@admin.com',
    password: 'iamadmin',
  },
  invalidPassword: {
    email: 'admin@admin.com',
    password: 'isweariamadmin',
  },
  unregisteredUser: {
    email: 'totallynotregistered@email.com',
    password: 'wellitried',
  },
  newUser: {
    email: 'newvalid@account.com',
    password: 'newpassword',
  },
  alreadyRegistered: {
    id: 5,
    email: 'motrix@one.com',
    password: 'secondtry',
  },
};

export default userMocks;
