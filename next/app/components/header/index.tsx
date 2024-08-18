import Link from "next/link";

const headerList = [
  { name: "Home", path: "/" },
  { name: "Store", path: "/store" },
  { name: "About", path: "/about" },
];

const Header = () => {
  return (
    <div style={{ width: "100%" }}>
      <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
        {headerList.map((item) => (
          <li key={item.name}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
