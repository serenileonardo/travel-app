
import { useState } from "react";

export default function TravelCard({ title, destination, participants, period }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card mb-3">
      <div
        className="card-body d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        <h5 className="mb-0">{title}</h5>
        <span>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <div className="card-body border-top">
          <p><strong>Destinazione:</strong> {destination}</p>
          <p><strong>Partecipanti:</strong> {participants}</p>
          <p><strong>Periodo:</strong> {period}</p>
        </div>
      )}
    </div>
  );
}