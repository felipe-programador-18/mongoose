const mongoose = require('mongoose')
mongoose.Promise= global.Promise



mongoose.
connect('mongodb://localhost/mongo-mercadorias', {useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() =>{
 const ProdutoSchema = mongoose.Schema({
     nome:String,
     senha:String || Number,
     email:String
 })
 const Produto = mongoose.model('produto', ProdutoSchema)
 //const test = new Produto ({nome:'felipe', senha:43434, email:'machadofelipe2016@outlook.com'})
 // test.save(() => console.log('salvo here test'))
  
  Produto.remove({
      _id:'622e34f9e258ecdb09cfcfd3'
  }, (err, res) => console.log('ok'))
})
