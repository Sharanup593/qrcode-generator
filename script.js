function generateQRCode() {
    let webVariable = document.getElementById('website').value
    if (webVariable) {
        let qrcodecontainer = document.getElementById('qrcode')
        qrcodecontainer.innerHTML = ''
        new QRCode(qrcodecontainer, webVariable)
        document.getElementById('qrcodecontainer').style.display = 'block'
    }
    else {
        alert("Enter valid URL")
    }
}