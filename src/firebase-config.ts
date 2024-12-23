import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
    apiKey: "AIzaSyBxJcgKaZHu0XoJ36txENQC4emLmsosh4E",
    authDomain: "test-7f2b4.firebaseapp.com",
    databaseURL: "https://test-7f2b4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-7f2b4",
    storageBucket: "test-7f2b4.firebasestorage.app",
    messagingSenderId: "849384865496",
    appId: "1:849384865496:web:f80758b825646ed2a7a1ad",
    measurementId: "G-SW3MJPM0RS"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);