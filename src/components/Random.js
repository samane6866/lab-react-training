function GetRandomNumber(min, max) {
  // Generar un número aleatorio entre 1 y 100
  let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  return numeroAleatorio;

  console.log(numeroAleatorio);
}

function Random({ min, max }) {
  return (
    <div style={{ border: '1px solid' }}>
      <p>
        el numero random entre {min}y {max}= {GetRandomNumber(min, max)}
      </p>
    </div>
  );
}
export default Random;
