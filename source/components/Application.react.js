var React = require('react');
var logs = require('../utilities/logMixin.js');
const Section = require('./Section.react.js');
const Banner = require('./Banner.react.js');
const Header = require('./Header.react.js');
const Overview = require('./Overview.react.js');
const Bullets = require('./Bullets.react.js');
const Photos = require('./Photos.react.js');



const Application = React.createClass({

    name: "Application",
    mixins: [logs], //dont for get the comma

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
            <div className="container-fluid">
              <Banner title="Hey do you know " bgc="#123456"> Tony </Banner>
              <Section>
                <Header>Overview</Header>
                <Overview />
              </Section>
              <Section>
                <Header>Bullets</Header>
                <Bullets />
              </Section>
              <Section>
                <Header>Photos</Header>
                <Photos />
              </Section>
              <Section><Header>Tweets</Header></Section>
            </div>
        );
    },
    //componentDidUpdate: function(){},
    //componentWillUnmount: function(){}

});

module.exports = Application;
