export const APP_NAME = "CINSchool";
export const CONTACT_INFO = {
  address: "2386 Motsatsi Drive, Unit 8, Mmabatho, South Africa",
  phone: "018 384 5534"
};

export const CURRICULUM_TYPES = [
  { id: 'caps', name: 'CAPS (South Africa)' },
  { id: 'cambridge', name: 'Cambridge International' },
  { id: 'ib', name: 'International Baccalaureate' },
  { id: 'tertiary', name: 'Tertiary Education' },
  { id: 'short-courses', name: 'Short Courses' }
];

export const CAPS_GRADES = [
  { id: 'grade-r', name: 'Grade R', phase: 'Foundation' },
  { id: 'grade-1', name: 'Grade 1', phase: 'Foundation' },
  { id: 'grade-2', name: 'Grade 2', phase: 'Foundation' },
  { id: 'grade-3', name: 'Grade 3', phase: 'Foundation' },
  { id: 'grade-4', name: 'Grade 4', phase: 'Intermediate' },
  { id: 'grade-5', name: 'Grade 5', phase: 'Intermediate' },
  { id: 'grade-6', name: 'Grade 6', phase: 'Intermediate' },
  { id: 'grade-7', name: 'Grade 7', phase: 'Senior' },
  { id: 'grade-8', name: 'Grade 8', phase: 'Senior' },
  { id: 'grade-9', name: 'Grade 9', phase: 'Senior' },
  { id: 'grade-10', name: 'Grade 10', phase: 'FET' },
  { id: 'grade-11', name: 'Grade 11', phase: 'FET' },
  { id: 'grade-12', name: 'Grade 12', phase: 'FET' },
];

