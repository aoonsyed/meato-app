import React, {useState, useRef} from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import EditIcon from "../../assets/delivery/EditIcon.png";
import eyeOff from "../../assets/Auth/eyeOff.png";
import eyeOn from "../../assets/Auth/eye.svg";
import Custom_Main_Button from '../../components/Custom_Main_Button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {logout} from "../../store/authSlice"
import { toast } from 'react-hot-toast';
import { set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileSchema } from '../../utils/validationSchemas';

function MyProfile() {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const fileInputRef = useRef(null);

    const dispatch = useDispatch();

    const [editableFields, setEditableFields] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        region: false,
        city: false,
        area: false,
        address: false,
        password: false,
    });

    const data = {
        profilePicture: "",
        firstName: "John",
        lastName: "Doe",
        email: "exampleuser@gmail.com",
        phoneNumber: "+012345678910",
        region: "California",
        city: "San Francisco",
        area: "Mission District",
        address: "456 Market Street, Apt 12B",
        password: "password123",
    }

    const { 
        register, 
        handleSubmit, 
        formState: { errors, touchedFields }, 
        watch,
        setValue,
        getValues,
        trigger    } = useForm({
        resolver: yupResolver(profileSchema),
        defaultValues: {
            ...data
        },
        mode: 'onBlur'
    });    const onSubmit = (data) => {

        const requiredFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'region', 'city', 'area', 'address'];
        const emptyFields = requiredFields.filter(field => 
            !data[field] || (typeof data[field] === 'string' && data[field].trim() === '')
        );
        
        if (emptyFields.length > 0) {
            const formattedFields = emptyFields.map(field => 
                field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
            ).join(', ');
            
            toast.error(`The following fields cannot be empty: ${formattedFields}`);
            return;
        }
        
        console.log("Saving changes:", data);
        
        toast.success("Profile updated successfully!");
        
        setEditableFields({
            firstName: false,
            lastName: false,
            email: false,
            phoneNumber: false, 
            region: false,
            city: false,
            area: false,
            address: false,
            password: false,
        });
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const maxSize = 1 * 1024 * 1024;
            
            if (file.size > maxSize) {
                toast.error("File size exceeds 1MB limit. Please choose a smaller image.");
                return;
            }
            
            const imageUrl = URL.createObjectURL(file);
            setValue('profilePicture', imageUrl);
        }
    }

    const triggerFileInput = () => {
        fileInputRef.current.click();
    }        
      const toggleEditMode = (field) => {
        if (editableFields[field]) {
            // Close the input field -- Turn off edit mode
            trigger(field).then(isValid => {
                if (!isValid) {
                    // Don't toggle if validation fails
                    return;
                }
                
                // Double-check if the field is empty before turning off edit mode
                const fieldValue = getValues(field);
                if (!fieldValue || (typeof fieldValue === 'string' && fieldValue.trim() === '')) {
                    toast.error(`${field.charAt(0).toUpperCase() + field.slice(1)} cannot be empty`);
                    return; // Don't toggle if empty
                }

                if (field === 'password') {
                    setIsPasswordVisible(false);
                }
                
                // If we get here, validation passed, so we can turn off edit mode
                setEditableFields(prev => ({
                    ...prev,
                    [field]: false
                }));
            });        
        }
        else {
            // Turning on edit mode
            if (field === 'password') {
                setIsPasswordVisible(true);
            }
            
            setEditableFields(prev => ({
                ...prev,
                [field]: true
            }));
        }
    };

    // Get form values
    const formData = watch();

  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen pt-16 md:pt-5 max-w-3xl mx-auto'>

        <div className='self-end mr-5'>
            <Custom_Main_Button text="Logout" width='100%' className='px-5'
            onClick={()=> dispatch(logout())}
            />
        </div>

        <div className='flex items-center justify-center mb-5 relative'>
            <div className="relative rounded-full">
                {formData.profilePicture ? 
                    <img src={formData.profilePicture} alt="Profile Picture" className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover" /> :
                    <FaUserCircle className='text-7xl md:text-9xl' />
                }
                <div 
                    className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer border border-gray-300 hover:bg-gray-100" 
                    onClick={triggerFileInput}
                >
                    <FaEdit className="text-[#AE1F25] text-md md:text-xl" />
                </div>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleProfilePictureChange} 
                    className="hidden" 
                    accept="image/*" 
                />
            </div>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <div className='flex flex-col items-center justify-center flex-grow w-full'>
                
                <div className='flex flex-col md:flex-row items-center justify-center p-3 border-t border-[#D8D8D8] w-full'>
                    <div className='font-bold text-2xl flex justify-start items-center mb-auto px-10'>
                        <h3>Personal Information</h3>
                    </div>
                    <div className='flex-grow flex flex-col'>
                        <div className='border-b border-[#D8D8D8] py-2 flex items-center justify-between'>
                            <div className=''>
                                <h6 className='font-medium text-[#555657] py-1'>First Name</h6>
                                {editableFields.firstName ? (
                                    <>                                        <input 
                                            type="text" 
                                            {...register('firstName')}
                                            className={`border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded px-2 py-1`}
                                            onBlur={() => trigger('firstName')}
                                        />
                                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                                    </>
                                ) : (
                                    <span className='font-medium'>{formData.firstName}</span>
                                )}
                            </div>
                            <div className='self-start cursor-pointer' onClick={() => toggleEditMode('firstName')}>
                                <img src={EditIcon} alt="" />
                            </div>
                        </div>
                        <div className='border-b border-[#D8D8D8] py-2 flex items-center justify-between'>
                            <div>
                                <h6 className='font-medium text-[#555657] py-1'>Last Name</h6>
                                {editableFields.lastName ? (
                                    <>                                        <input 
                                            type="text" 
                                            {...register('lastName')}
                                            className={`border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded px-2 py-1`}
                                            onBlur={() => trigger('lastName')}
                                        />
                                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                                    </>
                                ) : (
                                    <span className='font-medium'>{formData.lastName}</span>
                                )}
                            </div>
                            <div className='self-start cursor-pointer' onClick={() => toggleEditMode('lastName')}>
                                <img src={EditIcon} alt="" />
                            </div>
                        </div>
                        <div className='border-b border-[#D8D8D8] py-2 flex items-center justify-between'>
                            <div>
                                <h6 className='font-medium text-[#555657] py-1'>Email id</h6>
                                {editableFields.email ? (
                                    <>
                                    <input 
                                            type="text" 
                                            {...register('email')}
                                            className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded px-2 py-1`}
                                            onBlur={() => trigger('email')}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                    </>
                                ) : (
                                    <span className='font-medium'>{formData.email}</span>
                                )}
                            </div>
                            <div className='self-start cursor-pointer' onClick={() => toggleEditMode('email')}>
                                <img src={EditIcon} alt="" />
                            </div>
                        </div>
                        <div className='py-2 flex items-center justify-between'>
                            <div>
                                <h6 className='font-medium text-[#555657] py-1'>Phone Number</h6>
                                {editableFields.phoneNumber ? (
                                    <>
                                    <input 
                                            type="text" 
                                            {...register('phoneNumber')}
                                            className={`border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded px-2 py-1`}
                                            onBlur={() => trigger('phoneNumber')}
                                        />
                                        {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>}
                                    </>
                                ) : (
                                    <span className='font-medium'>{formData.phoneNumber}</span>
                                )}
                            </div>
                            <div className='self-start cursor-pointer' onClick={() => toggleEditMode('phoneNumber')}>
                                <img src={EditIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col md:flex-row items-center justify-center p-3 border-t border-[#D8D8D8] w-full'>
                     <div className='font-bold text-2xl flex justify-start items-center mb-auto px-10 min-w-xs'>
                        <h3>Account Security</h3>
                    </div>
                    <div className='flex-grow flex flex-col'>
                        <div className='py-2 flex items-center justify-between'>
                            <div className='pr-24'>                                <h6 className='font-medium text-[#555657] py-1'>Password</h6>
                                {editableFields.password ? (
                                    <>
                                    <input 
                                            type={isPasswordVisible ? "text" : "password"} 
                                            {...register('password')}
                                            className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded px-2 py-1`}
                                            onBlur={() => trigger('password')}
                                        />
                                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                                    </>
                                ) : (
                                    <span className='font-medium'>{
                                        isPasswordVisible ? formData.password : formData.password.replace(/./g, '*')
                                    }</span>
                                )}
                            </div>
                            <div className='cursor-pointer'>
                                <img src={EditIcon} alt="" onClick={() => toggleEditMode('password')} />
                                <img src={isPasswordVisible ? eyeOn : eyeOff} alt="" className='mt-1 cursor-pointer h-5 w-5' onClick={() => setIsPasswordVisible(!isPasswordVisible)} />
                            </div>
                        </div>
                    </div>
                </div>



                <div className='flex flex-col md:flex-row items-center justify-center p-3 border-t border-[#D8D8D8] w-full'>
                    <div className='font-bold text-2xl flex justify-start items-center mb-auto px-10 min-w-xs'>
                        <h3>Delivery Details</h3>
                    </div>
                    <div className='flex-grow flex flex-col'>
                        <div className='border-b border-[#D8D8D8] py-2 flex items-center justify-between'>
                            <div className=''>
                                <h6 className='font-medium text-[#555657] py-1'>Region</h6>
                                {editableFields.region ? (
                                    <>                                        <input 
                                            type="text" 
                                            {...register('region')}
                                            className={`border ${errors.region ? 'border-red-500' : 'border-gray-300'} rounded px-2 py-1`}
                                            onBlur={() => trigger('region')}
                                        />
                                        {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>}
                                    </>
                                ) : (
                                    <span className='font-medium'>{formData.region}</span>
                                )}
                            </div>
                            <div className='self-start cursor-pointer' onClick={() => toggleEditMode('region')}>
                                <img src={EditIcon} alt="" />
                            </div>
                        </div>
                        <div className='border-b border-[#D8D8D8] py-2 flex items-center justify-between'>
                            <div>
                                <h6 className='font-medium text-[#555657] py-1'>City</h6>
                                {editableFields.city ? (
                                    <>                                        <input 
                                            type="text" 
                                            {...register('city')}
                                            className={`border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded px-2 py-1`}
                                            onBlur={() => trigger('city')}
                                        />
                                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                                    </>
                                ) : (
                                    <span className='font-medium'>{formData.city}</span>
                                )}
                            </div>
                            <div className='self-start cursor-pointer' onClick={() => toggleEditMode('city')}>
                                <img src={EditIcon} alt="" />
                            </div>
                        </div>
                        <div className='border-b border-[#D8D8D8] py-2 flex items-center justify-between'>
                            <div>
                                <h6 className='font-medium text-[#555657] py-1'>Area</h6>
                                {editableFields.area ? (
                                    <>                                        <input 
                                            type="text" 
                                            {...register('area')}
                                            className={`border ${errors.area ? 'border-red-500' : 'border-gray-300'} rounded px-2 py-1`}
                                            onBlur={() => trigger('area')}
                                        />
                                        {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area.message}</p>}
                                    </>
                                ) : (
                                    <span className='font-medium'>{formData.area}</span>
                                )}
                            </div>
                            <div className='self-start cursor-pointer' onClick={() => toggleEditMode('area')}>
                                <img src={EditIcon} alt="" />
                            </div>
                        </div>
                        <div className='py-2 flex items-center justify-between'>
                            <div>
                                <h6 className='font-medium text-[#555657] py-1'>Address</h6>
                                {editableFields.address ? (
                                    <>                                        <input 
                                            type="text" 
                                            {...register('address')}
                                            className={`border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded px-2 py-1`}
                                            onBlur={() => trigger('address')}
                                        />
                                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                                    </>
                                ) : (
                                    <span className='font-medium'>{formData.address}</span>
                                )}
                            </div>
                            <div className='self-start cursor-pointer' onClick={() => toggleEditMode('address')}>
                                <img src={EditIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-xl flex flex-col-reverse md:flex-row items-center justify-between'>
                <Custom_Main_Button 
                    text="Back to Home" 
                    variant='outline'
                    className='m-2 !rounded-full border-[#FFB752] hover:shadow-lg'
                    onClick={()=> navigate('/')}
                    type="button"
                />                <Custom_Main_Button 
                    text="Save Changes" 
                    className='m-2 hover:bg-white hover:border-[#FFB752] hover:text-[#AE1F25] hover:shadow-lg'
                    type="submit"                    onClick={() => {
                        // Validate all fields before submit
                        const requiredFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'region', 'city', 'area', 'address'];
                        trigger(requiredFields);
                    }}
                />
            </div>
        </form>
    </div>
    </>
  )
}

export default MyProfile