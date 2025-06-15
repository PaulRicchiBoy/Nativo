// app/experiences/[id]/page.tsx
import { getExperienceById } from '@/config/experiences';

interface PageProps {
  params: {
    id: string;
    lang: 'es' | 'en';
  };
}

export default function ExperienceDetailPage({ params: { id, lang } }: PageProps) {
  const experience = getExperienceById(id, lang);

  if (!experience) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        {lang === 'es' ? 'Experiencia no encontrada' : 'Experience not found'}
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{experience.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {experience.category}
              </span>
              <span>{experience.duration}</span>
            </div>
            <p className="text-gray-700 mb-6">{experience.description}</p>
            <p className="text-2xl font-bold mb-6">${experience.price} USD</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              {lang === 'es' ? 'Reservar ahora' : 'Book Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}