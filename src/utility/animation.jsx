export const slideUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: -100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay,                 
            },
        },
    };   
};


export const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  export const slideIn = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };
  
  export const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 1.2
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  export  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };