import { useState } from 'react';
import styles from './LikeButton.module.css';

export default function LikeButton() {
    const [like, setLike] = useState(false);
    const [likesCount, setLikesCount] = useState(9);

    const handleLike = () => {
        if (!like) {
            setLike(true);
            setLikesCount(likesCount + 1);
        }
    };

    return (

        <div>
            {/* <button className={like ? styles['site-btn1'] : styles['site-btn']} onClick={handleLike} disabled={like} >
                {like ? 'Already Booked' : 'Book this boat!'}
            </button> */}

            {!like && (<button className={styles['site-btn']} onClick={handleLike}>Like this boat</button> )}

            {/* <button className={like ? styles['site-btn1'] : styles['site-btn']} onClick={handleLike} disabled={like} >
                {like ? 'Liked' : 'Like this boat'}
            </button> */}
           
            <p><i className="fa-solid fa-heart" style={{color: '#ff0000'}}></i> {likesCount}</p>
        </div>
    );

}