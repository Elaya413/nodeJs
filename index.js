//const os = require("os")
//console.log("Hello World")
//console.log(os.cpu

// -------------file system------------------

//const fs = require ('fs')
//try{
//    fs.writeFile('sample.txt','i am a new data here fot the second time',(err)=>{
//        if(err)
//        console.log(err)
//        else
//        {
//            fs.readFile('sample.txt','utf-8',(err,data)=>{
//                if(err)
//                console.log(err)
//
//                console.log(data)
//            })
//        }
//    })
//} catch (error){
//    console.log(error)
//}
//
//


//----------------http server----------------------

const http = require ('http')
const fs = require('fs')
const PORT = 8000

const server =  http.createServer((req,res)=>{

      let dateTime = new Date()
     
      fs.writeFileSync(`DateTime/${dateTime}`, dateTime.toString())
      
      let data = fs.readFileSync(`DateTime/${dateTime}`)
      res.writeHead(200,{'Content-Type':'text/html'})
      res.end(data)
  
      
})
server.listen(PORT)















