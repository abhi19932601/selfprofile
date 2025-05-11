import { Calendar, Clock, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const BookTime = () => {
  const [calendarVisible, setCalendarVisible] = useState(true);

  return (
    <section id="book" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book a Time</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in discussing product strategy, startup mentorship, or potential collaborations? 
            Use the calendar below to schedule a meeting.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Why Book a Meeting?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 mr-3">
                    <User size={14} />
                  </div>
                  <span>Product Strategy Consultation</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 mr-3">
                    <MessageSquare size={14} />
                  </div>
                  <span>Startup Mentorship</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 mr-3">
                    <Calendar size={14} />
                  </div>
                  <span>Speaking Engagements</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 mr-3">
                    <Clock size={14} />
                  </div>
                  <span>Project Collaborations</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-blue-500">
                <p className="italic">
                  "Looking forward to connecting and exploring how we can work together!"
                </p>
                <p className="mt-2 font-bold">— Abhishek</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/abhishekuncmba/30min"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTime;