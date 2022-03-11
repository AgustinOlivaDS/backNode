
var admin = require("firebase-admin");

var serviceAccount = require("./luxevent-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log('Firebase up!')

CRUD()

async function CRUD(){
    const db = admin.firestore()
    const query = db.collection('usuarios')

    try{
        let id = 1
        let doc = query.doc(`${id}`)
        await doc.create({name: 'Agustin', age: 46})
        console.log('Usuario creado')
    }
    catch(err) {consloe.log(err)}
}
