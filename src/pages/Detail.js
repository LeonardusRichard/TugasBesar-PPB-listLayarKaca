import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Detail.css";

function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://imdb8.p.rapidapi.com/title/get-details?tconst=${id}`, 
          {
            headers: {
              "x-rapidapi-host": "imdb8.p.rapidapi.com",
              "x-rapidapi-key": "fa37ed6693msh773598a8bc13016p1dcdbdjsn5b7ece526693",
            },
          }
        );
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Data tidak ditemukan</p>;
  }

  return (
    <div className="MovieDetail">
      <h2>{data.title}</h2>
      <p>Tahun Penerbit: {data.year}</p>
      <p>Durasi Running Time : {data.runningTimeInMinutes} minutes</p>
      <p>Deskripsi: {data.titleType}</p>
      <img src={data.image.url} alt={data.title} />
      <Link to="/">Kembali ke Pencarian</Link>
    </div>
  );
}

export default MovieDetail;