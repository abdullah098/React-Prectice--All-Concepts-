import React from 'react';

const OpctionBar = () => {
    return ( 
        <>
            <div className="flex">
            <div>
                <button className="buttonList_left">Editorial</button>
            </div>

            <div>
                <button className="buttonList_right">2D Render</button>
                <button className="buttonList_right">Architecture & Interior</button>
                <button className="buttonList_right">Current Event</button>
                <button className="buttonList_right">Experimental</button>
                <button className="buttonList_right">Fasion</button>
                <button className="buttonList_right">Flim</button>
                <button className="buttonList_right">Food & Drink</button>
                <button className="buttonList_right">Health & Wellness</button>
                <button className="buttonList_right">Nature</button>
                <button className="buttonList_right">People</button>
                <button className="buttonList_right">Street Photography</button>
            </div>

        </div>
        </>
     );
}
 
export default OpctionBar;