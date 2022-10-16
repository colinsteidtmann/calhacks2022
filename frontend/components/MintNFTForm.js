import { useState, useEffect } from "react";
export default function MintNFTForm({ contract }) {
    const [form, setForm] = useState({
        name: "",
        imageUrl: "",
        encryptedDescription: "",
        encryptedSymmetricKey: ""
    });

    async function onMint() {
        const { name, imageUrl, encryptedDescription, encryptedSymmetricKey } = form;

        await contract.mintLitNft(name, imageUrl, encryptedDescription, encryptedSymmetricKey);
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
                    value={form.encryptedDescription}
                    onChange={e => {
                        setForm({
                            ...form,
                            encryptedDescription: e.target.value
                        });
                    }}
                />
            </label>
            <button onClick={onMint}>Mint</button>
        </>
    );
}