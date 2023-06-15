import '../css/components.css';
import imageLogo from '../assets/img/webpack-logo.png';

/**
 * Create HTML
 * @param {String} name 
 * @param {HTMLDivElement} element 
 */
export const welcome = ( name, element ) => {

    const h1 = document.createElement('H1');
    h1.textContent = `Hi, Welcome ${ name }`;

    element.appendChild( h1 );

    const img = document.createElement('IMG');
    img.src = imageLogo;

    element.appendChild( img );
};