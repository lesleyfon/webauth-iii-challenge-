const db = require('./../data/dbConfig');
const bcrypt = require('bcryptjs');

function getUsers (){
    return db('users')
}

async function addUser(user){
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    const [id] = await db('users').insert(user);
    return findUserById(id)
}

function findUserByUsername(username){
    return db('users').where('username', username).first()
}
function findUserById(id){
    return db('users').where('id', id).select('id', 'username').first();
}
module.exports = {
    getUsers,
    addUser,
    findUserById,
    findUserByUsername
}


