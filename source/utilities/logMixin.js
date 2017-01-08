module.exports = {
  log: function(method, args) {
    console.log(this.name + '::' + method, args);
    //This would be an ideal place to put a call to an
    // external logs database as appropriate.
  },

  componentWillUpdate:  function() {
    this.log('componentWillUpdate',  arguments);
  },
  componentDidUpdate:   function() {
    this.log('componentDidUpdate',   arguments);
  },
  componentWillMount:   function() {
    this.log('componentWillMount',   arguments);
  },
  componentDidMount:    function() {
    this.log('componentDidMount',    arguments);
  },
  componentWillUnmount: function() {
    this.log('componentWillUnmount', arguments);
  },
};
