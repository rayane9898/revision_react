import React, {useState} from "react"


const Exercice4 = () =>{
    const[count,setCount] =useState(0);
    const[block, setBlock] = useState(<div className="col-2 p-4 m-5 bg-danger">
    </div>)

    return(
        <section>
            <div className="d-flex justify-content-center">

            <div className="container col-4 p-5 m-5 mh-100 bg-warning d-flex justify-content-center">
                {count %2 ===0 ? block:""}

            </div>

            <div className="container col-4 p-5 m-5 mh-100 bg-warning d-flex justify-content-center">
                {count %2 === 1 ? block:""}
            </div>
                </div>
                
                <div className="d-flex justify-content-center">
            <button onClick={() => setCount(count + 1)} type="button col-4" class="btn btn-info m-3">Click</button>
            <button type="texte col-4" class="btn btn-info m-3">{count}</button>
            </div>
        </section>


    )
}
export default Exercice4