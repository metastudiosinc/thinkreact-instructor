
var AppDispatcher = require('../dispatcher/AppDispatcher');
var tweetConstants = require('../constants/tweet.constants.js');


var ActionTypes = tweetConstants.ActionTypes;

var tweetActions = {

  getNewTweets: function() {
    console.log("action getNewTweets");

    // AppDispatcher.dispatch({
    //   type: ActionTypes.<ACTION_NAME>,
    //   data: data
    // })
  }



};

module.exports = tweetActions;
