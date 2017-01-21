const React = require('react');
var logs = require('../utilities/logMixin.js')
const assign = require('object-assign');

const style={
  width:'100%',
  height:'400px',
  color:"#fff",
  backgroundColor:"grey"
}

const colorArray = ["white", "black", "red", "green"]





const Banner = React.createClass({


  name: "Banner",
  mixins: [logs], //dont for get the comma
  propTypes:{
    title:React.PropTypes.string,
    children:React.PropTypes.node
    },

  handleClick:function() {
    this.setState({
      bgc:colorArray[this.state.index],
      index:(this.state.index + 1) % colorArray.length
    })

  },

  //-----default API--------
  //getDefaultProps: function(){},
  getInitialState: function() {
    return({
      bgc:this.props.bgc,
      index:0
    })
  },
  //componentWillMount: function(){},
  //componentDidMount: function(){},
  //componentWillReceiveProps: function(){},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render: function() {


    var finalStyle = assign({}, style, {backgroundColor:this.state.bgc})

    return (
      <div style={finalStyle} onClick={this.handleClick}>
          <h2
            style={{fontSize:"2em"}}
          >
            {this.props.title}
          </h2>
          <div className="personName" > {this.props.children} </div>
      </div>
    )

  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}


});

module.exports = Banner
