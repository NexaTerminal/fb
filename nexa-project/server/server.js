const express = require('express');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const app = express();
const port = 3001;

const admin = require('firebase-admin');
const serviceAccount = require('./nexa-b408d-firebase-adminsdk-98p9y-f01df98c44.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://nexa-b408d-default-rtdb.europe-west1.firebasedatabase.app'
});

const db = admin.database();


app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Hello from NeXa Server!');
});

app.use('/api/auth', authRoutes);

app.get('/api/data', (req, res) => {
  res.json({ message: 'Data from the API' });
});

app.listen(port, (err) => {
  if (err) console.log("Error in server setup")
  console.log(`Server listening at http://localhost:${port}`)
});