export const CAPS_SUBJECTS = [
  // 1️⃣ Foundation Phase (Grade R – Grade 3)
  { id: 'f-hl', name: 'Home Language', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3'] },
  { id: 'f-fal', name: 'First Additional Language', grades: ['grade-1', 'grade-2', 'grade-3'] },
  { id: 'f-math', name: 'Mathematics', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3'] },
  { id: 'f-ls-bk', name: 'Life Skills: Beginning Knowledge', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3'] },
  { id: 'f-ls-ca', name: 'Life Skills: Creative Arts', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3'] },
  { id: 'f-ls-pe', name: 'Life Skills: Physical Education', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3'] },
  { id: 'f-ls-psw', name: 'Life Skills: Personal & Social Well-being', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3'] },

  // 2️⃣ Intermediate Phase (Grade 4 – Grade 6)
  { id: 'i-hl', name: 'Home Language', grades: ['grade-4', 'grade-5', 'grade-6'] },
  { id: 'i-fal', name: 'First Additional Language', grades: ['grade-4', 'grade-5', 'grade-6'] },
  { id: 'i-math', name: 'Mathematics', grades: ['grade-4', 'grade-5', 'grade-6'] },
  { id: 'i-nst', name: 'Natural Sciences and Technology', grades: ['grade-4', 'grade-5', 'grade-6'] },
  { id: 'i-ss-h', name: 'Social Sciences: History', grades: ['grade-4', 'grade-5', 'grade-6'] },
  { id: 'i-ss-g', name: 'Social Sciences: Geography', grades: ['grade-4', 'grade-5', 'grade-6'] },
  { id: 'i-ls-ca', name: 'Life Skills: Creative Arts', grades: ['grade-4', 'grade-5', 'grade-6'] },
  { id: 'i-ls-pe', name: 'Life Skills: Physical Education', grades: ['grade-4', 'grade-5', 'grade-6'] },

  // 3️⃣ Senior Phase (Grade 7 – Grade 9)
  { id: 's-hl', name: 'Home Language', grades: ['grade-7', 'grade-8', 'grade-9'] },
  { id: 's-fal', name: 'First Additional Language', grades: ['grade-7', 'grade-8', 'grade-9'] },
  { id: 's-math', name: 'Mathematics', grades: ['grade-7', 'grade-8', 'grade-9'] },
  { id: 's-ns', name: 'Natural Sciences', grades: ['grade-7', 'grade-8', 'grade-9'] },
  { id: 's-ss', name: 'Social Sciences', grades: ['grade-7', 'grade-8', 'grade-9'] },
  { id: 's-tech', name: 'Technology', grades: ['grade-7', 'grade-8', 'grade-9'] },
  { id: 's-ems', name: 'Economic and Management Sciences (EMS)', grades: ['grade-7', 'grade-8', 'grade-9'] },
  { id: 's-lo', name: 'Life Orientation', grades: ['grade-7', 'grade-8', 'grade-9'] },
  { id: 's-ca', name: 'Creative Arts', grades: ['grade-7', 'grade-8', 'grade-9'] },

  // 4️⃣ Further Education & Training Phase (Grade 10 – Grade 12)
  // Compulsory
  { id: 'fet-hl', name: 'Home Language', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-fal', name: 'First Additional Language', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-math', name: 'Mathematics', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-math-lit', name: 'Mathematical Literacy', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-lo', name: 'Life Orientation', grades: ['grade-10', 'grade-11', 'grade-12'] },

  // Electives: Business & Commerce
  { id: 'fet-acc', name: 'Accounting', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-bs', name: 'Business Studies', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-eco', name: 'Economics', grades: ['grade-10', 'grade-11', 'grade-12'] },

  // Electives: Sciences
  { id: 'fet-ps', name: 'Physical Sciences', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-ls', name: 'Life Sciences', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-ts', name: 'Technical Sciences', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-tm', name: 'Technical Mathematics', grades: ['grade-10', 'grade-11', 'grade-12'] },

  // Electives: Geography & Humanities
  { id: 'fet-geo', name: 'Geography', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-his', name: 'History', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-rs', name: 'Religion Studies', grades: ['grade-10', 'grade-11', 'grade-12'] },

  // Electives: Technology & Engineering
  { id: 'fet-it', name: 'Information Technology (IT)', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-cat', name: 'Computer Applications Technology (CAT)', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-egd', name: 'Engineering Graphics and Design (EGD)', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-ct', name: 'Civil Technology', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-mt', name: 'Mechanical Technology', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-et', name: 'Electrical Technology', grades: ['grade-10', 'grade-11', 'grade-12'] },

  // Electives: Agriculture
  { id: 'fet-as', name: 'Agricultural Sciences', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-at', name: 'Agricultural Technology', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-amp', name: 'Agricultural Management Practices', grades: ['grade-10', 'grade-11', 'grade-12'] },

  // Electives: Tourism & Consumer
  { id: 'fet-tou', name: 'Tourism', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-cs', name: 'Consumer Studies', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-hs', name: 'Hospitality Studies', grades: ['grade-10', 'grade-11', 'grade-12'] },

  // Electives: Arts
  { id: 'fet-va', name: 'Visual Arts', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-da', name: 'Dramatic Arts', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-ds', name: 'Dance Studies', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-des', name: 'Design', grades: ['grade-10', 'grade-11', 'grade-12'] },
  { id: 'fet-mus', name: 'Music', grades: ['grade-10', 'grade-11', 'grade-12'] },

  // 🇿🇦 Official South African Languages
  { id: 'lang-afr', name: 'Afrikaans', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 'grade-6', 'grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'] },
  { id: 'lang-eng', name: 'English', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 'grade-6', 'grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'] },
  { id: 'lang-zul', name: 'isiZulu', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 'grade-6', 'grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'] },
  { id: 'lang-xho', name: 'isiXhosa', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 'grade-6', 'grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'] },
  { id: 'lang-sep', name: 'Sepedi', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 'grade-6', 'grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'] },
  { id: 'lang-ses', name: 'Sesotho', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 'grade-6', 'grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'] },
  { id: 'lang-set', name: 'Setswana', grades: ['grade-r', 'grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 'grade-6', 'grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12'] },
];

export const TEXTBOOKS = [
  { id: 'tb-1', title: 'Mathematics Grade 12 Learner\'s Book', isbn: '978-1-107-68453-1', subject: 'fet-math', grade: 'grade-12' },
  { id: 'tb-2', title: 'Physical Sciences Grade 11 Study Guide', isbn: '978-0-639-90456-7', subject: 'fet-ps', grade: 'grade-11' },
  { id: 'tb-3', title: 'Life Sciences Grade 10 Textbook', isbn: '978-1-920-19224-2', subject: 'fet-ls', grade: 'grade-10' },
  { id: 'tb-4', title: 'Accounting Grade 12 Workbook', isbn: '978-1-775-81014-8', subject: 'fet-acc', grade: 'grade-12' },
  { id: 'tb-5', title: 'History Grade 9: Our Past', isbn: '978-0-199-04873-1', subject: 's-ss', grade: 'grade-9' },
  { id: 'tb-6', title: 'English Home Language Grade 3', isbn: '978-0-195-99745-3', subject: 'f-hl', grade: 'grade-3' },
];
