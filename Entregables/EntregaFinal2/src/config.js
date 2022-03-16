export default {
    PORT: process.env.PORT || 8080, 
    mongoLocal: {
        client: 'mongodb', 
        conStr: 'mongodb://localhost:27017/codehouse'
    },
    fireBase: {
        client: 'firebase', 
        conStr: ''
    }
}