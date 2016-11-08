

$(function(){
	$("#getQuote").click(function(e) {
		e.preventDefault();
	//	proc(data);
		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(b) {
			console.log(b[0].content);
			var data = b[0]
			$("#quote").html(data.content);
			$("#author").text("- " + data.title);
			var a = JSON.stringify(b);
			console.log(b);
			alert(a);
	
    });
  });
});