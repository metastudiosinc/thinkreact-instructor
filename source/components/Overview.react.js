const React = require('react');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');
var logs = require('../utilities/logMixin.js')

const style ={
  color:"grey"
}

const text ="Lucas ipsum dolor sit amet antilles codru-ji biggs bith lannik shaak gunray naberrie barabel bothan. Quelli winter motti mccool rahm bothan wuher lumiya. Ikrit c-3po -lom wessell skywalker dodonna. Lars kubaz lannik san. Coway greeata wessell oola yevetha. Shadda hobbie antilles rancisis sio veila jettster yuzzem watto. Rugor croke gossam bardan yoda qui-gon drall. Chagrian orrin askajian garindan colton secura. C-3po kaleesh skywalker yuzzem carlist. Darth utai vivenda hallotan boba. Dug solo oola quence neti."

const Overview = React.createClass({

  name: "Overview",
  // mixins: [logs], //dont for get the comma
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
      <p style={style}>
        {text}
        {this.props.children}
      </p>
    )

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = Overview
