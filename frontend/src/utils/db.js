const dbName = 'cabinetDB'; // Maybe not official database name but good for now
let db; // using let since this will be a mutable variable

// request variable 'cabinetDB
let openRequest = indexedDB.open(dbName, 1);

openRequest.onupgradeneeded = (event) => {
    let db = event.target.result;

    const userStore = db.createObjectStore("users", { keyPath: "userID" });
    userStore.createIndex("username", "username", { unique: true });
    userStore.createIndex("email", "email", {unique: true });

    const folderStore = db.createObjectStor("folders", { keyPath: "folderID" });
    
}