import axios from 'axios';
import {useState, useRef} from 'react'
import QrCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';
import {imageUrI} from '../../imageUrI'

const QrC = () => {
const [qrUrl,setQrUrl] = useState("");
const qrRef = useRef();
// CREATE QR
// const createQr = async () => {
//   try {
//     const res = await axios.post("https://backend-resturant-food-1.onrender.com/qr/create",{
//       type:"main",
//       originalUrl:"https://backend-resturant-food-1.onrender.com"
//     });
//     setQrUrl(res.data.qrUrl);
//   } catch (error) {
//     console.log(error);
//   }
// }
  const createQr = async () => {
    try {
      const response = await fetch("https://backend-resturant-food-1.onrender.com/qr/create",
      // we tell fetch what he wants to do
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            type:"main",
            originalUrl:"https://backend-resturant-food-1.onrender.com"
          })
        }
      );
      // we check if res is ok
      if(!response.ok){
        throw new Error('request failed');
      }
      const data = await response.json();
      setQrUrl(data.qrUrl);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
 
// DOWNLOAD QR
const downloadQr = async () => {
  const dataUrl = await htmlToImage.toPng(qrRef.current);
  const link = document.createElement('a');
  link.download = 'resturantQR.png';
  link.href = dataUrl;
  link.click();
}

  return (
    <div style={{
      display:'flex',
      flexDirection:"column",
      alignItems:"center",
      gap:"20px"
    }}>
      <button onClick={createQr}>Generate Qr</button>
      {qrUrl && (
        <>
        <div ref={qrRef}>
          <QrCode value={qrUrl} size={250}/>
        </div>
        <button onClick={downloadQr}>Download Qr</button>
        </>
      )}
    </div>
  )
}

export default QrC;

/*
INFO:
-- data.qrUrl:
# qrUrl => this name must be same name that used in backend 
and this is the name in backend 👇
qrUrl: `${process.env.PROJECT_LINK}/${qr._id}`,
# then:
data = {
  success: true,
  qrUrl:(LINK),
  data:{...}
}
## as well as in backend which is this:
res.status(201).json({
      success: true,
      qrUrl: `${process.env.PROJECT_LINK}/${qr._id}`,
      data: qr,
})
*/