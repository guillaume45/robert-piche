import React from 'react';
import './Contact.css';

function Contact() {
  return (
  <div className="Contact"> 
    <img className="avatar" src="https://img.gentside.com/article/1024/record/l-homme-le-plus-moche-du-monde-s-appelle-tang-shuquan_d0b42e93e960a5b64c876f1c5df47d632173ed2b.jpg"/>
    <div className="status">
      <h3 className="name">Robert Piche</h3>
      <span className="status-online"></span> <h4 className="status-text">online</h4>
    </div>
  </div>
);
}
export default Contact;