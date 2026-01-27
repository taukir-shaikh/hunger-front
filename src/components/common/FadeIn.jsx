import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    {...props}
  >
    {children}
  </motion.div>
);

export default FadeIn;
