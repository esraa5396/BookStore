import React from 'react'
import BookSlider from '../../Components/book-slider/BookSlider';
import HeadingTitle from '../../Components/heading-title/HeadingTitle';
import Services from '../../Components/Services/Services';
import Slider from '../../Components/Slider/Slider';
import { books } from '../../data/books';
export default function HomePage() {
    return (
        <div className="home">
            <Slider />
            <Services />
            <HeadingTitle title="Most Gifted" />
            <BookSlider data={books}/>
            <HeadingTitle title="Best Seller" />
            <BookSlider data={books}/>
            <HeadingTitle title="Most Wished For" />
            <BookSlider data={books}/>
        </div>
    )
}
