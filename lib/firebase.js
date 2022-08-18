import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDprHOR2oMC4ph49aJ9v7cINgqhRcvWwbU",
  authDomain: "blog-494d0.firebaseapp.com",
  projectId: "blog-494d0",
  storageBucket: "blog-494d0.appspot.com",
  messagingSenderId: "977326412670",
  appId: "1:977326412670:web:6250c56a352810f35d192f",
  measurementId: "G-YGRKJFZ1W4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

// Helper functions

/**
 * Gets a users/{uid} document with username
 * @param {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**
 * Converts a firestore document to JSON
 * @param {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
export const increment = firebase.firestore.FieldValue.increment;
