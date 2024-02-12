import React, { useState } from 'react'
import { VscHome } from 'react-icons/vsc'
import { FiUser } from 'react-icons/fi'
import { BsCode } from 'react-icons/bs'
import { MdOutlineDashboard, MdOutlineContactPage, MdEmail } from 'react-icons/md'
import { AiFillLinkedin, AiFillSkype, AiFillGithub, AiOutlineUnorderedList } from 'react-icons/ai'
import { send } from 'emailjs-com';
import { _emailConfig } from '../Constant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader'

const newObj = () => {
    return { name: "", email: "", subject: "", message: "", }
}
const Contact = () => {
    const [contactDetails, setContactDetails] = useState({ ...newObj() })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {

        const key = e.target.id;
        const value = e.target.value;
        setContactDetails(prev => ({
            ...prev, [key]: value
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const { _serviceId, _templateId, _userId } = _emailConfig
        var templateParams = {
            name: 'James',
            subject: 'Check this out!',
            email: "aaaaa@mailinator.com",
            message: "messagemessage"
        };
        setIsLoading(true);
        send(_serviceId, _templateId, templateParams, _userId)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Form submitted successfully.');
                setIsLoading(false);
                setContactDetails({ ...newObj() })
            }, function (err) {
                setIsLoading(false);
                console.log('FAILED...', err);
            });
    }

    return (
        <>
            {isLoading && <Loader />}

            <div className="col p-4">
                <div className="p-4 slide-in-top">
                    <div className="row">
                        <div>

                            <h1 className="text-red slide-in-top">Get in touch</h1>
                            <p > Fill out the form below and we'll get back to you as soon as possible.  </p>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="container mb-5">
                        <div className="row justify-content-around">
                            <div className="col-md-6 form_content">
                                <form className="mt-3" onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" value={contactDetails.name} name="name" id="name" placeholder="Your Name *" onChange={handleChange} required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="email" className="form-control" value={contactDetails.email} name="email" id="email" placeholder="Your Email *" onChange={handleChange} required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" value={contactDetails.subject} id="subject" name='subject' placeholder="Your Subject *" onChange={handleChange} required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea className="form-control" id="message" value={contactDetails.message} rows="3" placeholder="Your Message *" name="message" onChange={handleChange} required ></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button type='submit' className='cv_download'>Send Message</button>
                                    </div>
                                </form>

                                <div className="row text-center">
                                    <span>Social Media Contacts</span>
                                    <div>

                                        <button className='mx-2 my-3 border rounded py-1 px-2 mw-fc hover-effect'>
                                            <MdEmail className='fs-4' />Email
                                        </button>
                                        <button className='mx-2 my-3 border rounded py-1 px-2 mw-fc hover-effect'>
                                            <AiFillLinkedin className='fs-4' />LinkedIn
                                        </button>

                                        <button className='mx-2 my-3 border rounded py-1 px-2 mw-fc hover-effect'>
                                            <AiFillSkype className='fs-4' />Skype
                                        </button>
                                        <button className='mx-2 my-3 border rounded py-1 px-2 mw-fc hover-effect'>
                                            <AiFillGithub className='fs-4' />Github
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact