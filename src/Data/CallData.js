const CallData=[

]
const subjects = [
    "Introduction to Programming",
    "Data Structures and Algorithms",
    "Web Development Basics",
    "Artificial Intelligence Fundamentals",
    "Machine Learning Applications",
    "Digital Marketing Strategies",
    "Financial Management Principles",
    "Project Management Best Practices",
    "Effective Communication Skills",
    "Team Building and Collaboration",
  ];

  const callTypes = [
    "Sales Inquiry",
    "Customer Support",
    "Technical Assistance",
    "Feedback and Suggestions",
    "Follow-up Call",
    "Appointment Scheduling",
    "Training Session",
    "General Inquiry",
    "Complaint Resolution",
    "Product Demo",
  ];
  const callStartTimes = [
    "08:00 AM",
    "09:30 AM",
    "11:15 AM",
    "01:00 PM",
    "02:45 PM",
    "04:30 PM",
    "06:15 PM",
    "08:00 PM",
    "09:45 PM",
    "11:30 PM",
  ];
  const callDurations = [
    "10 minutes",
    "15 minutes",
    "20 minutes",
    "30 minutes",
    "45 minutes",
    "1 hour",
    "1 hour 15 minutes",
    "1 hour 30 minutes",
    "2 hours",
    "2 hours 30 minutes",
  ];
  const relatedToOptions = [
    "Team Collaboration",
    "Financial Planning",
    "Marketing Strategy",
    "Product Development",
    "Client Meeting",
  ];
  const ContactNames = [
    "Amit Kumar",
    "Priya Singh",
    "Rahul Sharma",
    "Anjali Gupta",
    "Sandeep Patel",
    "Neha Verma",
    "Vikas Yadav",
    "Pooja Shah",
    "Rajesh Singhania",
    "Swati Kapoor"
  ];
  const CallOwner=[
    "Amit Kumar",
    "Priya Sharma",
    "Rajesh Singh",
    "Sneha Patel",
    "Vikram Verma",
    "Anjali Yadav",
    "Rahul Kapoor",
    "Shreya Gupta",
    "Arjun Malhotra",
    "Neha Desai"
  ]
  const Status=[
    "Customer","Open Deal","Lead","Others"
  ]

  for (let i = 0; i <= 54; i++) {
   
    const randomSubjectIndex=Math.floor(Math.random()*subjects.length);
    const randomSubject=subjects[randomSubjectIndex];
    const CallTypeIndex=Math.floor(Math.random()*callTypes.length)
    const randomCallType=callTypes[CallTypeIndex];
    const radomCallStartIndex=Math.floor(Math.random()*callStartTimes.length);
    const randomCallStartTime=callStartTimes[radomCallStartIndex]
    const randomCallDurationIndex=Math.floor(Math.random()*callDurations.length);
    const randomCallDuration=callDurations[randomCallDurationIndex];
    const realtedToIndex=Math.floor(Math.random()*relatedToOptions.length);
    const randomrelatedTo=relatedToOptions[realtedToIndex];
    const contactNameIndex=Math.floor(Math.random()*ContactNames.length);
    const randomContactName=ContactNames[contactNameIndex];
    const randomCallOwnerIndex=Math.floor(Math.random()*CallOwner.length);
    const randomCallOwner=CallOwner[randomCallOwnerIndex];
    const randomStatusIndex=Math.floor(Math.random()*Status.length);
    const randomStatus=Status[randomStatusIndex];
    CallData.push({
      "call_id": i,
      "subject":randomSubject,
      "CallType":randomCallType,
      "CallStartTime":randomCallStartTime,
      "CallDuration":randomCallDuration,
      "relatedTo":randomrelatedTo,
      "ConatactName":randomContactName,
      "CallOwner":randomCallOwner,
      "status":randomStatus
    });
  }
  
  export default CallData;

