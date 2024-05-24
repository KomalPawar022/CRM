const TaskData = [
  

  ];
  const Subject = [
    'Complete Project Proposal',
    'Review Code Changes',
    'Prepare Presentation',
    'Update Documentation',
    'Code Refactoring',
    'Client Meeting',
    'Product Launch Planning',
    'Team Training Session',
    'Budget Review',
    'Marketing Campaign Discussion',
  ];
  const Priority=[
     "High","Medium","Low"
  ]
  const Status=[
    "Customer","Open Deal","Lead","Others"
  ]
  const RelatedTo = [
    "Meeting with client",
    "Development",
    "Documentation",
    "Product Launch",
    "Team Collaboration",
    "Budget Review",
    "Marketing Strategy",
    "Training Session",
    "Code Review",
    "Project Planning",
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
  const TaskOwner = [
    "Sahil Attar",
    "Mitesh Waghmode",
    "Aarav Deshmukh",
    "Neha Sharma",
    "Rohan Kapoor",
    "Kavya Patel",
    "Vikram Singh",
    "Ishaan Choudhary",
    "Aditi Joshi",
    "Aryan Gupta",
    "Tanvi Reddy",
    "Rajat Yadav",
    "Ananya Kumar",
    "Pranav Kapoor",
    "Sanya Singh",
    "Varun Sharma",
    "Riya Verma",
    "Amit Dubey",
    "Anika Patel",
    "Aryan Khanna"
  ];
  
  function getRandomDate() {
    const startDate = new Date('2023-04-01');
    const endDate = new Date('2023-04-10');
    
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    const randomDate = new Date(randomTime);
  
    // Set the time part to midnight (00:00:00)
    randomDate.setHours(0, 0, 0, 0);
  
    return randomDate.toISOString().split('T')[0]; // Extract the date part only
  }
  for (let i = 5; i <= 54; i++) {
    const randomSubjectIndex=Math.floor(Math.random()*Subject.length);
    const randomSubject=Subject[randomSubjectIndex]
    const randomStatusIndex=Math.floor(Math.random()*Status.length);
    const randomStatus=Status[randomStatusIndex];
    const randomContactNameIndex=Math.floor(Math.random()*ContactNames.length)
    const randomConatctName=ContactNames[randomContactNameIndex];
    const randompriorityIndex=Math.floor(Math.random()*Priority.length);
    const randomPriority=Priority[randompriorityIndex];
    const randomRelatedToIndex=Math.floor(Math.random()*RelatedTo.length);
    const randomRelatedTo=RelatedTo[randomRelatedToIndex];
    const randomTaskOwnerIndex=Math.floor(Math.random()*TaskOwner.length);
    const randomTaskOwner=TaskOwner[randomTaskOwnerIndex];
    TaskData.push({
      "task_id": i,
      "subject":randomSubject,
      "dueDate": getRandomDate(),
      "status": randomStatus,
      "priority": randomPriority,
      "relatedTo": randomRelatedTo,
      "contactName":randomConatctName,
      "TaskOwner":randomTaskOwner
    });
  }
  
  export default TaskData;
  