import React from 'react';
import Header from "./header/header";

function Layout({children}) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default Layout;