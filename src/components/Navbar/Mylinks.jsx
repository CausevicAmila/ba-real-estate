export const links = [
  {
    name: "SALES",
    submenu: true,
    sublinks: [
      {
        //Head: "CATEGORIES",
        sublink: [
          { name: "Flat", link: "../../routes/Sales.jsx" },
          { name: "Commercial", link: "../../routes/Commercials.jsx" },
          { name: "Apartment", link: "../../routes/Apartments.jsx" },
        ],
      },
    ],
  },
  {
    name: "RENTALS",
    submenu: true,
    sublinks: [
      {
        //Head: "CATEGORIES",
        sublink: [
          { name: "Flat", link: "../../routes/Rentals.jsx" },
          { name: "Commercial", link: "../../routes/CommercialRentals.jsx" },
        ],
      },
     
    ],
  },
];
