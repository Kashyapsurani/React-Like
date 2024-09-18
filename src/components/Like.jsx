import './Like.css';
import { useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import mySvg from './my-svg.svg';
import mySvg2 from './dislike-1387-svgrepo-com.svg';
import 'boxicons'


function Like() {
  const likeRef1 = useRef(null) 
  const likeRef2 = useRef(null) 

  const [count, setCount] = useState(0);

  const clicked = () => {
    if (count >= 0) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handelClick = () => {
    likeRef1.current.style.fill = "blue"
    likeRef2.current.style.fill = "black"
    
   };
   
   const handelUnclick = () => {
    likeRef1.current.style.fill = "black"
    likeRef2.current.style.fill = "blue"
   };

  const unClick = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="Like-Button">
      <div className="Like" onClick={clicked} >
      <box-icon type='solid' name='like' onClick={handelClick} ref={likeRef1}></box-icon>
            </div>

      <div className="count">{count}</div>

      <div className="Like" onClick={unClick} disabled={count === 0} >
        <box-icon name='dislike' type='solid'  onClick={handelUnclick} ref={likeRef2} ></box-icon>
      </div>
    </div>
  );
}

export default Like;