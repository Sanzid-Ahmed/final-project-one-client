import React from "react";
import bookingIcon from "../../../assets/bookingIcon.png";

const HowItWork = () => {
  return (
    <div className="my-30">
      <h1 className="font-bold text-secondary text-3xl mb-8">How it Works</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-8">
          <img src={bookingIcon} alt="" />
          <h1 className="font-bold text-secondary mb-4 mt-6">Booking Pick & Drop</h1>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8">
          <img src={bookingIcon} alt="" />
          <h1 className="font-bold text-secondary mb-4 mt-6">Cash On Delivery</h1>
          <p>
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8">
          <img src={bookingIcon} alt="" />
          <h1 className="font-bold text-secondary mb-4 mt-6">Delivery Hub</h1>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8">
          <img src={bookingIcon} alt="" />
          <h1 className="font-bold text-secondary mb-4 mt-6">Booking SME & Corporate</h1>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
