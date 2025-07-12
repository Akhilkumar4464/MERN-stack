function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data fetched");
        }, 3000);
    });
}
function commentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post cooment Data fetched");
        }, 4000);
    });
}

 async function  GetBlogData  (){
    try {
        const post  = await fetchPostData();
        const comment  = await commentData();
        console.log(post, comment);
         
        
    } catch (error) {
         console.log("  Error fetching blog data");
        
    }
 }
  GetBlogData();
