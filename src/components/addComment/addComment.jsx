import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./addComment.css";

const AddComment = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  //Code for auto scroll to newest message//

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //--------------------------------------//

  const data = useRef();
  return (
    <>
      <section className="comment-wrapper">
        {comments.map((text) => (
          <section className="comment-bobble">
            <p className="comment" ref={data}>
              {text}
            </p>
            <p className="timestamp"></p>
          </section>
        ))}
      </section>
      <section className="add-comment-wrapper">
        <input
          value={comment}
          onChange={onChangeHandler}
          className="add-comment"
          type="text"
          placeholder="Legg igjen en julehilsen"
        />
        <button onClick={onClickHandler} className="send-btn">
          Send inn
        </button>
      </section>
    </>
  );
};

export default AddComment;
