import React, { useState } from "react";
import { skills } from "../../data/skills";
import * as LucideIcons from "lucide-react";

type SkillCategory = "all" | "frontend" | "backend" | "tools" | "other";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const categories = [
    { id: "all", label: "Todos" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Herramientas" },
    { id: "other", label: "Otros" },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Dynamic icon rendering
  const IconComponent = (iconName: string) => {
    const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>;
    const Icon = icons[iconName];
    return Icon ? <Icon size={24} /> : null;
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Mis Habilidades
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un conjunto diverso de habilidades técnicas que me permiten
            construir soluciones completas y escalables.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                activeCategory === category.id
                  ? "bg-blue-600 dark:bg-blue-500 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {IconComponent(skill.icon)}
              </div>
              <h3 className="text-center font-medium text-gray-900 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
