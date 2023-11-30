export default function EducationList() {
  return (
    <ul className="flex flex-col gap-8">
      {Educations.map((edu) => (
        <li key={edu.id}>
          <h3 className="text-2xl font-bold">{edu.name}</h3>
          <p className="text-lg">{edu.degree}</p>
          <p className="text-lg">{edu.date}</p>
        </li>
      ))}
    </ul>
  );
}

/**************
 * Data
 */

const Educations: {
  id: string;
  name: string;
  degree: string;
  date: string;
}[] = [
  {
    id: "edu-1",
    name: "San Jose State University",
    degree: "B.S. in Computer Science",
    date: "2018 - 2020",
  },
  {
    id: "edu-2",
    name: "De Anza College",
    degree: "Associate's degree in Computer Science",
    date: "2013 - 2017",
  },
];
