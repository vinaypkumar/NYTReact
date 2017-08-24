var React = require('react');
var Main = require('../Main.js');
var axios = require('axios');

var Saved = React.createClass({

	//Need additional functions

render: function(){

		return(
			
				<div className="panel-body">
					{this.state.saved}
				</div>			

		);
	}
});