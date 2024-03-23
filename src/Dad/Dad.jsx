import React from 'react';
import MySelf from './MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Brother/Sister';

const Dad = ({asset}) => {
    return (
        <div>
            <h1>Dad</h1>
            <section className='flex'>
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;