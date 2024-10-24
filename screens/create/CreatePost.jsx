import React from "react";
import "./CreatePost.css";
import { useState,useEffect } from "react";
import Appsubmitbutton from "../../components/appsubmitbutton/Appsubmitbutton";

export default function Createpost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title) {
      setValidationError("Title should not be empty");
      return
    }
    if (!content) {
      setValidationError("Content should not be empty");
      return
    }
    setValidationError("");
    console.log({ title, body: content, userId:1});
  };

  
  return (
    <div className="outercontainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <h6>Title:</h6>
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            <h6>Content:</h6>
          </label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {validationError && (
          <div className="alert alert-danger" role="alert">
            {validationError}
          </div>
        )}

        <div className="float-end">
          <Appsubmitbutton title="Create"/>
        </div>
      </form>
    </div>
  );
}
