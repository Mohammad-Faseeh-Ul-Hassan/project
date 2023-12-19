// import React from "react";
// import Test from "./Test";
// function App(){
//   return(
//     <div>
//       <Test />
//     </div>

//   );
// }
// export default App;



// import OurTeam from "./components/OurTeam";
// function App(){
//   return(
// <OurTeam />
//   );
// }
// export default App;




// import TermOfUse from "./components/TermOfUse";
// function App(){
//   return(
// <TermOfUse/>
//   );
// }
// export default App;



// import Inventory from "./components/Inventory";

// function App(){
//   return(
// <Inventory/>
//   );
// }
// export default App;






// import Practice from "./components/Practice";
// function App(){
//   return(
// <Practice />
//   );
// }
// export default App;





// import Recipes from "./components/Recipes";

// function App() {
//   return(
// <Recipes />
//   );
// }
// export default App;





// import AboutUs from "./components/AboutUs";
// function App() {
//     return(
//   <AboutUs />
//     );
//   }
//   export default App;




// import AddRecipe from "./components/AddRecipe";
// function App() {
//   return(
// <AddRecipe />
//   );
// }
// export default App;




// import DeleteRecipe from "./components/DeleteRecipe";
// function App() {
//   return(
// <DeleteRecipe />
//   );
// }

// export default App;




// import UpdateRecipe from "./components/UpdateRecipe";
// function App() {
//   return(
// <UpdateRecipe />
//   );
// }

// export default App;




// import ViewRecipe from "./components/ViewRecipe";
// function App() {
//   return(
// <ViewRecipe />
//   );
// }

// export default App;









// import Carousel from "./components/Carousel";

// function App() {
//   return(
//    <Carousel />
//   );
// }

// export default App;





// import LandingPage from "./components/LandingPage";
// function App() {
//   return(
//    <LandingPage />
//   );
// }

// export default App;












// import Admin from "./components/Admin";
// function App() {
//   return(
//   <Admin />
//   );
// }

// export default App;









import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage"; 
import Recipes from "./components/Recipes"; 
import Careers from "./components/Careers";
import ContactUs from "./components/ContactUs"; 
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Admin from "./components/Admin";
import Account from "./components/Account";
import TermOfServices from "./components/TermOfServices";
import OurAlumini from "./components/OurAlumini";
import MemberShips from "./components/MemberShips";
import Help from "./components/Help";
import { createContext } from "react";
import { useState } from "react";

export const item =createContext()

function App() {
  const [v,sv]=useState(0)
 
  return (
    <item.Provider value={{v,sv}}>
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/recipe" element={<Recipes />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/OurAlumini" element={<OurAlumini />} />
        <Route path="/Memberships" element={<MemberShips />} />
        <Route path="/TermOfServices" element={<TermOfServices />} />
        <Route path="/Help" element={<Help />} />

      </Routes>
    </div>
    </item.Provider>
  );
}

export default App;
