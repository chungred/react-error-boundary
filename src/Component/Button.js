import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const ButtonComp = (props) => {
  const { name = "button", styles = {}} = props;
  return (
    <>
      <button
        style={{
          width: 400,
          fontSize: 14,
          border: "1px solid #eee",
          borderRadius: 4,
          padding: "5px 12px",
          backgroundColor: "#007BFF",
          color: "#fff",
          ...styles,
        }}
      >
        {name}
      </button>
    </>
  );
};

function ErrorBoundary({ error }) {
  return (
    <div style={{ fontSize: 12, color: "red", border: "1px solid red" }}>
      {error.message}
    </div>
  );
}

export default withErrorBoundary(ButtonComp, {
  FallbackComponent: ErrorBoundary,
});
