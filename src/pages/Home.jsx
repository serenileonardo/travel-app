
import { useState } from "react";
import dbTravel from "../data/dbTravel";

export default function Home() {

    const [openIndex, setOpenIndex] = useState(null);

    // Otteniamo solo i viaggi unici
    const viaggi = [...new Set(dbTravel.map(item => item.viaggio))];

    return (
        <div className="container my-4">

            {viaggi.map((viaggio, index) => {

                const partecipanti = dbTravel.filter(
                    item => item.viaggio === viaggio
                );

                return (
                    <div key={index} className="card mb-3">

                        <div
                            className="card-body d-flex justify-content-between align-items-center"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            <h5 className="mb-0">{viaggio}</h5>
                            <span>{openIndex === index ? "▲" : "▼"}</span>
                        </div>

                        {openIndex === index && (
                            <div className="card-body border-top">
                                <p><strong>Numero partecipanti:</strong> {partecipanti.length}</p>

                                {partecipanti.map((p, i) => (
                                    <div key={i} className="mb-2">
                                        {p.nome} {p.cognome}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                );
            })}

            <div className="text-center mt-4">
                <button className="btn btn-primary rounded-circle fs-4 px-3">
                    +
                </button>
            </div>

        </div>
    );
}