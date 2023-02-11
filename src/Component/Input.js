import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const InputComp = (props) => {
  const {
    type = "text",
    nameInput = "",
    placeholder = "Please Input Here",
    styles = {},
  } = props;

  return (
    <> 
      {/* Test show error */}
      {/* {props.nameInput.anc } */}
      <input
        style={{
          width: 450, 
          fontSize: 12,
          border: "1px solid #ddd",
          borderRadius: 4,
          padding: "5px 12px",
          marginBottom: 10,
          ...styles,
        }}
        type={type}
        name={nameInput}
        placeholder={placeholder}
      />
    </>
  );
};

function ErrorBoundary({ error }) {
  return (
    <div style={{ fontSize: 12, color: "red", border: "1px solid red",  padding: "5px 12px" }}>
      {error.message}
    </div>
  );
}

export default withErrorBoundary(InputComp, {
  FallbackComponent: ErrorBoundary,
});

// Not use Error Boundary
// export default InputComp;

