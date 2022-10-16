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
        <div>
            <img src={data.imageUrl} />
            <p>{description}</p>
            <button onClick={onDecrypt}>Decrypt</button>
        </div>
    );
}