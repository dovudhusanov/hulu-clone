import FlipMove from "react-flip-move";
import Poster from "./Poster";
import styles from '../styles/Home.module.css'

function List({results}) {
    return (
       <div className="container">
           <FlipMove className={styles.poster}>
               {results.map((result) => (
                   <Poster key={result.id} result={result} />
               ))}
           </FlipMove>
       </div>
    );
}

export default List;