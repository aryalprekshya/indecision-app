import React from "react";

export default function Option(props) {
  return (
    <div>
      <ol>
        <li>{props.optionText}</li>
      </ol>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
}
