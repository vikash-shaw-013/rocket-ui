import { useState } from "react";

const mentors = [
  {
    name: "Kalyani Vaish",
    title: "Lead Counselling Psychologist",
    image: "https://i.imgur.com/z8Xh2iN.png",
  },
  {
    name: "Harleen Aneja",
    title: "Counselling Psychologist",
    image: "https://i.imgur.com/Mhn1HZ4.png",
  },
  {
    name: "Bidisha Samanta",
    title: "RCI Registered Clinical Psychologist",
    image: "https://i.imgur.com/1r7U69U.png",
  },
  {
    name: "Ravi Sharma",
    title: "Mental Health Coach",
    image: "https://i.imgur.com/XfCc8wH.png",
  },
  {
    name: "Sneha Rao",
    title: "Student Intern",
    image: "https://i.imgur.com/qkdpN.jpg",
  },
];

export default function MentorSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const prev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const next = () => {
    if (currentIndex + itemsPerPage < mentors.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#434343] to-black text-white px-6 py-20 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-sm text-gray-400 tracking-widest uppercase">Meet Our Mentors</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
          Guided by world-class psychologists,
          <br/>
           every week.
        </h2>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-6 transition-all duration-500">
        {mentors.slice(currentIndex, currentIndex + itemsPerPage).map((mentor, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-purple-800 to-blue-800 border border-purple-500 rounded-2xl w-full max-w-sm p-6 hover:scale-105 hover:shadow-xl hover:shadow-purple-700 transition-transform duration-300"
          >
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold">{mentor.name}</h3>
              <div className="w-10 h-[2px] bg-white mx-auto my-2" />
              <p className="text-sm text-gray-200">{mentor.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <span className="text-2xl">←</span>
      </button>

      <button
        onClick={next}
        disabled={currentIndex + itemsPerPage >= mentors.length}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <span className="text-2xl">→</span>
      </button>
    </div>
  );
}