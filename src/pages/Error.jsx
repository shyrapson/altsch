import React from "react";

const Error = ({ error,wahala }) => {
  return (
    <div>
      {wahala && (
        <div className="errorpage">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Error;
