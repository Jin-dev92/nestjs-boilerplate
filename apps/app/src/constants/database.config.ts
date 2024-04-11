export default () => ({
  DB: {
    URL: process.env.DATABASE_URL,
    USERNAME: process.env.DATABASE_USERNAME,
    PASSWORD: process.env.DATABASE_PASSWORD,
  },
});
