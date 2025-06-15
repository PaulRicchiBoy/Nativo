// @/components/ExperiencesGrid.tsx
import Link from 'next/link';
import { SimplifiedExperience } from '@/config/experiences';

interface ExperiencesGridProps {
  experiences: SimplifiedExperience[];
}

export default function ExperiencesGrid({ experiences }: ExperiencesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {experiences.map((exp) => (
        <div
          key={exp.id}
          className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <img
            src={exp.image}
            alt={exp.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {exp.category}
              </span>
            </div>
            <p className="text-gray-600 mt-2">{exp.shortDescription}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold">${exp.price}</span>
              <Link
                href={`/experiences/${exp.id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
              >
                Ver detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}