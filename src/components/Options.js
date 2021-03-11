import React from "react";
import Option from "./Option";

export default function Options(props) {
  return (
    <div>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      {props.options.map((option) => {
        return (
          <>
            <Option
              handleDeleteOption={props.handleDeleteOption}
              key={option}
              optionText={option}
            />
          </>
        );
      })}
    </div>
  );
}
