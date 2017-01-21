const React = require('react');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
var logs = require('../utilities/logMixin.js')
const headerStyle ={
  color:"blue"
}

const Header = React.createClass({

  name: "Header",
  mixins: [logs], //dont for get the comma
  propTypes:{
    children:React.PropTypes.node
  },

  render: function() {
    return (
      <h2 style={headerStyle}> {this.props.children} </h2>
    )
  },


});

module.exports = Header
