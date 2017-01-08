const React = require('react');
var logs = require('../utilities/logMixin.js')
const Banner = React.createClass({

  name: "Banner",
  mixins: [logs], //dont for get the comma

  //-----default API--------
  //getDefaultProps: function(){},
  //getInitialState: function() {},
  //componentWillMount: function(){},
  //componentDidMount: function(){},
  //componentWillReceiveProps: function(){},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render: function() {
    return (
      <div>BANNER</div>
    );

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = Banner
