
import React from 'react';

const Agenda = () => {
  const agendaItems = [
    {
      time: "9:00 AM",
      title: "Kickoff & Orientation",
      description: "Welcome remarks, challenge overview, team introductions"
    },
    {
      time: "10:00 AM",
      title: "Sprint Begins",
      description: "Teams start working on their prototypes"
    },
    {
      time: "Throughout",
      title: "Mentor Sessions",
      description: "Scheduled access to WonderBotz experts for guidance"
    },
    {
      time: "Next Day 8:00 AM",
      title: "Submission Deadline",
      description: "Teams finalize and submit their prototypes"
    },
    {
      time: "10:00 AM",
      title: "Pitch Presentations",
      description: "Each team presents their solution (5 minutes per team)"
    },
    {
      time: "12:00 PM",
      title: "Judging & Awards",
      description: "Final deliberation and announcement of winners"
    }
  ];

  return (
    <section className="section-padding" id="agenda">
      <div className="container">
        <h2 className="text-3xl font-bold text-wonderbotz-dark-gray text-center mb-12">
          24-Hour Sprint Agenda
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-wonderbotz-dark-gray text-wonderbotz-white py-4 px-6">
              <h3 className="text-xl font-semibold">Event Schedule</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {agendaItems.map((item, index) => (
                <div key={index} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <span className="inline-block bg-wonderbotz-green text-white px-3 py-1 rounded-full text-sm font-medium mb-2 sm:mb-0 sm:mr-4">
                      {item.time}
                    </span>
                    <h4 className="text-lg font-semibold text-wonderbotz-dark-gray">{item.title}</h4>
                  </div>
                  <p className="mt-2 text-wonderbotz-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
