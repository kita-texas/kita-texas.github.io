import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import setPreferredLang from '../../components/translatePage';

function NoPageFound() {
    useEffect(() => {
        setPreferredLang();
    },[]);
    return(
        <div>
            <Header />
        <div className='full-fill-no-header'>
            <h1>No Page Found</h1>
        </div>
        </div>
    )
}

export default NoPageFound;