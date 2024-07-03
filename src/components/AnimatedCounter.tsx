"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: any) => {
  return (
    <div className='w-full'>
      <CountUp end={amount} decimals={2} decimal='.' prefix='$' />
    </div>
  );
};

export default AnimatedCounter;
