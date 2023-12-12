import React from 'react'

interface NavItem {
  title: string;
  link: string;
}

const NavItemsInfo = [
  { name: "Home", type: "link" },
  {
    name: "Articles",
    type: "Enter",
    items: [{ title: "Articles", link: "/article" }],
  },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About us", link: "/about" },
      { title: "Contact us", link: "/contact" },
    ],
  },
];

function Header() {

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>{/* <img className="w-16" src="" alt="logo" /> */}</div>
        <div className="lg:hidden z-50">
        </div>
      </header>
    </section>
  )
}

export default Header
