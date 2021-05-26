import React from "react";
import Footer from "../footer";
import Header from "../header";

class Layout extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <Header /> */}
        {this.props.children}
        {/* <Footer /> */}
      </>
    );
  }
}

export default Layout;
