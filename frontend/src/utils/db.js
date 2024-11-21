const dbName = 'cabinetDB'; // Maybe not official database name but good for now
let db; // using let since this will be a mutable variable

// request variable 'cabinetDB
let request = indexedDB.open(dbName, 1);

request.onupgradeneeded = (event) => {
    db = event.target.result;

    // User Object Store
    const userStore = db.createObjectStore("users", { keyPath: "userID" });
    userStore.createIndex("username", "username", { unique: true });
    userStore.createIndex("email", "email", {unique: true });

    // Folder Object Store
    const folderStore = db.createObjectStor("folders", { keyPath: "folderID" });
    folderStore.createIndex("userID", "userID");
    folderStore.createIndex("name", "name");
    
}

const search = document.querySelector('.search');
