import Presentation from './Presentation';
import IconList from './IconList';
import ScrollWrapper from '../../ui/ScrollWrapper';

export default function Section() {
  return (
    <section id="Home" className="flex-grow flex flex-col items-center justify-center w-full gap-6 px-4 sm:gap-8">
      <ScrollWrapper variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}>
        <Presentation />
      </ScrollWrapper>
      
      <ScrollWrapper variants={{
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
      }} className="flex justify-center">
        <IconList />
      </ScrollWrapper>
    </section>
  );
}