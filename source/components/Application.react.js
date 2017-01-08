var React = require('react');
var logs = require('../utilities/logMixin.js')

const Application = React.createClass({

  name: "Application",
  mixins: [logs], //dont for get the comma

  //-----default API--------
  //getDefaultProps: function(){},
  //getInitialState: function() {},
  //componentWillMount: function(){},
  //componentDidMount: function(){},
  //componentWillReceiveProps: function(){},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render() {
    return (
      <div>React Application Component</div>
    );
  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Application;
