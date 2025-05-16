'use client';

import { CONTACTS } from '@/lib/constants';

export default function ContactInfo() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Kontaktpersoner</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CONTACTS.map((contact, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-start">
              <div className="bg-blue-800 rounded-full p-3 mr-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{contact.name}</h3>
                <p className="text-gray-400 mb-1">{contact.role}</p>
                <div className="flex items-center">
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-blue-400 hover:text-blue-300 text-lg">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}