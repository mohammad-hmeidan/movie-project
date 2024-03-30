import React from "react";

function CircularProgress({ progressValue }) {
  let color1 = "",
    color2 = "";
  if (progressValue >= 70) {
    color1 = "#21d07a";
    color2 = "#1f4229";
  } else if (progressValue >= 40) {
    color1 = "#d2d531";
    color2 = "#323414";
  } else {
    color1 = "#db2360";
    color2 = "#571435";
  }
  return (
    <div
      className="circular-progress"
      style={{
        background: `conic-gradient(${color1} ${
          (360 * progressValue) / 100
        }deg, ${color2} 0deg)`,
      }}
    >
      <span className="progress-value">{progressValue}%</span>
    </div>
  );
}

export default CircularProgress;
