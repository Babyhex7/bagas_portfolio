import { Variants } from 'framer-motion';

// Fade In Variant
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Viewport Options
export const viewportOnce = {
  once: true,
  margin: "-50px"
};
