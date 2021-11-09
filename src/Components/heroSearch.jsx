import React from 'react';

const HeroSearch = () => {

    const search_Dropdeown = () => {
        document.getElementById("search").style.display = "block";
    };



    return (
        <>
            <input className="unsplash-input" type="search" name="" placeholder="Search" onClick={search_Dropdeown} />





            <div id="search" className="search-content">
                <div className="search-types">
                    <p>Recent Searches <span>Clear</span> </p>
                    <button type="button" name="button" className="search-btn">potrait</button>
                    <button type="button" name="button" className="search-btn">arab people</button>
                    <button type="button" name="button" className="search-btn">arab person</button>
                    <button type="button" name="button" className="search-btn">person</button>
                    <button type="button" name="button" className="search-btn">avatar</button>
                </div>
                <div className="search-types">
                    <p>Trending Searches</p>
                    <button type="button" name="button" className="search-btn"><i className="bi bi-graph-up-arrow"></i>
                        pumpkin</button>
                    <button type="button" name="button" className="search-btn"><i className="bi bi-graph-up-arrow"></i>
                        psni</button>
                    <button type="button" name="button" className="search-btn"><i className="bi bi-graph-up-arrow"></i>
                        snow</button>
                    <button type="button" name="button" className="search-btn"><i className="bi bi-graph-up-arrow"></i>
                        spin</button>
                    <button type="button" name="button" className="search-btn"><i className="bi bi-graph-up-arrow"></i>
                        instagram</button>
                </div>
                <div className="search-types">
                    <p>Trending Topics</p>
                    <div className="flex">
                        <div className="flex search-topics">
                            <div className="img-btn">
                            </div>
                            <a href="#">Nature</a>
                        </div>
                        <div className="flex search-topics">
                            <div className="img-btn">
                            </div>
                            <a href="#">People</a>
                        </div>
                        <div className="flex search-topics">
                            <div className="img-btn">
                            </div>
                            <a href="#">current events</a>
                        </div>
                        <div className="flex search-topics">
                            <div className="img-btn">
                            </div>
                            <a href="#">fashion</a>
                        </div>
                        <div className="flex search-topics">
                            <div className="img-btn">
                            </div>
                            <a href="#">experimental</a>
                        </div>
                    </div>
                </div>
                <div className="search-types">
                    <p>Trending Collections</p>
                    <button type="button" name="button" className="search-btn">Olympics</button>
                    <button type="button" name="button" className="search-btn">Tokyo</button>
                    <button type="button" name="button" className="search-btn">wings</button>
                    <button type="button" name="button" className="search-btn">camping</button>
                    <button type="button" name="button" className="search-btn">shadyside</button>
                </div>
            </div>
        </>
    );
}

export default HeroSearch;