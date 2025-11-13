import React, { useState } from "react";
import "./AccountSettings.css";
import budgetLogo from "../Assets/budget.png"; 

function AccountSettings() {
  // toggles
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [smsNotifs, setSmsNotifs] = useState(false);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  // changeable text values
  const [legalName, setLegalName] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [mailingAddress, setMailingAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      legalName, preferredName, phone, address,
      accountEmail, mailingAddress,
      emailNotifs, smsNotifs, pushNotifs, twoFactor,
    };
    console.log("Save settings:", payload);
    alert("Settings saved (demo).");
  };

  return (
    <div className="settings">
      <div className="settings-card">
        <header className="settings-header">
          <img src={budgetLogo} alt="Budget logo" className="settings-logo" />
          <h1><mark>Account Settings</mark></h1>
        </header>
        <div className="highlight" />

        <form className="settings-grid" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <section className="panel panel-green">
            <h2 className="panel-title">Personal Information</h2>

            <EditableLineWithChip
              label="Legal Name"
              value={legalName}
              onChange={setLegalName}
              placeholder="First Last"
            />
            <EditableLineWithChip
              label="Preferred Name"
              value={preferredName}
              onChange={setPreferredName}
              placeholder="What should we call you?"
            />
            <EditableLineWithChip
              label="Phone Number"
              value={phone}
              onChange={setPhone}
              placeholder="(555) 555-5555"
            />
            <EditableLineWithChip
              label="Address"
              value={address}
              onChange={setAddress}
              placeholder="Street, City, State, ZIP"
              multiline
            />
          </section>

          {/* Notification Section */}
          <section className="panel panel-green">
            <h2 className="panel-title">Notification Preferences</h2>

            <label className="toggle">
              <input
                type="checkbox"
                checked={emailNotifs}
                onChange={(e) => setEmailNotifs(e.target.checked)}
              />
              <span className="switch" />
              <span className="toggle-text">Email notifications</span>
            </label>

            <label className="toggle">
              <input
                type="checkbox"
                checked={smsNotifs}
                onChange={(e) => setSmsNotifs(e.target.checked)}
              />
              <span className="switch" />
              <span className="toggle-text">SMS notifications</span>
            </label>

            <label className="toggle">
              <input
                type="checkbox"
                checked={pushNotifs}
                onChange={(e) => setPushNotifs(e.target.checked)}
              />
              <span className="switch" />
              <span className="toggle-text">Push notifications</span>
            </label>
          </section>

          {/* Password & Security Section*/}
          <section className="panel panel-green">
            <h2 className="panel-title">Password &amp; Security</h2>

            <EditableLineWithChip
              label="Email Address"
              value={accountEmail}
              onChange={setAccountEmail}
              placeholder="you@example.com"
            />
            <EditableLineWithChip
              label="Mailing Address"
              value={mailingAddress}
              onChange={setMailingAddress}
              placeholder="Street, City, State, ZIP"
              multiline
            />
          </section>

          {/* Privacy Settings Section */}
          <section className="panel panel-green">
            <h2 className="panel-title">Privacy Settings</h2>

            <label className="toggle">
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={(e) => setTwoFactor(e.target.checked)}
              />
              <span className="switch" />
              <span className="toggle-text">Two-Factor Authentication</span>
            </label>
          </section>

          {/* Actions */}
          <div className="settings-actions">
            <button className="btn btn-ghost" type="button" onClick={() => window.history.back()}>
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

/** shows lock check based on content */
function EditableLineWithChip({ label, value, onChange, placeholder, multiline = false }) {
  const confirmed = !!(value && value.trim());

  const handleInput = (e) => onChange(e.currentTarget.textContent || "");
  const handleKeyDown = (e) => {
    if (!multiline && e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  return (
    <div className="field">
      <label>{label}</label>
      <div className="lc-wrap">
        <div
          className={`editable-line ${multiline ? "editable-line--multiline" : ""}`}
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
        <span className={`lc ${multiline ? "multiline" : ""} ${confirmed ? "confirmed" : ""}`} aria-hidden>
          <LockCheckIcon checked={confirmed} />
        </span>
      </div>
    </div>
  );
}

function LockCheckIcon({ checked }) {
  // shows a check when field has content
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 10V8a5 5 0 0 1 10 0v2" />
      <rect x="5" y="10" width="14" height="10" rx="2" />
      {checked ? <path d="M8 15l3 3 5-5" /> : null}
    </svg>
  );
}

export default AccountSettings;
