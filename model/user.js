
 function User(){
    var self = this;

    self.id = null;
    self.nome = null;
    self.dataNasc = null;
    self.empresa = null;
    self.email = null;
    self.cadastrado = null;
 }

function User(id,nome,dataNasc,empresa,email,cadastrado){
    var self = this; 

    self.id = id;
    self.nome = nome;
    self.dataNasc = dataNasc;
    self.empresa = empresa;
    self.email = email;
    self.cadastrado = cadastrado;
}

    
    module.exports = User;