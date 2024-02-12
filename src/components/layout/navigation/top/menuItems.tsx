import {
  challanComponents,
  componentsType,
  masterComponents,
  warehouseComponents,
} from "@/components/layout/navigation/top/menuComponents";

type menuItemsType = {
  label: string;
  components?: componentsType[];
};

export const items: menuItemsType[] = [
  {
    label: "Master",
    components: masterComponents,
  },
  {
    label: "Procurement",
  },
  {
    label: "Warehouse",
    components: warehouseComponents,
  },
  {
    label: "GatePass and Challan",
    components: challanComponents,
  },
  {
    label: "Reports",
  },
  {
    label: "Transaction Query",
  },
];
