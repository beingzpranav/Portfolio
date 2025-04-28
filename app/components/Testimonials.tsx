"use client";

const testimonials = [
  {
    id: 1,
    quote: "The project was executed with exceptional attention to detail, and the design exceeded my expectations.",
    name: "Shyavathi Sarg",
    position: "Teammate @ PhishGuard",
  },
  {
    id: 2,
    quote: "The collaboration was highly effective, resulting in outcomes that aligned perfectly with my needs.",
    name: "Katiya Singh Rawt",
    position: "Teammate",
  },
  {
    id: 3,
    quote: "The quality of work delivered was outstanding, and the turnaround time was remarkably efficient.",
    name: "Priyanka Kumar Gahlot",
    position: "Project Manager",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why people love my work!</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card relative">
              <div className="absolute -top-5 left-6 text-primary text-6xl opacity-20">
                "
              </div>
              <div className="relative z-10">
                <p className="italic text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 