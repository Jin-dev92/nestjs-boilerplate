export default () => ({
  IGDB: {
    URL: process.env.DATABASE_URL,
    IGDB_CLIENT_ID: process.env.IGDB_CLIENT_ID,
    IGDB_CLIENT_SECRET: process.env.IGDB_CLIENT_SECRET,
    IGDB_GRANT_TYPE: "client_credentials",
  },
});
