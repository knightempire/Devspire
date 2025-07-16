import Ballpit from './background/Ballpit';

const TECHNOLOGY_LOGOS = [
  "https://img.icons8.com/color/48/000000/html-5.png",
  "https://img.icons8.com/color/48/000000/css3.png",
  "https://img.icons8.com/color/48/000000/javascript.png",
  "https://img.icons8.com/color/48/000000/typescript.png",
  "https://img.icons8.com/color/48/000000/tailwindcss.png",
  "https://img.icons8.com/color/48/000000/bootstrap.png",
  "https://img.icons8.com/plasticine/48/000000/react.png",
  "https://img.icons8.com/color/48/000000/vite.png",
  "https://img.icons8.com/color/48/000000/nextjs.png",
  "https://img.icons8.com/color/48/000000/nodejs.png",
  "https://img.icons8.com/color/48/000000/express.png",
  "https://img.icons8.com/color/48/000000/django.png",
  "https://img.icons8.com/color/48/000000/flask.png",
  "https://img.icons8.com/color/48/000000/mysql-logo.png",
  "https://img.icons8.com/color/48/000000/postgreesql.png",
  "https://img.icons8.com/color/48/000000/mongodb.png",
  "https://img.icons8.com/color/48/000000/firebase.png",
  "https://img.icons8.com/officel/48/000000/php-logo.png",
  "https://img.icons8.com/color/48/000000/azure-1.png",
  "https://img.icons8.com/color/48/000000/amazon-web-services.png",
  "https://img.icons8.com/color/48/000000/google-cloud.png",
  "https://img.icons8.com/color/48/000000/nginx.png",
  "https://img.icons8.com/color/48/000000/ubuntu.png",
  "https://img.icons8.com/color/48/000000/python.png",
  "https://img.icons8.com/color/48/000000/c-programming.png",
  "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  "https://img.icons8.com/color/48/000000/golang.png",
  "https://img.icons8.com/color/48/000000/kotlin.png",
  "https://img.icons8.com/color/48/000000/android-studio.png"
];

const TECHNOLOGY_TAGS = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'TypeScript',
  'MongoDB', 'MySQL', 'Python', 'Java', 'AWS', 'Azure', 'GCP'
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative w-full flex items-center justify-center min-h-[800px]   overflow-hidden">
        
      {/* Ballpit as animated background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Ballpit
          count={100}
          gravity={0.3}
          colors={[0xffc107, 0x2196f3, 0x4caf50]}
          ambientColor={0xffffff}
          ambientIntensity={0.8}
          lightIntensity={150}
          textures={TECHNOLOGY_LOGOS}
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Technology</h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          We build modern, stylish, and interactive websites using the latest technologies. Our solutions combine beautiful design, smooth animations, and robust engineering to deliver digital experiences that engage and inspire.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          {TECHNOLOGY_TAGS.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-gray-800/70 border border-gray-700">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
