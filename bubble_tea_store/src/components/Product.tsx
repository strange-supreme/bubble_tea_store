import { useState } from 'react';

function Product(props) {
  const [pic, setPic] = useState('assets/lol.png');

  const [num, setNum] = useState(1);
  const next = () => {
    setNum(num + 1);
    setPic('assets/lol.png');
  };
  const previous = () => {
    setNum(num - 1);
    setPic('assets/lol.png');
  };
  fetch('https://pokeapi.co/api/v2/pokemon/' + num, {
    mode: 'cors',
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log('lol');
      console.log(response);

      setPic(response.sprites.front_default);
    });

  return (
    <div id="Product">
      <img id="lol" src={pic} alt="pic" />
      {
        <button id="back" onClick={previous}>
          {props.BackButton}
        </button>
      }
      {
        <button id="forward" onClick={next}>
          {props.ForwardButton}
        </button>
      }
    </div>
  );
}

export default Product;
