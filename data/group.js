/**
   * Create By zahwazein
   * Contact -
   * Follow https://github.com/zhwzein
*/

const fs = require("fs")

// STORE GROUPDATA
const addGroup = (id) => {
    let position = false
    Object.keys(_group).forEach((i) => {
        if (_group[i].from === id) {
            position = true
        }
    })
    if (position === false) {
        const obj = { 
            from: id, 
            offline: false, 
            antilink: false,
            badword: false,
            antidelete: false,
            detect: false,
            viewOnce: false,
            welcome: {
                status: false,
                add: "Welcome To My Group",
                remove: "Leave From My Group"
            },
        }
        _group.push(obj)
        fs.writeFileSync('./database/group.json', JSON.stringify(_group, null, 4))
        return false
    }
}

// ANTIDELETE
const addAntidelete = (userId, _db) => {
	let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].from === userId) {
			found = i
		}
	})
	if (found !== false) {
		_db[found].antidelete = true
		fs.writeFileSync("./database/group.json", JSON.stringify(_db, null, 4))
	}
}
const delAntidelete = (userId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].from === userId) {
            found = i
        }
    })
    if (found !== false) {
        _db[found].antidelete = false
        fs.writeFileSync("./database/group.json", JSON.stringify(_db, null, 4))
    }
}
const cekAntidelete = (userId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].from === userId) {
            found = i
    }
    })
    if (found !== false) {
        return _db[found].antidelete
    }
}

// OFFLINE
const addOffline = (userId, _db) => {
	let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].from === userId) {
			found = i
		}
	})
	if (found !== false) {
		_db[found].offline = true
		fs.writeFileSync("./database/group.json", JSON.stringify(_db, null, 4))
	}
}
const delOffline = (userId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].from === userId) {
            found = i
        }
    })
    if (found !== false) {
        _db[found].offline = false
        fs.writeFileSync("./database/group.json", JSON.stringify(_db, null, 4))
    }
}
const cekOffline = (userId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].from === userId) {
            found = i
    }
    })
    if (found !== false) {
        return _db[found].offline
    }
}

// ANTILINK
const addAntilink = (userId, _db) => {
	let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].from === userId) {
			found = i
		}
	})
	if (found !== false) {
		_db[found].antilink = true
		fs.writeFileSync("./database/group.json", JSON.stringify(_db, null, 4))
	}
}
const delAntilink = (userId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].from === userId) {
            found = i
        }
    })
    if (found !== false) {
        _db[found].antilink = false
        fs.writeFileSync("./database/group.json", JSON.stringify(_db, null, 4))
    }
}
const cekAntilink = (userId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].from === userId) {
            found = i
    }
    })
    if (found !== false) {
        return _db[found].antilink
    }
}

// WELCOME
const addWelcome = (userId, _db) => {
	let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].from === userId) {
			found = i
		}
	})
	if (found !== false) {
		_db[found].welcome.status = true
		fs.writeFileSync("./database/group.json", JSON.stringify(_db, null, 4))
	}
}
const delWelcome = (userId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].from === userId) {
            found = i
        }
    })
    if (found !== false) {
        _db[found].welcome.status = false
        fs.writeFileSync("./database/group.json", JSON.stringify(_db, null, 4))
    }
}
const cekWelcome = (userId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].from === userId) {
            found = i
    }
    })
    if (found !== false) {
        return _db[found].welcome.status
    }
}
const welcomeSet = (userId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].from === userId) {
            found = i
    }
    })
    if (found !== false) {
        return _db[found].welcome
    }
}

module.exports = {
    addGroup,
    addAntidelete,
    delAntidelete,
    cekAntidelete,
    addOffline,
    delOffline,
    cekOffline,
    addAntilink,
    delAntilink,
    cekAntilink,
    addWelcome,
    delWelcome,
    cekWelcome,
    welcomeSet
}