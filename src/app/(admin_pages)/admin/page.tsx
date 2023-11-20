import Link from "next/link";

export default async function AdminPage() {
  return (
    <div>
      <ul className="flex">
        {adminSections.map((sec) => (
          <li key={sec.path}>
            <Link href={sec.path} className="border p-2 border-slate-500 hover:bg-slate-200">{sec.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const adminSections = [
  {
    title: "Projects",
    path: "/admin/projects",
  },
];
