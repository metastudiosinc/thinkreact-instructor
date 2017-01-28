const React = require('react');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');


var photoNames= ['./img/1.jpeg','./img/2.jpeg','./img/3.jpg','./img/4.jpg']
var imgStyle ={
  height:"auto",
  width:"100%",
  margin:"10px"
}

var logs = require('../utilities/logMixin.js')
const Photos = React.createClass({

  name: "Photos",
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

    var photoStuff = photoNames.map(function(val, idx) {
      return(
        <Col xs={6}><img src={val} style={imgStyle} /></Col>
      )
    });

    return (
      <Row>{photoStuff}</Row>
    )

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = Photos
