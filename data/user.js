/**
   * Create By zahwazein
   * Contact -
   * Follow https://github.com/zhwzein
*/

const fs = require("fs")
const cron = require('node-cron')
const config = JSON.parse(fs.readFileSync('./config.json'))
const time = require("moment-timezone").tz(config.timezone).format('DD/MM HH:mm:ss')

// STORE USERDATA
const addUser = (userId, name, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = true
        }
    })
    if (position === false) {
        const obj = { 
			id: userId, 
			verified: false, 
			name: name, 
			time: time, 
			limit: 0,
			limitgame: 0,
			balance: 0, 
			premium: false,
			xp: 0,
			level: 0
		}
        _db.push(obj)
        fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 4))
        return false
    }
}
const checkUser = (userId, _db) => {
   let status = false
   Object.keys(_db).forEach((i) => {
      if (_db[i].id === userId) {
         status = true
      }
   })
   return status
}

const verify = (userId, _db) => {
	let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			found = i
		}
	})
	if (found !== false) {
		_db[found].verified = true
		fs.writeFileSync("./database/user.json", JSON.stringify(_db, null, 4))
	}
}

// LIMIT USERDATA
const isLimit = (userId, isPremium, isOwner, limitCount, _db) => {
	if (isPremium || isOwner) return false
	let found = false
	for (let i of _db) {
		if (i.id === userId) {
		   if (i.limit >= limitCount) {
			  found = true
			  return true
		   } else {
			  found = true
			  return false
		   }
		}
	}
	if (found === false) {
		const obj = { id: userId, limit: 0 }
		_db.push(obj)
		fs.writeFileSync("./database/user.json", JSON.stringify(_db, null, 4))
		return false
	}
}
const limitAdd = (userId, isPremium, isOwner, _db) => {
	if (isPremium || isOwner) return false
	let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			found = i
		}
	})
	if (found !== false) {
		_db[found].limit += 1
		fs.writeFileSync("./database/user.json", JSON.stringify(_db, null, 4))
	}
}
const getLimit = (userId, _db) => {
	let pos = null
	let found = false
	Object.keys(_db).forEach((i) => {
	   if (_db[i].id === userId) {
		  pos = i
		  found = true
	   }
	})
	if (found === false && pos === null) {
	   const obj = { id: userId, limit: 0 }
	   _db.push(obj)
	   fs.writeFileSync("./database/user.json", JSON.stringify(_db, null, 4))
	   return 0
	} else {
	   return _db[pos].limit
	}
}
const jualLimit = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].limit -= amount
        fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 4))
    }
}

// LIMITGAME USERDATA
const isLimitGame = (userId, limitgameCount, _db) => {
	let found = false
	for (let i of _db) {
		if (i.id === userId) {
		   if (i.limitgame >= limitgameCount) {
			  found = true
			  return true
		   } else {
			  found = true
			  return false
		   }
		}
	}
	if (found === false) {
		const obj = { id: userId, limitgame: 0 }
		_db.push(obj)
		fs.writeFileSync("./database/user.json", JSON.stringify(_db, null, 4))
		return false
	}
}
const limitGameAdd = (userId, _db) => {
	let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			found = i
		}
	})
	if (found !== false) {
		_db[found].limitgame += 1
		fs.writeFileSync("./database/user.json", JSON.stringify(_db, null, 4))
	}
}
const getLimitGame = (userId, _db) => {
	let pos = null
	let found = false
	Object.keys(_db).forEach((i) => {
	   if (_db[i].id === userId) {
		  pos = i
		  found = true
	   }
	})
	if (found === false && pos === null) {
	   const obj = { id: userId, limitgame: 0 }
	   _db.push(obj)
	   fs.writeFileSync("./database/user.json", JSON.stringify(_db, null, 4))
	   return 0
	} else {
	   return _db[pos].limitgame
	}
}
const jualLimitGame = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].limitgame -= amount
        fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 4))
    }
}

// BALANCE USERDATA
const addBalance = (userId, amount, _db) => {
	let position = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			position = i
		}
	})
	if (position !== false) {
		_db[position].balance += amount
		fs.writeFileSync("./database/user.json", JSON.stringify(_db, null, 4))
	}
}
const getBalance = (userId, _db) => {
	let position = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			position = i
		}
	})
	if (position !== false) {
		return _db[position].balance
	} else {
		return 0
	}
}
const jualBalance = (userId, amount, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance -= amount
        fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 4))
    }
}

cron.schedule('0 0 * * *', () => {
	Object.keys(_user).forEach((i) => {
		_user[i].limit = 0
		_user[i].limitgame = 0
		fs.writeFileSync("./database/user.json", JSON.stringify(_user, null, 4))
	})
	console.log('Resetting user limit...')
}, {
	scheduled: true,
	timezone: config.timezone
})

module.exports = {
	addUser,
	checkUser,
	verify,
	isLimit,
	limitAdd,
	getLimit,
	jualLimit,
	isLimitGame,
	limitGameAdd,
	getLimitGame,
	jualLimitGame,
	addBalance,
	getBalance,
	jualBalance
}