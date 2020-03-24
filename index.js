$(function(){
    var input = document.getElementById("country");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        
            event.preventDefault();
           var country = $(this).val();
        
            $.ajax({

                url :"https://covid-193.p.rapidapi.com/statistics",
                data:{"country": country},
                headers:{
                    'x-rapidapi-host' : 'covid-193.p.rapidapi.com',
                    'x-rapidapi-key' : 'e76zfvCJ6SmshGqnVdBmGG3eEY30p1xvU8YjsnuLvWUuwyVEF9'
                },
            
                error:function(){
                    $("#result").text('Enter a valid country');
                    return;  
                },
                success:function(res){
               
     
                    if(res.results==0)
                    {
                    $("#result").text('Enter a valid country');
                return;    
                }
                    
            
                   
                    var data = res.response;
                  
                    var cases = data[0].cases;
                    var confirmed = cases.total
                  

                    $("#result").text(confirmed);
                   
                    
            
            
                }
            
            
            
               })
          }
    });

  
})