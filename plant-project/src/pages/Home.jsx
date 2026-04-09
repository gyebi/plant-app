import PlantCard from "../components/PlantCard"
import { useState } from "react";
import "../css/Home.css";



function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const plants = [
        {id: 1,
        name: "Monstera Deliciosa",
        image: "https://example.com/monstera.jpg",
        description: "A popular houseplant with large, glossy leaves and unique holes.",
        care: "Thrives in bright, indirect light and requires moderate watering."
        },
        {id: 2,
        name: "Fiddle Leaf Fig",
        image: "https://example.com/fiddleleaf.jpg",
        description: "A trendy indoor plant with large, violin-shaped leaves.",
        care: "Prefers bright, indirect light and needs consistent watering."
        },
        {id: 3,
        name: "Snake Plant",
        image: "https://example.com/snakeplant.jpg",
        description: "A hardy plant with upright, sword-like leaves that can tolerate low light.",
        care: "Thrives in low to bright light and requires infrequent watering."
        }
    ]

    const handleSearch = (e) =>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
        <div className = "home">
            <form onSubmit= {handleSearch} className= "search-form">
                <input 
                text ="text"
                placeholder = "Enter Plant Name here"
                className = "search-input"
                value = {searchQuery}
                onChange = {(e)=> setSearchQuery(e.target.value)}
                ></input>
                <button type = "submit" className = "search-button">Search </button>
            </form>

            <div className = "plant-grid">
                {plants.map(
                    
                    (plant)=> (
                        plant.name.toLowerCase().startsWith(searchQuery) && (
                            <PlantCard plant={plant} key={plant.id} />
                )
                ))}          

                </div>


        </div>



    )

}

export default Home;
