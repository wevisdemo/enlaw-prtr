import { collection, getDocs } from "firebase/firestore";
import { getFirebase } from "./firebase";

export async function getData() {
    const { db } = getFirebase();
    const colRef = collection(db, 'participant')
    const snapshot = await getDocs(colRef);

    return snapshot.docs.map((i) => {
        const data = i.data();

        return snapshot.docs
    })
}