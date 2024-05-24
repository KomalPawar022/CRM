const VendorData=[

]

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
const VendorOwner = [
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
  const stages=[
    "Sales Software","Sales Hardware","Sales software Support ","labour Hardware"
  ]
  for(let i=0;i<20;i++)
  {
     const randomNameIndex=Math.floor(Math.random()*Names.length);
     const randomName=Names[randomNameIndex];
     const randomOwnerIndex=Math.floor(Math.random()*VendorOwner.length);
     const randomOwner=VendorOwner[randomOwnerIndex];
     const randomStageIndex=Math.floor(Math.random()*stages.length);
     const randomStage=stages[randomStageIndex]
    VendorData.push({
        "name":randomName,
        "email":randomName+`@gmail.com`,
        "phone": `+1 (555) ${Math.floor(Math.random() * 9000000) + 1000000}`,
        "owner":randomOwner,
        'stages':randomStage
    })
  }

export default VendorData;