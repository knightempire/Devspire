import Images from './ui/images';
import { Particles } from './ui/particles';

export default function SeamlessSection() {
  return (
    <section id="seamless" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Seamless</span> Integration
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Effortlessly connect your digital ecosystem with our robust integration solutions. We ensure your platforms, tools, and workflows work together in harmony for maximum efficiency and innovation.
          </p>
        </div>
        <div className="w-full relative mt-12">
          <Images.connect className="w-full h-auto" />
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={80}
            color="#e4e4e7"
            refresh
          />
        </div>
      </div>
    </section>
  );
}
