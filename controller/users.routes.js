
const userRouter = function(app){
    const _ = require('lodash');
    var User = require('../model/user');
    var UserList = require('../model/repository.users');

    var repository = new UserList();
   

    app.get('/user',function (req,res){
        res.json(repository.GetList());
    });

    app.post('/user',function(req,res){
        var user = new User(Number(req.body.id),req.body.nome,req.body.dataNasc,req.body.empresa,req.body.email,req.body.cadastrado);
        res.json(repository.Insert(user));
    });

    app.delete('/user/:id',function(req,res){
        _.remove(users,['id', Number(req.params.id)]);
        res.json(users);
    });

    app.put('/user/:id', function(req,res){
        var i = _.findIndex(users, function(user) { return user.id === Number(req.params.id); });
        users[i] = req.body;
        res.json(users);
    }); 
}

module.exports = userRouter;