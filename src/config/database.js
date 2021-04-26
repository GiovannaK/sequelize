module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'test',
  define: {
    timestamps: true,
    underscored: true,
  },
};