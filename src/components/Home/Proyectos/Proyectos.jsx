import React, { useState, useEffect, useRef } from 'react';
import LoadingScreen from "../Carga/LoadingScreen";
import mo1 from '../../../assets/mo1.png';
import mo2 from '../../../assets/mo2.png';
function Proyectos() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simula carga de datos
  }, []);

  const debounceScroll = (func, delay) => {
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => func.apply(context, args), delay);
    };
  };

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const { current } = containerRef;
      if (current) {
        const children = Array.from(current.children);
        const scrollY = window.scrollY;
        let closestChild = null;
        let minDiff = Number.MAX_SAFE_INTEGER;

        for (let child of children) {
          const childTop = child.offsetTop;
          const childHeight = child.clientHeight;
          const diff = Math.abs(scrollY + window.innerHeight / 2 - (childTop + childHeight / 2));

          if (diff < minDiff) {
            minDiff = diff;
            closestChild = child;
          }
        }

        if (closestChild && Math.abs(scrollY - closestChild.offsetTop) > 10) {
          window.scrollTo({
            top: closestChild.offsetTop,
            behavior: 'smooth' // Cambiamos a scroll suave para un desplazamiento gradual
          });
        }
      }
    };

    const debouncedHandleScroll = debounceScroll(handleScroll, 150);

    window.addEventListener('wheel', debouncedHandleScroll);
    return () => {
      window.removeEventListener('wheel', debouncedHandleScroll);
    };
  }, [loading]);

  return (
    <div className='hola'>
      {loading ? (
        <LoadingScreen />
      ) : (
        <section className='proyectos-container' ref={containerRef}>
          <div className="card-proyectos1">
          <div className="img-container">
            <img className='img' src={mo1} alt="a" />
          </div>
          </div>

          <div className="card-proyectos1">
          <div className="img-container">
            <img className='img' src={mo2} alt="a" />
          </div>
          </div>

          <div className="card-proyectos1">
          <div className="img-container">
            <img className='img' src={mo1} alt="a" />
          </div>
          </div>
         
        </section>
      )}
    </div>
  );
}

export default Proyectos;
