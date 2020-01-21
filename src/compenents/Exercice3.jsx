import React, {useState} from "react";

const Exercice3= () => {
    const [titre, setTitre] = useState("")
    const unePression = (e) =>{
        // if (e.key ==='Enter') {
        //     setTitre(e.target.value)  
        // }
        setTitre(e.target.previousElementSibling.value)
    }

    return(
        <section>
            <div className="container">
            <h2>
                Welcome {titre}
            </h2>
            <p>
                <span>Ecrivez dans l'input ci-dessous le nom de la personne que vous voulez acceuillir</span>
                <span>Lorsque vous cliquez sur le "go" le nom que vous avez ajouter dans l'input sera alors mis dans le span du h2 et l'input sera alors vidé de tout contenu. Attention Interdition de toucher à l'html</
                span>
            </p>
            <input type="text" />
            <button onClick={unePression}>go</button>
            </div>
        </section>  

    )
} 
export default Exercice3
