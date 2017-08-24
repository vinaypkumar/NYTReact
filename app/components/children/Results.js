var React = require('react');
var Main = require('../Main.js');
var Saved = require('./children/Saved.js');
var axios = require('axios');

var Results = React.createClass({

	render: function(){
		return(
			
				<div className="panel-body">
						{this.state.results}
				</div>			

		)
	}

});

module.exports = Results;