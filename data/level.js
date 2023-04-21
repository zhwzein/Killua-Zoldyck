/**
   * Create By zahwazein
   * Contact -
   * Follow https://github.com/zhwzein
*/

const fs = require('fs')

const getLevelingId = (userId, _db) => {
    let pos = null
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, xp: 0, level: 0 }
        _db.push(obj)
        fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 4))
        return userId
    } else {
        return _db[pos].id
    }
} 
const getLevelingLevel = (userId, _db) => {
    let pos = null
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, xp: 0, level: 0 }
        _db.push(obj)
        fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 4))
        return 1
    } else {
        return _db[pos].level
    }
}
const getLevelingXp = (userId, _db) => {
    let pos = null
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, xp: 0, level: 0 }
        _db.push(obj)
        fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 4))
        return 0
    } else {
        return _db[pos].xp
    }
}
const addLevelingLevel = (userId, amount, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _db[position].level += amount
        fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 4))
    }
}
const addLevelingXp = (userId, amount, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _db[position].xp += amount
        fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 4))
    }
}
const getUserRank = (userId, _db) => {
    let position = null
    let found = false
    _db.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 0 }
        _db.push(obj)
        fs.writeFileSync('./database/user.json', JSON.stringify(_db, null, 4))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 30000)
}

module.exports = {
    getLevelingId,
    getLevelingLevel,
    getLevelingXp,
    addLevelingLevel,
    addLevelingXp,
    getUserRank,
    isGained,
    addCooldown
}