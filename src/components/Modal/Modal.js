import React, { useState, useEffect } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import Spinner from '../Spinner/Spinner';
import Img from '../../images/No_Image-512.webp';

const modalRoot = document.querySelector('#modal-root');

export default function Modal ({ onClose, image}) {
    const { src, alt } = image;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
          const handleKeyDown = e => {
            if (e.code === 'Escape') {
            onClose();
            }
          }
        window.addEventListener('keydown', handleKeyDown);

        return () => {
             window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }
    const onLoad = () => {
        setIsLoading(false);
    }
        
    return createPortal(
            <>
            <div className={s.Overlay} onClick={handleBackdropClick}>
                <div className={s.Modal}>
                         
                        {isLoading && (
                            <div className={s.SpinnerCentered}>
                                <Spinner />
                            </div>)}
                        
                    <img
                        onLoad={onLoad}
                        src={src ? src : Img}
                        alt={alt} />
                </div>
            </div>
            </>,
            modalRoot);
}

Modal.propTypes = {
    image: PropTypes.object,
    onClose: PropTypes.func,
};