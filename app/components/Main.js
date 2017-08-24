var React = require('react');

var Results = require('./children/Results.js');
var Saved = require('./children/Saved.js');

var axios = require('axios');

var Main = React.createClass({

	//Need additional functions

render: function(){

		return(
					
		  <div class="container">

		    
		    <div class="jumbotron" style="background-color: #20315A ; color: white;">
		      <h1 class="text-center"><strong> New York Times Article Scrubber</strong></h1>
		    </div>

		    
		    <div class="row">
		      <div class="col-sm-12">
		        <br>
		        
		        <div class="panel panel-primary">
		          <div class="panel-heading">
		            <h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
		          </div>
		          <div class="panel-body">

		            
		            <form role="form">

		              
		              <div class="form-group">
		                <label for="search">Search Term:</label>
		                <input type="text" class="form-control" id="search-term">
		              </div>
		              
		              <div class="form-group">
		                <label for="start-year">Start Year:</label>
		                <input type="text" class="form-control" id="start-year">
		              </div>

		              
		              <div class="form-group">
		                <label for="end-year">End Year:</label>
		                <input type="text" class="form-control" id="end-year">
		              </div>

		              
		              <button type="submit" class="btn btn-default" id="run-search"><i class="fa fa-search"></i> Search</button>            

		            </form>
		          </div>
		        </div>
		      </div>
		    </div>

		    
		    <div class="row">
		      <div class="col-sm-12">
		        <br>        
		        <div class="panel panel-primary">          
		          <div class="panel-heading">
		            <h3 class="panel-title"><strong><i class="fa fa-table"></i>   Results</strong></h3>
		          </div>          
		          <div class="panel-body" id="app">

		          	<Results results={this.state.results} />

		          </div>
		        </div>
		      </div>

		      <div class="row">
		      <div class="col-sm-12">
		        <br>        
		        <div class="panel panel-primary">          
		          <div class="panel-heading">
		            <h3 class="panel-title"><strong><i class="fa fa-table"></i>   Saved Articles</strong></h3>
		          </div>          
		          <div class="panel-body" id="saved">

		          	<Saved savedArticles={this.state.savedArticles}  />

		          </div>
		        </div>
		      </div>

		    </div>
		);

		
	}
});

module.exports = Main;