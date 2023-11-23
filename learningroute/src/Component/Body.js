import React, {useState, useEffect} from "react";


function Body({text,delay}){

        const [currentText, setCurrentText] = useState('');
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            if (currentIndex < text.length) {
              const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
              }, delay);
          
              return () => clearTimeout(timeout);
            }
          }, [currentIndex, delay, text]);

    return (
        <div className="Body">
        <div className="left">
           <button> <h5>
            Leading Career Counsellors
            </h5>
            </button>
            <h2>
                Explore India's Top <br /> Distance College For <br /> <span>{currentText}</span>
            </h2>
            <h4>Unleash Your Hidden Potentail</h4>
            <input type="text" placeholder="Search your courses here" />
        </div>

        <div className="right">
            <img src="	https://www.learningroutes.in/wp-content/uploads/2023/08/web-png_05-copy.webp" alt="Image" />
        </div>

        </div>
    )
}

export default Body