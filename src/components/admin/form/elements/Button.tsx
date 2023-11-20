export default function Button(props: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
