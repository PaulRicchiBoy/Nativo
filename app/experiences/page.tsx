// app/experiences/page.tsx
import ExperiencesGrid from "@/components/ExperiencesGrid";
import { getExperiences } from "@/config/experiences";

interface PageProps {
  params: {
    lang: "es" | "en";
  };
}

export default function ExperiencesPage({ params: { lang } }: PageProps) {
  const experiences = getExperiences(lang);

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        {lang === "es" ? "Nuestras Experiencias" : "Our Experiences"}
      </h1>
      <ExperiencesGrid experiences={getExperiences(lang)} />
    </main>
  );
}
