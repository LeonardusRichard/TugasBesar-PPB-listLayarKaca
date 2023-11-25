import { Fragment } from "react";
import React from "react";
import ProfileCard from "../components/ProfileCard";
import members from "../components/data/ProfileData"; // Import data dari data.js
import "./Profile.css";

export default function Profile() {
    return (
        <>
        <p id="movies">Profile</p>
        {members.map((member, index) => (
            <Fragment key={member.id}>
            <ProfileCard
                nama={member.nama}
                describe={member.describe}
                genre={member.genre}
                imageUrl={member.imageUrl}
                onClick={() => alert(member.nama)}
            />
            {members.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
        </>
    );
}