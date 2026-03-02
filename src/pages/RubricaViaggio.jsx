import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import  viaggi  from "../data/dbTravel";

export default function RubricaViaggio() {
    const { id } = useParams();
    const viaggio = viaggi.find((v) => v.id === parseInt(id));
    const [search, setSearch] = useState("");
    const [openParticipantId, setOpenParticipantId] = useState(null);

    if (!viaggio) return <p>Viaggio non trovato</p>;

    const filtered = viaggio?.partecipanti?.filter((p) =>
        `${p.nome} ${p.cognome}`
            .toLowerCase()
            .includes(search.toLowerCase())
    ) || [];

    return (
        <div style={{ maxWidth: 800, margin: "40px auto", fontFamily: "Arial" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#1e88e5" }}>
                ← Torna alla lista viaggi
            </Link>

            <h1 style={{ textAlign: "center", marginBottom: 20 }}>
                Partecipanti - {viaggio.localita}
            </h1>

            <input
                type="text"
                placeholder="Cerca partecipante..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    width: "100%",
                    padding: 10,
                    marginBottom: 20,
                    borderRadius: 6,
                    border: "1px solid #ccc",
                }}
            />
            {filtered.map((p) => (
                <div
                    key={p.id}
                    style={{
                        background: "white",
                        marginBottom: 10,
                        borderRadius: 8,
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                    }}
                >
                    <div
                        onClick={() =>
                            setOpenParticipantId(openParticipantId === p.id ? null : p.id)
                        }
                        style={{
                            padding: 12,
                            cursor: "pointer",
                            fontWeight: "bold",
                            background: "#f0f0f0",
                        }}
                    >
                        {p.nome} {p.cognome}
                    </div>
                    {openParticipantId === p.id && (
                        <div style={{ padding: 12, background: "#fafafa" }}>
                            <p>
                                <strong>Email:</strong> {p.email}
                            </p>
                            <p>
                                <strong>Telefono:</strong> {p.telefono}
                            </p>
                        </div>
                    )}
                </div>
            ))}
            {filtered.length === 0 && <p>Nessun partecipante trovato.</p>}
        </div>
    );
}



