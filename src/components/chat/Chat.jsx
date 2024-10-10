import React from "react";
import "./chat.scss";
import { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h2>Messages</h2>
        <div className="message">
          <img src="/user.jpg" alt="" />
          <span>Kio San</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/user.jpg" alt="" />
          <span>Kio San</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/user.jpg" alt="" />
          <span>Kio San</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/user.jpg" alt="" />
          <span>Kio San</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/user.jpg" alt="" />
          <span>Kio San</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/user.jpg" alt="" />
          <span>Kio San</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/user.jpg" alt="" />
          <span>Kio San</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/user.jpg" alt="" />
          <span>Kio San</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/user.jpg" alt="" />
          <span>Kio San</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/user.jpg" alt="" />
          <span>Kio San</span>
          <p>kio rock and roll.....</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="/user.jpg" alt="" />
              Kio San
            </div>
            <div className="close" onClick={()=>setChat(null)}>X</div>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Hi kio, i'm interested on the room at samakhushi</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Hi kio, i'm interested on the room at samakhushi</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Hi kio, i'm interested on the room at samakhushi</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Hi kio, i'm interested on the room at samakhushi</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
