import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"


function App() {
 

  return (
    <>
   <Header />
   <Nav />
   <About />
   <Experience />
   <Services />
   <Portfolio />
   <Contact />
   <Footer />

    </>
  )
}

export default App


function compareArrays(arr1, arr2) {
  // Check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    throw new Error('Arrays must have the same length for comparison.');
  }

  const results = [];

  let num1 = 0
  let num2 = 0
    for (let i = 0; i < arr1.length; i++) {
    
    if (arr1[i] > arr2[i]) {
      num1++
    } else if (arr1[i] < arr2[i]) {
   num2++;
    }

  }

  return [num1, num2];
}