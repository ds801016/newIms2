export interface componentsType {
  title: string;
  href: string;
  description?: string;
  children?: componentsType[];
}

export const warehouseComponents: componentsType[] = [
  {
    title: "Material Inward",
    href: "/docs/primitives/alert-dialog",
    description: "This is used to do MIN's of the components sent by vendor",
  },
  {
    title: "Material Requisition",
    href: "/docs/primitives/hover-card",
    description:
      "This is used to request and approve raw materials from a location to another location in the warehouse",
  },
  {
    title: "Material Transfer",
    href: "/docs/primitives/progress",
    description:
      "This is used to transfer raw materials from one location to another in the warehouse",
  },
  {
    title: "Rejection",
    href: "/docs/primitives/scroll-area",
    description: "This is used to reject material from a MIN",
  },
  {
    title: "Jobwork",
    href: "/docs/primitives/tabs",
    description: "This is used to manage jobwork and jobworkers.",
    children: [
      {
        title: "Analysis",
        href: "/",
        description: "This is used for description",
        children: [
          {
            title: "Level 2 1",
            href: "/",
            description: "This is used for description",
          },
          {
            title: "Level 2 2",
            href: "/",
            description: "This is used for description",
            children: [
              {
                title: "Level 2 2 1",
                href: "/",
                description: "This is used for description",
              },
              {
                title: "Level 2 2 2",
                href: "/",
                description: "This is used for description",
              },
            ],
          },
        ],
      },
      {
        title: "Update",
        href: "/",
        description: "This is used for description",
      },
    ],
  },
  {
    title: "Work Orders",
    href: "/docs/primitives/tooltip",
    description: "This is used to manage our work orders",
  },
  {
    title: "FG In and Out",
    href: "/docs/primitives/tooltip",
    description: "This is used to transfer finished products.",
  },
  {
    title: "Physical Audit",
    href: "/docs/primitives/tooltip",
    description: "This is used to manage our physical audit count.",
  },
  {
    title: "Part Code Conversion",
    href: "/docs/primitives/tooltip",
    description: "This is used to manage part code conversion",
  },
];
export const masterComponents: componentsType[] = [
  {
    title: "Unit of Measurement",
    href: "/docs/primitives/alert-dialog",
    description: "This is used to set Units of measurement of components",
  },
  {
    title: "Components and Services",
    href: "/docs/primitives/hover-card",
    description:
      "This is used to create components and services that can be used in the transactions",
  },
  {
    title: "Product",
    href: "/docs/primitives/progress",
    description:
      "This is used to create FG and SFG that can be used in the transactions",
  },
  {
    title: "HSN",
    href: "/docs/primitives/scroll-area",
    description: "This is used to map HSN codes to the products and components",
  },
  {
    title: "Addresses",
    href: "/docs/primitives/tabs",
    description:
      "This is used to manage billing and shipping address of the company",
  },
  {
    title: "Bill Of Material",
    href: "/docs/primitives/tooltip",
    description: "This is used to manage BOM of FG and SFG's",
  },
  {
    title: "Vendors / Clients",
    href: "/docs/primitives/tooltip",
    description:
      "This is used to manage vendors and clients for future transactions",
  },
  {
    title: "Projects",
    href: "/docs/primitives/tooltip",
    description: "This is used to manage our projects in our database",
  },
];
export const challanComponents: componentsType[] = [
  {
    title: "RGP-DC",
    href: "/docs/primitives/alert-dialog",
    description: "This is used to manage RGP and driver's challan",
  },
  {
    title: "Branch Transfer Challan",
    href: "/docs/primitives/hover-card",
    description: "This is used to create and manage branch transfer challan",
  },
  {
    title: "Gatepass",
    href: "/docs/primitives/progress",
    description: "This is used to manage gatepasses",
  },
  {
    title: "E-way bill",
    href: "/docs/primitives/scroll-area",
    description: "This is used to create and manage e-way bills",
  },
];
