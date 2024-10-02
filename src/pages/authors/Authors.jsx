import React, { useState } from 'react';
import { authors } from '../../data/authors';
import './authors.css';

export default function Authors() {
    const [search, setSearch] = useState("");

    return (
        <section className="authors">
            <div className="author-search-wrapper">
                <input 
                    type="search" 
                    placeholder='Search in authors' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="authours-wrapper">
                {authors
                .filter(a => a.name.toLowerCase().includes(search))
                .map(author => 
                    <div className='author' key={author.id}>
                        <img src={author.image} alt={author.name} className="author-img" />
                        <h2 className="author-name">{author.name}</h2>
                    </div>
                )}
            </div>
        </section>
    )
}
