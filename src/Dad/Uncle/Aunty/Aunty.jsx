import React, { useContext } from 'react';
import Cousin from '../../../Cousin/Cousin';
import { MoneyContext } from '../../../Grandpa/Grandpa';

const Aunty = () => {
    const[money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <h1>Aunty</h1>
            <section className='flex'>
              <Cousin name={`Lota`}></Cousin>
              <Cousin name={`Nilanjona`}></Cousin>

            </section>
            <p>Money: {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;