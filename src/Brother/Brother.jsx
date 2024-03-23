import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [money,setMoney]=useContext(MoneyContext)
    return (
        <div>
            <p>Brother</p>
<p>Money:{money}</p>
        </div>
    );
};

export default Brother;