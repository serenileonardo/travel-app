
export default function Header() {
    return (
        <header className="bg-primary text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h3 m-0">Travel</h1>
                <img
                    src="https://boolean.careers/images/common/logo.png"
                    alt="Boolean Logo"
                    style={{ height: "40px" }}
                />
            </div>
        </header>
    );
}