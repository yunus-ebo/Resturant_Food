import { useEffect, useState } from "react";

const QrC = () => {
  const [barCode, setBarCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    getQrData();
  }, []);
  const getQrData = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URI}/api/qr`);
      console.log(res);
      // coverting datas to json
      const data = await res.json();
      setBarCode(data.restaurantQr);
    } catch (error) {
      console.log(error);
      setError("failed to fetch Qr code");
    } finally {
      setLoading(false);
    }
  };
  // do special returns for error and loading
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <h1>{barCode.name}</h1>
      <p>{barCode.websiteUrl}</p>
      <img src={barCode.qrCode} alt="" width="300" />
      <a href={barCode.qrCode} download="restaurant-qr.png">
        <button> تنزيل الباركود </button>
      </a>
    </div>
  );
};

export default QrC;

/*
INFO:
-- data.restaurantQr:
# qrUrl => this name would be better if it had same name that is used in backend means: this name in controller ( restaurantQr )
and this is the name in backend 👇
qrUrl: `${process.env.PROJECT_LINK}/qr/${qr._id}`,
# then:
data = {
  success: true,
  restaurantQr:{
  "name":"...",
  "websiteUrl": "....",
  "qrCode":"..."
  }
}

*/
