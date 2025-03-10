

const techStack = [
  { name: "HTML", src: "/img/html.png" },
  { name: "CSS", src: "/img/css.png" },
  { name: "JavaScript", src: "/img/javascript.png" },
  { name: "React", src: "/img/react.png" },
  { name: "Next.js", src: "/img/nextjs.png" },
  { name: "Tailwind CSS", src: "/img/tailwind.png" },
  { name: "Node.js", src: "/img/node.png" },
  { name: "MongoDB", src: "/img/mongodb.png" },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-4 gap-6 justify-items-center">
      {techStack.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center">
          <Image src={tech.src} alt={tech.name} width={60} height={60} />
          <p className="mt-2 text-sm text-white">{tech.name}</p>
        </div>
      ))}
    </div>
  );
}