function numeroSimetrico(num) {
    num = ""+num;
    array = num.split("");
    
    veracidad=false;
    
      for (let index = 0; index < Math.floor(array.length/2); index++) {
        
       
        if(index===(Math.floor(array.length/2)-1)){
          if(array[index]===array[array.length-1-index]){
            
            veracidad=true;
          }
        }else if(array[index]!=array[array.length-1-index]){
            
            console.log(array[index]+" "+array[array.length-1-index] )
            break;
            
        }
        
      }
      return veracidad
  
    }
    console.log(numeroSimetrico(111181111))
