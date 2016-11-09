

$(function(){
	$("#getQuote").click(function(e) {
		e.preventDefault();
		$('#tweetScript').remove();
		//get quote, comes in an array
		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(quoteData) {
			//get first element in the array concerning quote and quote data
			var data = quoteData[0];
			//post the quote
			$("#quote").html(data.content);
			//post the author
			$("#author").text("- " + data.title);
			//Save the quote to quote variable
			const quote = $("#quote").text();
			//delete tweetButton
			$("#tweetButton").empty();
			//recall tweet button
			tweetButtonRefresh(quote);
    	});
    	
  	});
  	//function to refresh tweet button
	function tweetButtonRefresh(quote) {
		twttr.widgets.createShareButton( "", document.getElementById("tweetButton"), {
		text: quote,
		size: "large"
		});
	}
	//call tweet refresh button for initial display
	tweetButtonRefresh("Not a quote ;)");
});

//"https://twitter.com/share?url=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&via=twitterdev&related=twitterapi%2Ctwitter&hashtags=example%2Cdemo&text=custom%20share%20text"