import React, { useState } from "react";
import "./Images.css";

function Images({ car, navigate }) {
    const [carouselIndex, setCarouselIndex] = useState(null);
    const secondaryImages = car.pictures.others.slice(0, 4);
    
    while (secondaryImages.length < 4) {
        secondaryImages.push(null);
    }

    const openCarousel = (index) => {
        setCarouselIndex(index);
    };

    const closeCarousel = () => {
        setCarouselIndex(null);
    };

    const nextImage = () => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % secondaryImages.length);
    };

    const prevImage = () => {
        setCarouselIndex((prevIndex) =>
            prevIndex === 0 ? secondaryImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <div>
                <button className="back-button" onClick={() => navigate(-1)}>
                    &#8592; Back
                </button>
            </div>
            <div className="images-div">
                <div className="big-first-img1" onClick={() => openCarousel(-1)}>
                    {car.pictures && car.pictures.main ? (
                        <img className="main-image1" src={car.pictures.main} alt="Car Main" />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="little-3-img">
                    {secondaryImages.map((imgUrl, index) => (
                        <div key={index} className="image-holder-secondary1" onClick={() => openCarousel(index)}>
                            {imgUrl ? (
                                <img src={imgUrl} alt="Car Secondary" className="secondary-image1" />
                            ) : (
                                'Placeholder'
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {carouselIndex !== null && (
                <div className="carousel-overlay">
                    <span className="carousel-close" onClick={closeCarousel}>
                        &times;
                    </span>
                    <img
                        className="carousel-image"
                        src={
                            carouselIndex === -1
                                ? car.pictures.main
                                : secondaryImages[carouselIndex]
                        }
                        alt="Carousel"
                    />
                    <button className="carousel-nav carousel-prev" onClick={prevImage}>
                        &#10094;
                    </button>
                    <button className="carousel-nav carousel-next" onClick={nextImage}>
                        &#10095;
                    </button>
                </div>
            )}
        </div>
    );
}

export default Images;
