import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-r from-dark-300 to-dark-400">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hello, I'm <span className="gradient-text">Desmond</span>
              </h1>
              <p className="text-xl mb-8 text-light-300">
                I'm a Computer Science student at Yale University pursuing a combined B.S. + M.S. degree. 
                I'm passionate about robotics, embedded systems, computer hardware design, and research in bioelectronics and VLSI.
              </p>
              <div className="flex gap-4">
                <Link href="/projects" className="btn btn-primary">
                  View My Work
                </Link>
                <Link href="/about" className="btn bg-dark-100 border border-dark-100 hover:bg-dark-200">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-dark-100 shadow-lg">
                {/* Replace with your image */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center text-white text-6xl font-bold">
                  DM
                </div>
                {/* Uncomment and use your image
                <Image
                  src="/profile.jpg"
                  alt="Desmond Mehta"
                  fill
                  className="object-cover"
                />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-dark-200 rounded-lg shadow-lg border border-dark-100">
              <h3 className="text-xl font-semibold mb-4 text-primary">Programming</h3>
              <ul className="space-y-2 text-light-300">
                <li>• Embedded C / C++ / Rust</li>
                <li>• Python / MATLAB Research</li>
              </ul>
            </div>
            
            <div className="p-6 bg-dark-200 rounded-lg shadow-lg border border-dark-100">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Hardware Design</h3>
              <ul className="space-y-2 text-light-300">
                <li>• Mechatronics and robotics design</li>
                <li>• Custom PCB design for drones</li>
                <li>• VLSI module design</li>
                <li>• Neural implant development</li>
                <li>• SmartWatch development</li>
              </ul>
            </div>
            
            <div className="p-6 bg-dark-200 rounded-lg shadow-lg border border-dark-100">
              <h3 className="text-xl font-semibold mb-4 text-accent">Design Experience</h3>
              <ul className="space-y-2 text-light-300">
                <li>• Onshape for 3D modeling</li>
                <li>• Solidworks for mechanical design</li>
                <li>• Fusion360 for complex assembly</li>
                <li>• KiCad for electronic schematics</li>
                <li>• Magic VLSI for chip design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-dark-300">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold gradient-text">Featured Projects</h2>
            <Link href="/projects" className="text-primary hover:underline">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-200 rounded-lg overflow-hidden shadow-lg border border-dark-100">
              <div className="h-48 bg-dark-400 relative">
                <div className="absolute inset-0 flex items-center justify-center text-light-400">
                  Custom Drone Project
                </div>
                {/* Uncomment and use your image
                <Image
                  src="/project1.jpg"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">FPV Drone Development</h3>
                <p className="text-light-400 mb-4">
                  Designed a custom motherboard for an FPV drone and programmed it in Rust, including drivers and control systems.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-primary/20 text-primary py-1 px-2 rounded-full">Rust</span>
                  <span className="text-xs bg-secondary/20 text-secondary py-1 px-2 rounded-full">KiCad</span>
                </div>
                <a href="#" className="mt-4 inline-block text-primary hover:underline">Learn More →</a>
              </div>
            </div>

            <div className="bg-dark-200 rounded-lg overflow-hidden shadow-lg border border-dark-100">
              <div className="h-48 bg-dark-400 relative">
                <div className="absolute inset-0 flex items-center justify-center text-light-400">
                  Combat Robotics
                </div>
                {/* Uncomment and use your image
                <Image
                  src="/project2.jpg"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary">Combat Robotics</h3>
                <p className="text-light-400 mb-4">
                  Designed two robots for the NHRL Combat Robotics Competition, implementing mechanical, electrical, and control systems.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs bg-accent/20 text-accent py-1 px-2 rounded-full">Solidworks</span>
                  <span className="text-xs bg-primary/20 text-primary py-1 px-2 rounded-full">C++</span>
                </div>
                <a href="#" className="mt-4 inline-block text-secondary hover:underline">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Research Experience</h2>
          
          <div className="space-y-8">
            <div className="bg-dark-200 rounded-lg p-6 shadow-lg border border-dark-100">
              <h3 className="text-xl font-semibold text-primary mb-2">Asynchronous VLSI and Architecture Group</h3>
              <p className="text-sm text-light-400 mb-4">Yale University · January 2025 - Present</p>
              <p className="text-light-300">Designing silicon modules for inter-chip communication.</p>
            </div>
            
            <div className="bg-dark-200 rounded-lg p-6 shadow-lg border border-dark-100">
              <h3 className="text-xl font-semibold text-secondary mb-2">Bioelectronics Lab</h3>
              <p className="text-sm text-light-400 mb-4">Feinstein Institutes for Medical Research · Summer 2024</p>
              <p className="text-light-300">Improved custom radio transmission protocol for rodent-implanted neural recording device.</p>
            </div>
            
            <div className="bg-dark-200 rounded-lg p-6 shadow-lg border border-dark-100">
              <h3 className="text-xl font-semibold text-accent mb-2">Neural Acoustic Processing Lab</h3>
              <p className="text-sm text-light-400 mb-4">Columbia Engineering · Summer 2023</p>
              <p className="text-light-300">Worked with MATLAB signal processing to develop methods for minimally-invasive neural implants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Interested in working together?</h2>
          <p className="text-xl mb-8 text-light-300 max-w-2xl mx-auto">
            I'm always open to discussing research opportunities, innovative projects, and technical collaborations.
          </p>
          <Link href="/about" className="btn bg-dark-200 text-light-100 border border-primary hover:bg-dark-100">
            Let's Connect
          </Link>
        </div>
      </section>
    </div>
  )
} 