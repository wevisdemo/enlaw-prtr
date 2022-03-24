import { getFirebase } from './firebase';
import { collection, getDoc, getDocs, doc, setDoc } from 'firebase/firestore';

export async function getData() {
	const { db } = getFirebase();
	const colRef = collection(db, 'participant');
	const snapshot = await getDocs(colRef);

	return snapshot.docs.map((i) => {
		const data = i.data();

		return snapshot.docs;
	});
}

// '2000000000002'
export async function submitData(props) {
	console.log('props', props);
	const { cb, body, id } = props;
	const { db } = getFirebase();
	const colRef = doc(db, 'participant', id);

	try {
		const isExit = await checkExit(id);
		if (isExit) {
			alert('THIS Citizen ID is already exist');
		} else {
			// await setDoc(colRef, body).then((res) => {
			//     console.log('res', res)
			//     cb()
			// })
		}
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}

async function checkExit(id) {
	console.log('FINDING ', id);
	const { db } = getFirebase();
	const docRef = doc(db, 'participant', id);
	const docSnap = await getDoc(docRef);

	return docSnap.exists();
}
