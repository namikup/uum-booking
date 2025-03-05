import  { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center space-y-6 max-w-3xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          Crafting Digital
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"> Experiences</span>
        </h1>
        <p className="text-xl text-gray-600">
          Full-stack developer specializing in building exceptional digital experiences
        </p>
        <div className="animate-bounce mt-12">
          <ArrowDown className="mx-auto" size={24} />
        </div>
      </div>
    </section>
  );
}
 