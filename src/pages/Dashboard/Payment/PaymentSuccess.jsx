import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [ searchParams ] =useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const seessionId = searchParams.get('session_id');
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        if(seessionId){
            axiosSecure.patch( `/payment-success?session_id=${seessionId}`).then(res => {
                console.log(res.data)
                setPaymentInfo({
                    transactionId: res.data.transactionId,
                    trackingId: res.data.trackingId
                })
            })
        }
    }, [seessionId, axiosSecure])
    return (
        <div>
            <h2 className="text-4xl">Payment successful</h2>
            <p>Your TransactionId: {paymentInfo.transactionId}</p>
            <p>Your Parcel Tracking id: {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;