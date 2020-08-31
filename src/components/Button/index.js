import React from 'react';
import PropTypes from "prop-types";
import {Button as BaseButton} from "antd";
import classNames from "classnames"
import "./button.scss"


const Button = (props) => (
    <BaseButton {...props} className={classNames("button", props.className, {"button--large": props.size==="large"})} />
);

Button.prototypes = {
    className: PropTypes.string
}

export default Button;