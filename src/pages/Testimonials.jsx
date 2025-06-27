import { useState } from "react";

const testimonials = [
  {
    name: "Sampurna Nag",
    title: "Counselling Psychologist",
    image: "https://i.imgur.com/XfCc8wH.png",
    stars: 5,
    text: `The training program was packed with <mark>relatable stories</mark> and <mark>practical examples</mark> that made technical concepts come alive. It demystified the therapist’s role, emphasizing being authentic and approachable. Techniques like grounding exercises and <mark>structured case formulations</mark> were game-changers.`,
  },
  {
    name: "Celina Daniel",
    title: "Counselling Psychologist",
    image: "https://i.imgur.com/lKJiT77.png",
    stars: 5,
    text: `The sessions were incredibly engaging, with diverse perspectives from the trainers. Case discussions and mock therapy sessions were invaluable, preparing me for <mark>real-world practice</mark>. Tackling real therapy concerns like managing overabundant speech was a highlight. Overall, the training was challenging, inspiring, and rewarding—<mark>a perfect launchpad</mark>.`,
  },
  {
    name: "Arnav Gupta",
    title: "Therapist",
    image: "https://i.imgur.com/bxQeT7g.png",
    stars: 5,
    text: `Each module encouraged interaction and <mark>hands-on application</mark> of learned techniques. The structured feedback and assessments helped me refine my approach.`,
  },
  {
    name: "Priya Mehta",
    title: "Psychology Intern",
    image: "https://i.imgur.com/qkdpN.jpg",
    stars: 5,
    text: `The trainers were amazing mentors. I loved the <mark>real insight</mark> they provided into the mental health industry and ethical practices.`,
  },
  {
    name: "Ravi Sharma",
    title: "Mental Health Coach",
    image: "https://i.imgur.com/1r7U69U.png",
    stars: 5,
    text: `Loved the balance between theory and <mark>real case studies</mark>. The course structure made it easy to apply complex concepts in everyday therapy.`,
  },
  {
    name: "Sneha Rao",
    title: "Student",
    image: "https://i.imgur.com/Mhn1HZ4.png",
    stars: 5,
    text: `From foundational theories to advanced techniques, the training covered it all. <mark>Practical application</mark> really helped boost my confidence.`,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const next = () => {
    if (currentIndex + itemsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (

    <div className="relative bg-gradient-to-r from-[#434343] to-black text-white px-6 py-20 min-h-screen overflow-hidden">
      <div className="flex justify-center gap-6 transition-all duration-500">
        {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((t, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-purple-800 to-blue-800 border border-purple-500 rounded-2xl w-full max-w-sm p-6 hover:scale-105 hover:shadow-xl hover:shadow-purple-700 transition-transform duration-300"
          >
            <div className="mb-4 text-xl">{"★".repeat(t.stars)}</div>
            <p
              className="text-white text-sm leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: `"${t.text}"` }}
            />
            <div className="flex items-center gap-3">
              <img
                src={t.image}
                className="w-10 h-10 rounded-full object-cover"
                alt={t.name}
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-300">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Side Arrows */}
      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <span className="text-2xl">←</span>
      </button>
      <button
        onClick={next}
        disabled={currentIndex + itemsPerPage >= testimonials.length}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition disabled:opacity-30"
      >
        <span className="text-2xl">→</span>
      </button>


    </div>
  );
}