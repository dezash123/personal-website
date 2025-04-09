import Image from 'next/image'

export const metadata = {
  title: 'About Me | Desmond Mehta',
  description: 'Learn more about Desmond Mehta, a Computer Science student at Yale University studying embedded systems and hardware design',
}

export default function AboutPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="rounded-lg overflow-hidden mb-6 aspect-square relative bg-dark-300">
              <div className="absolute inset-0 flex items-center justify-center text-light-400 text-2xl">
                Profile Photo
              </div>
              {/* Uncomment and use your image 
              <Image
                src="/about-me.jpg"
                alt="About Me"
                fill
                className="object-cover"
              />
              */}
            </div>
            
            <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
              <h2 className="text-xl font-semibold mb-4 text-light-100">Quick Info</h2>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="font-semibold w-24 text-light-300">Name:</span>
                  <span className="text-light-400">Desmond Mehta</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24 text-light-300">Location:</span>
                  <span className="text-light-400">New Haven, CT</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24 text-light-300">Email:</span>
                  <span className="text-light-400">desmond.mehta@yale.edu</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24 text-light-300">GitHub:</span>
                  <a href="https://github.com/dezash123" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dezash123</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Education</h2>
            <div className="space-y-8">
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
                <h3 className="text-xl font-semibold text-secondary">Yale University</h3>
                <p className="text-light-400 mb-2">B.S. + M.S. in Computer Science • 2024 - 2028</p>
                <p className="text-light-400">
                  Currently pursuing a combined Bachelor's and Master's degree in Computer Science with a focus on 
                  embedded systems and hardware design.
                </p>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
                <h3 className="text-xl font-semibold text-secondary">Cold Spring Harbor High School</h3>
                <p className="text-light-400 mb-2">4.22 GPA, 1580 SAT • 2020 - 2024</p>
                <p className="text-light-400">
                  Relevant coursework: Linear Algebra, Multivariable Calculus, Physics C (Mechanics and E&M), 12x AP's with 5's
                </p>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
                <h3 className="text-xl font-semibold text-secondary">Columbia University Science Honors Program</h3>
                <p className="text-light-400 mb-2">New York, NY • 2022 - 2024</p>
                <p className="text-light-400">
                  Attended weekend classes in Relativity, Quantum Computing, and Materials Science.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Research Experience</h2>
            <div className="space-y-8">
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
                <h3 className="text-xl font-semibold text-secondary">Asynchronous VLSI and Architecture Group</h3>
                <p className="text-light-400 mb-2">Yale University • January 2025 - Present</p>
                <p className="text-light-400">
                  Designing silicon modules for inter-chip communication.
                </p>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
                <h3 className="text-xl font-semibold text-secondary">Bioelectronics Lab</h3>
                <p className="text-light-400 mb-2">Feinstein Institutes for Medical Research • Summer 2024</p>
                <p className="text-light-400">
                  Improved custom radio transmission protocol for rodent-implanted neural recording device.
                </p>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
                <h3 className="text-xl font-semibold text-secondary">Neural Acoustic Processing Lab</h3>
                <p className="text-light-400 mb-2">Columbia Engineering • Summer 2023</p>
                <p className="text-light-400">
                  Worked with MATLAB signal processing to develop methods for minimally-invasive neural implants.
                </p>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
                <h3 className="text-xl font-semibold text-secondary">Human Brain Mapping Lab</h3>
                <p className="text-light-400 mb-2">Feinstein Institutes for Medical Research • Summer 2022 - March 2023</p>
                <p className="text-light-400">
                  Worked with Python signal processing to study the role of Sharp Wave-Ripples in memory.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Activities</h2>
            <div className="space-y-8">
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
                <h3 className="text-xl font-semibold text-secondary">Yale Undergraduate Aerospace Association</h3>
                <p className="text-light-400 mb-2">CubeSat Architecture and Security Board Lead • Fall 2024 - Present</p>
                <p className="text-light-400">
                  Migrating satellite codebase from C to C++ and planning of higher-level design paradigms.
                  Designing new STM32-based motherboard for liquid-fuel rocket; rewriting codebase in Rust.
                </p>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
                <h3 className="text-xl font-semibold text-secondary">FIRST Robotics Competition</h3>
                <p className="text-light-400 mb-2">Build Captain, CAD Captain, Field Technician • 2021-2024</p>
                <p className="text-light-400">
                  Qualified for World Championship in 2023 and 2024.
                  Developed autonomous targeting system in addition to leading design in 2024.
                </p>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
                <h3 className="text-xl font-semibold text-secondary">Lemelson-MIT InvenTeam</h3>
                <p className="text-light-400 mb-2">Team Founder and Technical Lead • Summer 2023 - Spring 2024</p>
                <p className="text-light-400">
                  One of 8 teams nationally selected to receive $7500 grant.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Contact Me</h2>
            <div className="bg-dark-200 p-6 rounded-lg shadow-lg border border-dark-100">
              <p className="text-light-300 mb-4">
                I'm always open to discussing research opportunities, innovative projects, and technical collaborations. 
                The best way to reach me is via email:
              </p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-secondary font-semibold">Email:</span>
                <a href="mailto:desmond.mehta@yale.edu" className="text-light-100 hover:text-primary">desmond.mehta@yale.edu</a>
              </div>
              <p className="text-light-400">
                Please feel free to reach out for research opportunities, project collaborations, or any questions about my work.
                I'll do my best to respond within 48 hours.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 