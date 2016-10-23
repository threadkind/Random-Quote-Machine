$(document).ready(function() {
    $("#submit").click(function(){
        $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json){
          var quoteJSON = json;

          var randomQuote = quoteJSON.quote;
          var author = quoteJSON.author;
          var tweetText = "https://twitter.com/intent/tweet?text= " + randomQuote + " - " + author;

        $(".quotes").html(randomQuote + "<br>" + "<br>" + author);

          $(".twitter-share-button").remove();
          $.getScript('http://platform.twitter.com/widgets.js');
          $('<a class="twitter-share-button"href="' + tweetText + '">Tweet</a>').insertAfter("#submit");

}); // getJSON end


    }); // click end...

}); // doc ready end...
