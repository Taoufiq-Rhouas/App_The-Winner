import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function DashboardUser() {
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

    const [categorieName, setCategorieName] = useState("");

    const [question_1, setQuestion_1] = useState("");
    const [question_2, setQuestion_2] = useState("");
    const [question_3, setQuestion_3] = useState("");
    const [question_4, setQuestion_4] = useState("");
    const [question_5, setQuestion_5] = useState("");
    const [question_6, setQuestion_6] = useState("");
    const [question_7, setQuestion_7] = useState("");
    const [question_8, setQuestion_8] = useState("");
    const [question_9, setQuestion_9] = useState("");
    const [question_10, setQuestion_10] = useState("");

    const [reponse_question_1, setReponse_question_1] = useState("");
    const [reponse_question_2, setReponse_question_2] = useState("");
    const [reponse_question_3, setReponse_question_3] = useState("");
    const [reponse_question_4, setReponse_question_4] = useState("");
    const [reponse_question_5, setReponse_question_5] = useState("");
    const [reponse_question_6, setReponse_question_6] = useState("");
    const [reponse_question_7, setReponse_question_7] = useState("");
    const [reponse_question_8, setReponse_question_8] = useState("");
    const [reponse_question_9, setReponse_question_9] = useState("");
    const [reponse_question_10, setReponse_question_10] = useState("");

    const [newCategorieName, setNewCategorieName] = useState('');

    const [newQuestion_1, setNewQuestion_1] = useState('');
    const [newQuestion_2, setNewQuestion_2] = useState('');
    const [newQuestion_3, setNewQuestion_3] = useState('');
    const [newQuestion_4, setNewQuestion_4] = useState('');
    const [newQuestion_5, setNewQuestion_5] = useState('');
    const [newQuestion_6, setNewQuestion_6] = useState('');
    const [newQuestion_7, setNewQuestion_7] = useState('');
    const [newQuestion_8, setNewQuestion_8] = useState('');
    const [newQuestion_9, setNewQuestion_9] = useState('');
    const [newQuestion_10, setNewQuestion_10] = useState('');

    const [newReponse_question_1, setNewReponse_question_1] = useState('');
    const [newReponse_question_2, setNewReponse_question_2] = useState('');
    const [newReponse_question_3, setNewReponse_question_3] = useState('');
    const [newReponse_question_4, setNewReponse_question_4] = useState('');
    const [newReponse_question_5, setNewReponse_question_5] = useState('');
    const [newReponse_question_6, setNewReponse_question_6] = useState('');
    const [newReponse_question_7, setNewReponse_question_7] = useState('');
    const [newReponse_question_8, setNewReponse_question_8] = useState('');
    const [newReponse_question_9, setNewReponse_question_9] = useState('');
    const [newReponse_question_10, setNewReponse_question_10] = useState('');

    const [categorieList,setCategorieList] = useState([]);

    useEffect (()=>{
        Axios.get('http://localhost:3001/api/readCategories').then((response)=>{
            setCategorieList(response.data)
        });
    }, [])

    const selectCategorie = (id) =>{

        if (typeof(Storage) !== "undefined") {
            // Store
            sessionStorage.setItem("IdCat", id);
        } else {
            alert("Sorry, your browser does not support Web Storage...");
        }
        if (typeof window !== 'undefined') {
            window.location.href = "http://localhost:3000/Evaluation";
        }
        
    };

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




            <h1>les catégories</h1>
            <div  className="categorie rounded-3 p-4">

                {categorieList.map((val,key) =>{
                    return (
                        
                    <div key={key}>
                        <button onClick={()=> selectCategorie(val._id)} className="btn btn-outline-success buttoncat" >{val.categorieName}</button>
                        
                    </div>);
                })}
            </div>


        


        </div>
        
    );
    // end hama9
}
export default DashboardUser;