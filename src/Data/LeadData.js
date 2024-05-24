const LeadData = [
   
    // ... (48 more entries)
  ];
 
  const companyNames = [
    "ABC Inc.",
    "XYZ Corporation",
    "123 Solutions",
    "Tech Innovators",
    "Global Enterprises",
    // Add more company names as needed
  ];
  const Names = [
    "Aarav Sharma",
    "Isha Singh",
    "Arjun Kapoor",
    "Sanya Verma",
    "Rahul Patel",
    "Anaya Gupta",
    "Ravi Khanna",
    "Kriti Malhotra",
    "Rohan Mehra",
    "Meera Desai"
  ];
  
  const LeadOwner = [
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
  ];
  const Industry = [
    "Information Technology",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Telecommunications",
    "Automotive",
    "Travel and Tourism",
    "Media and Entertainment"
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
  const LeadSource=[
    'Social Media',
    'website',
    'Referral', 
    'Cold Call',
    'Advertisement'
  ]
  for (let i =0; i <= 60; i++) {
    const randomCompanyIndex = Math.floor(Math.random() * companyNames.length);
    const randomCompany = companyNames[randomCompanyIndex];
    const randomNameIndex=Math.floor(Math.random()*Names.length);
    const randomName=Names[randomNameIndex];
    // Generate email based on the selected company
    const email = `bussiness@${randomCompany.toLowerCase().replace(/\s+/g, '')}.com`;
    const randomLeadownerIndex=Math.floor(Math.random()*LeadOwner.length);
    const randomLeadOwner=LeadOwner[randomLeadownerIndex];
    const randomIndustryIndex=Math.floor(Math.random()*Industry.length);
    const randomIndustry=Industry[randomIndustryIndex];
    const randomStageIndex=Math.floor(Math.random()*Stages.length);
    const randomStages=Stages[randomStageIndex];
    const randomleadSourceIndex=Math.floor(Math.random()*LeadSource.length);
    const randomLeadSource=LeadSource[randomleadSourceIndex];
    LeadData.push({
      "lead_id": i,
      "name": randomName,
      "company": randomCompany,
      "email": email,
      "phone": `+1 (555) ${Math.floor(Math.random() * 9000000) + 1000000}`,
      "leadSource": i % 3 === 0 ? "Cold Call" : i % 2 === 0 ? "Advertisement" : "Social Media",
      'leadOwner':randomLeadOwner,
      'createdBy':randomLeadOwner,
      'Industry':randomIndustry,
      'stages':randomStages,
      'Source':randomLeadSource
    });
  }
  
  export default LeadData;
  