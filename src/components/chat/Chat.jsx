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
          <img src="/hattori.png" alt="" />
          <span>Ninja Hattori</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/kenechi.png" alt="" />
          <span>Kenechi mitsuwa</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/taki.png" alt="" />
          <span>Taki kun</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/hotaro.png" alt="" />
          <span>Hotaro Oreki</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/amara.png" alt="" />
          <span>Amara ninja</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/mitsuwa.png" alt="" />
          <span>Mitsuwa Mimazu</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/zerotwo.png" alt="" />
          <span>Zero Two</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/todoka.png" alt="" />
          <span>Todoka kun</span>
          <p>kio rock and roll.....</p>
        </div>
        <div className="message">
          <img src="/hinita.png" alt="" />
          <span>Hinata san</span>
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
