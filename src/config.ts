export const config = {
    port: process.env.PORT || 3030,
    mongoDBUrl: process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/todos'
};