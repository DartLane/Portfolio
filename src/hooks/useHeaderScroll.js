import { useEffect, useRef } from 'react';

const useHeaderScroll = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (headerRef.current) {
        if (currentScrollY > prevScrollY.current) {
          // Scrolling down
          headerRef.current.style.transform = 'translateY(-200px)';
        } else {
          // Scrolling up
          headerRef.current.style.transform = 'translateY(0)';
        }
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return headerRef;
};

export default useHeaderScroll; 