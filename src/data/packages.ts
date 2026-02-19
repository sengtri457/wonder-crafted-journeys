
export interface PriceOption {
  pax: string;
  price: string;
}

export interface Package {
  id: string;
  title: string;
  duration: string;
  location: string;
  price: number;
  description: string;
  longDescription: string;
  itinerary: string[];
  included: string[];
  notIncluded: string[];
  priceTable: PriceOption[];
  image: string;
  popular?: boolean;
}

export const packages: Package[] = [
  {
    id: "temple-explorer",
    title: "One Day Tour in Siem Reap Angkor",
    duration: "1 Day",
    location: "Siem Reap",
    price: 80,
    description: "Cambodia Tourist Guide Association provides you Tour Guide and Transportation. During the Trip we will give you chances for the...",
    longDescription: "Cambodia Tourist Guide Association provides you Tour Guide and Transportation. During the Trip we will give you chances for the options: To experience elephant ride through Angkor Thom, Balloon ride to view Angkor Wat temple and the surrounding area from the air.",
    itinerary: [
      "Day 1: Overview in Siem Reap, Explore Angkor Wat temples",
      "This morning you will fly to Siem Reap via Ho Chi Minh City, Vietnam, via Bangkok, Thailand, via Luang Prabang, Lao. Your guide and driver will meet you at the airport as you arrive in Cambodia early morning and help you transfer to your hotel for checking in.",
      "Then your local guide takes you into the heart of ancient Angkor, a holy city that took centuries to build and whose scale is still breathtaking today—it sprawls across an area of roughly six by sixteen miles. The Khmer aristocrats who built the temples and monuments here between AD 800-1200 were motivated by their Hindu and Buddhist beliefs.",
      "You'll begin at the South Gate of Angkor Thom, the capital city of Khmer rulers. You'll see both Bayon and Ta Prohm, and make brief stops at Baphuon and the Elephants Terrace, where amazing bas-reliefs depict the huge heads of men/elephants. At the nearby Terrace of the Leper King, equally intricate wall carvings depict rank after rank of court attendants to mystical rulers. You conclude your explorations of Angkor's most notable features with a tour of the Ta Prohm Temple. Afterward, you break for lunch.",
      "Later, you'll visit Angkor Wat (whose name means simply \"City of temple\") and wait for the sunset, the most opportune moment for seeing this masterpiece of Khmer architecture. Angkor Wat is a large pyramid temple, built between AD 1113 and 1150, surrounded by a great moat 570 feet wide. Note the bas-relief carving throughout the temple. Who knows what you might feel as you stand in the courtyard of this temple whose towers represent Mount Meru, the center of the universe.",
      "Return to the hotel and overnight at your hotel."
    ],
    included: [
      "English Speaking Guide",
      "Car or Mini van for transportation",
      "Water and cool wet towel"
    ],
    notIncluded: [
      "Hotel",
      "Temple admission fee for Angkor Complex USD 37 per person for 1 day pass",
      "Meals",
      "Tipping",
      "Your personal expenses"
    ],
    priceTable: [
      { pax: "1-2 people", price: "USD 80.00" },
      { pax: "3-7 people", price: "USD 90.00" }
    ],
    image: "https://images.unsplash.com/photo-1548291686-277ba5bb43f2?auto=format&fit=crop&q=80&w=1000",
    popular: true,
  },
  {
    id: "two-days-tour",
    title: "TWO DAYS TOUR – ANGKOR WAT AND ANGKOR THOM",
    duration: "2 Days",
    location: "Siem Reap",
    price: 150,
    description: "Cambodia Tourist Guide Association will provide you tour guide and transportation and during the tour we give you chances for...",
    longDescription: "Detailed description for the two days tour...",
    itinerary: [
      "Day 1: Angkor Wat and Sunset",
      "Day 2: Angkor Thom and Bayon"
    ],
    included: ["Guide", "Transport", "Water"],
    notIncluded: ["Hotel", "Food", "Tickets"],
    priceTable: [
       { pax: "1-2 people", price: "USD 150.00" },
       { pax: "3-7 people", price: "USD 170.00" }
    ],
    image: "https://images.unsplash.com/photo-1518005052304-a3733212b705?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "three-days-tour",
    title: "THREE DAYS TOUR – ANGKOR WAT, ANGKOR THOM & BANTEAY SREI",
    duration: "3 Days",
    location: "Siem Reap",
    price: 220,
    description: "Cambodia Tourist Guide Association will provide you tour guide and transportation and during the tour we will give chances for...",
    longDescription: "Detailed description for the three days tour...",
    itinerary: [
      "Day 1: Angkor Wat",
      "Day 2: Angkor Thom",
      "Day 3: Banteay Srei"
    ],
    included: ["Guide", "Transport", "Water"],
    notIncluded: ["Hotel", "Food", "Tickets"],
    priceTable: [
       { pax: "1-2 people", price: "USD 220.00" },
       { pax: "3-7 people", price: "USD 250.00" }
    ],
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=1000",
  }
];
