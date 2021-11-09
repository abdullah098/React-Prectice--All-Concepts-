import React from 'react';

const Pictures = () => {
    return (
        <>
            <div className="row">
                <div className="column">
                    <img src="./resources/images/1.jpg" style={{width:"100%"}} alt="img" />
                    <img src="./resources/images/2.jpg" style={{width:"100%"}} alt="img" />
                </div>
                <div className="column">
                    <img src="./resources/images/3.jpg" style={{width:"100%"}} alt="img" />
                    <img src="./resources/images/4.jpg" style={{width:"100%"}} alt="img" />
                    <img src="./resources/images/1.jpg" style={{width:"100%"}} alt="img" />
                </div>
                <div className="column">
                    <img src="./resources/images/1.jpg" style={{width:"100%"}} alt="img" />
                    <img src="./resources/images/3.jpg" style={{width:"100%"}}alt="img" />
                    <img src="./resources/images/4.jpg" style={{width:"100%"}} alt="img" />
                </div>
            </div>
        </>
    );
}

export default Pictures;