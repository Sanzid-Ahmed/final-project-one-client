import React from 'react';
import service from "../../../assets/service.png";

const OurServices = () => {
    return (
        <div className='p-20 bg-secondary rounded-2xl'>
            <h1 className='font-bold text-center text-3xl text-white mb-4'>Our Services</h1>
            <p className='text-center text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                <div className='bg-white p-6 rounded-2xl hover:bg-primary mt-8'>
                    <div className='flex items-center justify-center'><img src={service} alt="" /></div>
                    <h3 className='text-center my-4 text-secondary font-bold text-xl'>Express  & Standard Delivery</h3>
                    <p className='text-center'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>


                <div className='bg-white p-6 rounded-2xl hover:bg-primary mt-8'>
                    <div className='flex items-center justify-center'><img src={service} alt="" /></div>
                    <h3 className='text-center my-4 text-secondary font-bold text-xl'>Nationwide Delivery</h3>
                    <p className='text-center'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>


                <div className='bg-white p-6 rounded-2xl hover:bg-primary mt-8'>
                    <div className='flex items-center justify-center'><img src={service} alt="" /></div>
                    <h3 className='text-center my-4 text-secondary font-bold text-xl'>Fulfillment Solution</h3>
                    <p className='text-center'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>


                <div className='bg-white p-6 rounded-2xl hover:bg-primary mt-8'>
                    <div className='flex items-center justify-center'><img src={service} alt="" /></div>
                    <h3 className='text-center my-4 text-secondary font-bold text-xl'>Cash on Home Delivery</h3>
                    <p className='text-center'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>


                <div className='bg-white p-6 rounded-2xl hover:bg-primary mt-8'>
                    <div className='flex items-center justify-center'><img src={service} alt="" /></div>
                    <h3 className='text-center my-4 text-secondary font-bold text-xl'>Corporate Service / Contract In Logistics</h3>
                    <p className='text-center'>Customized corporate services which includes warehouse and inventory management support.</p>
                </div>


                <div className='bg-white p-6 rounded-2xl hover:bg-primary mt-8'>
                    <div className='flex items-center justify-center'><img src={service} alt="" /></div>
                    <h3 className='text-center my-4 text-secondary font-bold text-xl'>Parcel Return</h3>
                    <p className='text-center'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;