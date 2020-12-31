import React from 'react';
import Header from '../components/Header';
import NoticeSection from '../components/NoticeSection';
import Footer from '../components/Footer';

const Notice = () => {
    return (
        <div className="wrap">
            <Header />
            <NoticeSection />
            <Footer />
        </div>
    );
};

export default Notice;