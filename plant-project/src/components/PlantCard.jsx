import "../css/PlantCard.css";

function PlantCard({ plant }) {

    function onFavoriteClick(){

        alert("Plant added to favorites!")
    }


  return (
    <div className="plant-card">
      <div className="plant-image">
        <img src={plant.image} alt={plant.name} />

        <h3>{plant.plantId}</h3>
        <h2>{plant.name}</h2>
        <p>{plant.description}</p>

        <div className="plant-actions">
          <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
