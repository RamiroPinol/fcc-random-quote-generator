$(document).ready(function(){

	$("button").click(function(){
		var data;
		var quote = "";
		var auth = "";

		//Funcion para obtener el quote. La respuesta es un archivo XML que se guarda en data
		//y obtengo quote y autor leyendo los tags. Como declare la variable como string al
		//principio ya se parsean asi.
		$.ajax({
				type: "GET",
				url: "http://www.stands4.com/services/v2/quotes.php?uid=5119&tokenid=YUUqaR1qGWOB3Nkq&searchtype=RANDOM",
				success: function(data) {
					quote = data.getElementsByTagName('quote')[0].childNodes[0].nodeValue;
					auth = data.getElementsByTagName('author')[0].childNodes[0].nodeValue;
				}
			});

		$("#quotetext, #quoteautor").fadeOut(300, function() {
			document.getElementById("quotetext").innerHTML = "\"" + quote + "\"";
			document.getElementById("quoteautor").innerHTML = auth;
	    	$("#quotetext, #quoteautor").fadeIn(300);
	    });
	});

	window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
 
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
  	};
    return t;
	}(document, "script", "twitter-wjs"));

	function tweetIt() {
	  var phrase = document.getElementById("quotetext");
	  var tweetUrl = 'https://twitter.com/share?text=' +
	   	encodeURIComponent(phrase) +
	    '.' +
	    '&url=' +
	    'https://codepen.io/RamiroP/pen/ZWNpGo';
	    
	  window.open(tweetUrl);
	}
	});