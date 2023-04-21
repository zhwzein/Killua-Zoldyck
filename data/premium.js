/**
   * Create By zahwazein
   * Contact -
   * Follow https://github.com/zhwzein
*/

const fs = require("fs")
const toMs = require("ms")

const addPremiumUser = (userId, expired, _db) => {
   const obj = { id: userId, expired: Date.now() + toMs(expired) }
   _db.push(obj)
   fs.writeFileSync("./database/premium.json", JSON.stringify(_db))
}

const getPremiumPosition = (userId, _db) => {
   let position = null
   Object.keys(_db).forEach((i) => {
      if (_db[i].id === userId) {
         position = i
      }
   })
   if (position !== null) {
      return position
   }
}

const getPremiumExpired = (userId, _db) => {
   let position = null
   Object.keys(_db).forEach((i) => {
      if (_db[i].id === userId) {
         position = i
      }
   })
   if (position !== null) {
      return _db[position].expired
   }
}

const checkPremiumUser = (userId, isOwner, _db) => {
   if (isOwner) return true
   let status = false
   Object.keys(_db).forEach((i) => {
      if (_db[i].id === userId) {
         status = true
      }
   })
   return status
}

const expiredCheck = (killua, m, _db) => {
    setInterval(() => {
       let position = null
       Object.keys(_db).forEach((i) => {
          if (Date.now() >= _db[i].expired) {
             position = i
          }
       })
       if (position !== null) {
        idny = _db[position].id
        console.log(`Premium user expired: ${_db[position].id}`)
        _db.splice(position, 1)
        fs.writeFileSync("./database/premium.json", JSON.stringify(_db))
        idny ? killua.sendText(idny, "Your Premium Role has run out", m) : ""
        idny = false
       }
    }, 10000)
 }

module.exports = {
   addPremiumUser,
   getPremiumExpired,
   getPremiumPosition,
   expiredCheck,
   checkPremiumUser,
}