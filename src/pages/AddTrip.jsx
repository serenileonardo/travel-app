
import { useState } from "react";

export default function AddTrip() {

    const [formData, setFormData] = useState({
        nome: "",
        cognome: "",
        email: "",
        viaggio: ""
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Dati inviati:", formData);
    }

    return (
        <div className="container my-5">

            <h2 className="mb-4">Aggiungi Nuovo Viaggio</h2>

            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">

                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Cognome</label>
                    <input
                        type="text"
                        className="form-control"
                        name="cognome"
                        value={formData.cognome}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Viaggio</label>
                    <input
                        type="text"
                        className="form-control"
                        name="viaggio"
                        value={formData.viaggio}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Salva
                </button>

            </form>

        </div>
    );
}