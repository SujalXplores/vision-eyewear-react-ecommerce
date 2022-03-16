const admin = require('firebase-admin');

const serviceAccount = require('./vision-eyewear-2034-firebase-adminsdk-kk7xu-83a3280b3a.json');

const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

const db = firebaseAdmin.firestore();

const deleteUser = async (uid) => {
  const userRef = db.collection('users').doc(uid);
  await userRef.delete();
  await firebaseAdmin.auth().deleteUser(uid);
};

const disableUser = async (uid) => {
  const userRef = db.collection('users').doc(uid);
  await userRef.update({
    disabled: true,
  });
  await firebaseAdmin.auth().updateUser(uid, {
    disabled: true,
  });
};

const enableUser = async (uid) => {
  const userRef = db.collection('users').doc(uid);
  await userRef.update({
    disabled: false,
  });
  await firebaseAdmin.auth().updateUser(uid, {
    disabled: false,
  });
};

module.exports = {
  db,
  deleteUser,
  disableUser,
  enableUser,
};
