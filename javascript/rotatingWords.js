var keywords = ["~ Software Engineering Student ~", "~ Pursuing Bachelors in Computer Science ~", "~ Computer Fanatic ~", "~ Ambitious Developer ~", "~ The Master Commander ~"];
var colours = ["red", "teal", "green", "orange", "navy"];
var count = 1;

setInterval(function(){    
    $("span.keyword").fadeOut(400, function(){        
        $(this).html(keywords[count]).css("color", colours[count]);
        count++;        
        if(count == keywords.length)            
            count = 0;        
        $(this).fadeIn(400);    
    });
}, 2000);