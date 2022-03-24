import { initializeApp, getApps } from "firebase/app";
import firebaseConfig from './firebaseConfig'
import { getFirestore } from "firebase/firestore";

export function getFirebase() {
    if (getApps().length == 0) {
        initializeApp(firebaseConfig)
    }

    return { db: getFirestore() }
}