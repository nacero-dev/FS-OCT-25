"use client";

function Menu({ menuItems = [] }) {
  return (
    <nav className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <ul className="flex space-x-6">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.path}
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              {item.name}
            </a>

            {item.submenu && (
              <ul className="absolute left-0 mt-2 w-40 bg-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.submenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={sub.path}
                      className="block px-4 py-2 hover:bg-gray-600 rounded-md"
                    >
                      {sub.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
