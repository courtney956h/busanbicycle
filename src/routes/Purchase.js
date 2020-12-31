import React, { useState, useCallback } from 'react';
import Header from '../components/Header';
import PurchaseList from '../components/PurchaseList';
import Footer from '../components/Footer';

const Purchase = () => {
    const [ acitveTab, setActiveTab ] = useState(0);
    const onSelect = useCallback( activeTab => setActiveTab(activeTab), [] )

    return (
        <div>
            <Header />
            <PurchaseList acitveTab={acitveTab} onSelect={onSelect} />
            <Footer />
        </div>
    );
};

export default Purchase;