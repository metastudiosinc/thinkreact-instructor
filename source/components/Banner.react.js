const React = require('react');
var logs = require('../utilities/logMixin.js')
const assign = require('object-assign');

const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');


const bannerStyle={
  backgroundColor:"#333"
}

const imageStyle={
  width:'100%',
  height:"auto"
}

const Banner = React.createClass({
  name: "Banner",
  mixins: [logs], //dont for get the comma
  propTypes:{
    title:React.PropTypes.string,
    children:React.PropTypes.node
    },
  //-----default API--------
  //getDefaultProps: function(){},
  // getInitialState: function() {},
  //componentWillMount: function(){},
  //componentDidMount: function(){},
  //componentWillReceiveProps: function(){},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render: function() {
    // var finalStyle = assign({}, bannerStyle)

    return (
      <Row  style={bannerStyle}>
        <img style={imageStyle} src="./img/banner.jpg" />
      </Row>
    )

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = Banner
