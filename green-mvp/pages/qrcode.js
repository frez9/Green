export default function Qrcode() {

    function createCode() {
        var QRCode = require('qrcode')
        QRCode.toCanvas(document.getElementById('code'), 'https://www.google.com/12', function (error) {
            console.log(error)
        })
        console.log("------------")
    }

    return (
        <>
        <h1>QR Code</h1>
        <button onClick={createCode}>Create QR Code</button>
        {/* <img id="code"></img> */}
        <canvas id="code"></canvas>
        </>
    )
}
