import { useState } from "react";
import { useActionData } from "react-router-dom";


const HookForm = () => {
    const [name,handleNameChnage]=useState(`Jisan`)
    const handleSubmit=e=>{
        console.log(`hook form`,name)
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChnage}  type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />

                <br />
                <input type="password" name="password" id="" />

                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;