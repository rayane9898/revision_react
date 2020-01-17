import React, {useState} from "react";


const Exercice3= () => {
    const [titreH2,setTitreh2] = useState(' inconnu')
    const click = (e) =>{
        setTitreh2(e.target.previousElementSibling.value)
        e.target.previousElementSibling.value = ""
    }

    return(
        <section>
            <h2>Welcome {titreH2}</h2>
            <p>
                <span>écrivez dans l'input ci-dessous le nom de la personne que vous voulez acceuillir</span>
                <span>lorsque vous cliquez sur le bouton "go" le nom que vous avez ajouter dans l'input sera alors mis dans le span du h2 et l'input sera alors vidé du tout contenu. Attention, interdictiond e toucher à 'html</span>
            </p>
            <input type="text"/>
            <button onClick={click}>go</button>
        </section>
    )
}


export default Exercice3