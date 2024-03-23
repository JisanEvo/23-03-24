import { useEffect, useRef } from "react";


const RefFrom = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passRef.current.value)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input defaultValue={`jisanmahmud6@gmail.com`}  ref={emailRef} type="email" name="email" id="" />

                <br />
                <input ref={passRef} type="password" name="number" id="" />

                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefFrom;