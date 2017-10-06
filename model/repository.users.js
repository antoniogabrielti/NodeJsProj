
const _ = require('lodash');
var self = this;
self.list;

function UserList(){
    self.list = [];
 }

UserList.prototype.Insert = function(user){
    self.list.push(user);
    return self.list;
}

UserList.prototype.Update = function(altUser){
    var i = _.findIndex(self.list, function(user) { return user.id === altUser.id; });
    self.list[i] = altUser;
    return self.list;
}

UserList.prototype.Delete = function(id){
    _.remove(self.list,['id', id]);
    return self.list;
}

UserList.prototype.GetList = function(){
    return self.list;
}
    module.exports = UserList;