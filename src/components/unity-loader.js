import React from "react"
import PropTypes from "prop-types"

import "./unity-loader.scss"

// Full-screen overlay shown while the Unity WebGL build downloads.
// `progress` is Unity's 0..1 progression; the overlay fades out once `done`.
const UnityLoader = ({ progress, done }) => {
  const percent = Math.round(Math.min(Math.max(progress, 0), 1) * 100)

  return (
    <div
      className={`unity-loader${done ? " unity-loader--done" : ""}`}
      aria-hidden={done}
    >
      <div className="unity-loader__panel">
        <p className="unity-loader__label">
          {percent < 100 ? "Loading" : "Starting"}
        </p>
        <div
          className="unity-loader__track"
          role="progressbar"
          aria-label="Loading game"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        >
          <div
            className="unity-loader__fill"
            style={{ transform: `scaleX(${percent / 100})` }}
          />
        </div>
        <p className="unity-loader__percent">{percent}%</p>
      </div>
    </div>
  )
}

UnityLoader.propTypes = {
  progress: PropTypes.number.isRequired,
  done: PropTypes.bool,
}

UnityLoader.defaultProps = {
  done: false,
}

export default UnityLoader
