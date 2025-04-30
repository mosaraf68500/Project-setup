import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVCPM8kuxET94x-QUxyrEQtIbSte42Nf8",
  authDomain: "project-setup-6ff7d.firebaseapp.com",
  projectId: "project-setup-6ff7d",
  storageBucket: "project-setup-6ff7d.firebasestorage.app",
  messagingSenderId: "170820136967",
  appId: "1:170820136967:web:4b82914361b88322ebbaa2",
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
