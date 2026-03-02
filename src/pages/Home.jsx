
import React, { useState } from "react";
import  viaggi  from "../data/dbTravel";

export default function Home() {
    const [openId, setOpenId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div style={{ maxWidth: 900, margin: "40px auto", fontFamily: "Arial" }}>
            <h1 style={{ textAlign: "center", marginBottom: 30 }}>Lista Viaggi</h1>
            {viaggi.map((viaggio) => (
                <div
                    key={viaggio.id}
                    style={{
                        background: "white",
                        marginBottom: 15,
                        borderRadius: 10,
                        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                    }}
                >
                    <div
                        onClick={() => toggleAccordion(viaggio.id)}
                        style={{
                            padding: 18,
                            cursor: "pointer",
                            fontWeight: "bold",
                            fontSize: 18,
                            background: "#1e88e5",
                            color: "white",
                            transition: "0.3s",
                        }}
                    >
                        {viaggio.localita}
                    </div>
                    {openId === viaggio.id && (
                        <div style={{ padding: 20, background: "#fafafa" }}>
                            <p>
                                <strong>Descrizione:</strong> {viaggio.descrizione}
                            </p>
                            <p>
                                <strong>Data Inizio:</strong> {viaggio.dataInizio}
                            </p>
                            <p>
                                <strong>Data Fine:</strong> {viaggio.dataFine}
                            </p>
                            <h3>Partecipanti:</h3>
                            {viaggio.partecipanti.map((p) => (
                                <div
                                    key={p.id}
                                    style={{
                                        background: "white",
                                        padding: 12,
                                        marginBottom: 10,
                                        borderRadius: 6,
                                        borderLeft: "4px solid #1e88e5",
                                    }}
                                >
                                    <p>
                                        <strong>Nome:</strong> {p.nome} {p.cognome}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {p.email}
                                    </p>
                                    <p>
                                        <strong>Telefono:</strong> {p.telefono}
                                    </p>
                                    <p>
                                        <strong>Data di nascita:</strong> {p.dataNascita}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}