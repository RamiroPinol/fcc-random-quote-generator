$(document).ready(function(){
	var data;
	var url = "http://www.stands4.com/services/v2/quotes.php?uid=5119&tokenid=YUUqaR1qGWOB3Nkq&searchtype=RANDOM";
	var quote = "";
	var auth = "";

	// Generate Tweet button
	//twtButton();

	$("#newQuote").click(function(){

		$.get( url, function( data ) {
			// Get quote and author reading content of XML tags. Because vars were
			// declared as strings, parsing is done automatically.
			quote = $(data).find('quote').html();
			auth = $(data).find('author').html();

			$("#quotetext, #quoteautor").fadeOut(300, function() {
				$("#quotetext").text("\"" + quote + "\"");
				$("#quoteautor").text("— " + auth);
		    $("#quotetext, #quoteautor").fadeIn(300);

		  twtButton();
	    });
		});
	});

	function twtButton() {

		// Remove current button to avoid multiple ones
		if ($("#tweetDiv") != null) {
			$("#tweetDiv").html("");
		}

		// Create a new tweet element
		var $tweet = $("<a>", 
		{class: "twitter-share-button",
		href: "https://twitter.com/share",
		"data-size": "large",
		"data-url": "https://www.testurl.com",
		"data-hashtags": "quotes",
		"data-text": '"' + quote + '"' + ' ' + "—" + auth});
		$($tweet).html("Tweet");

		// Append button to div
		$("#tweetDiv").append($tweet);

		twttr.widgets.load();
	}
});