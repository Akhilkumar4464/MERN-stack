 function fetchUserData () {
     return new Promise(( resolve, reject) => {
        setTimeout(()=>{
   resolve({ name : 'nitesh-portfolio', url :"https://my-react-portfolio-ten-phi.vercel.app/ " });
        }, 3000)

     } );
 }

   async function  Getuserdata(){
     try {
         console.log('loading data ...');
         const data = await  fetchUserData();
         console.log(data);
     } catch (error) {
        console.log({message:"  error in  getuserdata"})
     }
   }
 Getuserdata();
