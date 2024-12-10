import ClassUser from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("About constructor");
  }

  componentDidMount() {
    console.log("About Component did mount");
  }

  render() {
    console.log("About render");
    return (
      <div>
        <h1>About Page</h1>
        <p>This is the about page</p>
        <ClassUser name={"Nityanand"} location={"Nashik"} />
        <ClassUser name={"Elon Musk"} location={"USA"} />
        <ClassUser name={"Jeff Bezos"} location={"US"} />
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
