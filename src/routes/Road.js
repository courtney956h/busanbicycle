import React, { useState, useCallback } from 'react';
import Header from '../components/Header';
import RoadInfoSection from '../components/RoadInfoSection';
import Footer from '../components/Footer';

const Road = () => {

    const [ activeTab, setActiveTab ] = useState(0);
    const onSelect = useCallback( activeTab => setActiveTab(activeTab), [] )


    return (
        <div className="wrap">
            <Header />
            <RoadInfoSection activeTab={activeTab} onSelect={onSelect} />
            <Footer />
        </div>
    );
};

export default Road;