import { useState, useEffect } from "react";
import lit from "../lib/lit";

// Form to Mint NFT w/encrypted description
export default function MintNFTForm({ contract }) {

    const [form, setForm] = useState({
        name: "",
        imageUrl: "",
        description: "",
    });

    // Form Submit Handler
    async function onMint() {
        const { name, imageUrl, description } = form;

        const { encryptedString, encryptedSymmetricKey } = await lit.encryptText(description);

        await contract.mintLitNft(name, imageUrl, encryptedString, encryptedSymmetricKey);
        setForm({ name: "", imageUrl: "", description: "" });
    }

    return (
        <>
            <label>
                NFT name:
                <input
                    value={form.name}
                    onChange={e => {
                        setForm({
                            ...form,
                            name: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Image URL:
                <input
                    value={form.imageUrl}
                    onChange={e => {
                        setForm({
                            ...form,
                            imageUrl: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Encrypted Description:
                <input
                    value={form.description}
                    onChange={e => {
                        setForm({
                            ...form,
                            description: e.target.value
                        });
                    }}
                />
            </label>
            <button onClick={onMint}>Mint</button>
        </>
    );
}