const React = require('react');
var logs = require('../utilities/logMixin.js')
const Section = React.createClass({

  name: "Section",
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
      <div>SECTION {this.props.children}</div>
    );

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = Section
