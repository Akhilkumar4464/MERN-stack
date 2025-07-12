function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;

      if (success) {
        resolve("data: data1, status: 200");
      } else {
        reject({ error: "error1", status: 500 });
      }
    }, 3000);
  });
}

 fetchData()
 .then((data)=>{
    console.log(data)
    return `akhil sharma ji aap aage bdh rhe hai`
 }).then((value)=>{
    console.log( value ) 
 }

 )
 .catch((error)=>console.error(error))
 


// datapromise
//   .then(data => {
//     console.log("Success:", data);
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });
