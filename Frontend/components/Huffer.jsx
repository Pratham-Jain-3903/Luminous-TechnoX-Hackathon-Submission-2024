import React from 'react';
import { motion } from 'framer-motion';

function Huffer() {
  return (
    <div className='rounded-tl-3xl rounded-tr-3xl w-full h-[50vh] py-10 bg-green-900 pt-20'>
      <div className='text border-t-2 border-b-2 text-[10vw] overflow-hidden border-zinc-500 flex whitespace-nowrap font-bold gap-8 uppercase pt-5'>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} // Adjust duration for speed
          className=''
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "100%" }} // Start from the right
          animate={{ x: "0" }} // Move to the left
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} // Same duration for continuous effect
          className=''
        >
          WE ARE OCHI WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "100%" }} // Start from the right
          animate={{ x: "0" }} // Move to the left
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }} // Same duration for continuous effect
          className=''
        >
          WE ARE OCHI WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Huffer;
