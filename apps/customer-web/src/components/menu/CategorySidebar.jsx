function CategorySidebar({ categories, activeCategory, onSelect }) {
  return (
    <aside className="space-y-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`w-full rounded-md border px-4 py-2 text-left text-sm font-medium ${
            activeCategory === category
              ? "border-mint bg-mint/20 text-mintDark"
              : "border-gray-200 bg-white hover:border-mint"
          }`}
        >
          {category}
        </button>
      ))}
    </aside>
  );
}

export default CategorySidebar;
