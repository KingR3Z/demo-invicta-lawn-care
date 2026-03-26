export const client = {
  // Business Details
  name: "Invicta Lawn Care",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Canterbury.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07796 274545",
  email: "",
  website: "",

  // Location
  address: "Canterbury",
  city: "Canterbury",
  county: "",
  postcode: "",
  basedIn: "Canterbury",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "6",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Pat Bavin", rating: 5, text: "We first had Invicta visit us in July and presented him with an area of dying grass and weeds where there was once a lawn freshly laid in 2020. He treated the area and said not to worry. Two weeks later we were witnessing a …  ", date: "2 years ago" },
    { name: "Annaliese Bush", rating: 5, text: "I’ve had 3 treatments on my lawn with Invicta Lawn Care and I couldn’t be happier. It’s made such a difference the lawn has no weeds and looks really good, better than it has ever been. Thank you Danni for all your good work.  ", date: "2 years ago" },
    { name: "Lucas D", rating: 5, text: "I invited this firm out twice.  1st for some renovation work. The firm admitted they were busy and could …    Response from the owner 3 years agoHi Lucas, Thanks for leaving a review and I would like to come back to you on both of your points here.", date: "3 years ago" },
    { name: "Julie Bartlett", rating: 5, text: "So pleased with my lawn after just two treatments , it looks plush and green and the weeds are gone . Highly recommend Invicta lawn care . ", date: "2 years ago" },
    { name: "John Lowden", rating: 5, text: "Invicta Lawn Care has transformed my lawn and it is now the envy of my family. I have had other lawn care specialists in the past but none as good as Danny. ", date: "2 years ago" },
    { name: "Roy Parfitt", rating: 5, text: "Excellent service,you will not be disappointed. ", date: "Edited 6 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Invicta Lawn Care | Landscaper in Canterbury",
    description: "Professional landscaper in Canterbury. 5.0-star rated on Google. Call for a free quote.",
  },
};
