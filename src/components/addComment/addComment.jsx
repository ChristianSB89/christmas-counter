import React from "react";
import "./addComment.css";

const AddComment = () => {
  return (
    <section className="add-comment-wrapper">
      <input
        className="add-comment"
        type="text"
        placeholder="Legg igjen en julehilsen"
      />
      <button className="send-btn">Send inn</button>
    </section>
  );
};

export default AddComment;
