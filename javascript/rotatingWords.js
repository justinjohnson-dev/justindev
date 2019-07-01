var keywords = ["~ Software Engineering Student ~", "~ Problem Solver ~", "~ Computer Fanatic ~", "~ Logical Thinker ~"];
var colors = ["white"];
var count = 1;

setInterval(function(){    
    $("span.keyword").fadeOut(500, function(){        
        $(this).html(keywords[count]).css("color", colors[count]);
        count++;        
        if(count == keywords.length)            
            count = 0;        
        $(this).fadeIn(500);    
    });
}, 2200);                      
