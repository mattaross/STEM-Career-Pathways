const careersInfo = [
    {
        id: "c1",
        title: "Dental Hygienist",
        description: "A dental hygienist career includes discussing the link between nutrition and dental hygiene with patients. A dental hygienist's main goal is preventative care, keeping the patients' teeth as healthy as possible for as long as possible. The tasks allotted to a dental hygienists varies by state. Some states allow dental hygienists to do things such as placing and carving temporary fillings and periodontal dressings.",
        avgSalary: "$74,070",
        education: "Associates Degree",
        localEdOpps: [
            "Massachusetts College of Pharamacy and Health Sciences (Worcester, MA)",
            "Quinsigamond Community College (Worcester, MA)",
            "Springfield Technical Community College (Springfield, MA)"
        ],
        localEmployers: [
            "Baystate Dental",
            "Mount Wachusett Community College"
        ],
        imagePath: "assets/images/dental-hygienist.jpg",
        relatedInterests: [
            "Helping people",
            "Doctors and medicine"
        ]
    },
    {
        id: "c2",
        title: "Pharmacist",
        description: "Pharmacists play a major role in helping people get healthy or remain healthy. Pharmacists have the immensely important responsibility of assuring doctor ordered medication is correctly prepared, distributed, and instructed how to use to patients. Pharmacist careers include supervising pharmacy technicians and pharmacist interns.  Pharmacists must not only assure medication is correctly made according to a doctor's order, but they must also check its ingredients against any other medications a patient uses to assure no dangerous or unhealthy interactions between medications can occur.",
        avgSalary: "$124,170",
        education: "Doctoral or Professional Degree",
        localEdOpps: [
            "Massachusetts College of Pharamacy and Health Sciences (Worcester, MA)",
            "Quinsigamond Community College (Worcester, MA)",
            "Western New England University (Springfield, MA)"
        ],
        localEmployers: [
            "Caring Health Center",
            "CVS Health",
            "Tri-County Medical Associates",
            "Walgreens"
        ],
        imagePath: "assets/images/pharmacist.jpg",
        relatedInterests: [
            "Helping people",
            "Doctors and medicine"
        ]
    },
    {
        id: "c3",
        title: "Automotive Service Technician",
        description: "Automotive service technicians and automotive service mechanics perform a wide variety of jobs on cars and light trucks, keeping them well maintained and correcting any existing problems. Typical responsibilities of an automotive service technician and automotive service mechanic include testing parts and systems of vehicles and using diagnostic equipment when working on mechanical issues.",
        avgSalary: "$39,550",
        education: "Postsecondary nondegree award",
        localEdOpps: [
            "Porter & Chester Institute (Worcester, MA)",
            "Quinsigamond Community College (Worcester, MA)",
            "Springfield Technical Community College (Springfield, MA)"
        ],
        localEmployers: [
            "AAA Northeast",
            "Firestone Complete Auto Care",
            "Monro Auto Service and Tire Centers",
            "Valvoline Instant Oil Change",
            "Local mechanics and car dealerships"
        ],
        imagePath: "assets/images/auto-service-tech.jpg",
        relatedInterests: [
            "Cars",
            "Big machines",
            "Machines",
            "Building things",
            "Fixing things",
            "Driving and vehicles"
        ]
    },
    {
        id: "c4",
        title: "Welder",
        description: "Welders are responsible for joining two pieces of metal together, permanently, using very high heat. Several different industries use welders, including airplane manufacturers, building companies, car fabricators and more. Anything that requires a strong, metal bond requires welding. Welders work in a variety of environments including outside in the weather and the elements. Many times welders find themselves in odd positions and in tight spaces in order to join metal parts. Because of the working conditions and the intense heat used, this occupation has one of the highest rates of illnesses and injuries.",
        avgSalary: "$39,390",
        education: "Postsecondary nondegree award",
        localEdOpps: [
            "Blackstone Valley Regional Vocational Technical High School (Upton, MA)",
            "Worcester Technical High School"
        ],
        localEmployers: [
            "Advance Welding (Springfield, MA)",
            "Horizon Sheet Metal (Springfield, MA)",
            "Placon Corporation (West Springfield, MA)"
        ],
        imagePath: "assets/images/welder.jpg",
        relatedInterests: [
            "Building things",
            "Tools"
        ]
    },
    {
        id: "c5",
        title: "Masonry Worker",
        description: "Masons use bricks, concrete, rocks, etc. to build structures such as walls, buildings, fences and more. Masons must be in great physical condition as they are required to carry heavy objects as well as move them. Masons also spend a lot of time on their knees or bent over. Generally, structures are built outdoors, so mason workers must be fit enough to endure harsh elements, such as the blazing sun. Many masons work overtime in the summer when the weather is clear, but work less during winter because of the cold and snow.",
        avgSalary: "$41,330",
        education: "High school diploma or equivalent",
        localEdOpps: [
            "International Masonry Institute Training Center (Springfield, MA)",
            "Montachusett Regional Vocational Technical School (Fitchburg, MA)"
        ],
        localEmployers: [
            "Central Mass Landscapes",
            "Original Contracting",
            "Various other local landscapers"
        ],
        imagePath: "assets/images/mason.jpg",
        relatedInterests: [
            "Legos",
            "Being outdoors",
            "Gardens",
            "Building things",
            "Summer"
        ]
    },
    {
        id: "c6",
        title: "Carpenter",
        description: "Anyone living in a home or working in a building owes the quality of the building's structure to carpenters. Carpenters build and repair the framework, structures, and fixtures of various types of buildings made of wood and other materials. They build things such as stairs, doorframes, partitions, rafters, and install items such as kitchen cabinets, siding, and drywall.  Carpenters do everything from meeting with clients and interpreting blueprints to labor-intensive work such as constructing and putting up the framework for buildings. They may use large pulleys and cranes to assist in setting up framework.  Carpenter careers include measuring, cutting and shaping wood and other materials. Carpenter careers also include installing fixtures such as windows and molding.",
        avgSalary: "$45,170",
        education: "High school diploma or equivalent",
        localEdOpps: [
            "New England Carpenter's Training Center (Millbury, MA)",
            "Tri-county Regional Vocational Technical School (Franklin, MA)",
            "UMass Amherst (Amherst, MA)"
        ],
        localEmployers: [
            "City of Springfield",
            "Commonwealth of Massachusetts (state)",
            "Worcester Public Schools",
        ],
        imagePath: "assets/images/carpenter.jpg",
        relatedInterests: [
            "Woodworking",
            "Tools",
            "Building things",
            "Designing things",
            "Working with your hands"
        ]
    },
    {
        id: "c7",
        title: "Plumber",
        description: "Plumbing is a luxury that most people in the U.S. use on a daily basis. This creates several different types of plumbing jobs and has a great career outlook. Plumbers often install pipes in buildings and in homes, while they are being framed. However, plumbers are often called to solve emergency problems such as broken or frozen pipes. Because of this, those looking into this career must be okay with being on-call at times and working odd-hours. Plumbers must know how to read blueprints in order to place the proper piping in the correct locations as well. It is also important for plumbers to have HVAC knowledge in order to add piping to those systems as well.",
        avgSalary: "$51,450",
        education: "High school diploma or equivalent",
        localEdOpps: [
            "Baypath Vocational School (Charlton, MA)",
            "Blackstone Valley Regional Vocational Technical High School (Upton, MA)",
            "Central Mass Technical School (Auburn, MA)",
            "Montachusett Regional Vocational Technical School (Fitchburg, MA)",
            "The Peterson School (Worcester, MA)",
            "Worcester Technical High School"
        ],
        localEmployers: [
            "Commonwealth of Massachusetts (state)",
            "LaPan Mechanical Contractors",
            "North Shore Mechanical Contractors",
            "UMass Amherst"
        ],
        imagePath: "assets/images/plumber.jpg",
        relatedInterests: [
            "Fixing things",
            "Helping people"
        ]
    },
    {
        id: "c8",
        title: "Heavy Equipment Operator",
        description: "Heavy equipment operators are also known as construction equipment operators. People in this field control large machines such as bulldozers, cranes and more, which all require special training and skill. Job responsibilities vary, depending on which company the operator works for as well as the machines that are needed. It could vary from snow-plowing roads to leveling ground, in order to start construction on a new high-rise office building. In this field, workers are often subjected to dirt, dust, rain, snow and more. Because of the extreme conditions and the elements, it is important that workers are in good physical condition.",
        avgSalary: "$45,040",
        education: "High school diploma or equivalent",
        localEdOpps: [
            "IUOE Local 4 Heavy Equipment Operator School (Medway, MA)"
        ],
        localEmployers: [
            "Commonwealth of Massachusetts (state)",
            "PeopleReady Skilled Trades"
        ],
        imagePath: "assets/images/equip-operator.jpg",
        relatedInterests: [
            "Trucks",
            "Big machines",
            "Being outdoors",
            "Building things",
            "Driving and vehicles"
        ]
    },
    {
        id: "c9",
        title: "Electrician",
        description: "Dealing with wiring within your home can be confusing and incredibly intimidating; it is a job best left to a professional electrician. Electricians install and maintain electrical systems in homes, businesses, and other buildings.  Electricians interpret blueprints and technical diagrams in order to determine where electrical wires already exist or where they can add them. Electricians install wiring and lighting systems or inspect and maintain existing systems. When inspecting or installing electrical work, electricians must adhere to state and local building regulations based on National Electric Code.  When electricians work on older electrical systems, they sometimes replace outlets, circuit breakers, motors, or robotic control systems.",
        avgSalary: "$54,110",
        education: "High school diploma or equivalent",
        localEdOpps: [
            "IBEW Local 96 (Worcester, MA)",
            "The Peterson School (Worcester, MA)",
            "Porter & Chester Institute (Worcester, MA)"
        ],
        localEmployers: [
            "Commonwealth of Massachusetts (state)",
            "National Resource Management",
            "Worcester Public Schools"
        ],
        imagePath: "assets/images/electrician.jpg",
        relatedInterests: [
            "Electronics",
            "Gadgets",
            "Computers",
            "Circuitboards",
            "Building things"
        ]
    },
    {
        id: "c10",
        title: "HVAC Technician",
        description: "An HVAC technician installs, maintains, and repairs heating, air conditioning, and refrigeration systems. HVAC is an abbreviation for 'heating, ventilation, and air conditioning.' An alternative but less common abbreviation is HVACR. Someone who works in this occupation might specialize in installation, or in maintenance and repair. Some technicians concentrate on only one type of system, either heating, air conditioning, or refrigeration, while others offer a broader range of services.",
        avgSalary: "$47,610",
        education: "High school diploma or equivalent",
        localEdOpps: [
            "The Peterson School (Worcester, MA)",
            "Quinsigamond Community College (Worcester, MA)"
        ],
        localEmployers: [
            "Commonwealth of Massachusetts (state)",
            "Electronic Environments Co.",
            "Worcester Public Schools"
        ],
        imagePath: "assets/images/hvac.jpg",
        relatedInterests: [
            "Electronics",
            "Gadgets",
            "Building things",
            "Working with your hands"
        ]
    },
    {
        id: "c11",
        title: "Computer Hardware Enginner",
        description: "Most office workers just shake their heads in dismay — or their fists in fury — when their computers go on the fritz, but computer hardware engineers have the know-how to diagnose and resolve many problems. Computer hardware engineers make their living designing, developing and testing such equipment. A computer hardware engineer career may include supervising others who make and install computers or computer-related equipment. Computer hardware engineers use their expertise with chips, circuit boards and routers to work at the forefront of computer technology. A computer hardware engineering career may include working with scientists, the military, industries or commercial businesses.",
        avgSalary: "$115,120",
        education: "Bachelor's degree",
        localEdOpps: [
            "UMass Amherst (Amherst, MA)",
            "Western New England Univsersity (Springfield, MA)"
        ],
        localEmployers: [
            "Amazon",
            "The Mitre Corporation"
        ],
        imagePath: "assets/images/comp-hardware-eng.jpg",
        relatedInterests: [
            "Electronics",
            "Gadgets",
            "Fixing things",
            "Computers",
            "Solving problems"
        ]
    },
    {
        id: "c12",
        title: "Software Engineer/Software Developer",
        description: "If it weren't for computer software developers, computer programs wouldn't do very much. Software developers typically specialize in developing the applications allowing users to perform a specific task, or they specialize in the underlying systems running the control networks or device.  Computer software developer careers include studying users and determining what they need most, then either upgrading an existing system or designing, testing, and building something new to meet those needs. A software developer career includes working closely with programmers, to whom they provide flowcharts and models explaining software code.",
        avgSalary: "$103,560",
        education: "Bachelor's degree",
        localEdOpps: [
            "Fitchburg State College (Fitchburg, MA)",
            "Springfield Technical Community College (Springfield, MA)",
            "UMass Amherst (Amherst, MA)",
            "Worcester Polytechnic Institute (Worcester, MA)"
        ],
        localEmployers: [
            "Amazon Robotics",
            "Center for Human Development",
            "ten24 Digital Solutions"
        ],
        imagePath: "assets/images/software-eng.jpeg",
        relatedInterests: [
            "Building things",
            "Computers",
            "Designing things",
            "Electronics"
        ]
    },
    {
        id: "c13",
        title: "Graphic Designer",
        description: "Graphic designers are responsible for the logos, websites, and other images which connect people to specific brands or companies and make them easily recognizable. Graphic designers create their work by hand and using computer software, or a combination of the two.  Graphic designer careers include advising clients on ways to reach their target audience through image or visually-based marketing and advertising campaigns. Graphic designers play a major part in determining the message a design should portray, they provide messages through images, color, texts, and layout selected.",
        avgSalary: "$48,700",
        education: "Bachelor's degree",
        localEdOpps: [
            "Assumption (Worcester, MA)",
            "Fitchburg State University (Fitchburg, MA)",
            "Anna Maria College (Paxton, MA)",
            "Springfield College (Springfield, MA)"
        ],
        localEmployers: [
            "Commonwealth of Massachusetts (state)",
            "Apex Entertainment Center"
        ],
        imagePath: "assets/images/graphic-designer.jpg",
        relatedInterests: [
            "Computers",
            "Designing things",
            "Drawing",
            "Art",
            "Illustrating"
        ]
    },
    {
        id: "c14",
        title: "Multimedia Artist, Animator",
        description: "Multimedia artists and animators utilize pen and paper and computer programs to create illustrations. Some companies have their own computer animation software an animator or multimedia artist must learn to use upon hire.  Multimedia artist careers and animator careers typically involve working as part of a larger team of animators and artists, all working on creating the same movie, show, game, or program. Multimedia artists and animators also work directly with clients, head animators, games designers, and directors.",
        avgSalary: "$70,530",
        education: "Bachelor's degree",
        localEdOpps: [
            "Hampshire College (Amherst, MA)",
            "UMass Amherst (Amherst, MA)",
            "Springfield College (Springfield, MA)"
        ],
        localEmployers: [],
        imagePath: "assets/images/animator.jpg",
        relatedInterests: [
            "Computers",
            "Designing things",
            "Drawing",
            "Art",
            "Movies",
            "Video games",
            "Animation"
        ]
    },
    {
        id: "c15",
        title: "Game Designer",
        description: "Game designers work with a team developing and designing video games. Video games are a $30 billion industry in the U.S., especially as more people play games on their mobile phones, according to Reuters. Game designers are an important part of a comprehensive team of designers and developers that coordinate the complex task of creating a new video game. Game designers have duties like designing characters, levels, puzzles, art and animation. They may also write code, using various computer programming languages. Depending on their career duties, they may also be responsible for project management tasks and testing early versions of video games.",
        avgSalary: "$90,270",
        education: "Bachelor's degree",
        localEdOpps: [
            "Becker College (Worcester, MA)",
            "Worcester Polytechnic Institute (Worcester, MA)",
            "Springfield College (Springfield, MA)"
        ],
        localEmployers: [
            "Rockstar Games",
            "Spur IQ"
        ],
        imagePath: "assets/images/game-designer.jpg",
        relatedInterests: [
            "Computers",
            "Designing things",
            "Video Games",
            "Illustrating"
        ]
    },
    {
        id: "c16",
        title: "Accountant",
        description: "Most, if not all, businesses would crumble without accountants and auditors; they are the life source and regulators of nearly every trade. Accountants and auditors work with, and answer to, a variety of people ranging from business management to individual clients.  There are four main types of accountants and auditors: public accountants, management accountants, government accountants, and internal auditors.  Accountants and auditors prepare tax returns and assure taxes are paid. They are also responsible for reviewing and assuring accuracy and regulation compliance in financial statements, account books, and accounting procedures. They also find new methods of cost reduction and revenue enhancement to improve profits.",
        avgSalary: "$69,350",
        education: "Bachelor's degree",
        localEdOpps: [
            "Assumption College (Worcester, MA)",
            "UMass Amherst (Amherst, MA)",
            "Worcester Polytechnic Institute (Worcester, MA)"
        ],
        localEmployers: [
            "Various local accounting firms (CPAs)"
        ],
        imagePath: "assets/images/accountant.jpg",
        relatedInterests: [
            "Math",
            "Money and finance",
            "Solving problems",
            "Solving puzzles"
        ]
    },
    {
        id: "c17",
        title: "Actuary",
        description: "An actuary career includes utilizing statistical data and other available information to estimate economic cost of inevitable events such as death, sickness, accidents, and natural disaster. Using their estimations, actuaries develop, test, and administer things such as insurance policies, investments, and pension plans with the intention of minimizing risk and maximizing profitability for insurance companies.  Actuaries must be computer savvy, as they use database software for compiling information and advanced statistics and modeling software when forecasting the cost and probability of events.",
        avgSalary: "$101,560",
        education: "Bachelor's degree",
        localEdOpps: [
            "UMass Amherst (Amherst, MA)",
            "Western New England University (Springfield, MA)",
            "Worcester Polytechnic Institute (Worcester, MA)"
        ],
        localEmployers: [
            "The Hanover Insurance Group",
            "MassMutual Financial Group"
        ],
        imagePath: "assets/images/actuary.jpg",
        relatedInterests: [
            "Math",
            "Money and finance",
            "Solving problems",
            "Solving puzzles"
        ]
    },
    {
        id: "c18",
        title: "Data Scientist",
        description: "Data scientists direct the gathering and application of data for a variety of organizations, including corporations and government agencies.  Data scientists approach the retrieval, storage, and implementation of data and data systems from a broad view. Rather than just focusing on the architecture of database systems, their administration, or the specific methods used to store and convey data, data scientists work to develop large-scale models of how an organization relates to its data. Individuals in this field consider methods of data mining, methods of storage and conveyance, hardware and software, trends in data, and niche applications of data.  Data scientists work alongside teams of other IT professionals, often taking a directorial approach.",
        avgSalary: "$90,958",
        education: "Bachelor's degree",
        localEdOpps: [
            "Becker College (Worcester, MA)",
            "Worcester Polytechnic Institute (Worcester, MA)",
            "UMass Amherst (Amherst, MA)",
            "Fitchburg State University (Fitchburg, MA)"
        ],
        localEmployers: [
            "The Commonwealth of Massachusetts (state)",
            "Amazon",
            "The Hanover Insurance Group"
        ],
        imagePath: "assets/images/data-scientist.jpg",
        relatedInterests: [
            "Math",
            "Solving problems",
            "Solving puzzles"
        ]
    }
];

export default careersInfo;