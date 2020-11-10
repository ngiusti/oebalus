import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBRWh7H8ZGhl7JiKFL6zKHnrnXSx8DyzqI",
    authDomain: "oebalus-b763a.firebaseapp.com",
    databaseURL: "https://oebalus-b763a.firebaseio.com",
    projectId: "oebalus-b763a",
    storageBucket: "oebalus-b763a.appspot.com",
    messagingSenderId: "778518040267",
    appId: "1:778518040267:web:d52b454bdecddca59ad54e"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { username, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                username,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export default firebase;
