function error() {
  swal({
    title: "Oops...",
    text: "Vous avez fait une erreur",
    type: "error",
  });
}
function success(item) {
  swal({
    title: "Bravo... Vous avez réussit",
    showConfirmButton: false,
    type: "success",
    timer: 1500,
  });
  setTimeout(() => {
    window.location.replace(`../${item}/`);
    sessionStorage.setItem("js_data", `${item}`);
  }, 1600);
}
function Help(helper) {
  swal({
    title: "Besoin d'aide...",
    text: `${helper}`,
    type: "info"
  });
}
