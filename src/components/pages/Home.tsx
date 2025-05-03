import { motion } from 'framer-motion';
import Header from '../Header/Header';
import Section from '../Header/Section/Section';

export default function HomeSection({ id }: { id: string }) {
  return (
    <section id={id} className="snap-start h-screen w-full">
      <Header>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-full flex flex-col"
        >
          <Section />
        </motion.div>
      </Header>
    </section>
  );
}