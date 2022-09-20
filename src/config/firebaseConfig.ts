const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export default firebaseConfig;
