import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJ90I4fKn5Zbq9Q8NM0amSyVIohB0tQhU",
  authDomain: "catch-of-the-day-cynthia-lee.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-cynthia-lee.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
