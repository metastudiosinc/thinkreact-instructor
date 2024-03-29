const React = require('react');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
import textBlock from "./textBlock.react"
import tweetsActions from "../actions/tweets.actions.js"
import TweetsStore from "../stores/Tweets.store.js"


var logs = require('../utilities/logMixin.js')
const Tweets = React.createClass({

  name: "Tweets",
  mixins: [logs], //dont for get the comma
  propTypes:{
    children:React.PropTypes.node
  },

  //-----default API--------
  //getDefaultProps: function(){},
  //getInitialState: function() {},
  //componentWillMount: function(){},
  componentDidMount: function(){

      //TODO add tweet change listener

      tweetsActions.getNewTweets()

  },
  //componentWillReceiveProps: function(){},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render: function() {
    return (
      <div>
        {textBlock("today", "some text", "@jwesleye")}

      </div>
    )

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = Tweets
