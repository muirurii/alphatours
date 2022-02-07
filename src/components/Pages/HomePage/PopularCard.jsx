const PopularCard = ({place})=>{
    return(
        <div>
        <h2>{place.name}</h2>
        <h3>{place.category}</h3>
        <h3>{place.price}</h3>
        <h3>{place.duration}</h3>
    </div>
    );
}

export default PopularCard;