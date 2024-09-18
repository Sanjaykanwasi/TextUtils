import React, { useState } from "react";

export default function TextForm(props) {
  //Function to handle UpperCase
  const handleUpperCase = () => {
    // console.log("Btn CLick" + text);
    const newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Changed to Upper Case", "success");
  };

  //Function to handle UpperCase
  const handleLowerCase = () => {
    // console.log("Btn CLick" + text);
    const newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Changed to Lower Case", "success");
  };

  //Function to handle Clear Text
  const handleClearCase = () => {
    const newtext = "";
    setText(newtext);
    props.showAlert("All Clear", "success");
  };

  //Function to handle Copy Text
  const handleCopyCase = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };

  // Function to remove Extra Space
  const handleExtraSpaceCase = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Spaces", "success");
  };

  //Function to handle On Changing Text
  const handleOnChange = (event) => {
    // console.log("On chnage");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2A2E45",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleLowerCase}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleClearCase}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          onClick={handleCopyCase}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-4 my-1"
          onClick={handleExtraSpaceCase}
        >
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Text Summary
        </h3>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words & {text.length} characters
        </p>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          It will take aroud{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes for you to read it.
        </p>
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Text Preview
        </h2>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text}
        </p>
      </div>
    </>
  );
}
