var axios = require('axios');
var api="45f343e304fc461dbec4bfa44c57c26a";


var helpers={

	runQuery: function(topic, start, end){

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + api + "&q=" + topic + "&begin_date=" + start + "0101&end_date=" + end + "0101";
		var articles=[];
		return axios.get(queryURL).then(function(response){

			var results=response.data.response.docs;
			for(var i=0; i<5; i+){
				if(results[i].headline.main && results[i].web_url && results[i].pub_date){
					articles.push(results[i]);
				}
			}
			return articles;
		});
	}

}


module.exports = helpers;