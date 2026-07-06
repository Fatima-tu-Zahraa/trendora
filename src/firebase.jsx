import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDOQloQOhpgN0GPC9DnWn76B8FxG3APp9c",
  authDomain: "trendora-800b6.firebaseapp.com",
  projectId: "trendora-800b6",
  storageBucket: "trendora-800b6.firebasestorage.app",
  messagingSenderId: "179877687086",
  appId: "1:179877687086:web:226fe00814e3fdb1add4bf",
  measurementId: "G-QQ5GL5Y7C4"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app