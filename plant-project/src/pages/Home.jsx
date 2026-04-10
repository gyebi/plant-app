import PlantCard from "../components/PlantCard"
import { useState, useEffect } from "react";
import { searchPlants, fetchPlants } from "../../services/api";
import "../css/Home.css";



function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadPopularPlants = async ()=>{
            setLoading(true);
            setError("");

            try {
                const popularPlants = await fetchPlants()
                setPlants(popularPlants) 
            }catch (err){
                console.log(err)
                setError("Failed to retrieve plant list")
            }
            finally {
                setLoading(false)
            }

        }
        loadPopularPlants()
    }, [])

    const handleSearch = async (e) =>{
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            const trimmedQuery = searchQuery.trim();
            const plantResults = trimmedQuery
                ? await searchPlants(trimmedQuery)
                : await fetchPlants();

            setPlants(plantResults);
        } catch (err) {
            console.log(err);
            setError("Failed to search plants");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className = "home">
            <form onSubmit= {handleSearch} className= "search-form">
                <input 
                type ="text"
                placeholder = "Enter Plant Name here"
                className = "search-input"
                value = {searchQuery}
                onChange = {(e)=> setSearchQuery(e.target.value)}
                ></input>
                <button type = "submit" className = "search-button">Search </button>
            </form>

            {loading && <p>Loading plants...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && plants.length === 0 && <p>No plants found.</p>}

            <div className = "plant-grid">
                {plants.map(
                    
                    (plant)=> (
                        plant?.common_name?.toLowerCase().startsWith(searchQuery.trim().toLowerCase()) && (
                            <PlantCard plant={plant} key={plant.id} />
                )
                ))}          

                </div>


        </div>



    )

}

export default Home;
