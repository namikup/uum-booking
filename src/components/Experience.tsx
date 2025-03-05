import  { experiences } from '../data';

export default function Experience() {
  return (
    <section className="py-20" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-1/3">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-purple-600">{exp.position}</p>
                <p className="text-gray-500">{exp.period}</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 