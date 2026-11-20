import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import RegistrationForm from "@/components/RegistrationForm";
import WelcomeModal from "@/components/WelcomeModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import Slideshow from "@/components/Slideshow";
import ScrollAssist from "@/components/ScrollAssist";
import { WHATSAPP } from "@/components/whatsappConfig";


const PILLARS = [
  { n: "01", title: "Business Networking",
    copy: "Structured introductions between African professionals and Canadian counterparts, facilitators and institutional partners." },
  { n: "02", title: "Technology Transfer",
    copy: "Building and construction technology, methods and systems — presented by the people already deploying them." },
  { n: "03", title: "Project Finance",
    copy: "Financing structures, partners and pathways for cross-border real estate and hospitality projects." },
  { n: "04", title: "Training & Capacity",
    copy: "Working sessions designed to leave delegates with applicable skills, not just contacts." },
];

const ROOM = [
  { title: "African Real Estate Professionals",
    copy: "Developers, brokers, project managers and construction firms seeking partners, methods and finance." },
  { title: "African Tourism & Hospitality Operators",
    copy: "Hotel groups, operators and destination businesses exploring cross-border partnership and investment." },
  { title: "Canadian Counterparts & Facilitators",
    copy: "Canadian firms, institutional partners and facilitators positioned to collaborate and transact." },
];

/* Official eight-day programme — CARTHE_2027_One_Page_Programme_of_Event.docx */
const PROGRAMME = [
  {
    day: "Day 1",
    date: "Thu 3 June",
    item: "Arrival, Welcome & Orientation",
    items: [
      "Airport reception & transfers",
      "Hotel check-in",
      "Registration",
      "Delegate orientation",
      "Official welcome",
      "Meet the Delegation networking",
      "Welcome dinner",
    ],
  },
  {
    day: "Day 2",
    date: "Fri 4 June",
    item: "Capacity Development & Canada Business Exposure",
    items: [
      "Doing Business in Canada",
      "Technology transfer",
      "Canadian case studies",
      "Cross-border project finance",
      "Sector roundtables",
      "Structured networking",
      "Business networking dinner",
    ],
  },
  {
    day: "Day 3",
    date: "Sat 5 June",
    item: "Real Estate Certificate & Sector Experience",
    items: [
      "One-day Certificate Course: Real Estate Risk Management and International Investment",
      "Parallel tourism/hospitality/business exposure for non-course delegates",
    ],
  },
  {
    day: "Day 4",
    date: "Sun 6 June",
    item: "Tourism, Hospitality & Blue Economy",
    items: [
      "One-day Certificate Course: Tourism, Hospitality and Blue Economy",
      "Parallel real-estate/market immersion and business activities for non-course delegates",
    ],
  },
  {
    day: "Day 5",
    date: "Mon 7 June",
    item: "Advanced Capacity & Business Matchmaking",
    items: [
      "Structuring international partnerships",
      "Investment readiness",
      "Africa Opportunity Clinic",
      "Cross-border negotiation",
      "Credibility building",
      "B2B Matchmaking Round 1",
    ],
  },
  {
    day: "Day 6",
    date: "Tue 8 June",
    item: "Canada–Africa Investment & Partnership Dialogue",
    items: [
      "Institutional dialogue",
      "Project finance",
      "Canadian technology & solutions showcase",
      "Africa Project Showcase",
      "Investment panels",
      "Deal Rooms / B2B Round 2",
      "Expressions of Interest",
    ],
  },
  {
    day: "Day 7",
    date: "Wed 9 June",
    item: "Deal Progression, Partnerships & Gala",
    items: [
      "B2B / Deal Rooms Round 3",
      "Partnership discussions",
      "Documentation Clinic (EOI/LOI/MoU)",
      "30/60/90-day action plans",
      "Closing session",
      "Recognition & Gala",
    ],
  },
  {
    day: "Day 8",
    date: "Thu 10 June",
    item: "Departure & Post-CARTHE Follow-Up",
    items: [
      "Hotel check-out",
      "Airport transfers",
      "Departure support",
      "Participant directory/materials",
      "B2B follow-up",
      "Partnership and outcomes tracking",
    ],
  },
];




/* Participation package — from CARTHE_2027_Prospect_Pricing_Package_Information.docx */
const PACKAGE_INCLUDES = [
  ["Registration & programme access", [
    "CARTHE 2027 registration",
    "Official invitation letter",
    "Participant onboarding and administrative support",
    "Access to the full CARTHE 2027 programme",
    "Delegate materials and programme documentation",
  ]],
  ["Accommodation", [
    "7 nights hotel accommodation, twin-sharing",
    "Hotel stay throughout the official CARTHE programme period",
  ]],
  ["Airport & local transportation", [
    "Airport transfer on arrival in Canada",
    "Airport transfer on departure",
    "Transport to and from scheduled CARTHE activities",
    "Official programme transport within the Greater Toronto Area and other scheduled locations",
  ]],
  ["Meals & hospitality", [
    "Breakfast under the hotel arrangement",
    "Tea/coffee breaks and refreshments during sessions",
    "Lunch during official programme activities",
    "Welcome and networking activities",
    "Selected official dinners and hospitality functions",
    "CARTHE closing / gala activities",
  ]],
  ["Business & professional programme", [
    "Capacity-development sessions",
    "Canada–Africa business networking",
    "Structured business matchmaking",
    "Investment and partnership discussions",
    "Canada–Africa Investment & Partnership Dialogue",
    "Industry and market exposure activities",
    "Deal-development and partnership sessions",
    "Access to participating Canadian institutions, businesses, professionals and industry networks",
    "Post-programme business and partnership follow-up",
  ]],
  ["One Professional Certificate Course", [
    "Real Estate Risk Management and International Investment",
    "Tourism, Hospitality and Blue Economy",
  ]],
];

