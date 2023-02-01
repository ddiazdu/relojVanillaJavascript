window.addEventListener("load", () => {
  const horaDom = document.getElementById("hora");
  const minutoDom = document.getElementById("minuto");
  const segundoDom = document.getElementById("segundo");

  const mostraHora = () => {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();

    horaDom.textContent = String(hora).padStart(2, "0");
    minutoDom.textContent = String(minuto).padStart(2, "0");
    segundoDom.textContent = String(segundo).padStart(2, "0");

    setTimeout(mostraHora, 1000);
  };

  mostraHora();
});
