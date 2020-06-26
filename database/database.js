
//Function Insert Database

function insertUsersDatabase(){
    const Datastore = require('nedb-promises')
    var db = {}
    db.users = new Datastore('users.db')
    

}