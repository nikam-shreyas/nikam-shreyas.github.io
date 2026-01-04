import React from 'react';
import { BarChart, PenTool, Sprout } from 'lucide-react';

export interface VolunteeringPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: React.ReactNode;
  icon: React.ElementType;
  color: 'blue' | 'yellow' | 'green';
}

export const volunteeringData: VolunteeringPost[] = [
  {
    id: 'data-for-good',
    title: 'The power of data for good',
    date: 'Sep 15, 2023',
    readTime: '2 min',
    category: 'Non-profit',
    summary: 'I intern as a data scientist to empower nonprofits at Changing The Present, the Amazon of the non-profit world. My skills now tell a story of impact, using numbers to change lives for the better.',
    icon: BarChart,
    color: 'blue',
    content: (
      <>
        <p className="italic text-gray-400 border-l-4 border-blue-500 pl-4 mb-8">
          “Volunteering is the ultimate exercise in democracy. You vote in elections once a year, but when you volunteer, you vote every day about the kind of community you want to live in.”
        </p>
        <p className="mb-6">
          In the realm of volunteering, I've found a home at <strong>Changing the Present</strong>, a beacon of hope in the non-profit universe, aptly dubbed the "Amazon.com of the non-profit world" by The New York Times. This journey has been nothing short of transformative, a tapestry woven with threads of learning, impact, and a profound sense of purpose.
        </p>
        <p className="mb-6">
          I am incredibly grateful for the opportunity to volunteer as a data science intern at Changing the Present. Under the leadership of founder and CEO <strong>Robert Tolmach</strong>, Changing the Present is revolutionizing charitable giving by making it easy for donors to directly fund specific projects at non-profits around the world. Working directly with him has been a privilege beyond measure. It's not just about the data; it's about understanding the heartbeat of this organization, feeling the pulse of its mission.
        </p>
        <p className="mb-6">
          A significant portion of my days is spent navigating the world of spreadsheets, unearthing insights, and aiding Rob in charting the course forward. It's remarkable how something as seemingly mundane as Excel can be the canvas for so much change. Each row and column tells a story, each formula a potential for impact.
        </p>
        <p className="mb-6">
          Yet, it's not confined to cells and formulas. My AI/ML expertise finds its wings here, soaring beyond the confines of data points. It's about envisioning a future where Changing the Present's reach stretches far and wide, where more hearts beat in rhythm with its cause. It's about strategizing, innovating, and finding novel ways to recruit more warriors for this noble battle.
        </p>
        <p className="mb-6">
          In this journey, I've come to understand that volunteering isn't just about giving time; it's about investing in a vision, in a shared dream of a better world. It's about making a vote for the kind of community we want to live in, not just once a year, but every single day.
        </p>
        <h4 className="text-xl font-bold text-white mt-8 mb-4">Key Takeaways</h4>
        <ul className="list-disc pl-5 space-y-3 mb-8 text-gray-300">
          <li><strong>The Power of Data:</strong> In the world of non-profits, data isn't just numbers; it's the compass that guides decisions. Every data point holds a clue, every trend a potential insight.</li>
          <li><strong>The Human Element:</strong> Beyond the spreadsheets and algorithms, it's the people that fuel the engine of change. Rob's dedication is a testament to the impact a single individual can have.</li>
          <li><strong>The Ripple Effect:</strong> Volunteering isn't just a singular act; it's a stone cast into a pond, creating ripples that touch lives far beyond what we can see.</li>
          <li><strong>The Joy of Purpose:</strong> There's a unique joy in knowing that every analysis, every insight, contributes to a cause larger than oneself.</li>
        </ul>
        <p>
          As I pen down these thoughts, I'm filled with gratitude - for this opportunity, for the lives touched, and for the journey that's only just begun. In the tapestry of volunteering, each thread counts, each stitch matters. Together, we weave a narrative of change, one data point, one insight, at a time.
        </p>
      </>
    )
  },
  {
    id: 'scribing',
    title: 'Scribing a new chapter for others',
    date: 'May 08, 2019',
    readTime: '3 min',
    category: 'Life',
    summary: 'My volunteer pen empowered a disabled student to pass their exam and write their own story of independence. Small acts of service authored a new chapter in my life of purpose and meaning.',
    icon: PenTool,
    color: 'yellow',
    content: (
      <>
        <p className="mb-6">
          Let me take you on a journey that touched my heart and left an indelible mark on my soul. It all started when a social worker approached me with an opportunity to be a scribe for an individual during an exam. She explained it involved reading test questions aloud and marking down answers for a disabled person. I was hesitant at first - it sounded daunting and I didn't know what to expect. But I decided to step outside my comfort zone and help.
        </p>
        
        <h4 className="text-xl font-bold text-white mt-8 mb-4">Walking into the exam center</h4>
        <p className="mb-6">
          I met this incredible person. On exam day, I made my way to the center, nerves building with each minute. I was introduced to the examinee, a bright and cheerful woman unfazed by the high stakes test ahead. Her positivity and resolve to succeed despite obstacles amazed me. Who was I to feel anxious when she approached this pivotal moment with grace and courage?
        </p>
        
        <h4 className="text-xl font-bold text-white mt-8 mb-4">As the exam began</h4>
        <p className="mb-6">
          We worked together in synchronized collaboration. I carefully dictated each question, watching in awe as she recalled knowledge swiftly and precisely. No hint of worry or doubt ever crossed her face, just deep concentration and belief in her abilities. She knew this was her chance to gain independence by securing a government job. I was humbled and inspired beyond words.
        </p>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">Post-exam, the call came</h4>
        <p className="mb-6">
          It was one of triumph and elation. The hours flew by, and suddenly the exam was over. Weeks later, I received incredible news - she had passed the exam and qualified for the position! The joy and gratitude in her voice when she called to tell me brought me to tears. This was a turning point in her life, a dream realized, and I had played a small but important role.
        </p>

        <div className="my-10 pl-6 border-l-4 border-yellow-500 italic text-gray-400">
          <p className="text-lg">“No act of kindness, no matter how small, is ever wasted.”</p>
          <p className="text-sm mt-2 not-italic text-gray-500">— Aesop</p>
        </div>

        <p className="mb-6">
          This experience was a game-changer for me. It wasn't just about lending a helping hand; it was about witnessing the ripples of change that even a small act of kindness can set in motion.
        </p>

        <p className="mb-6">
          Fueled by this encounter, I set out on a new mission. As a software engineer, I wanted to amplify this impact. So, I created an <strong>android application</strong>. This app would be the bridge, connecting eager volunteers with upcoming exams. It was about making the process smoother, removing barriers, and encouraging more folks to join in.
        </p>

        <p className="mb-6">
          This journey of giving back has been nothing short of incredible. It's taught me that the power to light up lives is within each of us. We just need to heed the call, to step up and make a difference, no matter how small it may seem at the start.
        </p>

        <p className="mb-6">
          And I can't wrap this up without giving a huge shoutout to my colleague, <strong>Himani Gwalani</strong>. She's the one who introduced me to this beautiful world of volunteering, and I'll forever be grateful for that. She opened the door to a realm of possibilities, to the joy of making a positive impact.
        </p>

        <p className="mb-6">
          So, there you have it, a slice of my first volunteering adventure. It's a story I carry with me, a reminder of the incredible potential we all hold to light up the world, one act of kindness at a time.
        </p>
      </>
    )
  },
  {
    id: 'minus-one',
    title: 'Project Minus One',
    date: 'June 15, 2018',
    readTime: '2 min',
    category: 'Environment',
    summary: 'Contributing to environmental initiatives that aim to reduce waste and promote sustainability, creating a greener footprint for future generations.',
    icon: Sprout,
    color: 'green',
    content: (
      <>
        <p className="mb-6">
          During my undergraduate years, I stumbled upon this remarkable initiative that seeks to make a significant impact through a small, yet highly practical step we can all take in our daily lives. In our fast-paced world, where technological advancements often come at the expense of our environment, it's heartening to find initiatives like <strong>Project Minus One</strong>, a brainchild of Samsung Printers, dedicated to preserving our precious forests.
        </p>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">The Power of Minus One</h4>
        <p className="mb-6">
          The concept behind Project Minus One is elegantly simple: before hitting the print button, reduce the font size by just one point. It may seem like a minor adjustment, but the cumulative effect is astonishing. By implementing this small change, we can potentially cut paper consumption by up to 50%. It's a powerful reminder that every little effort counts, and even the smallest adjustments in our habits can have a profound impact on the environment.
        </p>

        <h4 className="text-xl font-bold text-white mt-8 mb-4">Preserving Our Forests, One Font Size at a Time</h4>
        <p className="mb-6">
          Forests, often referred to as the lungs of our planet, play a critical role in maintaining the delicate ecological balance. They provide habitat for countless species, contribute to climate regulation, and offer a myriad of resources that sustain life. However, they are fast disappearing due to various factors, including deforestation for paper production.
        </p>

        <p className="mb-6">
          By adopting Minus One, we're not just saving paper, but we're also making a tangible contribution to the preservation of our forests. This initiative serves as a testament to the power we hold as individuals to effect positive change on a global scale.
        </p>

        <p className="mb-6">
          One of the most remarkable aspects of Project Minus One is that it achieves its environmental goals without compromising readability. The slight reduction in font size goes virtually unnoticed, yet the impact it makes is substantial. It's a win-win situation where we get to enjoy the same quality of print while simultaneously contributing to a more sustainable planet.
        </p>

        <div className="my-10 pl-6 border-l-4 border-green-500 italic text-gray-400">
          <p className="text-lg">“Remember, smaller font equals larger paper - and a brighter, greener future.”</p>
        </div>

        <p className="mb-6">
          Project Minus One stands as a testament to the immense impact that small, conscious choices can have on our environment. By reducing font size by just one point, we can collectively make a significant contribution to preserving our forests and ensuring a sustainable future for generations to come. Let's embrace this simple yet powerful initiative and be the change-makers our planet needs.
        </p>
      </>
    )
  }
];