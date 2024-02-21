import React from 'react';
import './Contact.css';
import contactList from '../data/contacts.json';

const Contact = () => {
    return (
        <div className='contact-container'>
            <h2 className='contact-text'>CONTACT</h2>
            <div className="row text-center">
                {contactList.map(contact => (
                    <div className="col-sm-3" key={contact.url}>
                        <a
                            href={contact.url}
                            target="_blank"
                            title={`External link to my ${contact.name} account`}
                            className="btn-social-icon"
                            rel="noopener noreferrer"
                        >
                            <i class={`${contact.icon}`}></i>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact
