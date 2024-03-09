function print(i){
    window.alert("This is call number "+i);
}

function fun1(callback){
    setTimeout(()=>{
    
        let i = 1 ;
        callback(i); i++ ;
        setTimeout(()=>{
     
      	    callback(i); i++;
      	    setTimeout(()=>{
        
        	    callback(i); i++ ;
        	    setTimeout(()=>{
          
          		    callback(i); i++ ;
          		    setTimeout(()=>{
            
            		    callback(i); i++ ;
            		    // .... and so on
            		    
          		    }, 800)
        	    }, 700)
      	    }, 500)
        }, 300)
    }, 100)
}

// Calling fun1 with print function as parameter
fun1(print);