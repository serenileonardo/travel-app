import viaggi from "../data/dbTravel"

export default function TripDetail() {
    return (

            viaggio.partecipanti.map((p) => (
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
            ))
        

    );
}


