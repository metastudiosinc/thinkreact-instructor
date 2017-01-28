const React = require('react');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
var logs = require('../utilities/logMixin.js')



var bulletsArray = ["One for the money", "two for the show", "three to get ready", "four cat go"]


const Bullets = React.createClass({

  name: "Bullets",
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

    var bull;

    if (bulletsArray.length > 0) {
      bull = bulletsArray.map(function(val, idx) {

        return(
          <Row key={idx}>
            <Col xs={12}> ~ {val}</Col>
          </Row>
        )

      })
    }






    return (
      <div>
        {bull}
    </div>
    )

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = Bullets
