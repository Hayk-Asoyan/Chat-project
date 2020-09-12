import React from 'react';
import PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import locale from "date-fns/esm/locale/hy";
import classnames from "classnames";
import checked from "./../../assets/img/checked.png"
import nochecked from "./../../assets/img/nochecked.png"

import "./message.scss";


const Message = ({avatar, user, text, date, isMe, isReaded, attachement}) => (
    <div className={classnames("message", {"message--isme": isMe})}>
        <div className="message-content">
            {isMe && isReaded ? (<img className="message-checked" src={checked} alt="Checked"/>): (<img className="message-checked message-checked--no" src={nochecked} alt="No Checked"/>)}

            <div className="message-avatar">
                <img src={avatar} alt={`${user.fullName} avatar`}/>

            </div>
            <div className="message-info">

               <div className="text_background">
                   <p className="message-text">{text}</p>
               </div>
                <div className="message-attachement">
                    {attachement &&
                    attachement.map(item =>(
                        <div className="message-attachement-item">
                            <img src={item.url} alt={item.filename}/>
                        </div>
                    ))
                    }
                </div>
               <span className="data-message">{formatDistanceToNow(date, {addSuffix: true, locale: locale})}</span>


        </div>
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
    date: PropTypes.object,
    attachement: PropTypes.array
}

export default Message;