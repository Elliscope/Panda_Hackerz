var main=function()
{


    $('.NewSession').hide();   
    $('#class1Data').hide();

    $('#session').click( function()
    {
     
        $('.NewSession').show();
        
    });

   $('.cancel_button').click(function()
   {
       $('.NewSession').hide();
               
   });   

    $('#class1').click(function()
   {
       $('#class1Data').toggle();
               
   });   



     
     
   

    
};


$(document).ready(main);