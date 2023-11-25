import React, { Fragment } from "react";
import AboutCard from "../components/AboutData";
import members from "../components/data/AboutData"; // Import data dari data.js
import "./About.css";

export default function About() {
    return (
        <>
            <p id="movies">About</p>
            {members.map((member, index) => (
                <Fragment key={index}>
                    <AboutCard describe={member.describe} />
                </Fragment>
            ))}
        </>
    );
}
