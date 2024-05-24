const SalesOrderData=[

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
  const DealOwner=[
    "Sahil Attar","Mitesh Waghmode","Shubham Patil","Snehal D","Soham K"
  ]
  const stages=[
    "FedEx","UPS","USPS","DHL","BlueDart"
  ]

  for(let i=0;i<50;i++){
    const randomAccountIndex=Math.floor(Math.random()*AccountNames.length)
    const randomAccountName=AccountNames[randomAccountIndex]
    const randomDealNameindex=Math.floor(Math.random()*DealNames.length)
    const randomDealName=DealNames[randomDealNameindex];
    const randomContactNameIndex=Math.floor(Math.random()*ContactNames.length);
    const randomConatctName=ContactNames[randomContactNameIndex];
    const randomDealOwnerIndex=Math.floor(Math.random()*DealOwner.length);
    const randomDealOwner=DealOwner[randomDealOwnerIndex];
    const randomStageIndex=Math.floor(Math.random()*stages.length)
    const randomStage=stages[randomStageIndex]
    SalesOrderData.push({
        "Subject":randomDealName,
        "stages":randomStage,
        "Total":`₹`+ Math.floor(Math.random() * 500) + 1000,
        "Deal":randomDealName,
        "Account": randomAccountName,
        "ContactName": randomConatctName,
        "Owner": randomDealOwner
    })
  }
  export default SalesOrderData;