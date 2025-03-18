import React from 'react'


const steps = [
    {
      step: 1,
      title: 'Project Planning & Requirements Gathering',
      description: "Understanding the project's goals, UI/UX design, and technical requirements"
    },
    {
      step: 2,
      title: 'Component-Based Development',
      description: "Breaking down the UI into reusable React components for scalability and maintainability."
    },
    {
      step: 3,
      title: 'Styling & Responsiveness',
      description: 'Implementing styles with Tailwind CSS and ensuring mobile-friendly design.'
    },
    {
      step: 4,
      title: 'API Integration & State Management',
      description: 'Connecting the frontend to APIs and managing state efficiently with tools like Redux or Context API.',
    },
    {
      step: 5,
      title: 'Performance Optimization & Testing',
      description: 'Improving load times, accessibility, and running tests using Jest or Cypress.',
    },
    {
      step: 6,
      title: 'Deployment & Maintenance',
      description: 'Deploying the application using Vercel or Netlify and ensuring updates and bug fixes.',
    },
  ];

const Process = () => {
  return (
    <section className="mt-3 bg-[#151414] p-7 rounded-lg">
        <div className='mt-4 lg:mt-7 p-3'>
        <h2 className="text-white  text-lg lg:text-3xl font-bold text-center mb-6 font-serif">My Front-End Process</h2>
        </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div key={step.step} className="bg-[#151414] p-6 rounded-lg  border-[0.8px] border-[#323232] hover:border-[#494949] transition-all">
            <h3 className="text-4xl font-bold text-white mb-3">{step.step}</h3>
            <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
            <p className="text-[#f0eaea]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process