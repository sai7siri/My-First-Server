const express = require("express");

const app = express();

 let port = 7010;

 app.listen(port, () =>{
   console.log(`the app is listening ${port}`);
   console.log("this is server");
 });


//  app.use((req,res) =>{
//    console.log("sending response");
//    res.send("<h1>this is sai </h1>");
//  });

//  app.get("/avenger", (req,res) =>{

//    res.send("this is Captain America!")
//  });

//  app.get("/hulk",(re,res) =>{
//    res.send("this is best avenger 'HULK' ever ");
//  });

//  app.get("*",(req,res) =>{
//    res.send(" <h1> U enetred incorrect path</h1>")
//  })

// app.get("/:username/:id", (req,res) =>{
//    let {username, id} = req.params;
//    // console.log("sending response");
//    let code = `<h1>welocme to the @ ${username}</h1>`
//    res.send(code);
// })

app.get("/search",(req,res) =>{
   let {q} = req.query;

   if( !q ){
      res.send("<h1>nothing searched</h1>");
   }
  
      res.send(`<h1>search results for: ${q}</h1>`);
   
   
});