import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";


const Middle = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex items-center justify-center">
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-54%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <Marquee direction='left'>
        <h1 className="text-7xl font-bold text-white px-4 items-center text-center pt-28"> Explore More || Discover More || Visualize More ||</h1>
            </Marquee>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p> */}
      </div>
    </div>
  );
};

export default Middle;

const cards = [
  {
    url: "https://images.pexels.com/photos/1115204/pexels-photo-1115204.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://images.pexels.com/photos/186100/pexels-photo-186100.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/20803576/pexels-photo-20803576/free-photo-of-portrait-photography.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://images.pexels.com/photos/20801236/pexels-photo-20801236/free-photo-of-tram.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/20957344/pexels-photo-20957344/free-photo-of-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://images.pexels.com/photos/21517554/pexels-photo-21517554/free-photo-of-ferris-wheel.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://images.pexels.com/photos/21071263/pexels-photo-21071263/free-photo-of-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Title 7",
    id: 7,
  },
];