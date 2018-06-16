// //Greeter.js
// var config = require('./config.json');
//
//
// module.exports = function (){
//     var great = document.createElement('div');
//     great.textContent = "Hi there and greetings";
//     return great;
// }


import React, {Component} from 'react';
import config from './config.json';

class Greeter extends Component{
    render() {
        return (
            <div>
            {config.greetText}
    </div>
    );
    }
};

export default Greeter;

