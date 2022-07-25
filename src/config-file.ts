export default () => ({
    // env: process.env.NODE_ENV || 'dev',
    database: {
        mongo: process.env.MONGO_URL
    }
});