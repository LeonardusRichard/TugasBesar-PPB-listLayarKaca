import { Fragment } from "react";
import CardBig from "../components/CardBig"; import CardSmall from "../components/CardSmall"; import "./HomeMovie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(255, 0, 0)";
    const STAR_SIZE = -1;

    const poster = [
        {
            title: "Oppenheimer", id: 1,
            rate: 4,
            genre: "Tahun 2023, rating 9.6",
            img: "https://static.hd-trailers.net/images/-159759-poster-xlarge.jpg",
        },
       
    ];
    const data = [
        {
            title: "Avenger: Infinity War", id: 1,
            rate: 4,
            genre: "Tahun 2020, rating 9.5", img:
                "https://w0.peakpx.com/wallpaper/264/876/HD-wallpaper-marvel-cinematic-universe-marvel-super-heroes-the-avengers-avengers-infinity-war-thumbnail.jpg",
        },
        {
            title: "Antman Wasp: Quantumania", id: 2,
            rate: 4,
            genre: "Tahun 2022, rating 9.3", img:
                "https://thesmartlocal.my/wp-content/uploads/2023/01/new-movies-in-2023-ant-man-and-the-wasp-quantumania.jpg",
        },
        {
            title: "Bloody Daddy", id: 3,
            rate: 4,
            genre: "Tahun 2023, rating 9.1", img:
                "https://images1.zeebiz.com/images/ZB-EN/900x1600/2023/6/1/1685605902226_BloodyDaddyIMDb.jpg",
        },
       ];

    return (
        <>
            <p id="movies">Movie paling Populer</p>
            <div className="containerTop1">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                        />
                        {data.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba1">
                <div className="column1">
                <p id="movies">Movie Lainnya</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR}
                            onClick={() => alert("item id = " + item.id)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
            </div>
        </>
    );
}
