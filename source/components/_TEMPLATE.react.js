const React = require('react');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');


var logs = require('../utilities/logMixin.js')
const <NAME> = React.createClass({

  name: "<NAME>",
  mixins: [logs], //dont for get the comma
  propTypes:{
    children:React.PropTypes.node
  },

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
      <div>TEMPLATE</div>
    )

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = <NAME>
