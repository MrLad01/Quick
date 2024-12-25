import React, { useState } from 'react';
import logo from './assets/Screenshot 2024-12-25 174038.png'

interface FormData {
  firstName: string;
  lastName: string;
  countryCode: string;
  phone: string;
  email: string;
  country: string;
  password: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  country?: string;
  password?: string;
  terms?: string;
  offers?: string;
}


const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    countryCode: '+44',
    phone: '',
    email: '',
    country: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [acceptOffers, setAcceptOffers] = useState<boolean>(false);

  const countries: string[] = [
    "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
    "United Kingdom", "United States", "Canada", "Australia"
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!acceptTerms) newErrors.terms = 'You must accept the Terms and Conditions';
    if (!acceptOffers) newErrors.offers = 'You must accept to receive offers';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className='general-container'>
        <div className="background">
          <div className="back-cover-1">
            <div className="bob-container">
              <div className="bob-texture"  
              />
            </div>            
            <div className="bob" />
          </div>
        </div>

        <div className="back-cover">
          <div className="form-back-1">
            <div className="form-image-cover">
              <img src={logo} alt="logo" />
            </div>
            <div className='form-back-2'>
              <h2 className='form-head'>Sign Up</h2>
              <h4 className='form-welcome' >Welcome Back! Sign in to continue</h4>
              <div className='form-divide'>
                <div></div>
                <h3>Or</h3>
                <div></div>
              </div>
              <form onSubmit={handleSubmit} className='form'>
                  <div className="form-inputs-cover">
                      <div className="form-input-cover">
                        <h3>First Name</h3>
                        <input 
                          type="text" 
                          name="firstName"
                          placeholder='First Name' 
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                      </div>
                      <div className="form-input-cover">
                        <h3>Last Name</h3>
                        <input 
                          type="text" 
                          name="lastName"
                          placeholder='Last Name' 
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}           
                      </div>
                  </div>
                  <div className="form-inputs-cover">
                      <div className="form-input-cover">
                        <h3>Phone Number</h3>
                        <div className="flex gap-4">
                          <input 
                            type="text" 
                            name="countryCode"
                            placeholder='+44' 
                            value={formData.countryCode}
                            onChange={handleInputChange}
                            className='phone-1' 
                          />
                          <input 
                            type="text" 
                            name="phone"
                            placeholder='Contact Number' 
                            value={formData.phone}
                            onChange={handleInputChange}
                            className='phone-2' 
                          />
                        </div>
                        {errors.phone && <span className="error-message">{errors.phone}</span>}
                    
                      </div>
                      <div className="form-input-cover">
                        <h3>Email</h3>
                        <input 
                          type="email" 
                          name="email"
                          placeholder='Email Address' 
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                      
                      </div>
                  </div>
                  <div className="form-inputs-cover">
                      <div className="form-input-cover">
                        <h3>Country</h3>
                        <select 
                          name="country"
                          value={formData.country}
                          title='countries'
                          onChange={handleInputChange}
                        >
                          <option value="">Select Country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                          ))}
                        </select>
                        {errors.country && <span className="error-message">{errors.country}</span>}
                    
                      </div>
                      <div className="form-input-cover">
                        <h3 className='text-white text-[0.9rem]'>Password</h3>
                        <input 
                          type="password" 
                          name="password"
                          placeholder='Password' 
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    
                      </div>
                  </div>
                  <div className='form-bottom-cover'>
                    <h3>By signing up you are opting in for all marketing from Propel Capital, such as SMS, Whatsapp or Email.</h3>
                    <div className="container-back-1">
                      <label className="container">
                        <input 
                          type="checkbox" 
                          checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        I agree to the <span className='aa'>T&Cs</span> of this platform.<span className='ab'>*</span> 
                      </label>
                    </div>
                    {errors.terms && <span className="error-message">{errors.terms}</span>}
                    <div className="container-back-2">
                      <label className="container">
                        <input 
                          type="checkbox" 
                          checked={acceptOffers}
                          onChange={(e) => setAcceptOffers(e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        I agree to receiving special offers and messages from Propel.<span className='ab'>*</span> 
                      </label>
                    </div>
                    {errors.offers && <span className="error-message text-center">{errors.offers}</span>}
                  </div>
                  <div className="button-cover">
                    <button type="submit" className='btn'>Sign Up</button>
                  </div>
                  <div className="signin-cover">
                    <h3>Already have an account?</h3>
                    <a href="" title='sign-in'>Sign In</a>
                  </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer">
          <div className='flex-2 '>
            <h3 className=''>&copy; 2024 Propel  Capital Group Limited. All rights reserved.</h3>
            <div className="flex-2">
              <a href="" title="T&Cs">T&Cs</a>
              <a href="" title="Privacy Policy">Privacy Policy</a>
            </div>
          </div>
          <h3 className=''>162-164 High Street, Reyleigh, Essex, England, SS67BS</h3>
        </div>
      </div>
    </>
  )
}

export default App
