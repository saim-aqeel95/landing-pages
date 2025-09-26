// SolarForm.tsx

import React, { useState } from 'react';
import { TextInput, SelectInput } from './FormElements';
import { FormData } from '../types';
import '../styles/solar.css';

// Initial state object adhering to the FormData interface
const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  powerBill: '',
  electricProvider: '',
  homeOwner: '',
  creditScore: '',
  roofShade: '',
  solarElectric: '',
  roofType: '',
  bestTime: '',
  purchaseTimeFrame: '',
};

const SolarForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Generic handler for all input and select changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Type assertion to ensure 'name' is a valid key of FormData
    setFormData((prevData) => ({
      ...prevData,
      [name as keyof FormData]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted! Check the console for data.');
    // Optional: setFormData(initialFormData); to clear the form
  };

  // Helper function to pass common props
  const getCommonProps = (name: keyof FormData, placeholder: string) => ({
    name,
    placeholder,
    value: formData[name],
    handleChange,
  });

  return (
    <div className="form-container">
      <h2 className="form-header">Please Enter Your Details Below</h2>
      <form onSubmit={handleSubmit} className="solar-form">
        
        {/* Row 1: Name */}
        <div className="form-row two-cols">
          <TextInput {...getCommonProps('firstName', 'First Name')} />
          <TextInput {...getCommonProps('lastName', 'Last Name')} />
        </div>

        {/* Row 2: Contact */}
        <div className="form-row two-cols">
          <TextInput {...getCommonProps('phone', 'Phone')} />
          <TextInput {...getCommonProps('email', 'Email')} />
        </div>

        {/* Row 3: Address Line */}
        <div className="form-row one-col">
          <TextInput {...getCommonProps('streetAddress', 'Street Address')} />
        </div>

        {/* Row 4: Location */}
        <div className="form-row three-cols">
          <TextInput {...getCommonProps('city', 'City')} />
          <SelectInput 
            {...getCommonProps('state', 'Choose State')}
            options={['CA', 'TX', 'NY', 'FL', 'NJ']}
          />
          <TextInput {...getCommonProps('zipCode', 'Zip Code')} />
        </div>

        {/* Row 5: Power Info */}
        <div className="form-row two-cols">
          <SelectInput 
            {...getCommonProps('powerBill', 'Power Bill:')}
            options={['< $100', '$100 - $200', '$200 - $300', '> $300']}
          />
          <SelectInput 
            {...getCommonProps('electricProvider', 'Choose Electric Provider')}
            options={['PGE', 'FPL', 'TXU', 'Duke Energy']}
          />
        </div>

        {/* Row 6: Home & Credit */}
        <div className="form-row three-cols">
          <SelectInput 
            {...getCommonProps('homeOwner', 'Home Owner')}
            options={['Yes', 'No']}
          />
          <SelectInput 
            {...getCommonProps('creditScore', 'Credit score')}
            options={['Excellent (700+)', 'Good (640-699)', 'Fair (< 640)']}
          />
          <SelectInput 
            {...getCommonProps('roofShade', 'Roof Shade:')}
            options={['Heavy', 'Medium', 'Light', 'None']}
          />
        </div>

        {/* Row 7: Solar Details */}
        <div className="form-row two-cols">
          <SelectInput 
            {...getCommonProps('solarElectric', 'Solar Electric')}
            options={['Yes', 'No', 'Maybe']}
          />
          <SelectInput 
            {...getCommonProps('roofType', 'Roof Type')}
            options={['Shingle', 'Tile', 'Metal', 'Flat']}
          />
        </div>

        {/* Row 8: Timeframes */}
        <div className="form-row two-cols">
          <SelectInput 
            {...getCommonProps('bestTime', 'Best Time to Call')}
            options={['Morning', 'Afternoon', 'Evening', 'Any Time']}
          />
          <SelectInput 
            {...getCommonProps('purchaseTimeFrame', 'Purchase Time Frame')}
            options={['< 3 Months', '3 - 6 Months', '> 6 Months']}
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>

        {/* Terms and Conditions */}
        <p className="terms-text">
          [By clicking Submit, I authorize SolarElectricSavings to use automated technology and/or pre-recorded voice to call me at the telephone number provided, for marketing purposes even if it is a wireless number and even if i have previously registered with a Federal Or State DNC list or requested that SolarElectricSavings not contact me. I agree to the <a href="#">Privacy Policy</a> , <a href="#">Terms And Conditions</a> & <a href="#">CCPA</a> that SolarElectricSavings]
        </p>
      </form>
    </div>
  );
};

export default SolarForm;