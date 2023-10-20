import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ImageSearch.css";
import Banner from "../Assets/imagexelsBanner.jpg";

const ImageSearch = ({ setImages }) => {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        implementSearch();
    }, []);
    //async and await
    async function implementSearch() {
        try {
            //api call
            const response = await axios.get("https://api.pexels.com/v1/search", {
                params: {
                    query: searchTerm || "random",
                    per_page: 50,
                },
                headers: {
                    Authorization:
                        "oIPXhxiG6Wc1wGywhJyZqCxpV6G7OUFgN8TtCNLH6L9kYSza5Su63qLb",
                },
            });
            setImages(response.data.photos);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            //banner
            <img src={Banner} alt="" className="img" />
            //taking input for search
            <input
                type="text"
                placeholder="Enter something..."
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            //search button
            <button onClick={implementSearch}>Search</button>
        </div>
    );
};

export default ImageSearch;
