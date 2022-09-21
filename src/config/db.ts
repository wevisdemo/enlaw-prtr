import { getFirebase } from './firebase';
import {
	collection,
	getDoc,
	getDocs,
	doc,
	onSnapshot,
	writeBatch,
	increment,
	serverTimestamp,
} from 'firebase/firestore';

export function getRealTimeCounting(doUpdate) {
	const { db } = getFirebase();
	const colRef = doc(db, 'counter', 'participant');

	onSnapshot(colRef, { includeMetadataChanges: true }, (doc) => {
		doUpdate(doc.get('total'));
	});
}
export async function getOneTimeCounting() {
	const { db } = getFirebase();
	const colRef = doc(db, 'counter', 'participant');
	const snapshot = await getDoc(colRef);

	return snapshot.get('total');
}

export async function submitData({ body, id, onSuccess }) {
	const { db } = getFirebase();

	try {
		const isExit = await checkExist(id);
		if (isExit) {
			alert('เลขบัตรประจำตัวประชาชนนี้ ใช้ลงชื่อไปแล้ว');
		} else {
			const batch = writeBatch(db);

			batch.set(doc(db, 'participant', id), {
				...body,
				signedAt: serverTimestamp(),
			});
			batch.update(doc(db, 'counter', 'participant'), {
				total: increment(1),
			});

			await batch.commit();

			onSuccess();
		}
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}

export async function getAll() {
	const { db } = getFirebase();
	const colRef = collection(db, 'participant');
	const snapshot = await getDocs(colRef);
	let result = [];
	snapshot.forEach((doc) => {
		result.push(doc.data());
	});

	return result;
}

async function checkExist(id) {
	const { db } = getFirebase();
	const docRef = doc(db, 'participant', id);
	const docSnap = await getDoc(docRef);

	return docSnap.exists();
}
