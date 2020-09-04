import React from 'react';
import PropTypes from "prop-types";

import "./message.scss"


const Message = ({avatar, user, text, data}) => (
    <div className="message">
        <div className="message-avatar">
            <img src={avatar} alt={`${user.fullName} avatar`}/>

        </div>
        <div className="message-content">
            <div className="text_background">
                <p className="message-text">{text}</p>
            </div>
            <span className="data-message">{data}</span>
        </div>

    </div>
);

Message.defaultProps = {
    user: {}
}

Message.prototypes = {
    avatar: PropTypes.string,
    user: PropTypes.string,
    text: PropTypes.string,
    data: PropTypes.object
}

export default Message;