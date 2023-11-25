import { AiFillStar } from "react-icons/ai"; import "./CardSmall.css";

export default function CardSmall({ title, genre, img, size, color, onClick }) {
    return (
        <div className="card1" onClick={onClick}>
            <img src={img} alt="" className="photo1" />
            <div className="description1">
                <div>
                    <p id="title1">{title}</p>
                    <p id="genre1">{genre}</p>
                </div>
                <div>
                    <AiFillStar color={color} size={size} />
                    <AiFillStar color={color} size={size} />
                    <AiFillStar color={color} size={size} />
                    <AiFillStar color={color} size={size} />
                    <AiFillStar color={color} size={size} />
                </div>
            </div>
        </div>
    );
}
