import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import NavbarComponent from './Component/Navbar';
import Home from './Component/Home'
import Contact from './Component/Contact';
import ViewLead from './Component/ViewLead';
import ViewContact from './Component/ViewContact.jsx'
import CreateLead  from './Component/CreateLead.jsx'
import Lead2 from './Component/Lead2.jsx';
import Analytics from './Component/Analytics.jsx'
import BarchartModel from './Component/Chart/BarchartModel.jsx';
import Account from './Component/Account.jsx';
import ViewAccount from './Component/ViewAccount.jsx';
import Login from './Component/Login.jsx';
import CreateContact from './Component/CreateContact.jsx';
import CreateAccount from './Component/CreateAccount.jsx';
import Deal from './Component/Deal.jsx';
import ViewDeal from './Component/ViewDeal.jsx';
import Task from './Component/Task.jsx';
import Call from './Component/Call.jsx'
import ViewTask from './Component/ViewTask.jsx';
import ViewCall from './Component/ViewCall.jsx';
import Product from './Component/Product.jsx';
import ViewProduct from './Component/ViewProduct.jsx';
import CreateDeal from './Component/CreateDeal.jsx';
import Quote from './Component/Quote.jsx';
import ViewQuote from './Component/ViewQuote.jsx';
import CreateQuote from './Component/CreateQuote.jsx';
import Action from './Component/Action/Action.jsx';
import Vendor from './Component/Vendor.jsx';
import ViewVendor from './Component/ViewVendor.jsx';
import CreateVendor from './Component/CreateVendor.jsx';
import SalesOrder from './Component/SalesOrder.jsx';
import ViewSales from './Component/ViewSales.jsx';
import CreateSales from './Component/CreateSales.jsx';
import Organization from './Component/Organization.jsx';
import EmployeeTree from './Component/EmployeeTree.jsx';
import DepartmentTree from './Component/DepartmentTree.jsx';
import DepartMentDirectory from './Component/DepartMentDirectory.jsx';
import NewHires from './Component/NewHires.jsx';
import NewProfile from './Component/NewProfile.jsx';
function App() {
  return (
   <>
  
     <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Home' element={<><NavbarComponent/><Home /></>} />
          <Route path='/Lead' element={<><NavbarComponent/><Lead2/></>}></Route>
          <Route path='/Contact' element={<><NavbarComponent/><Contact/></>}></Route>
          <Route path="/createLead" element={<><NavbarComponent/><CreateLead/></>}></Route>
          <Route path="/Account" element={<><NavbarComponent/><Account/></>}></Route>
          <Route path="/Deal" element={<><NavbarComponent/><Deal/></>}></Route>
          <Route path="/Task" element={<><NavbarComponent/><Task/></>}></Route>
          <Route path="/Call" element={<><NavbarComponent/><Call/></>}></Route>
          <Route path="/CreateContact" element={<><NavbarComponent/><CreateContact/></>}></Route>
          <Route path="/CreateAccount" element={<><NavbarComponent/><CreateAccount/></>}></Route>
          <Route path='/CreateDeal' element={<><NavbarComponent/><CreateDeal/></>} ></Route>
          <Route path="/ViewLead/:name/:company/:email/:phone/:leadSource/:leadOwner/:Industry" element={<><NavbarComponent/><ViewLead/></>}></Route>
          <Route path='/ViewContact/:name/:email/:title/:phone/:Department/:company' element={<><NavbarComponent/><ViewContact/></>}></Route>
          <Route path="/ViewAccount/:name/:owner/:Industry/:phone/:company/:website/:type/:annualRevenue" element={<><NavbarComponent/><ViewAccount/></>}></Route>
          <Route path="/ViewDeal/:Name/:Amount/:Stage/:ClosingDate/:Account/:ContactName/:DealOwner" element={<><NavbarComponent/><ViewDeal/></>}></Route>
          <Route path='/ViewTask/:subject/:dueDate/:status/:priority/:relatedTo/:contactName/:TaskOwner'element={<><NavbarComponent/><ViewTask/></>}></Route>
          <Route path="/ViewCall/:subject/:CallType/:CallStartTime/:CallDuration/:relatedTo/:ConatactName/:CallOwner" element={<><NavbarComponent/><ViewCall/></>}></Route>
          <Route path="/ViewQuote/:Subject/:stages/:Total/:DealName/:Conatct/:AcName/:Owner" element={<><NavbarComponent/><ViewQuote/></>}></Route>
          <Route path="/ViewProduct/:Name/:Code/:Status" element={<><NavbarComponent/><ViewProduct/></>}></Route>
          <Route path="/Product" element={<><NavbarComponent/><Product/></>}></Route>
          <Route path="/Analytics" element={<><NavbarComponent/><Analytics/></>}></Route>
          <Route path="/Quote" element={<><NavbarComponent/><Quote/></>}></Route>
          <Route path="/CreateQuote" element={<><NavbarComponent/><CreateQuote/></>}></Route>
          <Route path="/Action/:name" element={<><NavbarComponent/><Action/></>}></Route>
          <Route path="/Vendor" element={<><NavbarComponent/><Vendor/></>}></Route>
          <Route path="/ViewVendor/:name/:email/:phone/:owner" element={<><NavbarComponent/><ViewVendor/></>}></Route>
          <Route path="/CreateVendor" element={<><NavbarComponent/><CreateVendor/></>}></Route>
          <Route path="/Sales" element={<><NavbarComponent/><SalesOrder/></>}></Route>
          <Route path="/ViewSales/:Subject/:stages/:Total/:Deal/:Account/:ContactName/:Owner" element={<><NavbarComponent/><ViewSales/></>}></Route>
          <Route path="/CreateSales" element={<><NavbarComponent/><CreateSales/></>}></Route>
          <Route path="/Organization" element={<Organization/>}>

            <Route path="EmployeeTree" element={<EmployeeTree/>}/>
            <Route path="DepartMentTree" element={<DepartmentTree/>}/>
            <Route path="DepartMentDirectory" element={<DepartMentDirectory/>}/>
            <Route path="NewHire" element={<NewHires/>}/>
            <Route path="/Organization/DepartMentDirectory/NewProfile" element={<NewProfile/>} />
          </Route>


        </Routes>

   </>
  );
}

export default App;
