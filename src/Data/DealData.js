const DealsData = [
    {
      "deal_id": 1,
      "Name": "Software License Renewal",
      "Amount": '₹15000',
      "Stage": "Negotiation",
      "ClosingDate": "2023-02-28",
      "Account": "ABC Corp",
      "ContactName": "Jay Patil",
      "DealOwner": "Mitesh Waghmode"
    },
    {
      "deal_id": 2,
      "Name": "Hardware Upgrade",
      "Amount":'₹25000',
      "Stage": "Proposal",
      "ClosingDate": "2023-03-15",
      "Account": "XYZ Ltd",
      "ContactName": "Jane Smith",
      "DealOwner": "Sahil Attar"
    },
    // ... (48 more entries)
  ];
  
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
  
  
  // Generate additional dummy data to reach a total of 50 entries
  for (let i = 3; i <= 50; i++) {
    const randomAccountIndex=Math.floor(Math.random()*AccountNames.length)
    const randomAccountName=AccountNames[randomAccountIndex]
    const randomDealNameindex=Math.floor(Math.random()*DealNames.length)
    const randomDealName=DealNames[randomDealNameindex];
    const randomContactNameIndex=Math.floor(Math.random()*ContactNames.length);
    const randomConatctName=ContactNames[randomContactNameIndex];
    const randomDealOwnerIndex=Math.floor(Math.random()*DealOwner.length);
    const randomDealOwner=DealOwner[randomDealOwnerIndex];

    DealsData.push({
      "deal_id": i,
      "Name":randomDealName,
      "Amount": `₹`+ Math.floor(Math.random() * 500) + 1000,
      "Stage": i % 2 === 0 ? "Negotiation" : "Proposal",
      "ClosingDate": `2024-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
      "Account": randomAccountName,
      "ContactName": randomConatctName,
      "DealOwner": randomDealOwner
    });
  }
  
  export default DealsData;
  