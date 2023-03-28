function paginar(idpag) {
  const remove = document.querySelector(".item.active");
  remove.classList.remove("active");
  const add = document.getElementById(idpag).classList.add("active");
}
