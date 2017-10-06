
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
        res.json(repository.Delete(Number(req.params.id)));
    });

    app.put('/user/:id', function(req,res){
        var user = new User(Number(req.body.id),req.body.nome,req.body.dataNasc,req.body.empresa,req.body.email,req.body.cadastrado);
        res.json(repository.Update(user));
    }); 
}

module.exports = userRouter;