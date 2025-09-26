// types.ts

/** Defines the structure for the entire form state. */
export interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  powerBill: string;
  electricProvider: string;
  homeOwner: string;
  creditScore: string;
  roofShade: string;
  solarElectric: string;
  roofType: string;
  bestTime: string;
  purchaseTimeFrame: string;
}

/** Defines the common props for the input components. */
export interface InputProps {
  name: keyof FormData; // Use keys of FormData to ensure name is valid
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

/** Defines the specific props for the SelectInput component. */
export interface SelectProps extends InputProps {
  options: string[];
}