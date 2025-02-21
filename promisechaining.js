function fetchdata(){
    return new Promise((resolve)=>{setTimeout(()=>resolve("fetched data"),2000);})
}
fetchdata()
.then((data)=>{console.log(data)
    return "processing data"
})
.then((msg)=>{
    console.log(msg)
    return new Promise((resolve,reject)=>setTimeout(()=>reject("error"),1000))
})
.catch((print)=>{
    console.log(print)
})