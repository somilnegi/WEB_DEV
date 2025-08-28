import React, { useState, useRef, useLayoutEffect } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useLayoutEffect(() => {
    const sidebar = sidebarRef.current;

    if (sidebar) {
      if (open) {
        sidebar.style.transform = "translateX(0)"; // slide in
      } else {
        sidebar.style.transform = "translateX(-100%)"; // slide out
      }
    }
  }, [open]);

  return (
    <div className="relative h-screen">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        style={{
          width: "250px",
          height: "100%",
          background: "lightblue",
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translateX(-100%)", // hidden initially
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <h2>Menu</h2>
      </div>

      {/* Toggle Button */}
      <button
        className="absolute top-4 left-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Open"} Sidebar
      </button>
    </div>
  );
}

export default Sidebar;

// import React, { useState, useRef, useEffect } from "react";

// function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const sidebarRef = useRef(null);

//   useEffect(() => {
//     const sidebar = sidebarRef.current;

//     if (sidebar) {
//       if (open) {
//         sidebar.style.transform = "translateX(0)"; // slide in
//       } else {
//         sidebar.style.transform = "translateX(-100%)"; // slide out
//       }
//     }
//   }, [open]);

//   return (
//     <div className="relative h-screen">
//       {/* Sidebar */}
//       <div
//         ref={sidebarRef}
//         style={{
//           width: "250px",
//           height: "100%",
//           background: "lightblue",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           transform: "translateX(-100%)", // hidden initially
//           transition: "transform 0.3s ease-in-out",
//         }}
//       >
//         <h2>Menu</h2>
//       </div>

//       {/* Toggle Button */}
//       <button
//         className="absolute top-4 left-4 p-2 bg-blue-500 text-white rounded"
//         onClick={() => setOpen(!open)}
//       >
//         {open ? "Close" : "Open"} Sidebar
//       </button>
//     </div>
//   );
// }

// export default Sidebar;
