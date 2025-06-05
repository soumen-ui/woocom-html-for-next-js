

import { useEffect } from 'react';

import "@/styles/owl.carousel.min.css";

import "@/styles/bootstrap.css";
import "@/styles/style.css";

export default function App({ Component, pageProps }) {
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
 
  
  useEffect(() => {
      const loadScript = (src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.body.appendChild(script);
      };
  
      // loadScript('https://code.jquery.com/jquery-3.6.0.min.js');
      // loadScript('/engine1/script.js');
      loadScript('/assets/js2/jquery.min.js');
      loadScript('/assets/js2/owl.carousel.min.js');
      loadScript('/assets/js2/customize.js');


    }, []);

 
  return (
    <>
      <link rel="stylesheet" href="/assets/css2/owl.carousel.min.css" />
    <link rel="stylesheet" type="text/css" href="/assets/css2/style.css"></link>

  <Component {...pageProps} />
</>
);
}
