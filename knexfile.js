// Update with your config settings.

module.exports = {
  "main" : {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'testmain'
    }
  },
  "db1" : {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'testdb1'
    }
  },
};
