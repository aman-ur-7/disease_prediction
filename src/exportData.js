const DOCTORS_DATA = [
  {
    id: "1",
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    hospital: "General Hospital",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: "2",
    name: "Dr. Jane Smith",
    specialization: "Neurologist",
    hospital: "City Hospital",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  },
  {
    id: "3",
    name: "Dr. Albert Johnson",
    specialization: "Dermatologist",
    hospital: "Community Clinic",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  },
  {
    id: "4",
    name: "Dr. Emily Davis",
    specialization: "Pediatrician",
    hospital: "Children's Hospital",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  },
  {
    id: "5",
    name: "Dr. Michael Wilson",
    specialization: "Orthopedic Surgeon",
    hospital: "Regional Medical Center",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  },
  {
    id: "6",
    name: "Dr. Sarah Brown",
    specialization: "Endocrinologist",
    hospital: "Specialist Clinic",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  },
  {
    id: "7",
    name: "Dr. William Jones",
    specialization: "Gastroenterologist",
    hospital: "City Hospital",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  },
  {
    id: "8",
    name: "Dr. Elizabeth Taylor",
    specialization: "Gynecologist",
    hospital: "Women's Health Center",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  },
  {
    id: "9",
    name: "Dr. Daniel Moore",
    specialization: "Hematologist",
    hospital: "General Hospital",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  },
  {
    id: "10",
    name: "Dr. Patricia Jackson",
    specialization: "Nephrologist",
    hospital: "Renal Institute",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  },
  {
    id: "11",
    name: "Dr. Anthony Martinez",
    specialization: "Oncologist",
    hospital: "Cancer Center",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  },
  {
    id: "12",
    name: "Dr. Barbara Anderson",
    specialization: "Ophthalmologist",
    hospital: "Eye Care Clinic",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  },
  {
    id: "13",
    name: "Dr. Charles Thomas",
    specialization: "Pathologist",
    hospital: "Diagnostic Center",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  },
  {
    id: "14",
    name: "Dr. Jessica White",
    specialization: "Psychiatrist",
    hospital: "Mental Health Institute",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
    },
  },
  {
    id: "15",
    name: "Dr. Christopher Harris",
    specialization: "Pulmonologist",
    hospital: "Lung Care Center",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
  },
  {
    id: "16",
    name: "Dr. Nancy Martin",
    specialization: "Radiologist",
    hospital: "Imaging Center",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  },
  {
    id: "17",
    name: "Dr. Matthew Thompson",
    specialization: "Rheumatologist",
    hospital: "Joint Care Clinic",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  },
  {
    id: "18",
    name: "Dr. Karen Garcia",
    specialization: "Urologist",
    hospital: "Urology Institute",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
    },
  },
  {
    id: "19",
    name: "Dr. Steven Clark",
    specialization: "Anesthesiologist",
    hospital: "Surgical Center",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  },
  {
    id: "20",
    name: "Dr. Laura Lewis",
    specialization: "Allergist",
    hospital: "Allergy Clinic",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
  },
  {
    id: "21",
    name: "Dr. George Robinson",
    specialization: "Cardiologist",
    hospital: "Heart Institute",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
  },
  {
    id: "22",
    name: "Dr. Susan Walker",
    specialization: "Dermatologist",
    hospital: "Skin Care Center",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
  },
  {
    id: "23",
    name: "Dr. Brian Young",
    specialization: "Endocrinologist",
    hospital: "Hormone Clinic",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  },
  {
    id: "24",
    name: "Dr. Lisa King",
    specialization: "Gastroenterologist",
    hospital: "Digestive Health Center",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  },
  {
    id: "25",
    name: "Dr. Mark Scott",
    specialization: "Gynecologist",
    hospital: "Women's Clinic",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
  },
  {
    id: "26",
    name: "Dr. Amy Hall",
    specialization: "Hematologist",
    hospital: "Blood Center",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
    },
  },
  {
    id: "27",
    name: "Dr. Jason Allen",
    specialization: "Nephrologist",
    hospital: "Kidney Institute",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
  },
  {
    id: "28",
    name: "Dr. Margaret Wright",
    specialization: "Neurologist",
    hospital: "Neuro Center",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
  },
  {
    id: "29",
    name: "Dr. Ronald Lopez",
    specialization: "Oncologist",
    hospital: "Cancer Institute",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  },
  {
    id: "30",
    name: "Dr. Mary Green",
    specialization: "Ophthalmologist",
    hospital: "Vision Care Clinic",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
  },
  {
    id: "31",
    name: "Dr. Robert Adams",
    specialization: "Orthopedic Surgeon",
    hospital: "Bone and Joint Center",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
    },
  },
  {
    id: "32",
    name: "Dr. Linda Baker",
    specialization: "Pathologist",
    hospital: "Lab Diagnostics",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/16.jpg",
    },
  },
  {
    id: "33",
    name: "Dr. Kevin Campbell",
    specialization: "Pediatrician",
    hospital: "Children's Clinic",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
    },
  },
  {
    id: "34",
    name: "Dr. Angela Evans",
    specialization: "Psychiatrist",
    hospital: "Mental Wellness Center",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    },
  },
  {
    id: "35",
    name: "Dr. James Mitchell",
    specialization: "Pulmonologist",
    hospital: "Respiratory Health Institute",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
  },
  {
    id: "36",
    name: "Dr. Karen Perez",
    specialization: "Radiologist",
    hospital: "Imaging Institute",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/18.jpg",
    },
  },
  {
    id: "37",
    name: "Dr. Charles Roberts",
    specialization: "Rheumatologist",
    hospital: "Arthritis Center",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
    },
  },
  {
    id: "38",
    name: "Dr. Cynthia Edwards",
    specialization: "Urologist",
    hospital: "Urinary Health Clinic",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
    },
  },
  {
    id: "39",
    name: "Dr. Paul Evans",
    specialization: "Anesthesiologist",
    hospital: "Surgical Center",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    },
  },
  {
    id: "40",
    name: "Dr. Melissa Walker",
    specialization: "Allergist",
    hospital: "Allergy Clinic",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/20.jpg",
    },
  },
  {
    id: "41",
    name: "Dr. Peter Scott",
    specialization: "Cardiologist",
    hospital: "Heart Institute",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
  },
  {
    id: "42",
    name: "Dr. Heather Baker",
    specialization: "Dermatologist",
    hospital: "Skin Care Center",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
  },
  {
    id: "43",
    name: "Dr. Jonathan Martinez",
    specialization: "Endocrinologist",
    hospital: "Hormone Clinic",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  },
  {
    id: "44",
    name: "Dr. Samantha Moore",
    specialization: "Gastroenterologist",
    hospital: "Digestive Health Center",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
  },
  {
    id: "45",
    name: "Dr. Frank Johnson",
    specialization: "Gynecologist",
    hospital: "Women's Clinic",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
    },
  },
  {
    id: "46",
    name: "Dr. Jennifer Taylor",
    specialization: "Hematologist",
    hospital: "Blood Center",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
    },
  },
  {
    id: "47",
    name: "Dr. Edward Harris",
    specialization: "Nephrologist",
    hospital: "Kidney Institute",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
    },
  },
  {
    id: "48",
    name: "Dr. Donna Clark",
    specialization: "Neurologist",
    hospital: "Neuro Center",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/24.jpg",
    },
  },
  {
    id: "49",
    name: "Dr. Timothy White",
    specialization: "Oncologist",
    hospital: "Cancer Institute",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
    },
  },
  {
    id: "50",
    name: "Dr. Rachel Brown",
    specialization: "Ophthalmologist",
    hospital: "Vision Care Clinic",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
    },
  },
  {
    id: "51",
    name: "Dr. Gary Lewis",
    specialization: "Orthopedic Surgeon",
    hospital: "Bone and Joint Center",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/26.jpg",
    },
  },
  {
    id: "52",
    name: "Dr. Barbara Martin",
    specialization: "Pathologist",
    hospital: "Lab Diagnostics",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
    },
  },
  {
    id: "53",
    name: "Dr. Benjamin Robinson",
    specialization: "Pediatrician",
    hospital: "Children's Clinic",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/27.jpg",
    },
  },
  {
    id: "54",
    name: "Dr. Michelle Walker",
    specialization: "Psychiatrist",
    hospital: "Mental Wellness Center",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/27.jpg",
    },
  },
  {
    id: "55",
    name: "Dr. Justin Thompson",
    specialization: "Pulmonologist",
    hospital: "Respiratory Health Institute",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
    },
  },
  {
    id: "56",
    name: "Dr. Stephanie Hall",
    specialization: "Radiologist",
    hospital: "Imaging Institute",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
  },
  {
    id: "57",
    name: "Dr. Kenneth Lopez",
    specialization: "Rheumatologist",
    hospital: "Arthritis Center",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/29.jpg",
    },
  },
  {
    id: "58",
    name: "Dr. Donna Martinez",
    specialization: "Urologist",
    hospital: "Urinary Health Clinic",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
  },
  {
    id: "59",
    name: "Dr. Andrew Harris",
    specialization: "Anesthesiologist",
    hospital: "Surgical Center",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
    },
  },
  {
    id: "60",
    name: "Dr. Rebecca Brown",
    specialization: "Allergist",
    hospital: "Allergy Clinic",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/30.jpg",
    },
  },
  {
    id: "61",
    name: "Dr. Thomas Martinez",
    specialization: "Cardiologist",
    hospital: "Heart Institute",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
    },
  },
  {
    id: "62",
    name: "Dr. Ashley Wilson",
    specialization: "Dermatologist",
    hospital: "Skin Care Center",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
    },
  },
  {
    id: "63",
    name: "Dr. Joshua Davis",
    specialization: "Endocrinologist",
    hospital: "Hormone Clinic",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: "64",
    name: "Dr. Angela Smith",
    specialization: "Gastroenterologist",
    hospital: "Digestive Health Center",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  },
  {
    id: "65",
    name: "Dr. Kevin Anderson",
    specialization: "Gynecologist",
    hospital: "Women's Clinic",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
  },
  {
    id: "66",
    name: "Dr. Diane Miller",
    specialization: "Hematologist",
    hospital: "Blood Center",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
  },
  {
    id: "67",
    name: "Dr. Ronald Lee",
    specialization: "Nephrologist",
    hospital: "Kidney Institute",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
    },
  },
  {
    id: "68",
    name: "Dr. Helen King",
    specialization: "Neurologist",
    hospital: "Neuro Center",
    location: {
      country: "Australia",
      image: "https://randomuser.me/api/portraits/women/34.jpg",
    },
  },
  {
    id: "69",
    name: "Dr. Bruce Lewis",
    specialization: "Oncologist",
    hospital: "Cancer Institute",
    location: {
      country: "USA",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
  },
  {
    id: "70",
    name: "Dr. Emily Hall",
    specialization: "Ophthalmologist",
    hospital: "Vision Care Clinic",
    location: {
      country: "Canada",
      image: "https://randomuser.me/api/portraits/women/35.jpg",
    },
  },
  {
    id: "71",
    name: "Dr. Jack Thomas",
    specialization: "Orthopedic Surgeon",
    hospital: "Bone and Joint Center",
    location: {
      country: "UK",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  },
  {
    id: "72",
    name: "Dr. Megan Rodriguez",
    specialization: "Pathologist",
    hospital: "Lab Diagnostics",
    location: {
      country: "Australia",
      image: "https://randomuser.me",
    },
  },
  {
    id: "73",
    name: "Dr. Sunita Shrestha",
    specialization: "Pediatrician",
    hospital: "Children's Hospital",
    location: {
      country: "Nepal",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  },
  {
    id: "74",
    name: "Dr. Ahmad Khan",
    specialization: "Psychiatrist",
    hospital: "Mental Health Center",
    location: {
      country: "Afghanistan",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  },
  {
    id: "75",
    name: "Dr. Leyla Hosseini",
    specialization: "Pulmonologist",
    hospital: "Respiratory Health Institute",
    location: {
      country: "Iran",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
    },
  },
  {
    id: "76",
    name: "Dr. Sipho Ndlovu",
    specialization: "Radiologist",
    hospital: "Imaging Institute",
    location: {
      country: "South Africa",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  },
  {
    id: "77",
    name: "Dr. Nisha Adhikari",
    specialization: "Rheumatologist",
    hospital: "Joint Health Clinic",
    location: {
      country: "Nepal",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
  },
  {
    id: "78",
    name: "Dr. Fatima Sadat",
    specialization: "Urologist",
    hospital: "Urinary Health Clinic",
    location: {
      country: "Afghanistan",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
    },
  },
  {
    id: "79",
    name: "Dr. Reza Farhadi",
    specialization: "Anesthesiologist",
    hospital: "Surgical Center",
    location: {
      country: "Iran",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  },
  {
    id: "80",
    name: "Dr. Thandiwe Mthembu",
    specialization: "Allergist",
    hospital: "Allergy Clinic",
    location: {
      country: "South Africa",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
    },
  },
  {
    id: "81",
    name: "Dr. Rajendra Bhattarai",
    specialization: "Cardiologist",
    hospital: "Heart Institute",
    location: {
      country: "Nepal",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
    },
  },
  {
    id: "82",
    name: "Dr. Zara Rahimi",
    specialization: "Dermatologist",
    hospital: "Skin Care Center",
    location: {
      country: "Afghanistan",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  },
  {
    id: "83",
    name: "Dr. Farhad Zandi",
    specialization: "Endocrinologist",
    hospital: "Hormone Clinic",
    location: {
      country: "Iran",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
  },
  {
    id: "84",
    name: "Dr. Priya Singh",
    specialization: "Cardiologist",
    hospital: "Heart Care Clinic",
    location: {
      country: "India",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  },
  {
    id: "85",
    name: "Dr. Satoshi Tanaka",
    specialization: "Dermatologist",
    hospital: "Skin Care Clinic",
    location: {
      country: "Japan",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
    },
  },
  {
    id: "86",
    name: "Dr. Anastasia Ivanova",
    specialization: "Endocrinologist",
    hospital: "Hormone Center",
    location: {
      country: "Russia",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
    },
  },
  {
    id: "87",
    name: "Dr. Arjun Kumar",
    specialization: "Gastroenterologist",
    hospital: "Digestive Health Clinic",
    location: {
      country: "India",
      image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  },
  {
    id: "88",
    name: "Dr. Haruto Yamada",
    specialization: "Gynecologist",
    hospital: "Women's Health Center",
    location: {
      country: "Japan",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  },
  {
    id: "89",
    name: "Dr. Igor Petrov",
    specialization: "Hematologist",
    hospital: "Blood Clinic",
    location: {
      country: "Russia",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  },
  {
    id: "90",
    name: "Dr. Kavita Patel",
    specialization: "Nephrologist",
    hospital: "Kidney Care Clinic",
    location: {
      country: "India",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
  },
  {
    id: "91",
    name: "Dr. Yuki Nakamura",
    specialization: "Neurologist",
    hospital: "Brain Health Center",
    location: {
      country: "Japan",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
    },
  },
  {
    id: "92",
    name: "Dr. Ekaterina Sokolova",
    specialization: "Oncologist",
    hospital: "Cancer Treatment Clinic",
    location: {
      country: "Russia",
      image: "https://randomuser.me/api/portraits/women/53.jpg",
    },
  },
  {
    id: "93",
    name: "Dr. Nikhil Sharma",
    specialization: "Ophthalmologist",
    hospital: "Vision Clinic",
    location: {
      country: "India",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
  },
  {
    id: "94",
    name: "Dr. Emi Suzuki",
    specialization: "Orthopedic Surgeon",
    hospital: "Bone and Joint Clinic",
    location: {
      country: "Japan",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
    },
  },
  {
    id: "95",
    name: "Dr. Alexander Smirnov",
    specialization: "Pathologist",
    hospital: "Diagnostic Lab",
    location: {
      country: "Russia",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  },
  {
    id: "96",
    name: "Dr. Riya Nair",
    specialization: "Pediatrician",
    hospital: "Children's Health Clinic",
    location: {
      country: "India",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  },
  {
    id: "97",
    name: "Dr. Daichi Kimura",
    specialization: "Psychiatrist",
    hospital: "Mental Health Center",
    location: {
      country: "Japan",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
  },
  {
    id: "98",
    name: "Dr. Olga Kuznetsova",
    specialization: "Pulmonologist",
    hospital: "Lung Care Clinic",
    location: {
      country: "Russia",
      image: "https://randomuser.me/api/portraits/women/56.jpg",
    },
  },
  {
    id: "99",
    name: "Dr. Sameer Desai",
    specialization: "Radiologist",
    hospital: "Imaging Center",
    location: {
      country: "India",
      image: "https://randomuser.me/api/portraits/men/57.jpg",
    },
  },
  {
    id: "100",
    name: "Dr. Hiroshi Kato",
    specialization: "Rheumatologist",
    hospital: "Joint Health Clinic",
    location: {
      country: "Japan",
      image: "https://randomuser.me/api/portraits/men/57.jpg",
    },
  },
  {
    id: "101",
    name: "Dr. Natalia Volkova",
    specialization: "Urologist",
    hospital: "Urinary Health Clinic",
    location: {
      country: "Russia",
      image: "https://randomuser.me/api/portraits/women/57.jpg",
    },
  },
];

export default DOCTORS_DATA;
