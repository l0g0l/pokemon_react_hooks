import React from 'react';
import NavBar from '../NavBar/NavBar'


import './layout.css'

const Layout = ({ children }) => {
    return (
        <>
            <main>
                <div className="containerlayout">
                    <NavBar />
                  
                    {children}
                   
                </div>
            </main>

        </>
    )
}
export default Layout