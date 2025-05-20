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

function MyProfile() {
    const navigate = useNavigate();
    const password = "password123";
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const fileInputRef = useRef(null);

    const dispatch = useDispatch();

    const firstNameRef = useRef(null);  
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const regionRef = useRef(null);
    const cityRef = useRef(null);
    const areaRef = useRef(null);
    const addressRef = useRef(null);
    const passwordRef = useRef(null);

    
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

    const [data, setData] = useState({
        profilePicture: "",
        firstName: "John",
        lastName: "Doe",
        email: "exampleuser@gmail.com",
        phoneNumber: "+012345678910",
        region: "California",
        city: "San Francisco",
        area: "Mission District",
        address: "456 Market Street, Apt 12B",
    })

    const handleInputChange = (field, value) => {
        setData({
            ...data,
            [field]: value
        });
    };

    const toggleEditMode = (field) => {
        setEditableFields({
            ...editableFields,
            [field]: !editableFields[field]
        });
        
        if (!editableFields[field]) {
            setTimeout(() => {
                const refMap = {
                    firstName: firstNameRef,
                    lastName: lastNameRef,
                    email: emailRef,
                    phoneNumber: phoneNumberRef,
                    region: regionRef,
                    city: cityRef,
                    area: areaRef,
                    address: addressRef,
                    password: passwordRef
                };
                
                if (refMap[field] && refMap[field].current) {
                    refMap[field].current.focus();
                }
            }, 0);
        }
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setData({
                ...data,
                profilePicture: imageUrl
            });
        }
    }

    const triggerFileInput = () => {
        fileInputRef.current.click();
    }

    const handleSaveChanges = () => {

        console.log("Saving changes:", data);
        
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
    }

  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen pt-16 md:pt-5 max-w-3xl mx-auto'>

        <div className='self-end'>
            <Custom_Main_Button text="Logout" width='150%'
            onClick={()=> dispatch(logout())}
            />
        </div>

        <div className='flex items-center justify-center mb-5 relative'>
            <div className="relative">
                {data.profilePicture ? 
                    <img src={data.profilePicture} alt="Profile Picture" className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover" /> :
                    <FaUserCircle className='text-7xl md:text-9xl' />
                }
                <div 
                    className="absolute bottom-1 right-2 bg-white p-1 rounded-full cursor-pointer border border-gray-300 hover:bg-gray-100" 
                    onClick={triggerFileInput}
                >
                    <FaEdit className="text-[#AE1F25] text-xl" />
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
                                <input 
                                    ref={firstNameRef} 
                                    type="text" 
                                    value={data.firstName} 
                                    onChange={(e) => handleInputChange('firstName', e.target.value)} 
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                            ) : (
                                <span className='font-medium'>{data.firstName}</span>
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
                                <input 
                                    ref={lastNameRef} 
                                    type="text" 
                                    value={data.lastName} 
                                    onChange={(e) => handleInputChange('lastName', e.target.value)} 
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                            ) : (
                                <span className='font-medium'>{data.lastName}</span>
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
                                <input 
                                    ref={emailRef} 
                                    type="email" 
                                    value={data.email} 
                                    onChange={(e) => handleInputChange('email', e.target.value)} 
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                            ) : (
                                <span className='font-medium'>{data.email}</span>
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
                                <input 
                                    ref={phoneNumberRef} 
                                    type="text" 
                                    value={data.phoneNumber} 
                                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)} 
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                            ) : (
                                <span className='font-medium'>{data.phoneNumber}</span>
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
                        <div className='pr-24'>
                            <h6 className='font-medium text-[#555657] py-1'>Password</h6>
                            {editableFields.password ? (
                                <input 
                                    ref={passwordRef} 
                                    type={isPasswordVisible ? "text" : "password"} 
                                    value={password} 
                                    onChange={(e) => handleInputChange('password', e.target.value)} 
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                            ) : (
                                <span className='font-medium'>{
                                    isPasswordVisible ? password : password.replace(/./g, '*')
                                }</span>
                            )}
                        </div>
                        <div className='self-start cursor-pointer'>
                            <img src={EditIcon} alt="" onClick={() =>{ setIsPasswordVisible(prev=> !prev);toggleEditMode('password')}} />
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
                                <input 
                                    ref={regionRef} 
                                    type="text" 
                                    value={data.region} 
                                    onChange={(e) => handleInputChange('region', e.target.value)} 
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                            ) : (
                                <span className='font-medium'>{data.region}</span>
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
                                <input 
                                    ref={cityRef} 
                                    type="text" 
                                    value={data.city} 
                                    onChange={(e) => handleInputChange('city', e.target.value)} 
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                            ) : (
                                <span className='font-medium'>{data.city}</span>
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
                                <input 
                                    ref={areaRef} 
                                    type="text" 
                                    value={data.area} 
                                    onChange={(e) => handleInputChange('area', e.target.value)} 
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                            ) : (
                                <span className='font-medium'>{data.area}</span>
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
                                <input 
                                    ref={addressRef} 
                                    type="text" 
                                    value={data.address} 
                                    onChange={(e) => handleInputChange('address', e.target.value)} 
                                    className="border border-gray-300 rounded px-2 py-1"
                                />
                            ) : (
                                <span className='font-medium'>{data.address}</span>
                            )}
                        </div>
                        <div className='self-start cursor-pointer' onClick={() => toggleEditMode('address')}>
                            <img src={EditIcon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            

        </div>

        <div className='max-w-xl flex flex-col-reverse md:flex-row items-center justify-between'>
            <Custom_Main_Button text="Back to Home" 
            variant='outline'
            className='m-2 !rounded-full border-[#FFB752] hover:shadow-lg'
            onClick={()=> navigate('/')}
            />
            <Custom_Main_Button text="Save Changes" 
            className='m-2 hover:bg-white hover:border-[#FFB752] hover:text-[#AE1F25] hover:shadow-lg'
            onClick={handleSaveChanges}
            />
        </div>

    </div>
    </>
  )
}

export default MyProfile