export const profileData = {
  educations: [
    {
      title: 
      {
        FR: "Master spécialisé en informatique",
        EN: "Specialized Master's in Computer Science"
      },
      school:"IT University / ESTIA, Andoharanofotsy",
      period: "2025 - Present"
    },
    {
      title: {
        FR: "Licence informatique en web et design",
        EN: "Bachelor's in Computer Science with Web and Design Focus"
      },
      school: "IT University, Andoharanofotsy",
      period: "2022 - 2025"
    },
    {
      title: {
        FR: "Baccalauréat série D",
        EN: "Baccalaureate in Scientific Stream"
      },
      school: "Lycée An P'tit Pré, Mahabo",
      period: "2022"
    }
  ],
  experiences: [
    {
      company: "CT Motors",
      role: {
        FR: "Stagiaire en développement mobile",
        EN: "Intern in Mobile Development"
      },
      period: {
        FR: "Juin 2025 - Septembre 2025",
        EN: "June 2025 - September 2025"
      },
      logo: "/src/assets/ctmotors-logo.png", 
      tasks: [
        {
          FR: "Réalisation des maquettes avec Adobe XD",
          EN: "Creating mockups using Adobe XD"
        },
        {
          FR: "Exploitation de la base de données existantes revendeurs",
          EN: "Utilizing the existing reseller database"
        },
        {
          FR: "Intégration d'un backend existant sous Laravel",
          EN: "Integrating an existing backend built with Laravel"
        },
        {
          FR: "Consommation d'API basées sur OData",
          EN: "Consuming APIs based on OData"
        }
      ]
    }
  ],
  skills: {
    frontend: ["ReactJS", "Angular", "Tailwind CSS", "Flutter", "React Native"],
    backend: ["Spring Boot","Jakarta EE", "Laravel", "Node.js"],
    database: ["Oracle", "PostgreSQL", "MySQL", "MongoDB"],
    languages: [
      {
          FR: "Français (courant)",
          EN: "French (Fluent)"
      },
      {
          FR: "Anglais (technique)",
          EN: "English (Technical)"
      },
      {
          FR: "Malgache (langue maternelle)",
          EN: "Malagasy (Native)"
      }
    ],
    tools: ["Postman", "Adobe XD", "Git / GitHub", "Android Studio", "VS Code", "IntelliJ IDEA"]
  }
};