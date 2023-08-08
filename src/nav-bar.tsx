import { useState } from "react";
import "./index.css";

export default NavBar;
var initialNavigation = [
  { name: "Home", href: "#", current: true },
  { name: "Classes", href: "#", current: false },
  { name: "Sponsors", href: "#", current: false },
  { name: "Announcements", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const [navigation, setNavigation] = useState(initialNavigation);

  function handleClick(name: string) {
    const newNavigation = navigation.map((x) => {
      x.name == name ? (x.current = true) : (x.current = false);
      return x;
    });
    setNavigation(newNavigation);
  }

  return (
    <nav className=" flex min-h-16 h-16 bg-gray-800 text-gray-400 rounded-lg overflow-x-auto scrollbar-hide [&>*]:m-auto [&>*]:px-5 [&>*]:min-w-fit">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => {
            handleClick(item.name);
          }}
          className={classNames(
            item.current
              ? "bg-gray-900 text-white py-2 rounded-md font-bold"
              : "py-2 font-bold hover:bg-gray-700 hover:text-white hover:rounded-md"
          )}
          aria-current={item.current ? "page" : undefined}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}

{
  /* <a href="/" className="">
Home
</a>
<a href="/" className="">
Classes
</a>
<a href="/" className="">
Sponsors
</a>
<a href="/" className="">
Announcements
</a>
<a href="/" className="">
About Us
</a> */
}

/* className={classNames(
  item.current
    ? "bg-gray-900 text-white"
    : "text-gray-300 hover:bg-gray-700 hover:text-white",
  "rounded-md px-3 py-2 text-sm font-medium"
)} */
