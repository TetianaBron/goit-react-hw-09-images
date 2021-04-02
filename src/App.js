import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout/Layout';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

export default function App() {

    const [query, setQuery] = useState('');

    const handleFormSubmit = formQuery => {
        setQuery( formQuery );
    };
     
        return (
            <Layout>
                <Searchbar onSubmit={handleFormSubmit} />
                <ImageGallery query={query} />
                <ToastContainer />
            </Layout>
        );
}