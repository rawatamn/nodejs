const fs= require('fs')
function readjsonfile(moviedata,callback){
    fs.readFile(moviedata,'utf8',(err,data)=>{
        if(err){return(callback,null)
            
        }
    })
}