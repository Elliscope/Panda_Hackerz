var main=function()
{


    $('.NewSession').hide();   
    $('#class1Data').hide();
    $('#class2Data').hide();
    $('#class3Data').hide();
    $('#class4Data').hide();

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
       $('#class1Data').show();
       $('#class2Data').hide();
       $('#class3Data').hide();
       $('#class4Data').hide();
               
   });   

        $('#class2').click(function()
   {
       $('#class1Data').hide();
       $('#class2Data').show();
       $('#class3Data').hide();
        $('#class4Data').hide();
               
               
   });   



    $('#class3').click(function()
   {
       $('#class1Data').hide();
       $('#class2Data').hide();
       $('#class3Data').show();
        $('#class4Data').hide();
               
               
   });   



    $('#class4').click(function()
   {
       $('#class1Data').hide();
       $('#class2Data').hide();
       $('#class3Data').hide();
        $('#class4Data').show();
               
               
   });   





     
     
   

    
};


$(document).ready(main);