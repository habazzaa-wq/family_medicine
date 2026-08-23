export type Mcq = {
  id: string;
  stem: string;
  options: string[];
  answer: number;
  note?: string;
};

export type Essay = {
  id: string;
  prompt: string;
  answer: string[];
  extra?: string;
};

export type Exam = {
  id: string;
  year: string;
  titleAr: string;
  titleEn: string;
  professor: string;
  blurb: string;
  mcq: Mcq[];
  essay: Essay[];
};

export const EXAMS: Exam[] = [
  {
    id: "family-medicine",
    year: "محاضرة",
    titleAr: "طب الأسرة — كسر الأخبار السيئة",
    titleEn: "Family Medicine · Breaking Bad News",
    professor: "Prof. Nahed Hassan",
    blurb: "اختياري ومقالي من ملف الأسئلة مع إجابات نموذجية من محاضرة Breaking Bad News.",
    mcq: [
      {
        id: "fm-1",
        stem: "Which of the following situation is the suitable time for breaking bad news to the patient?",
        options: [
          "In the emergency clinic",
          "During call communication",
          "In the ward of the patients",
          "In private and quiet place",
        ],
        answer: 3,
      },
      {
        id: "fm-2",
        stem: "Which of the following is the priority of patient regarding the communication with health professionals?",
        options: [
          "Don't give details information",
          "Being treated with humanity and respect",
          "Practicing investigation",
          "Referral to the hospital",
        ],
        answer: 1,
      },
    ],
    essay: [
      {
        id: "fm-e1",
        prompt: "Mention 4 responses of the patients when receiving bad news.",
        answer: [
          "Uncontrollable upset",
          "Angry and shout",
          "Run out of the room",
          "Refuse treatment",
          "Go silent",
          "Start asking difficult questions",
          "Give up and die",
          "Commit suicide (rare)",
        ],
        extra: "يكفي ذكر أربعة من الاستجابات السابقة كما وردت في محاضرة Prof. Nahed Hassan.",
      },
      {
        id: "fm-e2",
        prompt:
          "Regarding basic principles of breaking bad news, write when and where the physician should inform the patient about the bad news.",
        answer: [
          "When: as soon as the information is clearly known — do not pass on unsure information too soon.",
          "Where: in a private setting, and in person (never over the phone).",
          "Support persons should be present if the patient wishes (family / both parents / hospital support).",
        ],
        extra:
          "من المبادئ أيضاً: Ensure privacy and adequate time — Provide information simply and honestly — Encourage expression of feelings — Discuss options — Document what was said.",
      },
    ],
  },
  {
    id: "hm-2022",
    year: "2022",
    titleAr: "إدارة الصحة — امتحان 2022",
    titleEn: "Health Management · 4th year 2022",
    professor: "Prof. Nahed Hassan",
    blurb: "اختياري قصير + سؤال SWOT المقالي كما في ورقة 2022.",
    mcq: [
      {
        id: "h22-1",
        stem: "Which of the following is considered the attitude of the public?",
        options: [
          "Positive, negative or neutral",
          "Long, short or medium",
          "Mission, goal or action",
          "Goal, objectives or resources",
        ],
        answer: 0,
      },
      {
        id: "h22-2",
        stem: "Which of the following could be the resources required for planning?",
        options: [
          "Money, building and furniture",
          "Money, Man power and materials",
          "Materials, equipment and logistics",
          "Man power, Doctors and nurses",
        ],
        answer: 1,
      },
      {
        id: "h22-3",
        stem: "Which of the following is the time of ongoing evaluation?",
        options: [
          "During the implementation of the program",
          "At the end of the program",
          "At the beginning of the program",
          "To evaluate the objective",
        ],
        answer: 0,
      },
    ],
    essay: [
      {
        id: "h22-e1",
        prompt: "Write the meaning of the abbreviation (SWOT) analysis.",
        answer: [
          "S — Strengths (نقاط القوة — بيئة داخلية)",
          "W — Weaknesses (نقاط الضعف — بيئة داخلية)",
          "O — Opportunities (الفرص — بيئة خارجية)",
          "T — Threats (التهديدات — بيئة خارجية)",
        ],
        extra:
          "SWOT يُستخدم في المسح البيئي لتشخيص المشكلات الصحية قبل وضع الخطة التشغيلية.",
      },
    ],
  },
  {
    id: "hm-2024",
    year: "2024",
    titleAr: "إدارة المستشفيات — نهاية الترم 2024",
    titleEn: "Hospital Management · End of Semester 2023/2024 · Form B",
    professor: "Faculty of Medicine for Girls · Al-Azhar",
    blurb:
      "21 اختياري + 7 مقالي. الإجابات حسب التعليم الأصفر، والتصحيح الأخضر إن وُجد. السؤال 5 عُدّل إلى C.",
    mcq: [
      {
        id: "h24-1",
        stem: "What do you mean by good medical record?",
        options: [
          "Standard size of medical record forms",
          "Good quality of paper, printing, style",
          "Patient's data written chronologically",
          "Contain all forms",
        ],
        answer: 2,
      },
      {
        id: "h24-2",
        stem: "Which of the following should be the colour of the exit sign?",
        options: ["Black", "Green", "Red", "Yellow"],
        answer: 1,
      },
      {
        id: "h24-3",
        stem: "For fire prevention which of the following detector saves human life in the health care facilities?",
        options: ["Ultraviolet", "Infrared", "Smoke", "Heat only"],
        answer: 2,
      },
      {
        id: "h24-4",
        stem: "For fire prevention which of the following is used to extinguish fire in the health care facilities?",
        options: [
          "Fire blankets",
          "Fire extinguishers",
          "Water sprinklers",
          "Water hose reels",
        ],
        answer: 0,
      },
      {
        id: "h24-5",
        stem: "For fire safety, which of the following is the most important training for health care workers?",
        options: [
          "How to lift and move patients",
          "How to extinguish fire",
          "What to do if they see fire",
          "What to do if they hear alarm and see flashing lights",
        ],
        answer: 2,
        note: "تصحيح مطلوب: الإجابة C",
      },
      {
        id: "h24-6",
        stem: "Which of the following is a key function of medical records?",
        options: [
          "Admission and patient identification",
          "Discharge only",
          "Filling cabinets",
          "Retrieving records for patient care",
        ],
        answer: 0,
      },
      {
        id: "h24-7",
        stem: "Which of the following is essential content of a medical record?",
        options: [
          "Personal details",
          "Hospital budget",
          "Staff vacation roster",
          "Marketing plan",
        ],
        answer: 0,
      },
      {
        id: "h24-8",
        stem: "Which of the following is a source of data needed for environmental scanning?",
        options: [
          "Surveys",
          "Focus groups",
          "Questionnaires",
          "Statistical reports and registers",
        ],
        answer: 3,
      },
      {
        id: "h24-9",
        stem: "The objective should be SMART. Which of the following is a SMART feature used in the course?",
        options: [
          "Simple, clear and well defined",
          "Ambiguous",
          "Open-ended with no deadline",
          "Unmeasurable",
        ],
        answer: 0,
      },
      {
        id: "h24-10",
        stem: "Which of the following can cause transmission of infection, air, water and soil pollution?",
        options: [
          "Biomedical waste",
          "Radioactive waste",
          "Chemical waste",
          "Pharmaceutical waste",
        ],
        answer: 0,
      },
      {
        id: "h24-11",
        stem: "Which of the following is considered the attitude of the public?",
        options: [
          "Positive, negative or neutral",
          "Long, short or medium",
          "Mission, goal or action",
          "Goal, objectives or resources",
        ],
        answer: 0,
      },
      {
        id: "h24-12",
        stem: "Which of the following could be the resources required for planning (3M)?",
        options: [
          "Money, building and furniture",
          "Money, Man power and materials",
          "Materials, equipment and logistics",
          "Man power, Doctors and nurses",
        ],
        answer: 1,
      },
      {
        id: "h24-13",
        stem: "Which of the following is the time of ongoing evaluation?",
        options: [
          "During the implementation of the program",
          "At the end of the program",
          "At the beginning of the program",
          "To evaluate the objective only",
        ],
        answer: 0,
      },
      {
        id: "h24-14",
        stem: "Which of the following terms describes the process and policy of reducing the amount of waste produced by a healthcare facility?",
        options: [
          "Waste minimization",
          "Waste segregation",
          "Waste recycling",
          "Waste incineration",
        ],
        answer: 0,
      },
      {
        id: "h24-15",
        stem: "Which of the following is one of the long-term strategies of health care waste management?",
        options: [
          "Promote small-scale non-incineration alternatives",
          "Reduce the number of unnecessary injections to reduce sharps waste",
          "Assess the health risks associated with incineration",
          "The development and implementation of national plans, policies and legislation on health care waste",
        ],
        answer: 3,
      },
      {
        id: "h24-16",
        stem: "Which of the following vaccines should be given to workers who deal with biomedical waste?",
        options: ["HBsAg (Hepatitis B)", "Tetanus", "Rabies", "Influenza"],
        answer: 0,
      },
      {
        id: "h24-17",
        stem: "Which of the following is the best method for disposing biomedical waste (as taught in the module)?",
        options: ["Microwaving", "Chemical treatment", "Incineration", "Autoclaving"],
        answer: 2,
      },
      {
        id: "h24-18",
        stem: "SWOT analysis examines:",
        options: [
          "Only financial reports",
          "Internal Strengths & Weaknesses and external Opportunities & Threats",
          "Only patient satisfaction",
          "Only staff attendance",
        ],
        answer: 1,
      },
      {
        id: "h24-19",
        stem: "A goal in planning is:",
        options: [
          "The ultimate desired state; remote outcome; not measurable",
          "Always a percentage with a deadline",
          "The same as an activity",
          "A budget line only",
        ],
        answer: 0,
      },
      {
        id: "h24-20",
        stem: "An objective should be SMART, meaning:",
        options: [
          "Simple, Measurable, Acceptable, Realistic, Time-bound",
          "Slow, Mild, Average, Random, Temporary",
          "Secret, Manual, Annual, Rigid, Theoretical",
          "Short, Mixed, Abstract, Rare, Timeless",
        ],
        answer: 0,
      },
      {
        id: "h24-21",
        stem: "Phases of strategic planning include:",
        options: [
          "Vision, Mission, Values, then the action plan",
          "Only evaluation",
          "Only budgeting",
          "Hiring then firing",
        ],
        answer: 0,
      },
    ],
    essay: [
      {
        id: "h24-e1",
        prompt: "Enumerate 4 sources of data needed for environmental scanning.",
        answer: [
          "Available statistical reports and registers",
          "Surveys",
          "Questionnaires",
          "Focus groups",
        ],
      },
      {
        id: "h24-e2",
        prompt: "Enumerate identification data that should appear in a medical record.",
        answer: [
          "Full name and date of birth",
          "Admission and discharge dates",
          "Name of the attending doctor",
          "Diseases treated and operations performed",
          "A discharge summary for each admission",
        ],
      },
      {
        id: "h24-e3",
        prompt: "Enumerate the main contents of a medical record.",
        answer: [
          "Personal details",
          "Reason for admission",
          "Findings and administered treatments",
          "Follow-up details",
        ],
      },
      {
        id: "h24-e4",
        prompt: "Enumerate functions / uses of medical records.",
        answer: [
          "Admission and patient identification",
          "Discharge",
          "Filing",
          "Retrieving records for patient care",
          "Medico-legal issues",
        ],
      },
      {
        id: "h24-e5",
        prompt: "Enumerate fire-safety training items for health-care workers.",
        answer: [
          "How to lift and move patients",
          "How to extinguish fire",
          "What to do if they see fire",
          "What to do if they hear the alarm and see flashing lights",
        ],
      },
      {
        id: "h24-e6",
        prompt: "Enumerate fire-prevention equipment in health-care facilities.",
        answer: [
          "Fire blankets",
          "Fire extinguishers",
          "Water sprinklers",
          "Water hose reels",
          "Smoke and heat detectors",
        ],
      },
      {
        id: "h24-e7",
        prompt: "Enumerate 5 ways to improve / run hospital management successfully.",
        answer: [
          "Create cooperation between different departments and professionals",
          "Create a positive work environment",
          "Prioritize patient-centred care",
          "Best use of technology (EHR and telemedicine)",
          "Implement a feedback system",
        ],
        extra:
          "من محاضرة Dr. Hend: تدريب العاملين، المساءلة، نظام الرعاية المُدارة، تحديث بيانات الاتصال، والإشراف على الأقسام الحرجة.",
      },
    ],
  },
  {
    id: "hm-2023",
    year: "2023",
    titleAr: "إدارة المستشفيات — 2023",
    titleEn: "Hospital Management · 2023 · Form A",
    professor: "Faculty of Medicine for Girls · Al-Azhar",
    blurb: "امتحان 2023 (Form A) من نفس الملف: اختياري + مقالي مع التعريفات.",
    mcq: [
      {
        id: "h23-1",
        stem: "What do you mean by good medical record?",
        options: [
          "Standard size of medical record forms",
          "Good quality of paper, printing, style",
          "Patient's data written chronologically",
          "Contain all forms",
        ],
        answer: 2,
      },
      {
        id: "h23-2",
        stem: "Which of the following should be the colour of the exit sign?",
        options: ["Black", "Green", "Red", "Yellow"],
        answer: 1,
      },
      {
        id: "h23-3",
        stem: "For fire prevention which of the following detector saves human life in the health care facilities?",
        options: ["Ultraviolet", "Infrared", "Smoke", "Heat only"],
        answer: 2,
      },
      {
        id: "h23-4",
        stem: "For fire prevention which of the following is used to extinguish fire in the health care facilities?",
        options: [
          "Fire blankets",
          "Fire extinguishers",
          "Water sprinklers",
          "Water hose reels",
        ],
        answer: 0,
      },
      {
        id: "h23-5",
        stem: "For fire safety, which of the following is the most important training for health care workers?",
        options: [
          "How to lift and move patients",
          "How to extinguish fire",
          "What to do if they see fire",
          "What to do if they hear alarm and see flashing lights",
        ],
        answer: 2,
      },
      {
        id: "h23-6",
        stem: "Which of the following is a key function of medical records?",
        options: [
          "Admission and patient identification",
          "Discharge only",
          "Filling cabinets",
          "Retrieving records for patient care",
        ],
        answer: 0,
      },
      {
        id: "h23-7",
        stem: "Which of the following is essential content of a medical record?",
        options: [
          "Personal details",
          "Hospital budget",
          "Staff vacation roster",
          "Marketing plan",
        ],
        answer: 0,
      },
      {
        id: "h23-8",
        stem: "Which of the following is a source of data needed for environmental scanning?",
        options: [
          "Surveys",
          "Focus groups",
          "Questionnaires",
          "Statistical reports and registers",
        ],
        answer: 3,
      },
      {
        id: "h23-9",
        stem: "Which of the following is considered the attitude of the public?",
        options: [
          "Positive, negative or neutral",
          "Long, short or medium",
          "Mission, goal or action",
          "Goal, objectives or resources",
        ],
        answer: 0,
      },
      {
        id: "h23-10",
        stem: "Which of the following could be the resources required for planning?",
        options: [
          "Money, building and furniture",
          "Money, Man power and materials",
          "Materials, equipment and logistics",
          "Man power, Doctors and nurses",
        ],
        answer: 1,
      },
      {
        id: "h23-11",
        stem: "Which of the following is the time of ongoing evaluation?",
        options: [
          "During the implementation of the program",
          "At the end of the program",
          "At the beginning of the program",
          "To evaluate the objective",
        ],
        answer: 0,
      },
      {
        id: "h23-12",
        stem: "Which of the following can cause transmission of infection, air, water and soil pollution?",
        options: [
          "Biomedical waste",
          "Radioactive waste",
          "Chemical waste",
          "Pharmaceutical waste",
        ],
        answer: 0,
      },
      {
        id: "h23-13",
        stem: "Which of the following terms is used to describe reducing the amount of waste produced?",
        options: [
          "Waste minimization",
          "Waste segregation",
          "Waste recycling",
          "Waste incineration",
        ],
        answer: 0,
      },
      {
        id: "h23-14",
        stem: "Which vaccine should be given to workers who deal with biomedical waste?",
        options: ["HBsAg (Hepatitis B)", "Tetanus", "Rabies", "Influenza"],
        answer: 0,
      },
      {
        id: "h23-15",
        stem: "Which of the following is the best method for disposing biomedical waste (module key)?",
        options: ["Microwaving", "Chemical treatment", "Incineration", "Autoclaving"],
        answer: 2,
      },
      {
        id: "h23-16",
        stem: "Internal environment in SWOT includes:",
        options: [
          "Strengths and Weaknesses",
          "Opportunities and Threats",
          "Only Opportunities",
          "Only Threats",
        ],
        answer: 0,
      },
      {
        id: "h23-17",
        stem: "External environment in SWOT includes:",
        options: [
          "Strengths and Weaknesses",
          "Opportunities and Threats",
          "Only Strengths",
          "Only Weaknesses",
        ],
        answer: 1,
      },
      {
        id: "h23-18",
        stem: "Span of strategic planning includes:",
        options: [
          "Long term (15 year), Intermediate (5 year), Short term (one year)",
          "Only one week",
          "Only one day",
          "No time frame",
        ],
        answer: 0,
      },
      {
        id: "h23-19",
        stem: "A hospital with great leadership but poor management will:",
        options: [
          "Fail operationally",
          "Always succeed",
          "Need no staff",
          "Need no budget",
        ],
        answer: 0,
      },
      {
        id: "h23-20",
        stem: "Management by Objectives (MBO) was formulated by:",
        options: ["Peter Drucker", "Florence Nightingale", "Hippocrates", "Pasteur"],
        answer: 0,
      },
      {
        id: "h23-21",
        stem: "The four ethical pillars of clinical behaviour include:",
        options: [
          "Autonomy, Beneficence, Non-maleficence, Justice",
          "Speed, Cost, Fame, Power",
          "Only confidentiality",
          "Only research",
        ],
        answer: 0,
      },
    ],
    essay: [
      {
        id: "h23-e1",
        prompt: "Define an objective in operational planning.",
        answer: [
          "It is how we will achieve our goal.",
          "It serves as the basis for evaluation of the project.",
          "It should be SMART: Simple, Measurable, Acceptable, Realistic, Time-bound.",
        ],
      },
      {
        id: "h23-e2",
        prompt: "Define evaluation.",
        answer: [
          "The process of observing, measuring, analyzing and interpreting the results of a program or service in relation to the sited objective.",
          "It should be continuous so that immediate corrective action can be taken.",
        ],
      },
      {
        id: "h23-e3",
        prompt: "What is motivation (as used in management)?",
        answer: ["A force that drives a person to reach his or her goals."],
      },
      {
        id: "h23-e4",
        prompt: "Enumerate 5 ways to create cooperation / improve hospital management.",
        answer: [
          "Create cooperation between different departments and different professionals",
          "Create a positive work environment",
          "Prioritize patient-centred care",
          "Use technology (electronic health records and telemedicine)",
          "Implement a feedback system",
        ],
      },
      {
        id: "h23-e5",
        prompt: "Enumerate contents of a medical record.",
        answer: [
          "Personal details",
          "Date and reason of admission",
          "Findings",
          "Treatment details",
          "Follow-up details",
        ],
      },
      {
        id: "h23-e6",
        prompt: "Enumerate types of health-care waste.",
        answer: [
          "Biomedical waste",
          "Chemical waste",
          "Radioactive waste",
          "Cytotoxic waste",
          "Sharps waste",
          "Pharmaceutical waste",
        ],
      },
      {
        id: "h23-e7",
        prompt: "Write the features of a SMART objective.",
        answer: [
          "Simple, clear and well defined",
          "Measurable",
          "Acceptable",
          "Realistic",
          "Time-bound (timely)",
        ],
      },
    ],
  },
  {
    id: "hm-2025",
    year: "2025",
    titleAr: "فاينال إدارة المستشفيات 2025",
    titleEn: "Final Hospital Management · August 2024/2025",
    professor: "Solved from module lectures (Nahed / Hend / Somaya)",
    blurb:
      "الأسئلة لم تكن محلولة في الورقة — تم حل الاختياري والمقالي من المحاضرات والـ handbook.",
    mcq: [
      {
        id: "h25-1",
        stem: "Which of the following can cause transmission of infection, air, and water and soil pollution?",
        options: [
          "Biomedical waste",
          "Radioactive waste",
          "Chemical waste",
          "Pharmaceutical waste",
        ],
        answer: 0,
        note: "محلول من المحاضرة: المخلفات الحيوية الطبية تنقل العدوى وتلوث الهواء والماء والتربة.",
      },
      {
        id: "h25-2",
        stem: "Which of the following terms is used to describe the process and policy of reducing the amount of waste produced by a healthcare facility?",
        options: [
          "Waste minimization",
          "Waste segregation",
          "Waste recycling",
          "Waste incineration",
        ],
        answer: 0,
      },
      {
        id: "h25-3",
        stem: "Which of the following is one of the long-term strategies of health care waste management?",
        options: [
          "Promote small-scale non-incineration alternatives",
          "Reduce the number of unnecessary injections to reduce sharps waste",
          "Assess the health risks associated with incineration and exposure to health care waste",
          "The development and implementation of national plans, policies legislation on health care waste",
        ],
        answer: 3,
        note: "الاستراتيجية طويلة المدى = خطط وسياسات وتشريعات وطنية.",
      },
      {
        id: "h25-4",
        stem: "Which of the following vaccines should be given to workers who deal with biomedical waste?",
        options: ["HBsAg", "Tetanus", "Rabies", "Influenza"],
        answer: 0,
        note: "التطعيم الأساسي للعاملين على المخلفات الطبية هو التهاب الكبد B (HBsAg). التيتانوس يُذكر أيضاً لكنه ليس الإجابة الأشيع في الورقة.",
      },
      {
        id: "h25-5",
        stem: "Which of the following is the best method for disposing biomedical waste?",
        options: ["Microwaving", "Chemical treatment", "Incineration", "Autoclaving"],
        answer: 2,
        note: "حسب منهج الموديول: الحرق (incineration) هو الطريقة الأفضل للتخلص.",
      },
      {
        id: "h25-6",
        stem: "What do you mean by good medical record?",
        options: [
          "Standard size of medical record forms",
          "Good quality of paper, printing, style",
          "Patient's data written chronologically",
          "Contain all forms",
        ],
        answer: 2,
      },
      {
        id: "h25-7",
        stem: "Which of the following should be the colour of the exit sign?",
        options: ["Black", "Green", "Red", "Yellow"],
        answer: 1,
      },
      {
        id: "h25-8",
        stem: "For fire prevention which of the following detector saves human life in the health care facilities?",
        options: ["Ultraviolet", "Infrared", "Smoke", "Heat only"],
        answer: 2,
      },
      {
        id: "h25-9",
        stem: "For fire prevention which of the following is used to extinguish fire in the health care facilities?",
        options: [
          "Fire blankets",
          "Fire extinguishers",
          "Water sprinklers",
          "Water hose reels",
        ],
        answer: 0,
      },
      {
        id: "h25-10",
        stem: "For fire safety, which of the following is the most important training for health care workers?",
        options: [
          "How to lift and move patients",
          "How to extinguish fire",
          "What to do if they see fire",
          "What to do if they hear alarm and see flashing lights",
        ],
        answer: 2,
      },
      {
        id: "h25-11",
        stem: "Which of the following is a key function of medical records?",
        options: [
          "Admission and patient identification",
          "Discharge only",
          "Filling cabinets",
          "Retrieving records for patient care",
        ],
        answer: 0,
      },
      {
        id: "h25-12",
        stem: "Which of the following is essential content of a medical record?",
        options: [
          "Personal details",
          "Hospital budget",
          "Staff vacation roster",
          "Marketing plan",
        ],
        answer: 0,
      },
      {
        id: "h25-13",
        stem: "Which of the following is a source of data needed for environmental scanning?",
        options: [
          "Surveys",
          "Focus groups",
          "Questionnaires",
          "Statistical reports and registers",
        ],
        answer: 3,
      },
      {
        id: "h25-14",
        stem: "An objective should be SMART. SMART stands for:",
        options: [
          "Simple, Measurable, Acceptable, Realistic, Time-bound",
          "Slow, Mild, Average, Random, Temporary",
          "Secret, Manual, Annual, Rigid, Theoretical",
          "Short, Mixed, Abstract, Rare, Timeless",
        ],
        answer: 0,
      },
      {
        id: "h25-15",
        stem: "Which of the following is the time of ongoing evaluation?",
        options: [
          "During the implementation of the program",
          "At the end of the program",
          "At the beginning of the program",
          "To evaluate the objective",
        ],
        answer: 0,
      },
      {
        id: "h25-16",
        stem: "Which of the following could be the resources required for planning?",
        options: [
          "Money, building and furniture",
          "Money, Man power and materials",
          "Materials, equipment and logistics",
          "Man power, Doctors and nurses",
        ],
        answer: 1,
      },
      {
        id: "h25-17",
        stem: "Which of the following is considered the attitude of the public?",
        options: [
          "Positive, negative or neutral",
          "Long, short or medium",
          "Mission, goal or action",
          "Goal, objectives or resources",
        ],
        answer: 0,
      },
    ],
    essay: [
      {
        id: "h25-e1",
        prompt: "Enumerate 4 sources of data for environmental scanning (SWOT).",
        answer: [
          "Statistical reports and registers",
          "Surveys",
          "Questionnaires",
          "Focus groups",
        ],
      },
      {
        id: "h25-e2",
        prompt: "Enumerate identification data in the medical record.",
        answer: [
          "Full name and date of birth",
          "Admission and discharge dates",
          "Name of the attending doctor",
          "Diseases treated and operations performed",
          "Discharge summary for each admission",
        ],
      },
      {
        id: "h25-e3",
        prompt: "Enumerate the main contents of a medical record.",
        answer: [
          "Personal details",
          "Reason / date of admission",
          "Findings and treatments",
          "Follow-up details",
        ],
      },
      {
        id: "h25-e4",
        prompt: "Enumerate functions of medical records.",
        answer: [
          "Admission and patient identification",
          "Discharge",
          "Filing",
          "Retrieving records for patient care",
          "Medico-legal issues",
        ],
      },
      {
        id: "h25-e5",
        prompt: "Enumerate fire-safety training for health workers.",
        answer: [
          "How to lift and move patients",
          "How to extinguish fire",
          "What to do if they see fire",
          "What to do if they hear alarm and see flashing lights",
        ],
      },
      {
        id: "h25-e6",
        prompt: "Enumerate fire-prevention equipment.",
        answer: [
          "Fire blankets",
          "Fire extinguishers",
          "Water sprinklers",
          "Water hose reels",
          "Smoke and heat detectors",
        ],
      },
      {
        id: "h25-e7",
        prompt: "Enumerate 5 methods to improve hospital management.",
        answer: [
          "Cooperation between departments and professionals",
          "Positive work environment",
          "Patient-centred care as the priority",
          "Technology: EHR and telemedicine",
          "Feedback system",
        ],
        extra:
          "إضافي من محاضرة Hend: تدريب العاملين، المساءلة، نظام الرعاية المُدارة، تحديث بيانات الاتصال، الإشراف على الطوارئ والقبول.",
      },
    ],
  },
];

export function getExam(id: string) {
  return EXAMS.find((e) => e.id === id);
}
