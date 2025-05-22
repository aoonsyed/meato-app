import * as yup from 'yup';

// Common validation schemas that can be reused across the application

// Email validation schema
export const emailSchema = yup
  .string()
  .required('Email is required')
  .email('Please enter a valid email address');

// Password validation schema
export const passwordSchema = yup
  .string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters long');

// Login form validation schema
export const loginSchema = yup.object({
  email: emailSchema,
  password: passwordSchema,
}).required();

// Signup form validation schema
export const signupSchema = yup.object({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: emailSchema,
  username: yup.string().required('Username is required'),
  password: passwordSchema,
  confirm_password: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords do not match')
}).required();

// Forgot password validation schema
export const forgotPasswordSchema = yup.object({
  email: emailSchema,
}).required();

// Reset password validation schema
export const resetPasswordSchema = yup.object({
  password: passwordSchema,
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords do not match')
}).required();

// Verification code validation schema
export const verifyCodeSchema = yup.object({
  code1: yup.string().required('Required').matches(/^[0-9]$/, 'Must be a digit'),
  code2: yup.string().required('Required').matches(/^[0-9]$/, 'Must be a digit'),
  code3: yup.string().required('Required').matches(/^[0-9]$/, 'Must be a digit'),
  code4: yup.string().required('Required').matches(/^[0-9]$/, 'Must be a digit'),
}).required();

// Contact us form validation schema
export const contactUsSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: emailSchema,
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
}).required();

// Payment form validation schema - Card details
export const cardPaymentSchema = yup.object({
  nameOnCard: yup.string().required('Name on card is required'),
  cardNumber: yup
    .string()
    .required('Card number is required')
    .matches(/^\d{16}$/, 'Card number must be 16 digits'),
  cvv: yup
    .string()
    .required('CVV is required')
    .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),
  expiry: yup
    .string()
    .required('Expiry date is required')
    .matches(/^\d{2}\/\d{2}$/, 'Expiry date must be in MM/YY format')
    .test('is-valid-expiry', 'Card has expired', function(value) {
      if (!value) return false;
      
      const [month, year] = value.split('/').map(num => parseInt(num, 10));
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear() % 100;
      
      // Check if the expiry date is valid
      if (month < 1 || month > 12) return false;
      
      // Check if the card has expired
      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return false;
      }
      
      return true;
    })
}).required();

// Profile information validation schema
export const profileSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: emailSchema,
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^\+?[0-9]{10,15}$/, 'Please enter a valid phone number'),
  region: yup.string().required('Region is required'),
  city: yup.string().required('City is required'),
  area: yup.string().required('Area is required'),
  address: yup.string().required('Address is required'),
  password: yup.string().notRequired(),
}).required();

// Delivery form validation schema
export const deliverySchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .min(8, 'Phone number is too short'),
  region: yup.string().required('Region is required'),
  city: yup.string().required('City is required'),
  area: yup.string().required('Area is required'),
  address: yup.string().required('Address is required')
}).required();

// Sell With Us form validation schema
export const sellWithUsSchema = yup.object({
  fullName: yup.string().required('Full name is required'),
  shopName: yup.string().required('Shop name is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .min(8, 'Phone number is too short'),
  email: emailSchema,
  city: yup.string().required('City is required'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
  meatTypes: yup
    .object()
    .test(
      'at-least-one-selected',
      'Please select at least one meat type',
      (value) => Object.values(value).some(Boolean)
    )
}).required();

// Profile form validation schema
// export const profileSchema = yup.object({
//   firstName: yup.string().required('First name is required'),
//   lastName: yup.string().required('Last name is required'),
//   email: emailSchema,
//   phoneNumber: yup
//     .string()
//     .required('Phone number is required')
//     .min(8, 'Phone number is too short'),
//   region: yup.string().required('Region is required'),
//   city: yup.string().required('City is required'),
//   area: yup.string().required('Area is required'),
//   address: yup.string().required('Address is required'),
//   password: yup.string().when('editPassword', {
//     is: true,
//     then: () => passwordSchema
//   })
// }).required();

// Add custom validation schemas for other forms as needed
