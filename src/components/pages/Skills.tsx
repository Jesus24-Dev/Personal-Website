import { motion } from 'framer-motion';
import ScrollWrapper from '../ui/ScrollWrapper';
import Section from '../Skills/Section';

export default function Skills({ id }: { id: string }) {
  return (
    <section 
      id={id}
      className="snap-start w-full min-h-screen py-20 px-4 bg-white"
    >
      <ScrollWrapper variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        }
      }}>
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Section/>
        </motion.div>
      </ScrollWrapper>
    </section>
  );
}