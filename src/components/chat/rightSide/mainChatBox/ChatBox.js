import React from "react";
import User from "../../../../assets/images/user.png";
import User5 from "../../../../assets/images/user-5.png";

const ChatBox = () => {
  return (
    <div className="chat-box">
      <div className="chat-flex">
        <div className="chat-left">
          <img src={User} alt="" className="chat-box-user" />
          <div className="chat-box-msg">
            <p className="chat-box-text">
              Hey Antoine, I am looking for the best treatment for my mother
              better health. Could you please help me to find it out? 🤔
            </p>
            <p className="chat-msg-time">17:41</p>
          </div>
        </div>
        <div className="chat-right">
          <div className="chat-box-msg-right">
            <p className="chat-box-text-right">
              Yes, i can make your mother health better. pleases tell about your
              mother disease 🙂
            </p>
          </div>
          <div>
            <img src={User5} alt="" className="chat-box-user-right" />
          </div>
        </div>
        <div className="chat-left">
          <img src={User} alt="" className="chat-box-user" />
          <div className="chat-box-msg">
            <p className="chat-box-text">
              Hey Antoine, I am looking for the best treatment for my mother
              better health. Could you please help me to find it out? 🤔
            </p>
            <p className="chat-msg-time">17:41</p>
          </div>
        </div>
        <div className="chat-right">
          <div className="chat-box-msg-right">
            <p className="chat-box-text-right">
              Yes, i can make your mother health better. pleases tell about your
              mother disease 🙂
            </p>
          </div>
          <div>
            <img src={User5} alt="" className="chat-box-user-right" />
          </div>
        </div>
        <div className="chat-left">
          <img src={User} alt="" className="chat-box-user" />
          <div className="chat-box-msg">
            <p className="chat-box-text">
              Hey Antoine, I am looking for the best treatment for my mother
              better health. Could you please help me to find it out? 🤔
            </p>
            <p className="chat-msg-time">17:41</p>
          </div>
        </div>
        <div className="chat-right">
          <div className="chat-box-msg-right">
            <p className="chat-box-text-right">
              Yes, i can make your mother health better. pleases tell about your
              mother disease 🙂
            </p>
          </div>
          <div>
            <img src={User5} alt="" className="chat-box-user-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
