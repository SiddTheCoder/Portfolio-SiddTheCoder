2
let toasterContainer = document.getElementById("toaster-container");
function openToaster() {
    toasterContainer.classList.remove("toaster-container");
    toasterContainer.classList.add("open-toaster-container");
}
function closeToaster() {
    toasterContainer.classList.add("close-toaster-container");
    toasterContainer.classList.remove("open-toaster-container");
}
