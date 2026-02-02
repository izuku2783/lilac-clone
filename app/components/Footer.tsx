"use client";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-grid">
        {/* Column 1 */}
        <div>
          <h3 className="footer-title">Dr. Maya Reynolds, PsyD</h3>
          <p className="footer-text">
            Trauma-informed therapy for adults navigating anxiety, burnout, and
            perfectionism.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="footer-heading">Location</h3>
          <p className="footer-text">Santa Monica, California</p>
          <p className="footer-text">In-person + Telehealth (CA)</p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text underline">maya@example.com</p>
          <p className="footer-text underline">(310) 555-0199</p>
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
      </p>
    </footer>
  );
}
