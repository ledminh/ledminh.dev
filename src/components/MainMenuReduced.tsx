export default function MainMenuReduced() {
  return (
    <Wrapper>
      <Button />
    </Wrapper>
  );
}

/************************
 * Styles
 */

const Wrapper = (props: { children: React.ReactNode }) => (
  <div className="absolute flex items-center justify-center top-2 left-2">
    {props.children}
  </div>
);

/**************************
 * Component(s)
 */

const Button = () => (
  <button className="p-2 text-gray-600 bg-orange-400 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-900 hover:ring-2 hover:ring-orange-900">
    <MenuIcon />
  </button>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-gray-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
