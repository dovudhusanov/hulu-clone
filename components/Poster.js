import React, {forwardRef, useState} from 'react';
import styles from '../styles/Home.module.css'
import {HeartIcon} from "@heroicons/react/24/outline"

const Poster = forwardRef(({result}, ref) => {

    const BASE_URL = "https://image.tmdb.org/t/p/original";

    const [like, setLike] = useState(false)

    return (
        <div ref={ref} className={styles.posterCard}>
            <div className={styles.cardHeader}>
                <img
                    className={styles.image}
                    src={
                        `${BASE_URL}${result.backdrop_path || result.poster_path}`
                    }
                    alt=""
                />
            </div>
            <div className={styles.cardBody}>
                <h2 className={styles.title}>
                    {result.title || result.name}
                </h2>
                <p className={styles.overview}>
                    {result.overview}
                </p>
                <h4>
                    {result.release_date || result.first_air_date} - {" "}
                     {result.vote_count} <span className={styles.likeIcon} onClick={() => setLike(prevState => !prevState)}>{like ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</span>
                </h4>
            </div>
        </div>
    );
})

Poster.displayName = "Poster"

export default Poster;