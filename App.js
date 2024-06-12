// Q:  how do i create nested element inside react? :

/*

<div id="parent">
    <div id="child">
        <h1>hello kshitish </h1>
        <h2>hello kshitish </h2>
    </div>

    <div id="child">
        <h1>hello kshitish </h1>
        <h2>hello kshitish </h2>
    </div>
</div>

*/

const parent = React.createElement(
    "div",
    { id: "parent" },
  
    [
      React.createElement("div", { id: "child" }, [
          React.createElement("h1", {}, "hi kshitish"),
          React.createElement("h2", {}, "this is demo"),
        ]),
  
        React.createElement("div", { id: "child" }, [
          React.createElement("h1", {}, "hi satyam"),
          React.createElement("h2", {}, "this is demo"),
        ])
    ] 
  );
  
  console.log(parent);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  