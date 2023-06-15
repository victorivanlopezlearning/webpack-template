import '../css/components.css';

export const welcome = ( name ) => {
    console.log('Creating H1...');

    const h1 = document.createElement('H1');
    h1.textContent = `Hi, Welcome ${ name }`;

    document.body.appendChild( h1 );
};