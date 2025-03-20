import React from "react";

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-6">
         <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
         <h3 className="text-xl font-bold  mb-2">Full-Stack E-Commerce Web Application</h3>
          <p className="text-gray-400 mb-4">
            I build scalable and dynamic e-commerce web applications that
            provide seamless shopping experiences. The frontend is designed
            using React.js for interactive UI, Tailwind CSS for responsive
            design, and Bootstrap for component styling. On the backend, I use
            Node.js and Express.js to build secure and efficient APIs, MongoDB
            for storing products and user data, and Firebase for user
            authentication. The application is deployed on AWS, ensuring high
            scalability, and Docker is used for containerization. Additionally,
            AI-powered features like product recommendations based on user
            preferences can be integrated.
          </p>
          <div className="">
            {[
              "React",
              "MongoDB",
              "Firebase",
              "AWS",
              "Express.js",
              "Node.js",
            ].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-500  py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ---</a>
          </div>
         </div>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-8">
         <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
         <h3 className="text-xl font-bold  mb-2">Full-Stack Task Management App</h3>
          <p className="text-gray-400 mb-4">
          I create robust task management applications that help teams stay organized and efficient. The frontend is powered by React.js and styled with Tailwind CSS for responsiveness. For the backend, I use Node.js and Express.js to create APIs that manage tasks, users, and authentication. MongoDB is used for flexible data storage, while GraphQL provides efficient querying of task data. AWS is utilized for hosting and storage, and the app is containerized using Docker for easy deployment. I also integrate AI to provide smart task suggestions and prioritization based on user behavior.
          </p>
          <div className="">
            {[
              "React",
              "Tailwind",
              "MongoDB",
              "GraphQL",
              "Docker",
              "AWS",
              "Express.js",
              "Node.js",
            ].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-500  py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ---</a>
          </div>
         </div>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-8">
         <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
         <h3 className="text-xl font-bold  mb-2">Full-Stack Blog Platform with Admin Panel</h3>
          <p className="text-gray-400 mb-4">
          I design feature-rich blogging platforms where users can create and manage their content. The frontend is built with React.js and Tailwind CSS for a smooth and modern user interface. The backend is built with Node.js and Express.js, using PostgreSQL and Prisma ORM for efficient relational database management. The admin panel allows for content management and user roles. The application is hosted on AWS for scalability and security, while Docker ensures consistency in the development environment. AI features like content suggestions and SEO optimization are integrated to enhance the user experience.
          </p>
          <div className="">
            {[
              "React",
              "Tailwind",
              "Prisma",
              "PostgreQL",
              "AWS",
              "Express.js",
              "Node.js",
            ].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-500  py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ---</a>
          </div>
         </div>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-8">
         <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
         <h3 className="text-xl font-bold  mb-2">Full-Stack Blog Platform with Admin Panel</h3>
          <p className="text-gray-400 mb-4">
          I develop interactive social media applications where users can share posts, like and comment, and manage their profiles. The frontend is built with React.js and Tailwind CSS for a modern, responsive UI. On the backend, I use Node.js and Express.js for managing APIs, MongoDB for storing user data, posts, and comments, and Firebase for real-time data syncing and authentication. The app is containerized using Docker and hosted on AWS for scalable deployment. AI features such as personalized content feeds and friend recommendations are integrated to provide a unique user experience.
          </p>
          <div className="">
            {[
              "React",
              "Tailwind",
              "MongoDB",
              "Firebase",
              "Docker",
              "AWS",
              "Express.js",
              "Node.js",
            ].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-500  py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ---</a>
          </div>
         </div>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-8">
         <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
         <h3 className="text-xl font-bold  mb-2">Full-Stack Real-Time Chat Application</h3>
          <p className="text-gray-400 mb-4">
          I create real-time chat applications that allow users to send messages instantly. The frontend uses React.js for the dynamic chat interface, with Tailwind CSS for responsive design. The backend is built with Node.js and Express.js, using WebSockets for real-time messaging and MongoDB for storing messages and user data. Firebase handles user authentication, while AWS and Docker are used for hosting and containerization. An AI chatbot can be added to automatically respond to common user queries and improve user interaction.
          </p>
          <div className="">
            {[
              "React",
              "Tailwind",
              "MongoDB",
              "Firebase",
              "Docker",
              "AWS",
              "WebSockets",
              "Express.js",
              "Node.js",
            ].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-500  py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ---</a>
          </div>
         </div>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-8">
         <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
         <h3 className="text-xl font-bold  mb-2">Full-Stack Portfolio Website with Blog & Contact Form</h3>
          <p className="text-gray-400 mb-4">
          I design personal portfolio websites that showcase your skills and projects in an interactive format. The frontend is developed using React.js for a smooth user experience and Tailwind CSS for styling. The backend is powered by Node.js and Express.js to handle form submissions, blog post management, and contact data storage in MongoDB. The portfolio is hosted on AWS, and Docker is used to ensure consistency across development environments. AI-powered chatbots can be integrated to engage visitors, answer questions, and enhance the site’s interactivity.
          </p>
          <div className="">
            {[
              "React",
              "Tailwind",
              "MongoDB",
              "Docker",
              "AWS",
              "Express.js",
              "Node.js",
            ].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-500  py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project ---</a>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
