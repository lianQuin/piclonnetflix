
const API = "https://api.themoviedb.org/3"  


export const get = async(path)=>{

return fetch (API+path,{
    headers  :{
Authorization : "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNlODg4NzcxN2IyYWJhYTRmNWM5NTgwNDNiMzY3NiIsInN1YiI6IjY2MjcwOWYzNjNlNmZiMDE2NWZjNzg5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYuaztZwhvAsVNL_QtnwWXpLW0KglDHs2kSVtBpQytA",
"Content-type":"application/json;charset=utf-8"
    }
}).then((results)=>results.json())
}



/* API Read Access Token
https://www.themoviedb.org/settings/api */