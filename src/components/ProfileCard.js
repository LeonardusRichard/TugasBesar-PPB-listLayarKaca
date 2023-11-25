import "./ProfileCard.css";

export default function ProfileCard(props) {
	return (
    	<div className="ProfCard" onClick={props.onClick}>
        	<img src={props.imageUrl} alt="" className="photo" />
        	<div className="description1">
            	<div>
            	<p id="nama">{props.nama}</p>
            	<p id="describe">{props.describe}</p>
            	</div>
        	</div>
    	</div>
	);
}

