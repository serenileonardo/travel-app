
import TravelCard from "./TravelCard.jsx";

export default function Main() {

    const travels = [
        {
            title: "Viaggio a Parigi",
            destination: "Parigi",
            participants: 4,
            period: "10 Marzo - 15 Marzo 2026"
        },
        {
            title: "Vacanza a New York",
            destination: "New York",
            participants: 2,
            period: "5 Aprile - 12 Aprile 2026"
        },
        {
            title: "Weekend a Londra",
            destination: "Londra",
            participants: 3,
            period: "20 Maggio - 23 Maggio 2026"
        }
    ];

    return (
        <main className="container my-4">

            {travels.map((travel, index) => (
                <TravelCard key={index} {...travel} />
            ))}

            <div className="text-center mt-4">
                <button className="btn btn-primary rounded-circle fs-4 px-3">
                    +
                </button>
            </div>

        </main>
    );
}