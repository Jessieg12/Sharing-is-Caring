import React from "react";
import './Home.css'

function Home({passThis, handleCallBack}){

    return (
        <div className="home">
            <p>This is the Home Component</p>
            <p>{passThis}</p>
            <button onClick={() => handleCallBack("Hello from Home Component!")}>Click me!</button>
            
        </div>
    )
}

export default Home;