const PACKAGE_OPTIONS = [
  { name: "Twin sharing + one certificate course", total: "US$5,000", deposit: "US$2,050", balance: "US$2,950", standard: true },
  { name: "Twin sharing + both certificate courses", total: "US$5,500", deposit: "US$2,550", balance: "US$2,950" },
  { name: "Single occupancy + one certificate course", total: "US$5,750", deposit: "US$2,800", balance: "US$2,950" },
  { name: "Single occupancy + both certificate courses", total: "US$6,250", deposit: "US$3,300", balance: "US$2,950" },
];

const PAYMENT_NAME = "Get Elevated Network Nigeria Ltd";
const PAYMENT_BANK = "Zenith Bank";
const PAYMENT_ACCOUNTS = [
  { currency: "US Dollar account", number: "5076007865" },
  { currency: "Naira account", number: "1312148352" },
];

const VIRTUAL_BENEFITS = [
  "Professional Certificate Course participation",
  "Capacity-development sessions",
  "Business and investment sessions",
  "Canada–Africa Investment & Partnership Dialogue",
  "Business matchmaking opportunities",
  "Virtual networking",
  "Programme materials and documentation",
  "Certificate eligibility, subject to participation and completion requirements",
  "Programme recordings or digital content where provided",
  "Post-event business and partnership follow-up",
];

const NOT_INCLUDED = [
  ["International flight tickets", "Participants buy their own return flights to and from Canada."],
  ["Canadian visa & immigration costs", "Visa application and biometrics fees, immigration consultant fees, medical examinations where applicable, travel documentation and any other visa-related charges."],
  ["Personal expenses", "Shopping, private transport outside the programme, extra hotel nights beyond the 7-night programme, room service, hotel incidentals, entertainment and personal insurance."],
];

const PARTNERS = [
  { name: "City of Brampton", img: "/partners/brampton.jpg", alt: "City of Brampton logo", wide: true },
  { name: "Meg Dowell Travel and Tour Agency", img: "/partners/meg-dowell.jpg", alt: "Meg Dowell Travel and Tour Agency logo" },
];

/* ============================================================
   ORGANIZERS
   Photos: public/organizers/1.jpg – 9.jpg, in this order.
   Bios are kept to ~3 lines and collapsed behind a tap so nine
   profiles do not add three screens of scroll.
   ============================================================ */
const ORGANIZERS = [
  {
    img: "/organizers/1.jpg",
    name: "Dr. Kennedy Iden",
    role: "Convener & Chief Host",
    bio: "Founder of Get Elevated Inc. Canada, GET ELEVATED TV and ELEVATE YOUR STYLE. A global leader, author, speaker and TV host recognised by the Premier of Ontario and the Mayor of Brampton, and endorsed by His Imperial Majesty Ooni Adeyeye Ogunwusi CFR, Ojaja II. Curates the dialogues, investment showcases and partnerships at CARTHE.",
  },
  {
    img: "/organizers/8.jpg",
    name: "Amb. Dr. Carlos Sousa",
    role: "International Real Estate Professional & Peace Ambassador",
    bio: "A Toronto-based real estate professional with over 20 years in Canadian real estate, specialising in international property investment, pre-construction and inclusive city-building. Past President of FIABCI Canada, Secretary General of UNIPGC Canada and Senior International Advisor to the Nigeria & Canada Business Network.",
  },
  {
    img: "/organizers/2.jpg",
    name: "Nadine Lajoie",
    role: "Tax Strategy Consultant & Real Estate Investor",
    bio: "A CPA team-based model consultant and #1 best-selling author with 31 years in finance, holding a degree in Actuarial Sciences. Featured on Forbes, USA Today, ABC, FOX and CBS MoneyWatch, and has shared stages at TEDx and the California Women's Conference. Leads on financial literacy, tax strategy and investment education.",
  },
  {
    img: "/organizers/6.jpg",
    name: "Cheryl Rankin, MPhE",
    role: "Business Consultant, Marketing & Sales Strategist",
    bio: "Principal Consultant of Fit For Business in Mississauga, known as a \"personal trainer for your business\" for practical low- and no-cost growth strategies. Her No Dollars Marketing workshops have grown memberships, doubled profits and tripled monthly sales for organisations across Canada. An organiser of the Business Connection Exchange.",
  },
  {
    img: "/organizers/7.jpg",
    name: "Rose-Cathy Handy",
    role: "Founder, Canada International Black Women Excellence",
    bio: "A Cameroonian-born Canadian entrepreneur who turned personal adversity, including homelessness, into a platform for impact. Founder of BilingualLink, which has supported over 50,000 newcomers, CEO of H.E.R. Consulting & Services and founder of Connecture Canada. Author of \"Going From Homeless to CEO.\"",
  },
  {
    img: "/organizers/9.jpg",
    name: "Scholar Acha, RCIC-IRB",
    role: "Founder & Lead Consultant, Upside Immigration Consulting",
    bio: "A Regulated Canadian Immigration Consultant with Immigration and Refugee Board authorisation, in good standing with the College of Immigration and Citizenship Consultants. Her North York practice covers Express Entry, provincial nominee and skilled worker routes, study and work permits, family sponsorship and citizenship — supporting talent mobility between Canada and Africa.",
  },
  {
    img: "/organizers/3.jpg",
    name: "Engr. Dr. Olusegun David Oludayo",
    role: "Founder, Dave Care & Shelter Foundation · Co-Founder, Perfection Real Estate Group",
    bio: "An engineer and humanitarian leading work across education, healthcare, shelter and disability inclusion, and co-founder of Dave & Kirti's Care Foundation providing affordable artificial limbs through Project Legacy. Brings real estate development, construction management and infrastructure delivery expertise. A committed Rotarian.",
  },
  {
    img: "/organizers/5.jpg",
    name: "Dr. Niyi Adeleye",
    role: "Founder & CEO, Perfection Real Estate Group",
    bio: "A real estate developer, project manager and wealth coach with over 15 years in Nigeria's real estate industry, leading estate development, land banking, housing and structured investments for diaspora and professional clients. Author of \"From Monthly Income to Real Estate Wealth\" and mentor through the Perfection Real Estate Wealth Club.",
  },
];

