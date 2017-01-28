const React = require('react');
var logs = require('../utilities/logMixin.js')
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');


const sectionStyle = {
  border:"2px solid red",
  minHeight:"200px"
}


const Section = React.createClass({

  name: "Section",
  // mixins: [logs], //dont for get the comma
  propTypes:{
    title:React.PropTypes.string,
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
      <Col xs={12} md={6} lg={4}  style={sectionStyle}>
        {this.props.children}
      </Col>
    )

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = Section
