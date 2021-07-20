import {useState} from 'react';
import './App.css';
import {Footer} from './footer';

import categories from './lib/categories.json';
import menus from './lib/menu.json';
import {MenuCard} from './menu-card';

function App() {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const changeCategory = (some: string) => {
    setCurrentCategory(some);
  };

  let filteredList =
    currentCategory === 'all'
      ? menus
      : menus.filter((item) => item.category === currentCategory);

  return (
    <>
      <header>
        <h1>Our Menu</h1>
        <div className="underline"> </div>
      </header>
      <main>
        <div className="category-container">
          {categories.map((category) => (
            <li onClick={() => changeCategory(category)} key={category}>
              {category}
            </li>
          ))}
        </div>
        <section className="menu-container">
          {filteredList.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
