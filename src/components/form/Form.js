import React, { useState } from 'react';
import './Form.css';
import Vector1 from "./Vector1.png";
import Vector2 from "./Vector2.png";
import Vector3 from "./Vector3.png";

const Form = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [adresse, setAdresse] = useState('');
    const [num, setNum] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ nom, email, adresse, num, file });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nom complet<br/>
                    <div className="input-group">
                        <img src={Vector1} alt="icon" className="icon" />
                        <input
                            type="text"
                            name="nom"
                            placeholder="Votre nom"
                            className="formItem"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </div>
                </label><br/>
                <label>Email<br/>
                    <div className="input-group">
                        <img src={Vector2} alt="icon" className="icon" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Votre E-mail"
                            className="formItem"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </label><br/>
                <label>Adresse<br/>
                    <div className="input-group">
                        <img src={Vector3} alt="icon" className="icon" />
                        <input
                            type="text"
                            name="adresse"
                            placeholder="Votre Adresse"
                            className="formItem"
                            value={adresse}
                            onChange={(e) => setAdresse(e.target.value)}
                        />
                    </div>
                </label><br/>
                <label>Numéro de téléphone<br/>
                    <div className="input-group">
                        <span className="flag">🇹🇳</span>
                        <input
                            type="tel"
                            name="num"
                            placeholder="55 555 555"
                            className="formItem"
                            value={num}
                            onChange={(e) => setNum(e.target.value)}
                        />
                    </div>
                </label><br/>
                <label>Paiement<br/>
                    <div className="file-upload">
                        <span className="icon">&#128196;</span>
                        <input
                            type="file"
                            className="upload-btn"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                </label><br/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form;