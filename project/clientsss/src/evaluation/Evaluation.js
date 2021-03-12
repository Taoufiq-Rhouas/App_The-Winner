import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Evaluation() {
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
    

    const [categorieList,setCategorieList] = useState([]);
    const [buttonText, setButtonText] = useState("Ignorer La Question et Passer à La Question Suivante"); 
    

    useEffect (()=>{
        var id = sessionStorage.getItem("IdCat");
        Axios.get(`http://localhost:3001/api/readEvaluationCategorie/${id}`).then((response)=>{
            setCategorieList(response.data)
        });
    }, [])


    if (typeof(Storage) !== "undefined") {
        console.log("IdCat : "+sessionStorage.getItem("IdCat"));
    };
    var nombrequstion = 0;
    var idQuestion = 0;
    var idQuestion2 = 0;
    var catEssais ="";
    var valChaqueQuestion = 0;
    var valQuestiontotal = 0;
    

    const verification = (answer,correctAnswer,idDiv) =>{
        // event.preventDefault();
        
        if(answer == correctAnswer){

            alert("oui");
            if (typeof(Storage) !== "undefined") {
                // Store
                if(sessionStorage.getItem("valeurDesQuestiones") == null){
                    sessionStorage.setItem("valeurDesQuestiones", valChaqueQuestion);
                }else{

                    valQuestiontotal = parseFloat(sessionStorage.getItem("valeurDesQuestiones"));
                    valQuestiontotal = valQuestiontotal + valChaqueQuestion;
                    sessionStorage.setItem("valeurDesQuestiones", valQuestiontotal);

                };
                if(parseFloat(sessionStorage.getItem("valeurDesQuestiones")) == 100){
                    sessionStorage.setItem("Badge", "le premier");
                    //partie d'evoi mail
                }else if((parseFloat(sessionStorage.getItem("valeurDesQuestiones")) < 100) && (parseFloat(sessionStorage.getItem("valeurDesQuestiones")) >= 80)){
                    sessionStorage.setItem("Badge", "le deuxième");
                }else if((parseFloat(sessionStorage.getItem("valeurDesQuestiones")) < 80)){
                    sessionStorage.setItem("Badge", "le troisième");
                }

            } else {
                alert("Sorry, your browser does not support Web Storage...");
            }
        }else{
            alert("non");

            if (typeof(Storage) !== "undefined") {
                // Store
                sessionStorage.setItem("namcaat", catEssais);
                sessionStorage.setItem("statustest", "Le test n'a pas été terminé car vous l'avez manqué");
                if (localStorage.getItem("NombreError"+catEssais) == null) {
                    localStorage.setItem("NombreError"+catEssais, 1);
                } else {
                    var nombreErrorEssay = localStorage.getItem("NombreError"+catEssais);
                    nombreErrorEssay = parseInt(nombreErrorEssay) + 1;
                    localStorage.setItem("NombreError"+catEssais, nombreErrorEssay);
                }
            } else {
                alert("Sorry, your browser does not support Web Storage...");
            };
            if(parseFloat(sessionStorage.getItem("valeurDesQuestiones")) == 100){
                sessionStorage.setItem("Badge", "le premier");
                //partie d'evoi mail
            }else if((parseFloat(sessionStorage.getItem("valeurDesQuestiones")) < 100) && (parseFloat(sessionStorage.getItem("valeurDesQuestiones")) >= 80)){
                sessionStorage.setItem("Badge", "le deuxième");
            }else if((parseFloat(sessionStorage.getItem("valeurDesQuestiones")) < 80)){
                sessionStorage.setItem("Badge", "le troisième");
            }
            
        }        
        setTimeout("document.getElementById('"+nombrequstion+"').style.display = 'none'", 1000);

        idQuestion2 = sessionStorage.getItem("idQuestionlangue")
        if(idQuestion2 >2){
            console.log(" idDiv : "+ nombrequstion);
            console.log(" idQuestion2 : "+ idQuestion2);
            setTimeout("document.getElementById('"+idQuestion2+"').style.display = 'none'", 1000);
            idQuestion2 = idQuestion2 - 1;
            sessionStorage.setItem("idQuestionlangue", idQuestion2);
            console.log(" idQuestion2 - 1 : "+ idQuestion2);
            setTimeout("document.getElementById('"+idQuestion2+"').style.display = 'block'", 1000);
            setButtonText("Ignorer La Question et Passer à La Question Suivante");

        }else if(idQuestion2 == 2){
            console.log(" idDiv : "+ nombrequstion);
            console.log(" idQuestion : "+ idQuestion2);
            setTimeout("document.getElementById('"+idQuestion2+"').style.display = 'none'", 1000);
            setTimeout("document.getElementById('"+nombrequstion+"').style.display = 'none'", 1000);
            idQuestion2 = idQuestion2 - 1;
            sessionStorage.setItem("idQuestionlangue", idQuestion2);
            console.log(" idQuestion - 1 : "+ idQuestion2);
            setTimeout("document.getElementById('"+idQuestion2+"').style.display = 'block'", 1000);
            setButtonText("Ignorer La Question et Passer à La Resultat");

        }else if(idQuestion2 == 1){
            setTimeout("document.getElementById('"+idQuestion2+"').style.display = 'none'", 1000);
            setTimeout("document.getElementById('"+nombrequstion+"').style.display = 'none'", 1000);
            setTimeout("document.getElementById('divFintest').style.display = 'block'", 1000);
            sessionStorage.setItem("idQuestionlangue", 100);
            var nbesaay = sessionStorage.getItem("nam"+catEssais);
            nbesaay = parseInt(nbesaay) + 1
            sessionStorage.setItem("nam"+catEssais, nbesaay);
            if (typeof(Storage) !== "undefined") {
                // Store
                sessionStorage.setItem("namcaat", catEssais);
                sessionStorage.setItem("statustest", "Vous avez passé l'examen jusqu'à la fin");
                if(parseInt(sessionStorage.getItem("nam"+catEssais))  >= 3){
                    if(parseInt(localStorage.getItem("NombreError"+catEssais)) >= 4){
                        localStorage.setItem("StatusResultattest"+catEssais, "N'a pas réussi le test et ne pas le droit pour repasser le test car vous avez terminé le nombre autorisé de 3 tentatives !!")
                    }else if(localStorage.getItem("NombreError"+catEssais) === 0){
                        localStorage.setItem("StatusResultattest"+catEssais, "tu n'as pas réussi , tout les réponses est faux et ne pas le droit pour repasser le test car vous avez terminé le nombre autorisé de 3 tentatives !!")
                    }else{
                        localStorage.setItem("StatusResultattest"+catEssais, "Vous avez réussi l'examen avec succes (Vous êtes dans la premier plasse)")
                    }
                }else{
                    var a = parseInt(localStorage.getItem("NombreError"+catEssais));
                    if(a == 0){
                        localStorage.setItem("StatusResultattest"+catEssais, "tu n'as pas réussi , tout les réponses est faux , Vous avez le droit de réessayer")
                    }else if(a >= 4){
                        localStorage.setItem("StatusResultattest"+catEssais, "tu n'as pas réussi , Vous avez le droit de réessayer")
                    }
                    else{
                        localStorage.setItem("StatusResultattest"+catEssais, "tu es réussi l'examen mais pas dans la premier plasse , Vous êtes autorisé à repasser le test si vous le souhaitez car vous avez nes pas terminé le nombre autorisé de 3 tentatives")
                    }
                }
                

            } else {
                alert("Sorry, your browser does not support Web Storage...");
            }
            if (typeof window !== 'undefined') {
                window.location.href = "http://localhost:3000/ResultatTest";
            }
        }
    };
    const nextquestion = () =>{

        
        if(parseFloat(sessionStorage.getItem("valeurDesQuestiones")) == 100){
            sessionStorage.setItem("Badge", "le premier");
            //partie d'evoi mail
        }else if((parseFloat(sessionStorage.getItem("valeurDesQuestiones")) < 100) && (parseFloat(sessionStorage.getItem("valeurDesQuestiones")) >= 80)){
            sessionStorage.setItem("Badge", "le deuxième");
        }else if((parseFloat(sessionStorage.getItem("valeurDesQuestiones")) < 80)){
            sessionStorage.setItem("Badge", "le troisième");
        }



        setTimeout("document.getElementById('"+nombrequstion+"').style.display = 'none'", 1000);

        idQuestion2 = sessionStorage.getItem("idQuestionlangue")
        if(idQuestion2 >2){
            console.log(" idDiv : "+ nombrequstion);
            console.log(" idQuestion2 : "+ idQuestion2);
            setTimeout("document.getElementById('"+idQuestion2+"').style.display = 'none'", 1000);
            idQuestion2 = idQuestion2 - 1;
            sessionStorage.setItem("idQuestionlangue", idQuestion2);
            console.log(" idQuestion2 - 1 : "+ idQuestion2);
            setTimeout("document.getElementById('"+idQuestion2+"').style.display = 'block'", 1000);
            setButtonText("Ignorer La Question et Passer à La Question Suivante");
        }else if(idQuestion2 == 2){
            console.log(" idDiv : "+ nombrequstion);
            console.log(" idQuestion : "+ idQuestion2);
            setTimeout("document.getElementById('"+idQuestion2+"').style.display = 'none'", 1000);
            setTimeout("document.getElementById('"+nombrequstion+"').style.display = 'none'", 1000);
            idQuestion2 = idQuestion2 - 1;
            sessionStorage.setItem("idQuestionlangue", idQuestion2);
            console.log(" idQuestion - 1 : "+ idQuestion2);
            setTimeout("document.getElementById('"+idQuestion2+"').style.display = 'block'", 1000);
            setButtonText("Ignorer La Question et Passer à La Resultat");

        }else if(idQuestion2 == 1){
            setTimeout("document.getElementById('"+idQuestion2+"').style.display = 'none'", 1000);
            setTimeout("document.getElementById('"+nombrequstion+"').style.display = 'none'", 1000);
            setTimeout("document.getElementById('divFintest').style.display = 'block'", 1000);

            sessionStorage.setItem("idQuestionlangue", 100);
            var nbesaay = sessionStorage.getItem("nam"+catEssais);
            nbesaay = parseInt(nbesaay) + 1
            sessionStorage.setItem("nam"+catEssais, nbesaay);

            if (typeof window !== 'undefined') {
                window.location.href = "http://localhost:3000/ResultatTest";
            }
            if (typeof(Storage) !== "undefined") {
                // Store
                sessionStorage.setItem("namcaat", catEssais);
                sessionStorage.setItem("statustest", "Vous avez passé l'examen jusqu'à la fin");
            } else {
                alert("Sorry, your browser does not support Web Storage...");
            }
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



            <h1>Évaluation</h1>

            {categorieList.map((val,key) =>{
                var questiones = [val.question_1, val.question_2, val.question_3, val.question_4 ,val.question_5, val.question_6, val.question_7, val.question_8, val.question_9, val.question_10];
                var positionQuestion = 0;
                
                questiones.forEach(myFunction);
                function myFunction(item) {
                    if(item != ""){
                        nombrequstion ++;
                    }
                }

                const textid = "Question";
                positionQuestion = nombrequstion +1;
                idQuestion = nombrequstion;
                catEssais = val.categorieName;

                valChaqueQuestion = 100 / parseInt(nombrequstion);
                if (typeof(Storage) !== "undefined") {
                    // Store
                    if(sessionStorage.getItem("idQuestionlangue") == 100){
                        sessionStorage.setItem("idQuestionlangue", nombrequstion);
                        setTimeout("document.getElementById('"+sessionStorage.getItem("idQuestionlangue")+"').style.display = 'block'");
                    }else if(sessionStorage.getItem("idQuestionlangue") == null){
                        sessionStorage.setItem("idQuestionlangue" , nombrequstion);
                        setTimeout("document.getElementById('"+sessionStorage.getItem("idQuestionlangue")+"').style.display = 'block'");
                    }
                    else{
                        setTimeout("document.getElementById('"+sessionStorage.getItem("idQuestionlangue")+"').style.display = 'block'");
                    }
                } else {
                    alert("Sorry, your browser does not support Web Storage...");
                }

                if (typeof(Storage) !== "undefined") {
                    // Store
                    if(sessionStorage.getItem("nam"+catEssais) == 3){
                        alert("farga3ti 3 : " + sessionStorage.getItem("nam"+catEssais) +" (>3)Vous n'avez pas le droit de passer le test");
                        if (typeof window !== 'undefined') {
                            window.location.href = "http://localhost:3000/ResultatTest";
                        }
                    }else if(sessionStorage.getItem("nam"+catEssais) == null){
                        sessionStorage.setItem("nam"+catEssais, 0);
                    }else{
                        alert("Nombre d'essai dans c'est catégorie : "+sessionStorage.getItem("nam"+catEssais) + " (<=3)vous avez le droit pour passer le testé");
                    }
                } else {
                    alert("Sorry, your browser does not support Web Storage...");
                }


                return (

                    <div key={key} >
                        <h1>nom de catégorie : {val.categorieName}</h1>
                        <h1>nombre desaay : {sessionStorage.getItem("nam"+catEssais)}</h1>
                        <h1 id="nanao"></h1>
                        <h1>nombrequstion : {nombrequstion}</h1>
                        <br />

                        {/* Start Q1 */}

                        <div className="card categorie3"  id={positionQuestion = positionQuestion -1}>
                            <div className="card-header">
                                <h1><strong>Question 1 / {nombrequstion}</strong> {val.question_1} </h1>
                            </div>
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-warning">
                                                    <br />
                                                    <h1>A</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_1_question_1,val.reponse_question_1,positionQuestion)} className="btn btn-outline-warning buttonReponce">{val.reponse_faux_1_question_1}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-success">
                                                    <br />
                                                    <h1>B</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_2_question_1,val.reponse_question_1,positionQuestion)} className="btn btn-outline-success buttonReponce">{val.reponse_faux_2_question_1}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-info">
                                                    <br />
                                                    <h1>C</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_3_question_1,val.reponse_question_1,positionQuestion)} className="btn btn-outline-info buttonReponce">{val.reponse_faux_3_question_1}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-danger">
                                                    <br />
                                                    <h1>D</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_4_question_1,val.reponse_question_1,positionQuestion)} className="btn btn-outline-danger buttonReponce">{val.reponse_faux_4_question_1}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <hr />
                                            <button type="button" onClick={()=> nextquestion()} className="btn btn-secondary buttonReponce">{buttonText} <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Q1 */}

                        {/* <div className="categorie2" id={positionQuestion = positionQuestion -1}>
                            <h1>question_1 :{val.question_1} </h1>
                            <button onClick={()=> verification(val.reponse_faux_1_question_1,val.reponse_question_1,positionQuestion)}>{val.reponse_faux_1_question_1}</button>
                            <button onClick={()=> verification(val.reponse_faux_2_question_1,val.reponse_question_1,positionQuestion)}>{val.reponse_faux_2_question_1}</button><br/>
                            <button onClick={()=> verification(val.reponse_faux_3_question_1,val.reponse_question_1,positionQuestion)}>{val.reponse_faux_3_question_1}</button>
                            <button onClick={()=> verification(val.reponse_faux_4_question_1,val.reponse_question_1,positionQuestion)}>{val.reponse_faux_4_question_1}</button>
                            <br />
                            <button onClick={()=> nextquestion()}>{buttonText}</button>
                        </div> */}
                        {/* <div class="card"  id={positionQuestion = positionQuestion -1}>
                            <div class="card-header">Qeustion 1 / {nombrequstion}</div>
                            <div class="card-body">
                                <div class="row">
                                    <h1>question_1 :{val.question_1} </h1>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                
                                                <button onClick={()=> verification(val.reponse_faux_1_question_1,val.reponse_question_1,positionQuestion)}  class="btn btn-primary" >{val.reponse_faux_1_question_1}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                
                                                <button onClick={()=> verification(val.reponse_faux_2_question_1,val.reponse_question_1,positionQuestion)} class="btn btn-primary" >{val.reponse_faux_2_question_1}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Special title treatment</h5>
                                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                                <button onClick={()=> verification(val.reponse_faux_3_question_1,val.reponse_question_1,positionQuestion)} class="btn btn-primary" >{val.reponse_faux_3_question_1}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Special title treatment</h5>
                                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                                <button onClick={()=> verification(val.reponse_faux_4_question_1,val.reponse_question_1,positionQuestion)} class="btn btn-primary" >{val.reponse_faux_4_question_1}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* Start Q2 */}

                        <div className="card categorie3"  id={positionQuestion = positionQuestion -1}>
                            <div className="card-header">
                                <h1><strong>Question 2 / {nombrequstion}</strong> {val.question_2} </h1>
                            </div>
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-warning">
                                                    <br />
                                                    <h1>A</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_1_question_2,val.reponse_question_2,positionQuestion)} className="btn btn-outline-warning buttonReponce">{val.reponse_faux_1_question_2}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-success">
                                                    <br />
                                                    <h1>B</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_2_question_2,val.reponse_question_2,positionQuestion)} className="btn btn-outline-success buttonReponce">{val.reponse_faux_2_question_2}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-info">
                                                    <br />
                                                    <h1>C</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_3_question_2,val.reponse_question_2,positionQuestion)} className="btn btn-outline-info buttonReponce">{val.reponse_faux_3_question_2}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-danger">
                                                    <br />
                                                    <h1>D</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_4_question_2,val.reponse_question_2,positionQuestion)} className="btn btn-outline-danger buttonReponce">{val.reponse_faux_4_question_2}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <hr />
                                            <button type="button" onClick={()=> nextquestion()} className="btn btn-secondary buttonReponce">{buttonText} <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Q2 */}

                        {/* <br /> */}
                        {/* <div className="categorie2" id={positionQuestion = positionQuestion -1}>
                            <h1>question_2 :{val.question_2} </h1>
                            <button onClick={()=> verification(val.reponse_faux_1_question_2,val.reponse_question_2,positionQuestion)}>{val.reponse_faux_1_question_2}</button>
                            <button onClick={()=> verification(val.reponse_faux_2_question_2,val.reponse_question_2,positionQuestion)}>{val.reponse_faux_2_question_2}</button><br/>
                            <button onClick={()=> verification(val.reponse_faux_3_question_2,val.reponse_question_2,positionQuestion)}>{val.reponse_faux_3_question_2}</button>
                            <button onClick={()=> verification(val.reponse_faux_4_question_2,val.reponse_question_2,positionQuestion)}>{val.reponse_faux_4_question_2}</button>
                            <br />
                            <button onClick={()=> nextquestion()}>{buttonText}</button>
                        </div> */}
                        {/* <br /> */}

                        {/* Start Q3 */}

                        <div className="card categorie3"  id={positionQuestion = positionQuestion -1}>
                            <div className="card-header">
                                <h1><strong>Question 3 / {nombrequstion}</strong> {val.question_3} </h1>
                            </div>
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-warning">
                                                    <br />
                                                    <h1>A</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_1_question_3,val.reponse_question_3,positionQuestion)} className="btn btn-outline-warning buttonReponce">{val.reponse_faux_1_question_3}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-success">
                                                    <br />
                                                    <h1>B</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_2_question_3,val.reponse_question_3,positionQuestion)} className="btn btn-outline-success buttonReponce">{val.reponse_faux_2_question_3}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-info">
                                                    <br />
                                                    <h1>C</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_3_question_3,val.reponse_question_3,positionQuestion)} className="btn btn-outline-info buttonReponce">{val.reponse_faux_3_question_3}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-danger">
                                                    <br />
                                                    <h1>D</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_4_question_3,val.reponse_question_3,positionQuestion)} className="btn btn-outline-danger buttonReponce">{val.reponse_faux_4_question_3}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <hr />
                                            <button type="button" onClick={()=> nextquestion()} className="btn btn-secondary buttonReponce">{buttonText} <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Q2 */}


                        {/* <div className="categorie2" id={positionQuestion = positionQuestion -1}>
                            <h1>question_3 :{val.question_3} </h1>
                            <button onClick={()=> verification(val.reponse_faux_1_question_3,val.reponse_question_3,positionQuestion)}>{val.reponse_faux_1_question_3}</button>
                            <button onClick={()=> verification(val.reponse_faux_2_question_3,val.reponse_question_3,positionQuestion)}>{val.reponse_faux_2_question_3}</button><br/>
                            <button onClick={()=> verification(val.reponse_faux_3_question_3,val.reponse_question_3,positionQuestion)}>{val.reponse_faux_3_question_3}</button>
                            <button onClick={()=> verification(val.reponse_faux_4_question_3,val.reponse_question_3,positionQuestion)}>{val.reponse_faux_4_question_3}</button>
                            <br />
                            <button onClick={()=> nextquestion()}>{buttonText}</button>
                        </div> */}
                        {/* <br /> */}
                        {/* Start Q4 */}

                        <div className="card categorie3"  id={positionQuestion = positionQuestion -1}>
                            <div className="card-header">
                                <h1><strong>Question 4 / {nombrequstion}</strong> {val.question_4} </h1>
                            </div>
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-warning">
                                                    <br />
                                                    <h1>A</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_1_question_4,val.reponse_question_4,positionQuestion)} className="btn btn-outline-warning buttonReponce">{val.reponse_faux_1_question_4}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-success">
                                                    <br />
                                                    <h1>B</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_2_question_4,val.reponse_question_4,positionQuestion)} className="btn btn-outline-success buttonReponce">{val.reponse_faux_2_question_4}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-info">
                                                    <br />
                                                    <h1>C</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_3_question_4,val.reponse_question_4,positionQuestion)} className="btn btn-outline-info buttonReponce">{val.reponse_faux_3_question_4}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-danger">
                                                    <br />
                                                    <h1>D</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_4_question_4,val.reponse_question_4,positionQuestion)} className="btn btn-outline-danger buttonReponce">{val.reponse_faux_4_question_4}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <hr />
                                            <button type="button" onClick={()=> nextquestion()} className="btn btn-secondary buttonReponce">{buttonText} <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Q4 */}
                        {/* <div className="categorie2" id={positionQuestion = positionQuestion -1}>
                            <h1>question_4 :{val.question_4} </h1>
                            <button onClick={()=> verification(val.reponse_faux_1_question_4,val.reponse_question_4,positionQuestion)}>{val.reponse_faux_1_question_4}</button>
                            <button onClick={()=> verification(val.reponse_faux_2_question_4,val.reponse_question_4,positionQuestion)}>{val.reponse_faux_2_question_4}</button><br/>
                            <button onClick={()=> verification(val.reponse_faux_3_question_4,val.reponse_question_4,positionQuestion)}>{val.reponse_faux_3_question_4}</button>
                            <button onClick={()=> verification(val.reponse_faux_4_question_4,val.reponse_question_4,positionQuestion)}>{val.reponse_faux_4_question_4}</button>
                            <br />
                            <button onClick={()=> nextquestion()}>{buttonText}</button>
                        </div> */}
                        {/* <br /> */}
                        {/* Start Q5 */}

                        <div className="card categorie3"  id={positionQuestion = positionQuestion -1}>
                            <div className="card-header">
                                <h1><strong>Question 5 / {nombrequstion}</strong> {val.question_5} </h1>
                            </div>
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-warning">
                                                    <br />
                                                    <h1>A</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_1_question_5,val.reponse_question_5,positionQuestion)} className="btn btn-outline-warning buttonReponce">{val.reponse_faux_1_question_5}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-success">
                                                    <br />
                                                    <h1>B</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_2_question_5,val.reponse_question_5,positionQuestion)} className="btn btn-outline-success buttonReponce">{val.reponse_faux_2_question_5}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-info">
                                                    <br />
                                                    <h1>C</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_3_question_5,val.reponse_question_5,positionQuestion)} className="btn btn-outline-info buttonReponce">{val.reponse_faux_3_question_5}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-danger">
                                                    <br />
                                                    <h1>D</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_4_question_5,val.reponse_question_5,positionQuestion)} className="btn btn-outline-danger buttonReponce">{val.reponse_faux_4_question_5}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <hr />
                                            <button type="button" onClick={()=> nextquestion()} className="btn btn-secondary buttonReponce">{buttonText} <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Q5 */}
                        {/* <div className="categorie2" id={positionQuestion = positionQuestion -1}>
                            <h1>question_5 :{val.question_5} </h1>
                            <button onClick={()=> verification(val.reponse_faux_1_question_5,val.reponse_question_5,positionQuestion)}>{val.reponse_faux_1_question_5}</button>
                            <button onClick={()=> verification(val.reponse_faux_2_question_5,val.reponse_question_5,positionQuestion)}>{val.reponse_faux_2_question_5}</button><br/>
                            <button onClick={()=> verification(val.reponse_faux_3_question_5,val.reponse_question_5,positionQuestion)}>{val.reponse_faux_3_question_5}</button>
                            <button onClick={()=> verification(val.reponse_faux_4_question_5,val.reponse_question_5,positionQuestion)}>{val.reponse_faux_4_question_5}</button>
                            <br />
                            <button onClick={()=> nextquestion()}>{buttonText}</button>
                        </div> */}
                        {/* <br /> */}
                        {/* Start Q6 */}

                        <div className="card categorie3"  id={positionQuestion = positionQuestion -1}>
                            <div className="card-header">
                                <h1><strong>Question 6 / {nombrequstion}</strong> {val.question_6} </h1>
                            </div>
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-warning">
                                                    <br />
                                                    <h1>A</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_1_question_6,val.reponse_question_6,positionQuestion)} className="btn btn-outline-warning buttonReponce">{val.reponse_faux_1_question_6}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-success">
                                                    <br />
                                                    <h1>B</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_2_question_6,val.reponse_question_6,positionQuestion)} className="btn btn-outline-success buttonReponce">{val.reponse_faux_2_question_6}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-info">
                                                    <br />
                                                    <h1>C</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_3_question_6,val.reponse_question_6,positionQuestion)} className="btn btn-outline-info buttonReponce">{val.reponse_faux_3_question_6}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-danger">
                                                    <br />
                                                    <h1>D</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_4_question_6,val.reponse_question_6,positionQuestion)} className="btn btn-outline-danger buttonReponce">{val.reponse_faux_4_question_6}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <hr />
                                            <button type="button" onClick={()=> nextquestion()} className="btn btn-secondary buttonReponce">{buttonText} <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Q6 */}
                        {/* <div className="categorie2" id={positionQuestion = positionQuestion -1}>
                            <h1>question_6 :{val.question_6} </h1>
                            <button onClick={()=> verification(val.reponse_faux_1_question_6,val.reponse_question_6,positionQuestion)}>{val.reponse_faux_1_question_6}</button>
                            <button onClick={()=> verification(val.reponse_faux_2_question_6,val.reponse_question_6,positionQuestion)}>{val.reponse_faux_2_question_6}</button><br/>
                            <button onClick={()=> verification(val.reponse_faux_3_question_6,val.reponse_question_6,positionQuestion)}>{val.reponse_faux_3_question_6}</button>
                            <button onClick={()=> verification(val.reponse_faux_4_question_6,val.reponse_question_6,positionQuestion)}>{val.reponse_faux_4_question_6}</button>
                            <br />
                            <button onClick={()=> nextquestion()}>{buttonText}</button>
                        </div> */}
                        {/* <br /> */}
                        {/* Start Q7 */}

                        <div className="card categorie3"  id={positionQuestion = positionQuestion -1}>
                            <div className="card-header">
                                <h1><strong>Question 7 / {nombrequstion}</strong> {val.question_7} </h1>
                            </div>
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-warning">
                                                    <br />
                                                    <h1>A</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_1_question_7,val.reponse_question_7,positionQuestion)} className="btn btn-outline-warning buttonReponce">{val.reponse_faux_1_question_7}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-success">
                                                    <br />
                                                    <h1>B</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_2_question_7,val.reponse_question_7,positionQuestion)} className="btn btn-outline-success buttonReponce">{val.reponse_faux_2_question_7}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-info">
                                                    <br />
                                                    <h1>C</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_3_question_7,val.reponse_question_7,positionQuestion)} className="btn btn-outline-info buttonReponce">{val.reponse_faux_3_question_7}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-danger">
                                                    <br />
                                                    <h1>D</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_4_question_7,val.reponse_question_7,positionQuestion)} className="btn btn-outline-danger buttonReponce">{val.reponse_faux_4_question_7}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <hr />
                                            <button type="button" onClick={()=> nextquestion()} className="btn btn-secondary buttonReponce">{buttonText} <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Q7 */}
                        {/* <div className="categorie2" id={positionQuestion = positionQuestion -1}>
                            <h1>question_7 :{val.question_7} </h1>
                            <button onClick={()=> verification(val.reponse_faux_1_question_7,val.reponse_question_7,positionQuestion)}>{val.reponse_faux_1_question_7}</button>
                            <button onClick={()=> verification(val.reponse_faux_2_question_7,val.reponse_question_7,positionQuestion)}>{val.reponse_faux_2_question_7}</button><br/>
                            <button onClick={()=> verification(val.reponse_faux_3_question_7,val.reponse_question_7,positionQuestion)}>{val.reponse_faux_3_question_7}</button>
                            <button onClick={()=> verification(val.reponse_faux_4_question_7,val.reponse_question_7,positionQuestion)}>{val.reponse_faux_4_question_7}</button>
                            <br />
                            <button onClick={()=> nextquestion()}>{buttonText}</button>
                        </div> */}
                        {/* <br /> */}
                        {/* Start Q8 */}

                        <div className="card categorie3"  id={positionQuestion = positionQuestion -1}>
                            <div className="card-header">
                                <h1><strong>Question 8 / {nombrequstion}</strong> {val.question_8} </h1>
                            </div>
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-warning">
                                                    <br />
                                                    <h1>A</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_1_question_8,val.reponse_question_8,positionQuestion)} className="btn btn-outline-warning buttonReponce">{val.reponse_faux_1_question_8}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-success">
                                                    <br />
                                                    <h1>B</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_2_question_8,val.reponse_question_8,positionQuestion)} className="btn btn-outline-success buttonReponce">{val.reponse_faux_2_question_8}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-info">
                                                    <br />
                                                    <h1>C</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_3_question_8,val.reponse_question_8,positionQuestion)} className="btn btn-outline-info buttonReponce">{val.reponse_faux_3_question_8}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-danger">
                                                    <br />
                                                    <h1>D</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_4_question_8,val.reponse_question_8,positionQuestion)} className="btn btn-outline-danger buttonReponce">{val.reponse_faux_4_question_8}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <hr />
                                            <button type="button" onClick={()=> nextquestion()} className="btn btn-secondary buttonReponce">{buttonText} <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Q8 */}
                        {/* <div className="categorie2" id={positionQuestion = positionQuestion -1}>
                            <h1>question_8 :{val.question_8} </h1>
                            <button onClick={()=> verification(val.reponse_faux_1_question_8,val.reponse_question_8,positionQuestion)}>{val.reponse_faux_1_question_8}</button>
                            <button onClick={()=> verification(val.reponse_faux_2_question_8,val.reponse_question_8,positionQuestion)}>{val.reponse_faux_2_question_8}</button><br/>
                            <button onClick={()=> verification(val.reponse_faux_3_question_8,val.reponse_question_8,positionQuestion)}>{val.reponse_faux_3_question_8}</button>
                            <button onClick={()=> verification(val.reponse_faux_4_question_8,val.reponse_question_8,positionQuestion)}>{val.reponse_faux_4_question_8}</button>
                            <br />
                            <button onClick={()=> nextquestion()}>{buttonText}</button>
                        </div> */}
                        {/* <br /> */}
                        {/* Start Q9 */}

                        <div className="card categorie3"  id={positionQuestion = positionQuestion -1}>
                            <div className="card-header">
                                <h1><strong>Question 9 / {nombrequstion}</strong> {val.question_9} </h1>
                            </div>
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-warning">
                                                    <br />
                                                    <h1>A</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_1_question_9,val.reponse_question_9,positionQuestion)} className="btn btn-outline-warning buttonReponce">{val.reponse_faux_1_question_9}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-success">
                                                    <br />
                                                    <h1>B</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_2_question_9,val.reponse_question_9,positionQuestion)} className="btn btn-outline-success buttonReponce">{val.reponse_faux_2_question_9}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-info">
                                                    <br />
                                                    <h1>C</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_3_question_9,val.reponse_question_9,positionQuestion)} className="btn btn-outline-info buttonReponce">{val.reponse_faux_3_question_9}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-danger">
                                                    <br />
                                                    <h1>D</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_4_question_9,val.reponse_question_9,positionQuestion)} className="btn btn-outline-danger buttonReponce">{val.reponse_faux_4_question_9}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <hr />
                                            <button type="button" onClick={()=> nextquestion()} className="btn btn-secondary buttonReponce">{buttonText} <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Q9 */}
                        {/* <div className="categorie2" id={positionQuestion = positionQuestion -1}>
                            <h1>question_9 :{val.question_9} </h1>
                            <button onClick={()=> verification(val.reponse_faux_1_question_9,val.reponse_question_9,positionQuestion)}>{val.reponse_faux_1_question_9}</button>
                            <button onClick={()=> verification(val.reponse_faux_2_question_9,val.reponse_question_9,positionQuestion)}>{val.reponse_faux_2_question_9}</button><br/>
                            <button onClick={()=> verification(val.reponse_faux_3_question_9,val.reponse_question_9,positionQuestion)}>{val.reponse_faux_3_question_9}</button>
                            <button onClick={()=> verification(val.reponse_faux_4_question_9,val.reponse_question_9,positionQuestion)}>{val.reponse_faux_4_question_9}</button>
                            <br />
                            <button onClick={()=> nextquestion()}>{buttonText}</button>
                        </div> */}
                        {/* <br /> */}
                        {/* Start Q10 */}

                        <div className="card categorie3"  id={positionQuestion = positionQuestion -1}>
                            <div className="card-header">
                                <h1><strong>Question 10 / {nombrequstion}</strong> {val.question_10} </h1>
                            </div>
                            <div className="card-body">
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-warning">
                                                    <br />
                                                    <h1>A</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_1_question_10,val.reponse_question_10,positionQuestion)} className="btn btn-outline-warning buttonReponce">{val.reponse_faux_1_question_10}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-success">
                                                    <br />
                                                    <h1>B</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_2_question_10,val.reponse_question_10,positionQuestion)} className="btn btn-outline-success buttonReponce">{val.reponse_faux_2_question_10}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row"> 
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-info">
                                                    <br />
                                                    <h1>C</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_3_question_10,val.reponse_question_10,positionQuestion)} className="btn btn-outline-info buttonReponce">{val.reponse_faux_3_question_10}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-3" >
                                            <div className="row g-0">
                                                <div className="col-md-4 bg-danger">
                                                    <br />
                                                    <h1>D</h1>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <button type="button" onClick={()=> verification(val.reponse_faux_4_question_10,val.reponse_question_10,positionQuestion)} className="btn btn-outline-danger buttonReponce">{val.reponse_faux_4_question_10}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className="col">
                                            <hr />
                                            <button type="button" onClick={()=> nextquestion()} className="btn btn-secondary buttonReponce">{buttonText} <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="col"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Q10 */}
                        {/* <div className="categorie2" id={positionQuestion = positionQuestion -1}>
                            <h1>question_10 :{val.question_10} </h1>
                            <button onClick={()=> verification(val.reponse_faux_1_question_10,val.reponse_question_10,positionQuestion)}>{val.reponse_faux_1_question_10}</button>
                            <button onClick={()=> verification(val.reponse_faux_2_question_10,val.reponse_question_10,positionQuestion)}>{val.reponse_faux_2_question_10}</button><br/>
                            <button onClick={()=> verification(val.reponse_faux_3_question_10,val.reponse_question_10,positionQuestion)}>{val.reponse_faux_3_question_10}</button>
                            <button onClick={()=> verification(val.reponse_faux_4_question_10,val.reponse_question_10,positionQuestion)}>{val.reponse_faux_4_question_10}</button>
                            <br />
                            <button onClick={()=> nextquestion()}>{buttonText}</button>
                        </div> */}
                        <div className="categorie2" id="divFintest">
                            <h1>Fin test</h1>
                        </div>


                        {/* this is example */}
                        {/* <div class="card">
                            <div class="card-header">Qeustion</div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Special title treatment</h5>
                                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Special title treatment</h5>
                                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                
                );
            })}

            {/* end hama9 read */}

        </div>
    );
}
export default Evaluation;
