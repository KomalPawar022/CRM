const MeetingData = [
    {
      "meeting_id": 1,
      "title": "Project Kickoff",
      "from": "2023-02-01T10:00:00",
      "to": "2023-02-01T12:00:00",
      "related_to": "Project ABC",
      "contact_name": "Jay Prakash"
    },
    {
      "meeting_id": 2,
      "title": "Client Presentation",
      "from": "2023-02-15T14:30:00",
      "to": "2023-02-15T16:00:00",
      "related_to": "Client XYZ",
      "contact_name": "Jane Smith"
    },
    {
      "meeting_id": 3,
      "title": "Team Sync",
      "from": "2023-03-05T09:30:00",
      "to": "2023-03-05T10:30:00",
      "related_to": "Team Collaboration",
      "contact_name": "Bob Johnson"
    },
    {
      "meeting_id": 4,
      "title": "Budget Review",
      "from": "2023-03-20T13:00:00",
      "to": "2023-03-20T15:00:00",
      "related_to": "Financial Planning",
      "contact_name": "Emily Davis"
    }
  ];
  const Title = [
    "Project Kickoff",
    "Client Presentation",
    "Team Sync",
    "Budget Review",
    "Product Launch Planning",
    "Quarterly Review",
    "Strategic Planning Session",
    "Marketing Campaign Discussion",
    "Training Workshop",
    "Product Development Meeting",
    "Sales Strategy Meeting",
    "Customer Feedback Session",
    "Employee Recognition Ceremony",
    "Vendor Negotiation Meeting",
    "Company Town Hall",
    "Community Outreach Planning",
    "Partnership Discussion",
    "Innovation Summit",
    "Product Demo",
    "Technology Update Session",
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
  
  function getRandomDate() {
    const startDate = new Date('2023-04-01T00:00:00');
    const endDate = new Date('2023-04-10T23:59:59');
  
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    const randomDate = new Date(randomTime);
  
    return randomDate.toISOString();
  }
  const relatedToOptions = [
    "Team Collaboration",
    "Financial Planning",
    "Marketing Strategy",
    "Product Development",
    "Client Meeting",
  ];
  for (let i = 5; i <= 54; i++) {
    const randomneetingTitleIndex=Math.floor(Math.random()*MeetingData.length);
    const randomMeetingTitle=Title[randomneetingTitleIndex]
    const randomRelatedToIndex=Math.floor(Math.random()*relatedToOptions.length);
    const randomRelatedTo=relatedToOptions[randomRelatedToIndex];
    const randomContactNameIndex=Math.floor(Math.random()*ContactNames.length)
    const randomConatctName=ContactNames[randomContactNameIndex]

    MeetingData.push({
      "meeting_id": i,
      "title":randomMeetingTitle,
      "from": getRandomDate(),
      "to": getRandomDate(),
      "phone": `+1 (555) ${Math.floor(Math.random() * 9000000) + 1000000}`,
      "related_to": randomRelatedTo,
      "contact_name": randomConatctName
    });
  }
  export default MeetingData;
  