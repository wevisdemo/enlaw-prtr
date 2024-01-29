import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export function getFirebase() {
	if (getApps().length == 0) {
		initializeApp(
			JSON.parse((import.meta.env.VITE_FIREBASE_CONFIG as string) ?? '{}')
		);
	}

	return { db: getFirestore() };
}
