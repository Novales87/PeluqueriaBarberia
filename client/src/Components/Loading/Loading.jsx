import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div>
      <div className="loader">
        <div className="scanner">
          <span>Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
