const ContactData=
[
 
]
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
  const titles = [
    'Software Engineer',
    'UI-UX Designer',
    'Project Manager',
    'Data Scientist',
    'Business Analyst',
    'Quality Assurance Engineer',
    'Product Manager',
    'Frontend Developer',
    'Backend Developer',
    'DevOps Engineer',
  ];

for(let i=0;i<55;i++)
{
    const randomCompanyIndex = Math.floor(Math.random() * companyNames.length);
    const randomCompany = companyNames[randomCompanyIndex];
    const randomNameIndex=Math.floor(Math.random()*Names.length);
    const randomName=Names[randomNameIndex];
    const email = `bussiness@${randomCompany.toLowerCase().replace(/\s+/g, '')}.com`;
    const randomTitleIndex=Math.floor(Math.random()*titles.length);
    const randomTitle=titles[randomTitleIndex];
    ContactData.push(
        {
            "name":randomName,
            "email":email,
            "company":randomCompany,
            "title":randomTitle,
            "phone": `+91 751 ${Math.floor(Math.random() * 9000000) + 1000000}`,
            "leadSource": i % 3 === 0 ? "Cold Call" : i % 2 === 0 ? "Advertisement" : "Social Media",
            "Department": i % 3 === 0 ? "Sales" : i % 2 === 0 ? "Marketing" : "Technology",
        }
    )
}

export default ContactData;