import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Inscription() {
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [confermPassWord, setConfermPassWord] = useState("");

    const inscription = () => {
        Axios.post("http://localhost:3001/api/inscription", {
            email:email,
            passWord:passWord,
        });
        if (typeof(Storage) !== "undefined") {
            // Store
              sessionStorage.setItem("utontifecation", "truue");
        } else {
            alert("Sorry, your browser does not support Web Storage...");
        }
        
        if (typeof window !== 'undefined') {
            window.location.href = "http://localhost:3000/DashboardUser";
        }
    };

    return (
        <div className="container">
               
                <div className="container">
                    <div className="row">
                        <div className="col">
                            
                        </div>
                        <div className="col ">
                            <div className="categorie rounded-3">
                                <h1>Inscription Utilisateur</h1>
                                <label>Email</label>
                                <input 
                                    type="text" 
                                    id="idusername"
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                /><br/>
                                <label>pasword</label>
                                <input 
                                    type="text" 
                                    id="idpasword" 
                                    onChange={(event) => {
                                        setPassWord(event.target.value);
                                    }}
                                /><br/>
                                <label>Confermation Pasword</label>
                                <input 
                                    type="text" 
                                    id="idconfirmpasword" 
                                    onChange={(event) => {
                                        setConfermPassWord(event.target.value);
                                    }}
                                /><br/>
                                <button onClick={()=> inscription()} >inscription</button>
                            </div>
                        </div>
                        <div className="col">
                            
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Inscription;