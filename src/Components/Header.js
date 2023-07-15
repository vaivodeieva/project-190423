// scroll direction hook

import React from "react";

function Header() {

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = React.useState(null);
  
    React.useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };
  
  // header component
  function Header() {
    const scrollDirection = useScrollDirection();
    
    return (
      <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} h-24 bg-blue-200 transition-all duration-500`}>
        <div className="p-5 font-bold">Disappearing Header</div>
      </div>
    );
  };
  
  // app component
  
    return (
      <div>
        <Header />
        <div className="p-5 md:p-10">
          <h1 className="text-4xl font-bold mt-16 mb-10">Welcome</h1>
          {Array.from({ length: 60 }).map(function(u, i) {
            return <p key={i} className="py-5">This page has a sticky disappearing header. Scroll down and it will disappear from view. Scroll up and it will reappear like magic.</p>
          })}
        </div>
       </div>
      )
  
  
}

export default Header;
  // ========================================
  
//   ReactDOM.render(
//     <App />,
//     document.getElementById('app')
//   );





















// function Header() {


    

//     return (
//         <div>

            

//         </div>
//     )
// }
// export default Header;