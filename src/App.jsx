
import './App.css'
import Grandpa from './Grandpa/Grandpa'
// import HookForm from './HookForm/HookForm'
// import RefFrom from './RefForm/RefFrom'
// import Reusable from './Reusable/Reusable'
// import SimpleForm from './SimpleForm/SimpleForm'
// import StatefulForm from './StatefulForm/StatefulForm'

function App() {

//   const handleSignUpSubmit = data=> {
//  console.log(`sign up data`,data)
// }

// const handleProfileUpdateSubmit = data => {
// console.log(`update data`,data)
// }


  return (
    <>

      <h1>Vite + React</h1>
      <Grandpa></Grandpa>
{/* <SimpleForm></SimpleForm> */}
{/* <StatefulForm></StatefulForm> */}

{/* <RefFrom></RefFrom> */}
{/* <HookForm></HookForm> */}

{/* <Reusable formTitle={`Sign Up`}
 handleSubmit={handleSignUpSubmit}
>
  <div>
    <h2>Sign Up</h2>
    <p>Please Sign Up to Provide your Information</p>
  </div>
</Reusable>
<Reusable formTitle={`Profile Update`} submitBtnText='Update' handleSubmit={handleProfileUpdateSubmit}>
  <div><h2>Update Your Profile</h2>
  <p>Always Keep Your Profile Update</p>

  </div>
</Reusable> */}
    </>


  )
}

export default App
