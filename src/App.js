import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout/Layout';
import ImageGallery from './components/ImageGallery/ImageGallery';

export default function App() {
        return (
            <Layout>
                <ImageGallery />
                <ToastContainer />
            </Layout>
        );
}