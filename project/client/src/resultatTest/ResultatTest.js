import React, { useState, useEffect } from 'react';

function ResultatTest() {

    const singout = () =>{
        if (typeof(Storage) !== "undefined") {
            // Store
              sessionStorage.setItem("utontifecation", "");
              sessionStorage.setItem("nam"+sessionStorage.getItem("namcaat"), 0);
            sessionStorage.setItem("idQuestionlangue", 100);
            sessionStorage.setItem("valeurDesQuestiones", 0);
            // localStorage.setItem("NombreError"+valuenamcat , 0);
            localStorage.setItem("NombreError"+sessionStorage.getItem("namcaat") , 0);
            sessionStorage.setItem("nam"+sessionStorage.getItem("namcaat"), 0);
            sessionStorage.setItem("idQuestionlangue", 100);
            sessionStorage.setItem("valeurDesQuestiones", 0);
            if (typeof window !== 'undefined') {
                window.location.href = "http://localhost:3000/";
            }
          } else {
              alert("Sorry, your browser does not support Web Storage...");
          }
    }


    if (typeof(Storage) !== "undefined") {
    // Store
        
        if(sessionStorage.getItem("utontifecation") == "truue"){
        alert("welcome");
        }else{
        alert("Erreur D'authentification");
        if (typeof window !== 'undefined') {
            window.location.href = "http://localhost:3000/";
        }
        }
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }

    const [value, setValue] = useState(
        parseFloat(sessionStorage.getItem("valeurDesQuestiones"))
    );
    const [valuenamcat, setValuenamcat] = useState(
        sessionStorage.getItem("namcaat")
    );
    const [valuenbressay, setValuenbressay] = useState(
        parseInt(sessionStorage.getItem("nam"+valuenamcat))
    );
    const [valueStatustest, setValuestatutest] = useState(
        sessionStorage.getItem("statustest")
    );
    const [valueBadg, setValueBadg] = useState(
        sessionStorage.getItem("Badge")
    );
    const [valueNombreError, setValueNombreError] = useState(
        localStorage.getItem("NombreError"+valuenamcat)
    );
    const [valueagain, setValueagain] = useState(
        localStorage.getItem("StatusResultattest"+valuenamcat)
    );

    if (typeof(Storage) !== "undefined") {
        
        // Store
        if(sessionStorage.getItem("valeurDesQuestiones") == null || sessionStorage.getItem("valeurDesQuestiones") == 0){

            setTimeout("document.getElementById('toutReponseFaux').style.display = 'block'", 1000);
            if(valuenbressay == 3 ){
                setTimeout("document.getElementById('corect').style.display = 'none'", 1000);
                setTimeout("document.getElementById('nocorect').style.display = 'block'", 1000);
            }else{
                setTimeout("document.getElementById('corect').style.display = 'block'", 1000);
                setTimeout("document.getElementById('nocorect').style.display = 'none'", 1000);
            }
        }else{

            if(valuenbressay == 3 ){
                setTimeout("document.getElementById('corect').style.display = 'none'", 1000);
                setTimeout("document.getElementById('nocorect').style.display = 'block'", 1000);
            }else{
                setTimeout("document.getElementById('corect').style.display = 'block'", 1000);
                setTimeout("document.getElementById('nocorect').style.display = 'none'", 1000);
            }
        };

    } else {
        alert("Sorry, your browser does not support Web Storage...");
    };

    const resetTest = () =>{
        if (typeof(Storage) !== "undefined") {
            // sessionStorage.setItem("nam"+valuenamcat, 0);
            // sessionStorage.setItem("namYass"+valuenamcat, 0);
            sessionStorage.setItem("nam"+sessionStorage.getItem("namcaat"), 0);
            sessionStorage.setItem("idQuestionlangue", 100);
            sessionStorage.setItem("valeurDesQuestiones", 0);
            // localStorage.setItem("NombreError"+valuenamcat , 0);
            localStorage.setItem("NombreError"+sessionStorage.getItem("namcaat") , 0);
        } else {
            alert("Sorry, your browser does not support Web Storage...");
        }
    };
    const again = () =>{
        if (typeof(Storage) !== "undefined") {
            sessionStorage.setItem("idQuestionlangue", 100);
            sessionStorage.setItem("valeurDesQuestiones", 0);
            localStorage.setItem("NombreError"+valuenamcat , 0);
            if (typeof window !== 'undefined') {
                window.location.href = "http://localhost:3000/Evaluation";
            }
        } else {
            alert("Sorry, your browser does not support Web Storage...");
        }
    };
    return (
        <div className="container">


            <div className="container">
                <div className="row">
                    <div className="col">
                        
                    </div>
                    <div className="col-6">
                        
                    </div>
                    <div className="col">
                        <button onClick={()=> singout()} >sing out</button>
                    </div>
                </div>
            </div>




            <div id="corect" className="categorie2 rounded-3">
                <button onClick={()=> resetTest()}>RESER</button><br />
                <h1>Categori : {valuenamcat}</h1>
                <h1>Status : {valueStatustest}</h1>
                
                <h1>les pointes : {value} / 100</h1>
                <h1>Nombre d'essai : {valuenbressay} / 3</h1>
                <h1>Badge : {valueBadg}</h1>
                <h1>Nombre D'erreur : {valueNombreError }</h1>
                <h1 id="toutReponseFaux" className="categorie3 text-danger">attention tout les réponses est faux</h1>
                <h1>Resultat : {valueagain}</h1>

                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="d-grid gap-2">
                            <button onClick={()=> again()} className="btn btn-outline-warning buttonReponce" type="button">Répéter l'examen ?</button>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <br/>

            </div>
            <div id="nocorect" className="categorie2 rounded-3">
                <button onClick={()=> resetTest()}>RESER</button>
                <h1>Vous n'êtes plus autorisé à repasser le test car vous avez terminé le nombre autorisé de 3 tentatives !!</h1>
                <h1>Status : {valueStatustest}</h1>
                {/* <h1>nombre dessay</h1> */}
                <h1>Categori : {valuenamcat}</h1>
                <h1>les pointes : {value} / 100</h1>
                <h1>Nombre d'essai : {valuenbressay} / 3</h1>
                <h1>Badge : {valueBadg}</h1>
                <h1>Nombre D'erreur : {valueNombreError}</h1>
                <h1>Resultat : {valueagain}</h1>
            </div>
        </div>
    )
}
export default ResultatTest;