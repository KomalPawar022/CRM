const AccountData=[

]
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
  const companyNames = [
    "ABC Inc.",
    "XYZ Corporation",
    "123 Solutions",
    "Tech Innovators",
    "Global Enterprises",
    // Add more company names as needed
  ];
  const AccountType=[
    "Vendor","Partner","Integrator","Other"
  ]
  for(let i=0;i<50;i++)
  {
    const randomNameIndex=Math.floor(Math.random()*Names.length);
    const randomName=Names[randomNameIndex];
    const randomLeadOwnerIndex=Math.floor(Math.random()*Names.length);
    const randomLeadOwner=LeadOwner[randomLeadOwnerIndex];
    const randomIndustryIndex=Math.floor(Math.random()*Names.length);
    const randomIndustry=Industry[randomIndustryIndex];
    const randomCompanyIndex = Math.floor(Math.random() * companyNames.length);
    const randomCompany = companyNames[randomCompanyIndex];
    const randomAccountIndex=Math.floor(Math.random()*AccountType.length)
    const randomAccountType=AccountType[randomAccountIndex]

    AccountData.push(
        {
            "name":randomName,
            "Owner":randomLeadOwner,
            "Industry":randomIndustry,
            "phone": `+1 (555) ${Math.floor(Math.random() * 9000000) + 1000000}`,
            'company':randomCompany,
            "website":`www.${randomCompany}.com`,
            "type":randomAccountType,
            "annualRevenue": Math.floor(Math.random() * 1000000) + 50000
        }
    )
  }

  export default AccountData;