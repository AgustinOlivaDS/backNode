var knex = require('knex')({  
    client: 'mssql',  
     connection: {  
      user: 'sa',  
      password: 'Luxsys2010',  
      server: 'localhost',  
      port: 1433,
      database: 'Lux_Feroz'  
     }  
   });
   
   knex.select("*").from("usr_petneg")  
   .then(function (usr_petneg){  
    usr_petneg.forEach((negoci)=>{ //use of Arrow Function  
       console.log({...negoci});  
     });  
   }).catch(function(err) {  
   // All the error can be checked in this piece of code  
     console.log(err);  
   }).finally(function() {  
     // To close the connection pool  
     knex.destroy();  
   });     