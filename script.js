const qrContainer = document.querySelector("#qr-code");
const qrText = document.querySelector(".qr-text");

qrText.addEventListener("input", handleQRText);

const defaultUrl = "http://leonidstefanelpintea.freecluster.eu/";
let colorLight = "#fff",
    colorDark = "#000",
    text = defaultUrl,
    size = 200;


function handleQRText(e) {
    const value = e.target.value;
    text = value;
    if (!value) {
        text = defaultUrl;
    }
    generateQRCode();
}

async function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode("qr-code", {
        text,
        height: size,
        width: size,
        colorLight,
        colorDark,
    });
}

generateQRCode();