const React = require('react');
var logs = require('../utilities/logMixin.js')
const Section = React.createClass({

  name: "Section",
  mixins: [logs], //dont for get the comma
  propTypes:{
    children:React.propTypes.node
  }

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
      <div>Section</div>
    )

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = Section
