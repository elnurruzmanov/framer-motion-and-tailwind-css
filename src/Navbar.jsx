import React from "react";
import {
  motion,
  useCycle,
  AnimatePresence,
} from "framer-motion";

const navLink = [
  //linklar uchun array uchun object
  {
    name: "Home",
    to: "/home",
    id: 1,
  },
  {
    name: "About",
    to: "/about",
    id: 2,
  },
  {
    name: "Blog",
    to: "/blog",
    id: 3,
  },
  {
    name: "Contact",
    to: "/contact",
    id: 4,
  },
];

const navbarSituation = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const animProperties = {
  closed: {
    transition: {
      staggerChildren: 0.2, //animatsiya davomiyligi
      staggerDirection: -1, //animatsiya joylashuvi
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <main>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 230 }}
            exit={{ width: 0, transition: { delay: 0.7, duration: 0.3 } }}
          >
            <motion.div
            className='container'
            initial="closed"
            variants={animProperties}
            animate="open"
            exit="closed"
            >
           {navLink.map(({name, to, id})=>(
           <motion.a 
           key={id}
           href={to}
           whileOver={{scale:1.1}}
           variants={navbarSituation}
           >
            {name}

           </motion.a>
           ))}

              
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <button className="toggleButton" onClick={cycleOpen}>
        {open?"Yopish":"Ochish"}
      </button>
    </main>
  );
};

export default Navbar;
