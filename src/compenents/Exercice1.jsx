import React, {useState} from "react";

const Exercice1 = () =>{
    const [titreClasse,setTitreCLasse] = useState("");
    const [titre, setTitre] = useState("titre")
    const titreChange = () =>{
        if (titre == "titre") {
            setTitreCLasse('bg-primary text-danger')
            setTitre("titre modifié")
        }else{
            setTitre("titre")
            setTitreCLasse("")
        }
        
        
    }
    return(
        <section titreClasse="container">
            <h1 className={titreClasse}>{titre}</h1>
            <p>liste de proprité et méthode à rerouver dans la documentation:</p>
            <ul>
                <li>innerText</li>
                <li>innerHtml</li>
                <li>querySelector()</li>
                <li>queryselectorAll()</li>
                <li>style</li>
                <li>classList</li>
            </ul>
            <p>Changerle contenu</p>
            <p>Changer la couleur du h2 la couleur que vous voulez</p>
            <p>Ajoutez une class background-bootstrap au h2</p>
            <button onClick={titreChange}  className='btn btn-danger'>click</button>
        </section>
        )
}

export default Exercice1