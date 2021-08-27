
function botaolink() {

  let y = document.getElementById('social');
  let x = document.getElementById('navi');
  console.log(x)
  if (x.style.visibility == "hidden") {
    x.style.visibility = "visible";
    y.style.visibility = "hidden";
    console.log("Visivel")
  } else {
    x.style.visibility = "hidden";
    y.style.visibility = "visible";
    console.log("Escondido")
  }
}
