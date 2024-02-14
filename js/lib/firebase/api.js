import { ref, get } from 'firebase/database'
import { db } from './config/firebase/firebaseInit'

async function getToDoData() {
	const dbRef = ref(db, '/todos')
	console.log(dbRef)
	const dataSnapshot = await get(dbRef)
	console.log(dataSnapshot)
	console.log(await dataSnapshot.val())
}

export { getToDoData }
