import ClassUser from "./UserClass";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about page</p>
        <ClassUser name={"Nityanand"} location={"Nashik"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <p>This is the about page</p>
//       <ClassUser name={"Nityanand"} location={"Nashik"} />
//     </div>
//   );
// };

export default About;
