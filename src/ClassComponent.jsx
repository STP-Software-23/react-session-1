import React from 'react'


// why can't we use class component?

// problems in class components?
class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display:'none'};
      }

      // mounting
      static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol };
      }


      render() { // push component to the DOM
        return (
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
      }

      componentDidMount() {
        this.state.favoritecolor = 'blue'
      }


      // updating
      // 4 => methods
      // ******************************


      // unmounting
      componentWillUnmount() {
        alert("The component named Header is about to be unmounted.");
      }
}

export default ClassComponent