import React from "react";

// export default function IntroSection() {
// return(
//     <section>
//         <h1 className="centered">
//             Result University
//         </h1>
//         <h3 className="centered" style={{color:'#666'}}>
// Университет frontend-developing, который насыщает it-сферу квалифицированными программмистами
//             </h3>
//             </section>
// )
// }

export default function IntroSection() {
  return React.createElement("section", null, [
    React.createElement("h1", { className: "centered", key: 1 }, "Result University"),
    React.createElement(
      "h3",
      { className: "centered", style: { color: "#666" }, key: 2},
      "Университет frontend-developing, который насыщает it-сферу квалифицированными программмистами"
    ),
  ]);
}
