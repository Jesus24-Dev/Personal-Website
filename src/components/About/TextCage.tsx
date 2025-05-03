import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function TextCage() {
  return (
    <motion.div className="space-y-6" variants={textVariants}>
      <motion.h2 
        className="text-4xl sm:text-5xl font-bold text-slate-800 font-bebas"
        variants={textVariants}
      >
        About me
      </motion.h2>
      <motion.div className="space-y-4" variants={textVariants}>
        <motion.p 
          className="text-base md:text-lg text-slate-600 leading-relaxed font-roboto"
          variants={textVariants}
        >
          I'm a web developer focused on backend development, 
          specializing in Java (Spring Boot) and Node.js with TypeScript.
           I build secure and scalable RESTful APIs, and I also have experience 
           with frontend technologies like React and TailwindCSS. I'm skilled 
           in working with relational databases such as PostgreSQL, MySQL, and SQLite, 
           always applying best practices in data modeling. 
        </motion.p>
        <motion.p 
          className="text-base md:text-lg text-slate-600 leading-relaxed font-roboto"
          variants={textVariants}
        >
          I'm passionate about solving complex problems, writing clean code, and continuously learning and improving
        </motion.p>
      </motion.div>
    </motion.div>
  );
}