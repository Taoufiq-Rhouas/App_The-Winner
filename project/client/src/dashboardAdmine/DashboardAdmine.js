import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function DashboardAdmine() {
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

    const [reponse_faux_1_question_1, setReponse_faux_1_question_1] = useState("");
    const [reponse_faux_2_question_1, setReponse_faux_2_question_1] = useState("");
    const [reponse_faux_3_question_1, setReponse_faux_3_question_1] = useState("");
    const [reponse_faux_4_question_1, setReponse_faux_4_question_1] = useState("");
    const [reponse_faux_1_question_2, setReponse_faux_1_question_2] = useState("");
    const [reponse_faux_2_question_2, setReponse_faux_2_question_2] = useState("");
    const [reponse_faux_3_question_2, setReponse_faux_3_question_2] = useState("");
    const [reponse_faux_4_question_2, setReponse_faux_4_question_2] = useState("");
    const [reponse_faux_1_question_3, setReponse_faux_1_question_3] = useState("");
    const [reponse_faux_2_question_3, setReponse_faux_2_question_3] = useState("");
    const [reponse_faux_3_question_3, setReponse_faux_3_question_3] = useState("");
    const [reponse_faux_4_question_3, setReponse_faux_4_question_3] = useState("");
    const [reponse_faux_1_question_4, setReponse_faux_1_question_4] = useState("");
    const [reponse_faux_2_question_4, setReponse_faux_2_question_4] = useState("");
    const [reponse_faux_3_question_4, setReponse_faux_3_question_4] = useState("");
    const [reponse_faux_4_question_4, setReponse_faux_4_question_4] = useState("");
    const [reponse_faux_1_question_5, setReponse_faux_1_question_5] = useState("");
    const [reponse_faux_2_question_5, setReponse_faux_2_question_5] = useState("");
    const [reponse_faux_3_question_5, setReponse_faux_3_question_5] = useState("");
    const [reponse_faux_4_question_5, setReponse_faux_4_question_5] = useState("");
    const [reponse_faux_1_question_6, setReponse_faux_1_question_6] = useState("");
    const [reponse_faux_2_question_6, setReponse_faux_2_question_6] = useState("");
    const [reponse_faux_3_question_6, setReponse_faux_3_question_6] = useState("");
    const [reponse_faux_4_question_6, setReponse_faux_4_question_6] = useState("");
    const [reponse_faux_1_question_7, setReponse_faux_1_question_7] = useState("");
    const [reponse_faux_2_question_7, setReponse_faux_2_question_7] = useState("");
    const [reponse_faux_3_question_7, setReponse_faux_3_question_7] = useState("");
    const [reponse_faux_4_question_7, setReponse_faux_4_question_7] = useState("");
    const [reponse_faux_1_question_8, setReponse_faux_1_question_8] = useState("");
    const [reponse_faux_2_question_8, setReponse_faux_2_question_8] = useState("");
    const [reponse_faux_3_question_8, setReponse_faux_3_question_8] = useState("");
    const [reponse_faux_4_question_8, setReponse_faux_4_question_8] = useState("");
    const [reponse_faux_1_question_9, setReponse_faux_1_question_9] = useState("");
    const [reponse_faux_2_question_9, setReponse_faux_2_question_9] = useState("");
    const [reponse_faux_3_question_9, setReponse_faux_3_question_9] = useState("");
    const [reponse_faux_4_question_9, setReponse_faux_4_question_9] = useState("");
    const [reponse_faux_1_question_10, setReponse_faux_1_question_10] = useState("");
    const [reponse_faux_2_question_10, setReponse_faux_2_question_10] = useState("");
    const [reponse_faux_3_question_10, setReponse_faux_3_question_10] = useState("");
    const [reponse_faux_4_question_10, setReponse_faux_4_question_10] = useState("");
    

    
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

      
    const addToListCategorie = () => {
        Axios.post("http://localhost:3001/api/insertCategorie", {
            categorieName:categorieName,

            question_1:question_1,
            question_2:question_2,
            question_3:question_3,
            question_4:question_4,
            question_5:question_5,
            question_6:question_6,
            question_7:question_7,
            question_8:question_8,
            question_9:question_9,
            question_10:question_10,
    
            reponse_question_1:reponse_question_1,
            reponse_question_2:reponse_question_2,
            reponse_question_3:reponse_question_3,
            reponse_question_4:reponse_question_4,
            reponse_question_5:reponse_question_5,
            reponse_question_6:reponse_question_6,
            reponse_question_7:reponse_question_7,
            reponse_question_8:reponse_question_8,
            reponse_question_9:reponse_question_9,
            reponse_question_10:reponse_question_10,

            reponse_faux_1_question_1:reponse_faux_1_question_1,
            reponse_faux_2_question_1:reponse_faux_2_question_1,
            reponse_faux_3_question_1:reponse_faux_3_question_1,
            reponse_faux_4_question_1:reponse_faux_4_question_1,
            reponse_faux_1_question_2:reponse_faux_1_question_2,
            reponse_faux_2_question_2:reponse_faux_2_question_2,
            reponse_faux_3_question_2:reponse_faux_3_question_2,
            reponse_faux_4_question_2:reponse_faux_4_question_2,
            reponse_faux_1_question_3:reponse_faux_1_question_3,
            reponse_faux_2_question_3:reponse_faux_2_question_3,
            reponse_faux_3_question_3:reponse_faux_3_question_3,
            reponse_faux_4_question_3:reponse_faux_4_question_3,
            reponse_faux_1_question_4:reponse_faux_1_question_4,
            reponse_faux_2_question_4:reponse_faux_2_question_4,
            reponse_faux_3_question_4:reponse_faux_3_question_4,
            reponse_faux_4_question_4:reponse_faux_4_question_4,
            reponse_faux_1_question_5:reponse_faux_1_question_5,
            reponse_faux_2_question_5:reponse_faux_2_question_5,
            reponse_faux_3_question_5:reponse_faux_3_question_5,
            reponse_faux_4_question_5:reponse_faux_4_question_5,
            reponse_faux_1_question_6:reponse_faux_1_question_6,
            reponse_faux_2_question_6:reponse_faux_2_question_6,
            reponse_faux_3_question_6:reponse_faux_3_question_6,
            reponse_faux_4_question_6:reponse_faux_4_question_6,
            reponse_faux_1_question_7:reponse_faux_1_question_7,
            reponse_faux_2_question_7:reponse_faux_2_question_7,
            reponse_faux_3_question_7:reponse_faux_3_question_7,
            reponse_faux_4_question_7:reponse_faux_4_question_7,
            reponse_faux_1_question_8:reponse_faux_1_question_8,
            reponse_faux_2_question_8:reponse_faux_2_question_8,
            reponse_faux_3_question_8:reponse_faux_3_question_8,
            reponse_faux_4_question_8:reponse_faux_4_question_8,
            reponse_faux_1_question_9:reponse_faux_1_question_9,
            reponse_faux_2_question_9:reponse_faux_2_question_9,
            reponse_faux_3_question_9:reponse_faux_3_question_9,
            reponse_faux_4_question_9:reponse_faux_4_question_9,
            reponse_faux_1_question_10:reponse_faux_1_question_10,
            reponse_faux_2_question_10:reponse_faux_2_question_10,
            reponse_faux_3_question_10:reponse_faux_3_question_10,
            reponse_faux_4_question_10:reponse_faux_4_question_10,
        });
    };

    
    return (
      <div className="container">  

        <h1>Gestion Catégorie</h1>
        <div className="categorie rounded-3">
          <h1>Ajouter Catégorie</h1>
          <hr />

          <div className="container">
            <div className="row">
              <div className="col-sm">
                
              </div>
              <div className="col-sm">
                <h4 className="form-label">Categorie Name:</h4>
                <input type="text" className="form-control"
                  onChange={(event) => {
                    setCategorieName(event.target.value);
                  }}
                />
              </div>
              <div className="col-sm">
                
              </div>
            </div>
        </div>

          <h1>Les questiones</h1>
          <hr />
          <div className="categorie rounded-3">
            <label>question 1:</label>
            <input type="text" 
              onChange={(event) => {
                setQuestion_1(event.target.value);
              }}
            /><br/>
            <label>Reponse question 1:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_question_1(event.target.value);
              }}
            /><br/>

            <label>Reponse_faux_1_question_1:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_1_question_1(event.target.value);
              }}
            />
            <label>Reponse_faux_2_question_1:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_2_question_1(event.target.value);
              }}
            /><br/>
            <label>Reponse_faux_3_question_1:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_3_question_1(event.target.value);
              }}
            />
            <label>Reponse_faux_4_question_1:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_4_question_1(event.target.value);
              }}
            /><br/>

          </div>
          <br/>
          <div  className="categorie rounded-3">
            <label>question 2:</label>
            <input type="text" 
              onChange={(event) => {
                setQuestion_2(event.target.value);
              }}
            /><br/>
            <label>Reponse question 2:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_question_2(event.target.value);
              }}
            /><br/>

            <label>Reponse_faux_1_question_2:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_1_question_2(event.target.value);
              }}
            />
            <label>Reponse_faux_2_question_2:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_2_question_2(event.target.value);
              }}
            /><br/>
            <label>Reponse_faux_3_question_2:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_3_question_2(event.target.value);
              }}
            />
            <label>Reponse_faux_4_question_2:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_4_question_2(event.target.value);
              }}
            /><br/>
          </div>
          <br/>
          <div  className="categorie rounded-3">
            <label>question 3:</label>
            <input type="text" 
              onChange={(event) => {
                setQuestion_3(event.target.value);
              }}
            />
            <label>Reponse question 3:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_question_3(event.target.value);
              }}
            /><br/>

            <label>Reponse_faux_1_question_3:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_1_question_3(event.target.value);
              }}
            />
            <label>Reponse_faux_2_question_3:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_2_question_3(event.target.value);
              }}
            /><br/>
            <label>Reponse_faux_3_question_3:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_3_question_3(event.target.value);
              }}
            />
            <label>Reponse_faux_4_question_3:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_4_question_3(event.target.value);
              }}
            /><br/>
          </div>
          <br/>
          <div  className="categorie rounded-3">
            <label>question 4:</label>
            <input type="text" 
              onChange={(event) => {
                setQuestion_4(event.target.value);
              }}
            />
            <label>Reponse question 4:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_question_4(event.target.value);
              }}
            /><br/>

            <label>Reponse_faux_1_question_4:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_1_question_4(event.target.value);
              }}
            />
            <label>Reponse_faux_2_question_4:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_2_question_4(event.target.value);
              }}
            /><br/>
            <label>Reponse_faux_3_question_4:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_3_question_4(event.target.value);
              }}
            />
            <label>Reponse_faux_4_question_4:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_4_question_4(event.target.value);
              }}
            /><br/>
          </div>
          <br/>
          <div  className="categorie rounded-3">
            <label>question 5:</label>
            <input type="text" 
              onChange={(event) => {
                setQuestion_5(event.target.value);
              }}
            />
            <label>Reponse question 5:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_question_5(event.target.value);
              }}
            /><br/>

            <label>Reponse_faux_1_question_5:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_1_question_5(event.target.value);
              }}
            />
            <label>Reponse_faux_2_question_5:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_2_question_5(event.target.value);
              }}
            /><br/>
            <label>Reponse_faux_3_question_5:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_3_question_5(event.target.value);
              }}
            />
            <label>Reponse_faux_4_question_5:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_4_question_5(event.target.value);
              }}
            /><br/>
          </div>
          <br/>
          <div  className="categorie rounded-3">
            <label>question 6:</label>
            <input type="text" 
              onChange={(event) => {
                setQuestion_6(event.target.value);
              }}
            />
            <label>Reponse question 6:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_question_6(event.target.value);
              }}
            /><br/>

            <label>Reponse_faux_1_question_6:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_1_question_6(event.target.value);
              }}
            />
            <label>Reponse_faux_2_question_6:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_2_question_6(event.target.value);
              }}
            /><br/>
            <label>Reponse_faux_3_question_6:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_3_question_6(event.target.value);
              }}
            />
            <label>Reponse_faux_4_question_6:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_4_question_6(event.target.value);
              }}
            /><br/>
          </div>
          <br/>
          <div  className="categorie rounded-3">
            <label>question 7:</label>
            <input type="text" 
              onChange={(event) => {
                setQuestion_7(event.target.value);
              }}
            />
            <label>Reponse question 7:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_question_7(event.target.value);
              }}
            /><br/>

            <label>Reponse_faux_1_question_7:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_1_question_7(event.target.value);
              }}
            />
            <label>Reponse_faux_2_question_7:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_2_question_7(event.target.value);
              }}
            /><br/>
            <label>Reponse_faux_3_question_7:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_3_question_7(event.target.value);
              }}
            />
            <label>Reponse_faux_4_question_7:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_4_question_7(event.target.value);
              }}
            /><br/>
          </div>
          <br/>
          <div  className="categorie rounded-3">
            <label>question 8:</label>
            <input type="text" 
              onChange={(event) => {
                setQuestion_8(event.target.value);
              }}
            />
            <label>Reponse question 8:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_question_8(event.target.value);
              }}
            /><br/>

            <label>Reponse_faux_1_question_8:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_1_question_8(event.target.value);
              }}
            />
            <label>Reponse_faux_2_question_8:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_2_question_8(event.target.value);
              }}
            /><br/>
            <label>Reponse_faux_3_question_8:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_3_question_8(event.target.value);
              }}
            />
            <label>Reponse_faux_4_question_8:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_4_question_8(event.target.value);
              }}
            /><br/>
          </div>
          <br/>
          <div  className="categorie rounded-3">
            <label>question 9:</label>
            <input type="text" 
              onChange={(event) => {
                setQuestion_9(event.target.value);
              }}
            />
            <label>Reponse question 9:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_question_9(event.target.value);
              }}
            /><br/>

            <label>Reponse_faux_1_question_9:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_1_question_9(event.target.value);
              }}
            />
            <label>Reponse_faux_2_question_9:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_2_question_9(event.target.value);
              }}
            /><br/>
            <label>Reponse_faux_3_question_9:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_3_question_9(event.target.value);
              }}
            />
            <label>Reponse_faux_4_question_9:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_4_question_9(event.target.value);
              }}
            /><br/>
          </div>
          <br/>
          <div  className="categorie rounded-3">
            <label>question 10:</label>
            <input type="text" 
              onChange={(event) => {
                setQuestion_10(event.target.value);
              }}
            />
            <label>Reponse question 10:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_question_10(event.target.value);
              }}
            /><br/>

            <label>Reponse_faux_1_question_10:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_1_question_10(event.target.value);
              }}
            />
            <label>Reponse_faux_2_question_10:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_2_question_10(event.target.value);
              }}
            /><br/>
            <label>Reponse_faux_3_question_10:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_3_question_10(event.target.value);
              }}
            />
            <label>Reponse_faux_4_question_10:</label>
            <input type="text" 
              onChange={(event) => {
                setReponse_faux_4_question_10(event.target.value);
              }}
            /><br/>
          </div>
          <br/>
          <button onClick={addToListCategorie}>Add To Categorie</button>
        </div>

        {categorieList.map((val,key) =>{
          return (
            <div key={key} className="categorie">
              <h1>{val.categorieName}</h1>
              <h1>question_1 : {val.question_1} </h1>
              <h1>reponse_question_1 : {val.reponse_question_1} </h1>
              <h1>question_2 : {val.question_2} </h1>
              <h1>reponse_question_2 : {val.reponse_question_2} </h1>
              <h1>question_3 : {val.question_3} </h1>
              <h1>reponse_question_3 : {val.reponse_question_3} </h1>
              <h1>question_4 : {val.question_4} </h1>
              <h1>reponse_question_4 : {val.reponse_question_4} </h1>
              <h1>question_5 : {val.question_5} </h1>
              <h1>reponse_question_5 : {val.reponse_question_5} </h1>
              <h1>question_6 : {val.question_6} </h1>
              <h1>reponse_question_6 : {val.reponse_question_6} </h1>
              <h1>question_7 : {val.question_7} </h1>
              <h1>reponse_question_7 : {val.reponse_question_7} </h1>
              <h1>question_8 : {val.question_8} </h1>
              <h1>reponse_question_8 : {val.reponse_question_8} </h1>
              <h1>question_9 : {val.question_9} </h1>
              <h1>reponse_question_9 : {val.reponse_question_9} </h1>
              <h1>question_10 : {val.question_10} </h1>
              <h1>reponse_question_10 : {val.reponse_question_10} </h1>

            </div>);
        })}

    </div>
  
    );
}
export default DashboardAdmine;
