import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Chakra UI" },
  { skill: "Wordpress" },
  { skill: "GitHub" },
  { skill: "Swift" },
  { skill: "Team Player" },
  { skill: "Assertive Communicator" },
  { skill: "Proactive" },
  { skill: "Tolerant" },
  { skill: "Empathic" },
  { skill: "Responsible" },
  { skill: "Honest" },
  { skill: "Easy Going" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-600 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I graduated from Instituto Tecnológico de Saltillo in 2021 with a
              BS in Computer Systems Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              In my free time I enjoy doing a variety of things such as
              listening to music, watching movies, playing softball and hanging
              out with my friends and girlfriend.
            </p>
            <br />
            <p>
              I always try to learn new things and don&apos;t settle. I strongly
              believe that if you keep on learning and working every day with
              discipline you can achieve everything you want.
            </p>
            <br />
            <p>
              As Doc Brown once said:{" "}
              <span className="text-sky-600 italic font-bold">
                &quot;If you put your mind into it, you can accomplish
                anything.&quot;
              </span>
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Hard & Soft Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
