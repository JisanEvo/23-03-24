import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({ asset }) => {
    const gift=useContext(AssetContext)
    return (
        <div>
            <h5>Special For Me</h5>
            <p>{asset}</p>
            <h4>{gift}</h4>
        </div>
    );
};

export default Special;