import "../css/PlantCard.css";

function PlantCard({ plant }) {
    const imageUrl = plant?.image_url || "https://placehold.co/400x300?text=No+Image";
    const displayName = plant?.common_name || plant?.scientific_name || "Unknown plant";
    const scientificName = plant?.scientific_name || "Scientific name unavailable";
    const familyName = plant?.family_common_name || plant?.family || "Family unavailable";

    function onFavoriteClick(){

        alert("Plant added to favorites!")
    }


  return (
    <div className="plant-card">
      <div className="plant-image">
        <img src={imageUrl} alt={displayName} />

        <h3>{scientificName}</h3>
        <h2>{displayName}</h2>
        <p>{familyName}</p>

        <div className="plant-actions">
          <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
