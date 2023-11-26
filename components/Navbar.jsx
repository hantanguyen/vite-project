import React from "react"

export default function Navbar() {
    return (
        <nav style={{display: 'flex', alignItems: 'center', backgroundColor: '#21222A', height: '60px', padding: '10px',  fontFamily: 'Inter, sans-serif'}}>
            <img src="../images/react-logo.png" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <h3 style={{marginRight: "auto", color: '#61DAFB', fontWeight: "700", fontSize: '22px' }}>ReactFacts</h3>
            <h4 style={{ color: '#FFFFFF', fontWeight: "700" }}>React Course - Project 1</h4>
        </nav>
    )
}