/* Component 	: Button
 * Created on	: 22/8/2019 10:06:02 PM
 * Created by	: VaibhavShringarpure
 */

/* Import Statement Below */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

/* Type Checking for PropTypes */
const propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string,
};

/* Declare default Props value for all non-required props */
const defaultProps = {
  // name: 'Vaibhav Shringarpure',
};

/* Stateful Component Class Below */
class Button extends Component {
  //Constructor Method below
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Define your Methods Here

  //Render Method returning JSX
  render() {
    return <div />;
  }
}

//Typechecking with PropTypes
Button.propTypes = propTypes; // from Line 11
Button.defaultProps = defaultProps; // from Line 17

export default Button;
