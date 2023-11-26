import React from "react";

const listItemStyle = {
    marginBottom: '30px',
    position: 'relative',
};

const bulletStyle = {
    content: '""',
    position: 'absolute',
    left: '-20px',
    top: '50%',
    width: '10px',
    height: '10px',
    backgroundColor: '#61DAFB',
    borderRadius: '50%',
    transform: 'translateY(-50%)',
};

const containerStyle = {
    display: 'flex',
};

const contentStyle = {
    flex: 1,
};

const imageStyle = {
    width: '50%', 
    height: 'auto',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'right 75%',
};

export default function Main() {
    return (
        <main style={{ backgroundColor: '#282D35', fontFamily: 'Inter, sans-serif', height: '100vh', padding: '57px 27px' }}>
            <div style={containerStyle}>
                <div style={contentStyle}>
                    <h1 style={{ color: '#FFFFFF', fontSize: '39px', fontWeight: "700" }}>Fun Facts about React</h1>
                    <ul style={{ marginTop: '46px', color: '#FFFFFF', fontWeight: "700", lineHeight: '19px', paddingBlock: '10px', listStyle: 'none' }}>
                        <li style={listItemStyle}>
                            <span style={bulletStyle}></span>
                            Was first released in 2013
                        </li>
                        <li style={listItemStyle}>
                            <span style={bulletStyle}></span>
                            Was originally created by Jordan Walke
                        </li>
                        <li style={listItemStyle}>
                            <span style={bulletStyle}></span>
                            Has well over 100K stars on GitHub
                        </li>
                        <li style={listItemStyle}>
                            <span style={bulletStyle}></span>
                            Is maintained by Facebook
                        </li>
                        <li style={listItemStyle}>
                            <span style={bulletStyle}></span>
                            Powers thousands of enterprise apps, including mobile apps
                        </li>
                    </ul>
                </div>
                <img
                    src="../images/react-logo-large.png"
                    alt="React Logo"
                    style={imageStyle}
                />
            </div>
        </main>
    );
}
