import { Link } from "react-router-dom";

function Breadcrumb({ items }) {
  return (
    <nav className="mb-5 text-sm text-gray-700">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label}>
            {item.to && !isLast ? (
              <Link to={item.to} className="hover:text-mintDark">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-semibold" : ""}>{item.label}</span>
            )}
            {!isLast && <span className="mx-2">{" > "}</span>}
          </span>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
