import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import domtoimage from "dom-to-image";

export default function AddressCard({ addressData }) {
  const cardRef = useRef();

  // Function to save as PNG using dom-to-image
  const handleSaveAsPNG = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await domtoimage.toPng(cardRef.current, {
        quality: 1.0,
        bgcolor: "#000",
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "address-card.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating PNG:", error);
    }
  };

  // Function to share via WhatsApp
  const shareOnWhatsApp = () => {
    const message = `📌 Address:\n${addressData.name}\n${addressData.address}, ${addressData.pincode}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className=" rounded-lg p-4 mt-4 text-center space-y-4">
      {/* Address Card */}
      <div
        ref={cardRef}
        className="p-8 mx-auto rounded-md inline-block text-left"
      >
        <h2 className="text-2xl font-bold mb-2">{addressData.name}</h2>
        <p>{addressData.address}</p>
        <p>
          {" "}
          <strong> Postal Code: </strong> {addressData.pincode}
        </p>

        {/* QR Code */}
        <div className="flex justify-center mt-4">
          <QRCodeCanvas
            value={`${addressData.name}, ${addressData.address}, ${addressData.pincode}`}
            className="border-2 p-0.5"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-2">
        <button
          onClick={handleSaveAsPNG}
          className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Save as PNG
        </button>
        <button
          onClick={shareOnWhatsApp}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Share on WhatsApp
        </button>
      </div>
    </div>
  );
}
