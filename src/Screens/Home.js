import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousal from "../Components/Carousal";

export default function Home() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Carousal/>
            </div>
            <div className="m-3 d-flex">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}