import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import contactList from '../data/contacts.json';

const Contact = () => {
    const [isVisible_contact, setIsVisible] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log('contact');
                    console.log(isVisible_contact);
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = contactRef.current;
        if (currentRef) {
            console.log(isVisible_contact);
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div id='contact' className='contact-container'>
            <h2 ref={contactRef} className={`contact-text ${isVisible_contact ? 'fadein-con' : 'hidden'}`}>CONTACT</h2>
            <div className="row text-center">
                {contactList.map((contact) => (
                    <div id='singlecontact' className="col-sm-3" key={contact.url}>
                        <div ref={contactRef} className={`${isVisible_contact ? 'rotate-in' : 'hidden'}`}>
                            <a
                                href={contact.url}
                                target="_blank"
                                title={`External link to my ${contact.name} account`}
                                className="btn-social-icon"
                                rel="noopener noreferrer"
                            >
                                <i className={`${contact.icon}`}></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact
