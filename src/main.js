import { createApp } from 'vue'
import App from './App.vue'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBulAogbFupJi4LXpOGk-ebF2FsQmUSs1E",
  authDomain: "port-41386.firebaseapp.com",
  projectId: "port-41386",
  storageBucket: "port-41386.appspot.com",
  messagingSenderId: "684904462217",
  appId: "1:684904462217:web:0028588bc7691316c11358"
};

// Initialize Firebase
initializeApp(firebaseConfig);



createApp(App).mount('#app')
