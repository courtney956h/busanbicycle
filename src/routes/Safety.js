import React, { useState, useCallback } from 'react';
import Header from '../components/Header';
import SafetyList from '../components/SafetyList';
import Footer from '../components/Footer';

const Safety = () => {
    const [ activeTab, setActiveTab ] = useState(0);
    const onSelect = useCallback( activeTab => setActiveTab(activeTab), [] )

    return (
        <div className="wrap">
            <Header />
            <SafetyList activeTab={activeTab} onSelect={onSelect} />
            <Footer />
        </div>
    );
};

export default Safety;