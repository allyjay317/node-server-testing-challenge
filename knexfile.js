module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    },
    useNullAsDefault: true
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testing.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    },
    useNullAsDefault: true
  }
}