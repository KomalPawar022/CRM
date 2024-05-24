const ProductData=[

]

const Name = ["Product A", "Product B", "Product C"];
const Code = ["001", "002", "003"];
const Status = ["Active", "Inactive", "Pending"];
const Company=["Nestle","HUL","Dabur"]

const Owner=[
   "HUL","Wipro","Nestle"
]

for (let i = 0; i <= 3; i++)
{
    const randomNameIndex=Math.floor(Math.random()*Name.length);
    const randomStatusIndex=Math.floor(Math.random()*Status.length);
    const randomCodeIndex=Math.floor(Math.random()*Code.length);
    const randomName=Name[i];
    const randomCode=Code[randomCodeIndex];
    const randomStatus=Status[randomStatusIndex]
    const randomCompanyIndex=Math.floor(Math.random()*Company.length)
    const randomCompany=Company[randomCompanyIndex]
    ProductData.push({
        "Name":randomName,
        "Code":randomCode,
        "Status":randomStatus,
        "Company":randomCompany
    })
}

export default ProductData;