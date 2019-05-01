var keywords = ["~ Software Engineering Student ~", "~ Pursuing Bachelors in Computer Science ~", "~ Computer Fanatic ~", "~ Ambitious Developer ~"];
var colors = ["red", "teal", "orange", "navy"];
var count = 1;

setInterval(function(){    
    $("span.keyword").fadeOut(600, function(){        
        $(this).html(keywords[count]).css("color", colors[count]);
        count++;        
        if(count == keywords.length)            
            count = 0;        
        $(this).fadeIn(600);    
    });
}, 2000);