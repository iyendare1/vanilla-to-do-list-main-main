import { getToDoData } from './lib/firebase/api'

async function appInit() {
	const appData = await getToDoData()
	// this should log out your data until you get firebase realtime database
	// configured What is the root of the database called todos?
	console.log(appData)
}

appInit()
