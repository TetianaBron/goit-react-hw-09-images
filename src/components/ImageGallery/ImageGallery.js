import { useState, useEffect, useCallback } from 'react';
import s from './ImageGallery.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Searchbar from '../Searchbar/Searchbar';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import pixabayAPI from '../../services/pixabay-api';
import Modal from '../Modal/Modal';

export default function ImageGallery() {
    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [largeImage, setLargeImage] = useState({
            src: "",
            alt: "",
    });
    
    const perPage = 12;

    useEffect(() => {
        if (!query) {
        return;
        }

        const fetch = (query) => {
            setLoading(true);

            pixabayAPI
                .fetchImg(query, page, perPage)
                .then((items) => {
                    if (items.total === 0) {
                        toast.error(`${query} is not found. Try another one!`);
                    } else if (page === 1) {
                        toast.error(`${items.total} pictures is found.`)
                    }
                    setItems(prevItems => [...prevItems, ...items.hits]);
                    setTotal(items.total);
                })
                .catch(error => {
                    toast.error(error.message);
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    });
                });
        };

       fetch(query);
    }, [page, query]);

    
    const numberOfPages = total / perPage;

    const updatePage = () => {
        setPage(prevPage => prevPage + 1);
    };
    
    const onChangeQuery = (query) => {
        setQuery(query);
        setPage(1);
        setItems([]);
        setError(null);
    };

    const toggleModal = useCallback(() => {
        setShowModal(prevShowModal => !prevShowModal);
    }, []);
    
    const  handleGalleryItemClick = (src, alt) => {
        setLargeImage({ src, alt });
        toggleModal();
    }

        return (
            <>
            <Searchbar onSubmit={onChangeQuery} />
            {items.length > 0 &&
                (<ul className={s.ImageGallery}>
                {items.map(({ webformatURL, largeImageURL, tags }, index) => (
                        <li key={index}>
                          <ImageGalleryItem
                              webformatURL={webformatURL}
                              largeImageURL={largeImageURL}
                              tags={tags}
                              clickOnItem={() => handleGalleryItemClick(largeImageURL, tags)} />
                        </li>))}
                    </ul>)}
                
            {loading && page === 1 && (
                            <div className={s.SpinnerCentered}>
                                <Spinner />
                    </div>)}
                
            {loading && page !== 1 && <Spinner />}
                                
            {showModal &&
                (<Modal
                        image={largeImage}
                        onClose={toggleModal}
                    />)}
                            
            {page < numberOfPages && !loading && (<Button onIncrement={updatePage} />)}
        </>
        )    
    }

            
ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
};