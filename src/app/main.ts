async function main(): Promise<void> {
  const heading = document.createElement('h1');
  const text = document.createTextNode('Hello World!');
  heading.appendChild(text);

  heading.style.fontFamily = 'sans-serif';
  heading.style.color = '#fff';
  heading.style.textAlign = 'center';

  document.body.appendChild(heading);
}

if (window.document.readyState === 'loading')
  window.document.addEventListener('DOMContentLoaded', () => main());
else main();
