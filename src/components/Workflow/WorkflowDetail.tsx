import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import { getWorkflowById } from './workflow.utils';
import { Workflow } from './workflow.types';



export default function WorkflowDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const workflows = t('workflows', { returnObjects: true }) as Workflow[];
  const workflow = getWorkflowById(workflows, id!);

  if (!workflow) {
    return (
      <section className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
        <p>Workflow not found</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-gray-200 px-6 sm:px-10 py-16 font-roboto">

      {/* HERO */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-16 relative"
      >
        <div className="absolute top-0 right-0">
          <LanguageSelector />
        </div>

        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-lime-500/20 text-lime-300 text-sm font-bebas tracking-wide">
          Automation Workflow
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {workflow.title}
        </h1>

        <p className="text-gray-400 text-lg max-w-3xl">
          {workflow.longDescription}
        </p>
      </motion.header>

      {/* IMAGE */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto mb-20"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
          <img
            src={workflow.image}
            alt={workflow.imageAlt}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>
      </motion.section>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto space-y-16">

        <Section
          title={t('workflows_texts.context')}
          content={workflow.context}
        />

        <Section
          title={t('workflows_texts.objective')}
          content={workflow.objective}
        />

        <Section title={t('workflows_texts.flow')}>
          <ul className="space-y-4 list-decimal list-inside text-gray-300">
            {workflow.flow.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </Section>

        <Section title={t('workflows_texts.stack')}>
          <div className="flex flex-wrap gap-3">
            {workflow.stack.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-lime-400 text-lime-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>

        <Section
          title={t('workflows_texts.result')}
          content={workflow.result}
        />
      </div>
    </section>
  );
}


/* ---------- Subcomponente ---------- */

function Section({
  title,
  content,
  children,
}: {
  title: string;
  content?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-white mb-4">
        {title}
      </h2>

      {content && (
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          {content}
        </p>
      )}

      {children}
    </motion.section>
  );
}
