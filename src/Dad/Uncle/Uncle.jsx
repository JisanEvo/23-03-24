import Cousin from "../../Cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h1>Uncle</h1>
             <section className="flex">
             <Cousin name={`Rahat`}></Cousin>
             <Cousin name={`saima`}></Cousin>
             </section>
        </div>
    );
};

export default Uncle;