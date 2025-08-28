// import React, { useState, useRef, useEffect } from "react";

// function BoxEffect() {
//   const [width, setWidth] = useState(0);
//   const boxRef = useRef(null);

//   useEffect(() => {
//     if (boxRef.current) {
//       // measure width after paint
//       setWidth(boxRef.current.getBoundingClientRect().width);
//     }
//   }, []);

//   return (
//     <div className="p-4">
//       <div
//         ref={boxRef}
//         style={{
//           width: "50%", // responsive
//           height: "100px",
//           background: "lightcoral",
//         }}
//       />
//       <p>Measured width: {width}px</p>
//     </div>
//   );
// }

// export default BoxEffect;


// import React, { useState, useRef, useLayoutEffect } from "react";

// function BoxLayoutEffect() {
//   const [width, setWidth] = useState(0);
//   const boxRef = useRef(null);

//   useLayoutEffect(() => {
//     if (boxRef.current) {
//       // measure before paint
//       setWidth(boxRef.current.getBoundingClientRect().width);
//     }
//   }, []);

//   return (
//     <div className="p-4">
//       <div
//         ref={boxRef}
//         style={{
//           width: "50%",
//           height: "100px",
//           background: "lightseagreen",
//         }}
//       />
//       <p>Measured width: {width}px</p>
//     </div>
//   );
// }

// export default BoxLayoutEffect;
