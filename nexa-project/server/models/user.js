const admin = require('firebase-admin');
const serviceAccount = require('./nexa-project-firebase-adminsdk-2uovf-81f4d99c07.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://nexa-project-default-rtdb.firebaseio.com' // Replace with your Firebase project's database URL
});
const db = admin.database();
const usersRef = db.ref('users');
async function createUser(user) {
  try {
    const userSnapshot = await usersRef.orderByChild('email').equalTo(user.email).once('value');
    if (userSnapshot.exists()) {
      throw new Error('User already exists');
    }
    const newUserRef = usersRef.push();
    await newUserRef.set(user);
    return { success: true, message: 'User created successfully', id: newUserRef.key };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

async function findUserByEmail(email) {
  try {
    const snapshot = await usersRef.orderByChild('email').equalTo(email).once('value');
    if (snapshot.exists()) {
      const users = snapshot.val();
      const userId = Object.keys(users)[0];
      return { id: userId, ...users[userId] };
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw error;
  }
}

module.exports = {
  createUser,
  findUserByEmail,
};