/* FAQs — CARTHE_2027_FAQ_Updated_FINAL.docx (all 43 questions, in the supplied order) */
const FAQ_GROUPS = [
  {
    title: "The event",
    items: [
      ["What is CARTHE 2027?",
       "CARTHE 2027 is the Canada–Africa Real Estate, Tourism & Hospitality Exchange, an eight-day international business, professional and investment exchange designed to connect African and Canadian professionals, entrepreneurs, investors, business leaders, institutions and decision-makers. It focuses on Real Estate, Tourism, Hospitality, business development, investment and project finance, technology and knowledge transfer, professional capacity development, business matchmaking and international partnerships. CARTHE is built around five key objectives: LEARN • CONNECT • EXPLORE • PARTNER • INVEST."],
      ["When will CARTHE 2027 take place?",
       "CARTHE 2027 will take place from Thursday, 3 June to Thursday, 10 June 2027. The programme will run for 8 days and 7 nights."],
      ["Where will CARTHE 2027 take place?",
       "The programme will take place in Ontario, Canada, with major activities expected within the Greater Toronto Area, Brampton and Niagara region, subject to final institutional and venue confirmations."],
      ["Who should attend CARTHE 2027?",
       "CARTHE is designed for real estate developers, property investors, project owners, project managers, architects, engineers, consultants, construction professionals, hotel owners and operators, tourism entrepreneurs, hospitality professionals, resort developers, destination managers, tourism investors, entrepreneurs, CEOs, business executives, investors, financial professionals, government and institutional representatives, professional service providers, diaspora business leaders and project sponsors."],
      ["What will participants gain from CARTHE 2027?",
       "Participants will have opportunities to receive professional capacity development, participate in a Canadian professional certificate course, understand Canadian business practices, explore international investment opportunities, meet Canadian companies and professionals, participate in structured B2B matchmaking, present investment-ready projects, explore technology and knowledge-transfer opportunities, meet potential investors and strategic partners, learn about cross-border partnerships and develop post-CARTHE action plans."],
    ],
  },
  {
    title: "Fees & what is included",
    items: [
      ["What is the participation fee?",
       "The standard CARTHE 2027 participation fee is US$5,000 per participant. This applies to the standard twin-sharing accommodation package with one professional certificate course."],
      ["What does the US$5,000 standard package include?",
       "The standard package includes CARTHE 2027 registration, official invitation letter, participant onboarding and administrative support, seven nights’ twin-sharing hotel accommodation, one professional certificate course, airport pickup and departure transfer, transportation for scheduled CARTHE activities, hotel breakfast subject to hotel arrangements, tea/coffee breaks, lunch during scheduled programme activities, welcome activities, selected official dinners, CARTHE Gala, professional development sessions, business networking, structured B2B matchmaking, Investment & Partnership Dialogue, technology and industry exposure, market-immersion activities, programme materials and post-CARTHE business follow-up."],
      ["Are international flight tickets included?",
       "No. Participants are responsible for purchasing their own international flight tickets to and from Canada."],
      ["Are Canadian visa fees included?",
       "No. Visa and immigration-related costs are not included in the participation fee. These may include visa application fees, biometrics, medical examination costs, immigration-consultant fees and other immigration-related expenses. Participants who require professional immigration assistance may be introduced to an appropriately licensed Canadian immigration consultant. CARTHE does not guarantee visa approval."],
    ],
  },
  {
    title: "Certificate courses",
    items: [
      ["What professional certificate courses are available?",
       "Participants may choose from two professional certificate courses: (1) Real Estate Risk Management and International Investment; and (2) Tourism, Hospitality and Blue Economy."],
      ["What does the Real Estate course cover?",
       "The proposed areas include real estate as an investment asset, investment-risk identification, financial analysis, due diligence, development and market risk, investment protection, real estate financing, risk mitigation, international real estate investment, and portfolio and exit strategies."],
      ["What does the Tourism, Hospitality and Blue Economy course cover?",
       "The proposed areas include tourism and hospitality business models, destination development, hospitality economics, tourism value chains, visitor experience, sustainable tourism, Blue Economy opportunities, tourism and hospitality investment, and development of commercially viable tourism projects."],
      ["Is one certificate course included in the participation fee?",
       "Yes. One professional certificate course is included in the standard US$5,000 participation package."],
      ["Can I attend both certificate courses?",
       "Yes. Participants who wish to attend both certificate courses may do so by paying an additional US$500."],
      ["When will the certificate courses take place?",
       "The current programme schedule is: Saturday, 5 June 2027 — Real Estate Risk Management and International Investment; Sunday, 6 June 2027 — Tourism, Hospitality and Blue Economy. Final academic arrangements remain subject to confirmation with the selected institutional partners."],
      ["Will participants receive certificates?",
       "The intention is for participants who successfully complete the applicable requirements of their selected course to receive an appropriate Certificate of Completion or institution-approved certificate. Final certificate wording, assessment requirements and issuing institution will depend on the academic partner ultimately confirmed for each course."],
    ],
  },
  {
    title: "Accommodation & package options",
    items: [
      ["What accommodation arrangement is included?",
       "The standard package includes 7 nights’ twin-sharing hotel accommodation, meaning two participants will share one hotel room."],
      ["Can I request a single room?",
       "Yes. Single occupancy is available as an optional upgrade, subject to hotel availability. The current single-occupancy upgrade is an additional US$750."],
      ["What are the available package options?",
       "Twin Sharing + One Course: US$5,000 total; US$2,050 deposit; US$2,950 balance. Twin Sharing + Both Courses: US$5,500 total; US$2,550 deposit; US$2,950 balance. Single Occupancy + One Course: US$5,750 total; US$2,800 deposit; US$2,950 balance. Single Occupancy + Both Courses: US$6,250 total; US$3,300 deposit; US$2,950 balance."],
    ],
  },
  {
    title: "Deposit, balance & visas",
    items: [
      ["What does the deposit cover?",
       "The deposit secures the participant’s place and supports registration, official invitation letter, programme administration, participant onboarding, seven nights’ accommodation arrangement, selected certificate course(s), and initial programme planning and processing."],
      ["When is the balance payable?",
       "The outstanding balance of US$2,950 becomes due immediately once the participant’s Canadian visa has been secured and the necessary travel clearance for physical participation has been completed."],
      ["What happens if I pay the deposit but my Canadian visa is not approved?",
       "A participant who has paid the applicable deposit but is unable to obtain a Canadian visa will not lose access to CARTHE 2027. The participant will automatically transition to full virtual participation at no additional virtual-attendance fee."],
      ["What benefits will a visa-affected participant receive virtually?",
       "Subject to what can reasonably be delivered online, virtual participants will be entitled to relevant CARTHE benefits including professional certificate-course participation, capacity-development sessions, Investment & Partnership Dialogue, business matchmaking, networking opportunities, programme materials, certificate eligibility subject to course requirements, relevant digital access and post-CARTHE follow-up. Physical services such as accommodation, meals and local transportation apply only to participants physically present in Canada."],
      ["Can a participant defer to the next CARTHE edition if the visa is refused?",
       "The current CARTHE policy is that visa-affected registered participants will participate virtually in CARTHE 2027 rather than automatically defer their participation to a future edition."],
    ],
  },
  {
    title: "Logistics",
    items: [
      ["Will CARTHE arrange airport pickup?",
       "Yes. Scheduled airport reception and transfer arrangements will be provided for arriving participants in accordance with the official programme arrangements. Departure airport transfers will also be provided."],
      ["Is local transportation included?",
       "Yes. Transportation required for scheduled official CARTHE activities is included. Personal or private transportation outside the official programme is not included."],
      ["Are meals included?",
       "The package includes meals and hospitality associated with the official programme, which may include hotel breakfast according to the hotel arrangement, tea and coffee breaks, lunch during official programme sessions, welcome activities, selected official dinners and the CARTHE Gala. Personal meals outside official programme arrangements are the participant’s responsibility."],
    ],
  },
  {
    title: "Programme",
    items: [
      ["What happens on Day 1?",
       "Thursday, 3 June 2027 is dedicated to participant arrivals, airport reception, hotel check-in, registration, delegate orientation, official welcome, Meet-the-Delegation networking and welcome dinner."],
      ["What happens on Day 2?",
       "Friday, 4 June 2027 will focus on Canadian business exposure and professional development, including Doing Business in Canada, technology transfer, Canadian case studies, cross-border project finance, sector roundtables, structured networking and business networking activities."],
      ["What happens on Days 5–7?",
       "Day 5 — Monday, 7 June: advanced capacity development, international partnership structuring, investment readiness, Africa Opportunity Clinic, cross-border negotiation and B2B Matchmaking Round 1. Day 6 — Tuesday, 8 June: Canada–Africa Investment & Partnership Dialogue, project finance discussions, Canadian Technology & Solutions Showcase, Africa Project Showcase, investment panels, Deal Rooms, B2B Round 2 and Expressions of Interest. Day 7 — Wednesday, 9 June: deal progression, B2B / Deal Rooms Round 3, partnership discussions, Documentation Clinic, LOI/MoU guidance, 30/60/90-day action planning, closing activities, recognition and CARTHE Gala."],
    ],
  },
  {
    title: "Matchmaking & networking",
    items: [
      ["What is business matchmaking?",
       "Business matchmaking is a structured process designed to connect participants with Canadian organisations, businesses and professionals whose interests align with their own. Before CARTHE, participants may be asked to provide their business profile, project information, sector, partnership requirements, investment needs, technology needs, market-entry objectives and preferred Canadian counterpart."],
      ["Does CARTHE guarantee investors or funding?",
       "No. Participation in CARTHE does not guarantee funding, investment, financing, partnership or any particular commercial transaction. CARTHE creates a structured platform for introductions, discussions, project presentation, due diligence, partnership exploration and deal progression. Any eventual transaction remains subject to the independent decisions and requirements of the parties involved."],
      ["Can participants present their projects to investors or partners?",
       "Potentially, yes. Selected investment-ready projects and business opportunities may be invited to participate in structured project presentations, the Africa Project Showcase, Investment & Partnership Dialogue or Deal Rooms. Projects may be required to demonstrate sufficient readiness and provide appropriate documentation in advance."],
      ["What type of Canadian organisations are expected to participate?",
       "CARTHE is engaging organisations across business associations, real estate and development, construction, technology and innovation, tourism and hospitality, development finance, project finance, trade, economic development, professional services, legal and transaction advisory, and academic and professional education. Participation by individual institutions remains subject to confirmation."],
      ["Will there be networking opportunities?",
       "Yes. Networking is one of CARTHE’s central objectives. The programme includes welcome networking, business networking, sector roundtables, structured B2B meetings, Deal Rooms, industry engagement, Investment Dialogue, Gala networking and post-programme follow-up."],
    ],
  },
  {
    title: "About CARTHE",
    items: [
      ["Is CARTHE only for Nigerians?",
       "No. CARTHE is designed as a Canada–Africa exchange platform and may accommodate eligible participants from different African countries as well as diaspora and international participants."],
      ["Is CARTHE only for real estate professionals?",
       "No. Although real estate is one of the three major sectors, CARTHE also focuses significantly on tourism, hospitality, investment, business development, finance, technology, entrepreneurship and international partnerships."],
      ["Do I have to be an investor to attend?",
       "No. Participants may attend for professional development, business expansion, international exposure, networking, partnerships, market access or investment opportunities."],
      ["Is CARTHE a conference?",
       "CARTHE is broader than a conventional conference. It is structured as a business and economic exchange combining professional learning, industry exposure, business networking, B2B matchmaking, investment engagement, certificate courses, market immersion, partnership development and post-event follow-up."],
      ["Will CARTHE continue supporting participants after the programme?",
       "Yes. Post-CARTHE activities may include B2B follow-up, partnership tracking, contact and participant directories, documentation follow-up, deal progression, 30/60/90-day action tracking, and continued institutional and business engagement."],
      ["What is the guiding philosophy of CARTHE 2027?",
       "CARTHE 2027 is designed around the belief that international business opportunities are created through Knowledge + Relationships + Exposure + Credibility + Strategic Connections. Its core message is: Your Next International Business Opportunity May Begin With One Connection."],
    ],
  },
  {
    title: "How to take part",
    items: [
      ["How can I participate in CARTHE 2027?",
       "Prospective participants will be required to complete the CARTHE registration process, select their preferred accommodation and certificate-course option, pay the applicable deposit, submit required participant and travel information, commence the visa/travel process where applicable, complete business/project profiling where relevant, pay the outstanding balance once visa and travel clearance are secured, and participate fully in the physical or applicable virtual programme."],
      ["Where can I get more information?",
       "For enquiries, registration and partnership information, prospective participants should contact the official CARTHE organising team through the designated CARTHE communication channels."],
    ],
  },
];

