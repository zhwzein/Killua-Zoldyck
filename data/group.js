/**
   * Create By zahwazein
   * Contact -
   * Follow https://github.com/zhwzein
*/

const fs = require("fs")

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
            welcome: false, 
            antilink: false,
            badword: false,
            antidelete: false,
            detect: false,
            viewOnce: false,
        }
        _group.push(obj)
        fs.writeFileSync('./database/group.json', JSON.stringify(_group, null, 4))
        return false
    }
}

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

module.exports = {
  addGroup,
  addAntidelete,
  delAntidelete,
  cekAntidelete,
  addOffline,
  delOffline,
  cekOffline
}