import { useState } from "react";
import lit from "../lib/lit";
export default function NFT({ data }) {

    const noAuthError = "You should have at least 0.1 AVAX to decrypt the description! Try again.";
    const otherError = "Some unexpected error occurred. Please try again!";

    const [description, setDescription] = useState(data.encryptedDescription.slice(-10) || "");

    // Decrypt Event Handler
    async function onDecrypt() {
        const { encryptedDescription, encryptedSymmetricKey } = data;

        let decryptedDescription;
        try {
            decryptedDescription = await lit.decryptText(encryptedDescription, encryptedSymmetricKey);
        } catch (error) {
            if (error.errorCode === "incorrect_access_control_conditions") {
                decryptedDescription = noAuthError;
            } else {
                decryptedDescription = otherError;
            }
        }
        setDescription(decryptedDescription);
    };

    return (

        <div className="rounded-lg shadow-lg bg-white max-w-sm w-full">
            <a href="_blank" rel="noreferrer">
                <img rel="noreferrer" className="rounded-t-lg mx-auto" src={data.imageUrl} alt="" />
            </a>
            <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{data.name}</h5>
                <p className="text-gray-700 text-base mb-4 overflow-auto">
                    {description}
                </p>
                <button type="button" onClick={onDecrypt} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Decrypt Description</button>
            </div>
        </div>

    );
}