export default function Home() {
  return (
    <>
      <WelcomeModal />
      <WhatsAppButton />
      <ScrollAssist />

      <div className="announcement">
        <div className="wrap">
          <span className="tag">Registration is open</span>
          <span className="dot">·</span>
          <span>100 African delegates</span>
          <span className="dot">·</span>
          <span>3&ndash;10 June 2027</span>
        </div>
      </div>

      <Nav />

      {/* 1. HERO */}
      <header id="overview" className="hero">
        <div className="hero-grid-lines" />
        <div className="wrap">
          <div className="hero-content">
            <span className="eyebrow hero-eyebrow">Brampton, Canada &middot; 3&ndash;10 June 2027</span>
            <h1 className="h-hero hero-headline">
              Canada&ndash;Africa Real Estate, Tourism &amp; Hospitality Exchange
            </h1>
            <p className="hero-subtitle">100 African Professionals. One Room in Canada.</p>
            <p className="body-copy hero-sub">
              A high-level meeting for 100 African real estate, tourism and hospitality
              professionals and stakeholders with Canadian industry experts &mdash; for
              business exchange, partnerships for sustainable growth, capacity building
              and development.
            </p>

            <div className="hero-details small-copy">
              <span>3&ndash;10 June 2027</span>
              <span>Brampton City Hall, Ontario</span>
              <span>100 African delegates</span>
            </div>

            <div className="hero-ctas">
              <a href="#register" className="btn btn-primary">
                Reserve Your Place <span className="arrow">&rarr;</span>
              </a>
              <a href="#programme" className="btn btn-secondary">
                See the Programme
              </a>
            </div>
            <p className="hero-microcopy">
              Registration takes under two minutes. Attendance is subject to confirmation.
            </p>
          </div>
        </div>

        <div className="hero-card-wrap wrap">
          <div className="glass reg-card">
            <h3>Request Your Place</h3>
            <p>
              Register for the Canada&ndash;Africa delegation convening in Brampton,
              Ontario.
            </p>
            <div className="field">
              <label>Full name</label>
              <input placeholder="Your full name" />
            </div>
            <div className="field">
              <label>Email address</label>
              <input placeholder="you@company.com" />
            </div>
            <a href="#register" className="btn btn-primary btn-block">
              Continue Registration
            </a>
            <p className="privacy-line">
              Your information is used only for registration and event updates. The
              delegation is limited to 100 places.
            </p>
          </div>
        </div>
      </header>

      {/* 1b. GALLERY — second screen */}
      <section className="section section-gallery" id="gallery">
        <div className="wrap">
          <Slideshow />
        </div>
      </section>

      {/* 3. WHAT THIS IS + PILLARS */}
      <section className="section" id="why-attend">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">What this is</span>
            <h2 className="h-section">A working delegation, not a conference audience.</h2>
            <p className="body-copy" style={{ marginTop: 16 }}>
              Four areas of work run through the entire programme.
            </p>
          </Reveal>

          <div className="pillar-grid">
            {PILLARS.map((p) => (
              <Reveal key={p.n} className="pillar">
                <span className="pillar-num">{p.n}</span>
                <h4>{p.title}</h4>
                <p>{p.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO'S IN THE ROOM */}
      <section className="section" id="delegates">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Who is in the room</span>
            <h2 className="h-section">Both sides of the table, in one place.</h2>
          </Reveal>

          <div className="card-grid card-grid-3">
            {ROOM.map((r) => (
              <Reveal key={r.title} className="card">
                <h4>{r.title}</h4>
                <p>{r.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4a. PARTICIPATION & PACKAGES */}
      <section className="section" id="packages">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Participation</span>
            <h2 className="h-section">One fee. Eight days. Everything arranged.</h2>
            <p className="section-strapline">LEARN &middot; CONNECT &middot; EXPLORE &middot; PARTNER &middot; INVEST</p>
          </Reveal>

          <Reveal className="pkg-hero">
            <div className="pkg-price">
              <span className="pkg-price-label">Participation fee</span>
              <strong>US$5,000</strong>
              <span className="pkg-price-sub">per participant</span>
            </div>
            <div className="pkg-hero-copy">
              <h3>Standard Package</h3>
              <p>
                7 nights twin-sharing accommodation + one Professional Certificate Course
                + full CARTHE programme participation.
              </p>
              <div className="pkg-split">
                <div>
                  <span>Initial deposit</span>
                  <strong>US$2,050</strong>
                </div>
                <div>
                  <span>Balance, once your visa is secured</span>
                  <strong>US$2,950</strong>
                </div>
              </div>
            </div>
          </Reveal>

          <h3 className="pkg-h">What the US$5,000 includes</h3>
          <div className="pkg-includes">
            {PACKAGE_INCLUDES.map(([title, items], i) => (
              <details className="prog-item" key={title} open={i === 0}>
                <summary>{title}</summary>
                <ul className="prog-list">
                  {items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <p className="pkg-note">
            The deposit secures your registration, invitation letter, the full 7-night hotel
            payment, one certificate course and onboarding.
          </p>

          <h3 className="pkg-h">Choose your package</h3>
          <div className="pkg-table" role="table" aria-label="Package options">
            <div className="pkg-row pkg-row-head" role="row">
              <span role="columnheader">Option</span>
              <span role="columnheader">Total</span>
              <span role="columnheader">Deposit</span>
              <span role="columnheader">Balance</span>
            </div>
            {PACKAGE_OPTIONS.map((o) => (
              <div className={`pkg-row ${o.standard ? "is-standard" : ""}`} role="row" key={o.name}>
                <span className="pkg-opt" role="cell">
                  {o.name}
                  {o.standard ? <em>Standard</em> : null}
                </span>
                <span role="cell" data-label="Total"><b>{o.total}</b></span>
                <span role="cell" data-label="Deposit">{o.deposit}</span>
                <span role="cell" data-label="Balance">{o.balance}</span>
              </div>
            ))}
          </div>
          <p className="pkg-note">
            Single-occupancy rooms are subject to hotel availability. Both certificate courses:
            Real Estate Risk Management and International Investment, and Tourism, Hospitality
            and Blue Economy.
          </p>

          <h3 className="pkg-h">Payment details</h3>
          <div className="card-grid pkg-pay">
            {PAYMENT_ACCOUNTS.map((a) => (
              <div className="card" key={a.currency}>
                <h4>{a.currency}</h4>
                <dl className="pkg-acct">
                  <div><dt>Account name</dt><dd>{PAYMENT_NAME}</dd></div>
                  <div><dt>Bank</dt><dd>{PAYMENT_BANK}</dd></div>
                  <div><dt>Account number</dt><dd className="pkg-acct-no">{a.number}</dd></div>
                </dl>
              </div>
            ))}
          </div>
          <p className="pkg-note">
            Please confirm these details with the CARTHE team before you transfer.
          </p>

          <div className="card-grid pkg-policy">
            <Reveal className="card">
              <h4>Visa &amp; virtual participation</h4>
              <p>
                Paid the deposit but unable to obtain a Canadian visa? You still take part in
                full, online, at no additional virtual-attendance cost. Hotel, meals, local
                transport and airport transfers apply only to those physically in Canada.
              </p>
              <ul className="pkg-mini">
                {VIRTUAL_BENEFITS.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="card">
              <h4>Visa support</h4>
              <p>
                Visa application and processing costs are not part of the participation fee. If
                you do not have a valid Canadian visa, you may be introduced to a licensed
                Canadian immigration consultant. An invitation letter or registration does not
                guarantee visa approval; decisions rest with the Canadian immigration
                authorities. Start your application promptly after registering.
              </p>
            </Reveal>
            <Reveal className="card">
              <h4>Not included</h4>
              <dl className="pkg-not">
                {NOT_INCLUDED.map(([t, d]) => (
                  <div key={t}>
                    <dt>{t}</dt>
                    <dd>{d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="pkg-cta">
            <p className="body-copy">
              <strong>Eight days of business &mdash; and the evenings in-between.</strong>
            </p>
            <a href="#register-form" className="btn btn-primary">
              Reserve Your Place <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6b. THE ORGANIZERS */}
      <section className="section" id="organizers">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Organizers / Partners</span>
            <h2 className="h-section">Organizers &amp; Partners</h2>
            <p className="section-strapline">
              CARTHE 2027 is a Get Elevated Inc. initiative. Tap any name to read more.
            </p>
          </Reveal>

          <div className="organizer-grid">
            {ORGANIZERS.map((o) => (
              <Reveal key={o.name} className="organizer-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={o.img} alt={o.name} loading="lazy" />
                <details className="organizer-details">
                  <summary>
                    <span className="organizer-id">
                      <h4>{o.name}</h4>
                      <span className="organizer-role">{o.role}</span>
                    </span>
                    <span className="organizer-toggle" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p>{o.bio}</p>
                </details>
              </Reveal>
            ))}
          </div>

          <div className="partners">
            <h3 className="partners-h">Partners</h3>
            <div className="partner-row">
              {PARTNERS.map((p) => (
                <Reveal key={p.name} className={`partner-tile ${p.wide ? "is-wide" : ""}`}>
                  <div className="partner-logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.alt} loading="lazy" />
                  </div>
                  <span>{p.name}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. THE PROGRAMME */}
      <section className="section" id="programme">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">The programme</span>
            <h2 className="h-section">
              Eight days of business and the evenings in-between.
            </h2>
            <p className="section-strapline">LEARN &middot; CONNECT &middot; EXPLORE &middot; PARTNER &middot; INVEST</p>
          </Reveal>

          <div className="agenda-list">
            {PROGRAMME.map((p) => (
              <details className="prog-item" key={p.day}>
                <summary>
                  <span className="agenda-day">
                    {p.day}
                    <em>{p.date}</em>
                  </span>
                  <span className="agenda-item">{p.item}</span>
                </summary>
                <ul className="prog-list">
                  {p.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <p className="small-copy" style={{ marginTop: 18 }}>
            Tap any day to see what it holds. Programme sequence and speakers/partners may be
            refined as institutional collaborations are confirmed. Controlled virtual
            participation will be available for registered participants affected by visa
            outcomes.
          </p>
        </div>
      </section>

      {/* 8. FAQ + FINAL CTA */}
      <section className="section" id="faqs">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">FAQs</span>
            <h2 className="h-section">Before you register.</h2>
          </Reveal>

          {FAQ_GROUPS.map((g) => (
            <div className="faq-group" key={g.title}>
              <h3 className="faq-group-title">{g.title}</h3>
              {g.items.map(([q, a]) => (
                <details className="faq-item" key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className="final-inline">
            <p className="body-copy" style={{ margin: 0 }}>
              The delegation is capped at 100. Once the places are allocated, registration
              moves to a waiting list.
            </p>
            <a href="#register-form" className="btn btn-primary">
              Reserve Your Place <span className="arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. REGISTER */}
      <section className="section" id="register">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Reserve your place</span>
            <h2 className="h-section">Choose how you attend.</h2>
            <p className="body-copy" style={{ marginTop: 16 }}>
              The delegation is capped at 100 African professionals. In-person and
              meeting capacity closes first.
            </p>
          </Reveal>

          <div className="register-split">
            <div className="options-stack">
              <Reveal className="option-card">
                <h4>Delegate</h4>
                <p>
                  Full access to the business programme, networking sessions and the
                  delegate experience across the eight days.
                </p>
                <a href="#register-form" className="btn btn-secondary btn-block">
                  Register as a Delegate
                </a>
              </Reveal>
              <Reveal className="option-card featured">
                <h4>Exhibitor</h4>
                <p>
                  Present your firm, technology or project to the room, with priority
                  access to structured meetings.
                </p>
                <a href="#register-form" className="btn btn-primary btn-block">
                  Request Partner Access
                </a>
              </Reveal>
              <Reveal className="option-card">
                <h4>Virtual Attendee</h4>
                <p>Join selected sessions remotely and receive delegate communications.</p>
                <a href="#register-form" className="btn btn-secondary btn-block">
                  Join Virtually
                </a>
              </Reveal>
            </div>

            <div>
              <div id="register-form" className="glass reg-card reg-card-sticky">
                <h3>Start Your Registration</h3>
                <p>
                  Join the 100 African professionals convening for CARTHE 2027.
                </p>
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. VENUE */}
      <section className="section" id="venue">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">The venue</span>
            <h2 className="h-section">Brampton City Hall.</h2>
          </Reveal>
          <Reveal>
            <p className="body-copy">
              2 Wellington St W
              <br />
              Brampton, Ontario L6Y 4R2
              <br />
              Canada
            </p>
            <p className="body-copy" style={{ marginTop: 14 }}>
              Thursday 3 &ndash; Thursday 10 June 2027
            </p>
            <a
              href="https://maps.google.com/?q=Brampton+City+Hall,+2+Wellington+St+W,+Brampton,+ON+L6Y+4R2"
              className="btn btn-secondary"
              style={{ marginTop: 22 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </Reveal>
        </div>
      </section>

      {/* 10. ENQUIRIES */}
      <section className="section" id="enquiries">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Enquiries</span>
            <h2 className="h-section">Speak to the team.</h2>
          </Reveal>

          <Reveal>
            <div className="wa-cta">
              <h4>Join the CARTHE WhatsApp Community</h4>
              <p>
                Programme updates, partner announcements and delegate information are
                posted there first &mdash; and you can reach the team one-on-one.
              </p>
              <a
                href={WHATSAPP.groupInvite}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.02h-.01c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.2.84.85-3.12-.2-.32a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.32-8.24 8.32z" />
                </svg>
                Join the Community
              </a>
            </div>

            <p className="small-copy" style={{ margin: "26px 0 12px" }}>
              Or call the team directly &mdash; tap a number.
            </p>
            <div className="contact-chips">
              <a href="tel:+14376621151" className="contact-chip">
                <span className="chip-region">CA</span>
                +1 437 662 1151
              </a>
              <a href="tel:+2347042114404" className="contact-chip">
                <span className="chip-region">NG</span>
                +234 704 211 4404
              </a>
              <a href="tel:+2348030954608" className="contact-chip">
                <span className="chip-region">NG</span>
                +234 803 095 4608
              </a>
              <a href="tel:+2348037280004" className="contact-chip">
                <span className="chip-region">NG</span>
                +234 803 728 0004
              </a>
              <a href="tel:+2348023049263" className="contact-chip">
                <span className="chip-region">NG</span>
                +234 802 304 9263
              </a>
            </div>

            <p className="small-copy" style={{ marginTop: 18 }}>
              More at{" "}
              <a
                href="https://www.getelevatedinca.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                getelevatedinca.com
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <div className="nav-logo" style={{ marginBottom: 10 }}>
                CARTHE 2027
              </div>
              <p className="small-copy" style={{ maxWidth: 340 }}>
                The Canada&ndash;Africa delegation: 100 African real estate, tourism and
                hospitality professionals in one room in Ontario.
                <br />
                Brampton City Hall, 2 Wellington St W, Brampton, ON L6Y 4R2
                <br />
                3&ndash;10 June 2027
              </p>
            </div>
            <div className="footer-links">
              <a href="#organizers">Organizers / Partners</a>
              <a href="#programme">Programme</a>
              <a href="#faqs">FAQs</a>
              <a href="#register">Register</a>
              <a href="#venue">Venue</a>
              <a href="#enquiries">Enquiries</a>
              <a href="https://www.getelevatedinca.com" target="_blank" rel="noopener noreferrer">
                getelevatedinca.com
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2027 CARTHE. All rights reserved.</span>
            <span>Presented by Perfection Real Estate Group</span>
          </div>
        </div>
      </footer>
    </>
  );
}
