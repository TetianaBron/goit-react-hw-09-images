import { useState, useEffect } from 'react';
import s from './ImageGallery.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import pixabayAPI from '../../services/pixabay-api';
import Modal from '../Modal/Modal';



export default function ImageGallery ({ query }) {
    const [items, seItems] = useState([]);
    const [total, setTotal] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [largeImage, setLargeImage] = useState({
            src: "",
            alt: "",
    });
    
    useEffect(() => {
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
                    seItems(prevItems => [...prevItems, ...items.hits]);
                    setTotal(items.total);
                    setPage(prevPage => prevPage + 1)
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
},
[query]);

    const perPage = 12;
    const numberOfPages = total / perPage;

    // async componentDidUpdate(prevProps) {
    //     if (prevProps.query !== this.props.query ) {
    //         await this.setState({ items: [], page: 1 });
    //         this.fetch(this.props.query);
    //    }
    // }

    const toggleModal = () => {
        setShowModal(({showModal}) => ({
            showModal: !showModal
        }))
    }

    const  handleButtonClick = () => {
        fetch(query);
        console.log('Hello')
    }
    
    const  handleGalleryItemClick = (src, alt) => {
        setLargeImage({ src, alt });
        toggleModal();
    }

        return (
        <>
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
                
            {loading && <Spinner/>}
                                
            {showModal &&
                (<Modal
                        image={largeImage}
                        onClose={toggleModal}
                    />)}
                            
            {page - 1 < numberOfPages && !loading && (<Button onIncrement={() => handleButtonClick()} />)}
        </>
        )    
    }

            
ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
};