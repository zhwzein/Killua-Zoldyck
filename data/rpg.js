/**
   * Create By zahwazein
   * Contact -
   * Follow https://github.com/zhwzein
*/

const fs = require("fs")

const addRpg = (userId, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = true
        }
    })
    if (position === false) {
        const obj = { 
			id: userId, 
			fish: 0,
			batu: 0,
            permata: 0,
            emas: 0,
            berlian: 0
		}
        _db.push(obj)
        fs.writeFileSync('./database/rpg.json', JSON.stringify(_db, null, 4))
        return false
    }
}

const addIkan = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].fish += amount
        fs.writeFileSync('./database/rpg.json', JSON.stringify(_db, null, 4))
    }
}
const getIkan = (userId, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].fish
    } else {
		return 0
	}
}
const jualIkan = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].fish -= amount
        fs.writeFileSync('./database/rpg.json', JSON.stringify(_db, null, 4))
    }
}

const addBatu = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
        position = i
        }
    })
    if (position !== false) {
        _db[position].batu += amount
        fs.writeFileSync('./database/rpg.json', JSON.stringify(_db, null, 4))
    }
}
const getBatu = (userId, _db) => {
    let position = false 
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].batu
	} else {
		return 0
	}
}
const jualBatu = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].batu -= amount
        fs.writeFileSync('./database/rpg.json', JSON.stringify(_db, null, 4))
    }
}

const addPermata = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
        position = i
        }
    })
    if (position !== false) {
        _db[position].permata += amount
        fs.writeFileSync('./database/rpg.json', JSON.stringify(_db, null, 4))
    }
}

const getPermata = (userId, _db) => {
    let position = false 
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].permata
	} else {
		return 0
	}
}
const jualPermata = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].permata -= amount
        fs.writeFileSync('./database/rpg.json', JSON.stringify(_db, null, 4))
    }
}

const addEmas = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
        position = i
        }
    })
    if (position !== false) {
        _db[position].emas += amount
        fs.writeFileSync('./database/rpg.json', JSON.stringify(_db, null, 4))
    }
}
const getEmas = (userId, _db) => {
    let position = false 
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].emas
	} else {
		return 0
	}
}
const jualEmas = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].emas -= amount
        fs.writeFileSync('./database/rpg.json', JSON.stringify(_db, null, 4))
    }
}

//END OF MANCING FUNCTION
module.exports = {
    addRpg,
    addIkan,
    getIkan,
    jualIkan,
    addBatu,
    getBatu,
    jualBatu,
    addPermata,
    getPermata,
    jualPermata,
    addEmas,
    getEmas,
    jualEmas
}