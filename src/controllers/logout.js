exports.get=(request,response)=>{
  console.log(545);
  
  response.setHeader(
    "Set-Cookie",
    `data=0;httpOnly;Max-Age=0`
  );
return response.send(JSON.stringify({
      err: null,
    message:"See You Later"
    }));
    
}