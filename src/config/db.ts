import { getFirebase } from './firebase';
import {
	collection,
	getDoc,
	getDocs,
	doc,
	setDoc,
	onSnapshot,
} from 'firebase/firestore';

export async function getRealTimeCounting(doUpdate) {
	const { db } = getFirebase();
	const colRef = collection(db, 'participant');
	await onSnapshot(colRef, { includeMetadataChanges: true }, (doc) => {
		doUpdate(doc.docs.length);
	});
}
export async function getOneTimeCounting() {
	const { db } = getFirebase();
	const colRef = collection(db, 'participant');
	const snapshot = await getDocs(colRef);

	return snapshot.size;
}

export async function submitData(props) {
	const { onSuccess, body, id } = props;
	const { db } = getFirebase();
	const colRef = doc(db, 'participant', id);

	try {
		const isExit = await checkExist(id);
		if (isExit) {
			alert("Sorry, user cannot 'RESIGN' this petition");
		} else {
			await setDoc(colRef, body).then((res) => {
				onSuccess();
			});
		}
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}

async function checkExist(id) {
	const { db } = getFirebase();
	const docRef = doc(db, 'participant', id);
	const docSnap = await getDoc(docRef);

	return docSnap.exists();
}
