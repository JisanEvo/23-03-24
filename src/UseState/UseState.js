import { useState } from "react"

const useInputState=(defaultValue=' ')=>{
const [value,setValue]=useState(defaultValue);

 const handleChange=e=>{
    setValue(e.target.value);
 }
// return[value,handleChange]

return{
    value,
  onChange
}

}
export default useState;