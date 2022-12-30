// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import firebase from "./firebase";
import {getFirestore} from '@firebase/firestore'



// const firebaseConfig = {
//   apiKey: "AIzaSyA2XWe8rTAxml_tKKlm5VaAl7Cc1FNM7-4",
//   authDomain: "blog-app-8d144.firebaseapp.com",
//   projectId: "blog-app-8d144",
//   storageBucket: "blog-app-8d144.appspot.com",
//   messagingSenderId: "1095699344767",
//   appId: "1:1095699344767:web:c6891ede6b04927940fe4a"
// };




// // // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);


const firebaseConfig = {
  apiKey: "AIzaSyAJA31SXzaFw6ZgC8ysADvViAA8zbXS-D8",
  authDomain: "crud-app-e5a74.firebaseapp.com",
  projectId: "crud-app-e5a74",
  storageBucket: "crud-app-e5a74.appspot.com",
  messagingSenderId: "112598832771",
  appId: "1:112598832771:web:1fd1e17cb78a9a62d06db6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);










// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from '@firebase/firestore'


// //NewBlogAPP SDK
// const firebaseConfig = {
//     apiKey: "AIzaSyCgq2PgYvHFPoyVU9Go2oT6HdrszTPciFc",
//     authDomain: "newblogproject-d2c49.firebaseapp.com",
//     projectId: "newblogproject-d2c49",
//     storageBucket: "newblogproject-d2c49.appspot.com",
//     messagingSenderId: "693091991443",
//     appId: "1:693091991443:web:1ad4d19d8ff2480ebdb266"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);