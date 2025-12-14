import React from 'react';

const PaymentCancelled = () => {
    return (
        <div>
            <h2>Payment is cancelled. Pleas try again</h2>
            <Link to="/dashboard/my-parcels"><button className='btn btn-primary text-black'>Try again</button></Link>
        </div>
    );
};

export default PaymentCancelled;