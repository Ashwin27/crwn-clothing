import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBtCkI_LTZoKylDKOwr_Pz8GPSOedxV1SE",
  authDomain: "crwn-db-30b58.firebaseapp.com",
  projectId: "crwn-db-30b58",
  storageBucket: "crwn-db-30b58.appspot.com",
  messagingSenderId: "415296449144",
  appId: "1:415296449144:web:5fa5f075723921a9585b8d",
  measurementId: "G-T3LGVJPHYC"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = store.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }
    catch (error) {
      console.log('Error creating a user', error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const store = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;