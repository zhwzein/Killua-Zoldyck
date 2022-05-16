/**
   * Create By zahwazein
   * Contact -
   * Follow https://github.com/zhwzein
*/

const fs = require("fs")
const toMs = require("ms")
const cron = require('node-cron')
const time = require("moment-timezone").tz('Asia/Jakarta').format('DD/MM HH:mm:ss')

// STORE USERDATA
const addUser = (userId, name, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = true
        }
    })
    if (position === false) {
        const obj = { id: userId, verified: false, name: name, time: time, limit: 0, balance: 0, premium: false }
        _db.push(obj)
        fs.writeFileSync('./database/group.json', JSON.stringify(_db, null, 4))
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

// LIMIT USERDATA
const isLimit = (userId, isPremium, isOwner, limitCount, _db) => {
	if (isOwner) return false
	if (isPremium) return false
	let found = false
	for (let i of _db) {
		if (i.id === userId) {
			let _user = i.limit
			if (_user >= limitCount) {
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
const limitAdd = (userId, _db) => {
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

// PREMIUM USERDATA
const addPremiumUser = (userId, expired, _db) => {
	let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			found = i
		}
	})
	if (found !== false) {
		_db[found].premium = true
        _db[found].expired = Date.now() + toMs(expired)
		fs.writeFileSync("./database/user.json", JSON.stringify(_db, null, 4))
	}
}
const checkPremiumUser = (userId, _db) => {
	let position = null
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === userId) {
			position = i
		}
	})
	if (position !== null) {
		return _db[position].premium
	}
}
const getPremiumExpired = (userId, _dir) => {
	let position = null
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			position = i
		}
	})
	if (position !== null) {
		return _dir[position].expired
	}
}
const expiredCheck = (killua, m, _db) => {
	setInterval(() => {
		let found = false
		Object.keys(_db).forEach((i) => {
			if (Date.now() >= _db[i].expired) {
				found = i
			}
		})
		if (found !== false) {
			idny = _db[found].id
			_db[found].limit = 0
            _db[found].premium = false
            delete _db[found].expired
			console.log(`Premium expired: ${_db[found].id}`)
			fs.writeFileSync("./database/user.json", JSON.stringify(_db, null, 4))
            idny ? killua.sendText(idny, "Your Premium Role has run out", m) : ""
			idny = false
		}
	}, 1000)
}

// LIMIT RESET
cron.schedule('0 6 * * *', () => {
    let found = false
		Object.keys(_user).forEach((i) => {
			if (_user[i].limit) {
                found = i
            }
		})
		if (found !== false) {
            _user[found].limit = 0
			console.log('Resetting user limit...')
			fs.writeFileSync("./database/user.json", JSON.stringify(_user, null, 4))
		}
}, {
    scheduled: true,
    timezone: 'Asia/Jakarta'
})

module.exports = {
   addUser,
   checkUser,
   isLimit,
   limitAdd,
   addPremiumUser,
   checkPremiumUser,
   getPremiumExpired,
   expiredCheck,
}
