// models/project.model.ts
export interface TranslatedText {
    en: string;
    es: string;
}

export interface Project {
    name: TranslatedText;
    images: string[];
    languages: string[];
    description: TranslatedText;
    codeLink: string;
    demoLink: string;
}

