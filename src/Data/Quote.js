const QuoteData=[

]

const DealNames = [
    "Strategic Partnership",
    "Product Launch Deal",
    "Annual Maintenance Contract",
    "Technology Upgrade Agreement",
    "Service Subscription Deal",
    "Joint Venture Proposal",
    "Marketing Campaign Contract",
    "Supply Chain Agreement",
    "Exclusive Distributor Deal",
    "Licensing and Royalties Pact"
  ];

  const AccountNames = [
    "ABC Corp",
    "XYZ Ltd",
    "123 Enterprises",
    "Tech Innovators Inc.",
    "Global Solutions",
    "Prime Services Ltd.",
    "MegaTech Industries",
    "Innovate IT Solutions",
    "Sunrise Technologies",
    "Dynamic Systems Co."
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
  const Stages = [
    'New',
    'Contacted',
    'Qualified', 
    'Proposal Sent',
    'Negotiation',
    'Closed_Won',
    'Closed_Lost'
  ];
  const Owner=[
    "Sahil Attar","Mitesh Waghmode","Shubham Patil","Snehal D","Soham K"
  ]

  for(let i=0;i<50;i++){

     const randomsubjectIndex=Math.floor(Math.random()*DealNames.length)
     const randomSubject=DealNames[randomsubjectIndex];
     const randomStageIndex=Math.floor(Math.random()*Stages.length);
     const randomStages=Stages[randomStageIndex];
     const randomDealNameindex=Math.floor(Math.random()*DealNames.length)
     const randomDealName=DealNames[randomDealNameindex];
     const randomNameIndex=Math.floor(Math.random()*ContactNames.length);
     const randomName=ContactNames[randomNameIndex];
     const randomAcNameIndex=Math.floor(Math.random()*AccountNames.length)
     const randomAcName=AccountNames[randomAcNameIndex]
     const randomOwnerIndex=Math.floor(Math.random()*Owner.length)
     const randomOwner=Owner[randomOwnerIndex];

    QuoteData.push({
        "id":i,
        "Subject":randomSubject,
        "stages":randomStages,
        "Total":`₹`+ Math.floor(Math.random() * 500) + 1000,
        'DealName':randomDealName,
        'Conatct':randomName,
        'AcName':randomAcName,
        'Owner':randomOwner
  })
  }
  export default QuoteData;