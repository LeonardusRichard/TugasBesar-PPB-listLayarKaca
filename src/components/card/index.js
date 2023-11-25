import React from "react";
import "./index.css";

export default function Card({ data, onClick }) {
    if (!data || !data.i) {
        return null; // Tidak ada data atau data tidak memiliki properti "i", maka tidak ada yang ditampilkan
      }

    return (
        <div className="card" onClick={onClick}>
            <figure>
                <img src={data.i.imageUrl} alt={data.l} />
            </figure>
            <div className="card-info">
                <h3>{data.l}</h3>
                <p>{data.q}</p>
            </div>
        </div>
    );
}
