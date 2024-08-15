export interface CategoryData {
  [key: string]: {
    country: string;
    overallInflationRate: string; // Added this line
    categories: { category: string; inflationRate: string }[];
  }[];
}

// Function to generate a random inflation rate between min and max
function generateRandomInflationRate(min: number, max: number) {
  return (Math.random() * (max - min) + min).toFixed(1) + "%";
}

// Updated categoryData with random inflation rates
export const categoryData: CategoryData = {
  NorthAmerica: [
    {
      country: "USA",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "Canada",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "Mexico",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "Cuba",
      overallInflationRate: generateRandomInflationRate(2.2, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(-2.6, 3.0),
        },
      ],
    },
  ],
  Europe: [
    {
      country: "Germany",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "France",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
  ],
  Asia: [
    {
      country: "China",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "India",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "Japan",
      overallInflationRate: generateRandomInflationRate(2.5, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
      ],
    },
    {
      country: "South Korea",
      overallInflationRate: generateRandomInflationRate(2.5, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
      ],
    },
    {
      country: "Indonesia",
      overallInflationRate: generateRandomInflationRate(2.5, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
      ],
    },
  ],
  Africa: [
    {
      country: "Nigeria",
      overallInflationRate: generateRandomInflationRate(4.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
      ],
    },
    {
      country: "South Africa",
      overallInflationRate: generateRandomInflationRate(4.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
      ],
    },
    {
      country: "Kenya",
      overallInflationRate: generateRandomInflationRate(4.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
      ],
    },
    {
      country: "Egypt",
      overallInflationRate: generateRandomInflationRate(4.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
      ],
    },
    {
      country: "Ethiopia",
      overallInflationRate: generateRandomInflationRate(4.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
      ],
    },
  ],
  SouthAmerica: [
    {
      country: "Brazil",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "Colombia",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "Peru",
      overallInflationRate: generateRandomInflationRate(9.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "Argentina",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
  ],
  Australia: [
    {
      country: "Australia",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "New Zealand",
      overallInflationRate: generateRandomInflationRate(2.5, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
      ],
    },
    {
      country: "Fiji",
      overallInflationRate: generateRandomInflationRate(5.0, 6.2),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(5.2, 6.4),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.0, -3.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(1.0, 4.0),
        },
      ],
    },
  ],

  Antarctica: [
    {
      country: "Paraguay",
      overallInflationRate: generateRandomInflationRate(-1.0, 2.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(1.2, 2.1),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(1.0, 3.0),
        },
      ],
    },
    {
      country: "Chile",
      overallInflationRate: generateRandomInflationRate(-1.0, 2.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(1.3, 2.1),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(1.0, 3.0),
        },
      ],
    },
    {
      country: "Uruguay",
      overallInflationRate: generateRandomInflationRate(-1.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.3, 2.1),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(7.0, 3.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(1.2, 3.0),
        },
      ],
    },
  ],
};
