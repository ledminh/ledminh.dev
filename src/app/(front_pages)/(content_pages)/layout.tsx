import NavigationBar from "@/components/NavigationBar";
import "@/styles/globals.css";

export default function ContentPageLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl xl:mx-auto mx-4 my-8 flex flex-col gap-8">
      <header>
        <NavigationBar />
      </header>
      <main>{props.children}</main>
    </div>
  );
}
