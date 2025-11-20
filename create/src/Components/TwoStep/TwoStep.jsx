import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TwoStep.css";

export default function TwoStep() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (value) => {
    const cleaned = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
    setCode(cleaned);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code.length !== 6) {
      setError("Please enter the 6-character verification code.");
      return;
    }

    // TODO: replace with real backend check later
    alert("Verification successful (demo). Logging you in...");
    navigate("/dashboard");
  };

  const handleBackToLogin = () => {
    navigate("/create");
  };

  return (
    <div className="two-step-root">
      <div className="two-step-card">
        <h1 className="two-step-title">Two-Step Verification</h1>
        <p className="two-step-text">
          To <strong>finish logging in</strong>, please enter the 6-character
          verification code below.
        </p>

        <form className="two-step-form" onSubmit={handleSubmit}>
          <EditableLineWithChip
            label="Verification Code"
            value={code}
            onChange={handleChange}
            placeholder="Enter 6-character code"
          />

          {error && <div className="two-step-error">{error}</div>}

          <div className="two-step-buttons">
            <button
              type="button"
              className="two-step-btn secondary"
              onClick={handleBackToLogin}
            >
              Back to Login
            </button>
            <button type="submit" className="two-step-btn primary">
              Verify &amp; Log In
            </button>
          </div>
        </form>

        <button
          type="button"
          className="two-step-resend"
          onClick={() => alert("Resend code (demo only).")}
        >
          Didn&apos;t get a code? Resend
        </button>
      </div>
    </div>
  );
}

/** Big text box with lock + check, like Account Settings personal info */
function EditableLineWithChip({ label, value, onChange, placeholder }) {
  const confirmed = !!(value && value.trim().length === 6);

  const handleInput = (e) => {
    const raw = e.currentTarget.textContent || "";
    const cleaned = raw.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
    e.currentTarget.textContent = cleaned;
    onChange(cleaned);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  return (
    <div className="field">
      <label>{label}</label>
      <div className="lc-wrap">
        <div
          className="editable-line editable-line--big"
          contentEditable
          role="textbox"
          aria-label={label}
          data-placeholder={placeholder || ""}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning
        >
          {value}
        </div>
        <span className={`lc ${confirmed ? "confirmed" : ""}`} aria-hidden>
          <LockCheckIcon checked={confirmed} />
        </span>
      </div>
    </div>
  );
}

function LockCheckIcon({ checked }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10V8a5 5 0 0 1 10 0v2" />
      <rect x="5" y="10" width="14" height="10" rx="2" />
      {checked ? <path d="M8 15l3 3 5-5" /> : null}
    </svg>
  );
}
