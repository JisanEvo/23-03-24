import { useState } from "react";


const StatefulForm = () => {
    const [email, setEmail] = useState(null)
    const [password,setPassword]=useState(null);
    const [error,setError]=useState(' ')
    const handleSubmit = e => {
        e.preventDefault()
        console.log(email)
        if(password.length<6){
            setError(`password must be Six Character`)
        }
        console.log(password)
    }



    const handleEmailSubmit = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
        e.preventDefault()
    }
    const handlePasswordSubmit=e=>{
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailSubmit}

                    type="email" name="email" id="" />

                <br />
                <input onChange={handlePasswordSubmit}

                type="password" name="password" id="" required/>

                <br />
                <input type="submit" value="Submit" />
                {
                    error&&<p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;