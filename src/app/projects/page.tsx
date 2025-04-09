import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Projects | Desmond Mehta',
  description: 'Some things I\'ve worked on',
}

export default function ProjectsPage() {
  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl font-bold mb-4 gradient-text">My Projects</h1>
      <p className="text-xl text-light-400 mb-12">
        Here are some of the projects I've worked on. I find that the best way to learn is by doing.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 - FPV Drone */}
        <div className="bg-dark-200 rounded-lg overflow-hidden shadow-lg border border-dark-100 flex flex-col">
          <div className="h-48 bg-dark-400 relative">
            <div className="absolute inset-0 flex items-center justify-center text-light-400">
              FPV Drone Project
            </div>
            {/* Uncomment and use your image
            <Image
              src="/project1.jpg"
              alt="FPV Drone"
              fill
              className="object-cover"
            />
            */}
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-primary">Custom FPV Drone</h3>
            <p className="text-light-400 mb-4">
              Designed and built a custom motherboard for an FPV drone, then programmed the firmware in Rust 
              including drivers and control systems.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-primary/20 text-primary py-1 px-2 rounded-full">Rust</span>
              <span className="text-xs bg-secondary/20 text-secondary py-1 px-2 rounded-full">KiCad</span>
              <span className="text-xs bg-accent/20 text-accent py-1 px-2 rounded-full">Embedded Systems</span>
            </div>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <div className="flex gap-4">
              <a href="#" className="text-primary hover:underline">Documentation</a>
              <a href="#" className="text-primary hover:underline">Source Code</a>
            </div>
          </div>
        </div>
        
        {/* Project 2 - Combat Robots */}
        <div className="bg-dark-200 rounded-lg overflow-hidden shadow-lg border border-dark-100 flex flex-col">
          <div className="h-48 bg-dark-400 relative">
            <div className="absolute inset-0 flex items-center justify-center text-light-400">
              Combat Robotics
            </div>
            {/* Uncomment and use your image
            <Image
              src="/project2.jpg"
              alt="Combat Robots"
              fill
              className="object-cover"
            />
            */}
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-secondary">NHRL Combat Robots</h3>
            <p className="text-light-400 mb-4">
              Designed two robots for the NHRL Combat Robotics Competition, implementing full mechanical, 
              electrical, and software control systems.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-primary/20 text-primary py-1 px-2 rounded-full">Solidworks</span>
              <span className="text-xs bg-secondary/20 text-secondary py-1 px-2 rounded-full">C++</span>
              <span className="text-xs bg-accent/20 text-accent py-1 px-2 rounded-full">Mechatronics</span>
            </div>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <div className="flex gap-4">
              <a href="#" className="text-secondary hover:underline">Competition Results</a>
              <a href="#" className="text-secondary hover:underline">Design Files</a>
            </div>
          </div>
        </div>
        
        {/* Project 3 - Smartwatch */}
        <div className="bg-dark-200 rounded-lg overflow-hidden shadow-lg border border-dark-100 flex flex-col">
          <div className="h-48 bg-dark-400 relative">
            <div className="absolute inset-0 flex items-center justify-center text-light-400">
              Custom Smartwatch
            </div>
            {/* Uncomment and use your image
            <Image
              src="/project3.jpg"
              alt="Smartwatch"
              fill
              className="object-cover"
            />
            */}
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-accent">Custom Smartwatch</h3>
            <p className="text-light-400 mb-4">
              Developing a custom smartwatch with integrated sensors, energy-efficient display, and low-power 
              microcontroller for extended battery life.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-primary/20 text-primary py-1 px-2 rounded-full">C</span>
              <span className="text-xs bg-secondary/20 text-secondary py-1 px-2 rounded-full">PCB Design</span>
              <span className="text-xs bg-accent/20 text-accent py-1 px-2 rounded-full">IoT</span>
            </div>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <div className="flex gap-4">
              <a href="#" className="text-accent hover:underline">Project Status</a>
              <a href="#" className="text-accent hover:underline">Prototype Images</a>
            </div>
          </div>
        </div>
        
        {/* Project 4 - FIRST Robotics */}
        <div className="bg-dark-200 rounded-lg overflow-hidden shadow-lg border border-dark-100 flex flex-col">
          <div className="h-48 bg-dark-400 relative">
            <div className="absolute inset-0 flex items-center justify-center text-light-400">
              FIRST Robotics
            </div>
            {/* Uncomment and use your image
            <Image
              src="/project4.jpg"
              alt="FIRST Robotics"
              fill
              className="object-cover"
            />
            */}
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-primary">FIRST Robotics Competition</h3>
            <p className="text-light-400 mb-4">
              Served as Build Captain and CAD Captain for a FIRST Robotics Competition team, qualifying for World Championship in 2023 and 2024.
              Developed an autonomous targeting system in 2024.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-primary/20 text-primary py-1 px-2 rounded-full">Onshape</span>
              <span className="text-xs bg-secondary/20 text-secondary py-1 px-2 rounded-full">Computer Vision</span>
              <span className="text-xs bg-accent/20 text-accent py-1 px-2 rounded-full">Robotics</span>
            </div>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <div className="flex gap-4">
              <a href="#" className="text-primary hover:underline">Championship Details</a>
              <a href="#" className="text-primary hover:underline">Team Page</a>
            </div>
          </div>
        </div>

        {/* Project 5 - CubeSat */}
        <div className="bg-dark-200 rounded-lg overflow-hidden shadow-lg border border-dark-100 flex flex-col">
          <div className="h-48 bg-dark-400 relative">
            <div className="absolute inset-0 flex items-center justify-center text-light-400">
              CubeSat Project
            </div>
            {/* Uncomment and use your image
            <Image
              src="/project5.jpg"
              alt="CubeSat Project"
              fill
              className="object-cover"
            />
            */}
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-secondary">Yale CubeSat Architecture</h3>
            <p className="text-light-400 mb-4">
              Leading the CubeSat Architecture and Security Board for Yale Undergraduate Aerospace Association. 
              Migrating codebase from C to C++ and implementing improved security features.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-primary/20 text-primary py-1 px-2 rounded-full">C++</span>
              <span className="text-xs bg-secondary/20 text-secondary py-1 px-2 rounded-full">Aerospace</span>
              <span className="text-xs bg-accent/20 text-accent py-1 px-2 rounded-full">Satellite Systems</span>
            </div>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <div className="flex gap-4">
              <a href="#" className="text-secondary hover:underline">Project Details</a>
              <a href="#" className="text-secondary hover:underline">Team Page</a>
            </div>
          </div>
        </div>

        {/* Project 6 - Lemelson-MIT InvenTeam */}
        <div className="bg-dark-200 rounded-lg overflow-hidden shadow-lg border border-dark-100 flex flex-col">
          <div className="h-48 bg-dark-400 relative">
            <div className="absolute inset-0 flex items-center justify-center text-light-400">
              Lemelson-MIT InvenTeam
            </div>
            {/* Uncomment and use your image
            <Image
              src="/project6.jpg"
              alt="Lemelson-MIT InvenTeam"
              fill
              className="object-cover"
            />
            */}
          </div>
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-accent">Lemelson-MIT InvenTeam</h3>
            <p className="text-light-400 mb-4">
              Founded and led a team that was selected as one of 8 nationally to receive a $7500 grant from the 
              Lemelson-MIT Program for innovation in technology.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-primary/20 text-primary py-1 px-2 rounded-full">Innovation</span>
              <span className="text-xs bg-secondary/20 text-secondary py-1 px-2 rounded-full">Team Leadership</span>
              <span className="text-xs bg-accent/20 text-accent py-1 px-2 rounded-full">Engineering</span>
            </div>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <div className="flex gap-4">
              <a href="#" className="text-accent hover:underline">Project Details</a>
              <a href="#" className="text-accent hover:underline">Grant Information</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 