import DOM from "./index.js";

const el = DOM("body");
el.attr({ me: "1", k: "2" });
console.log(el);

const inputField = DOM("input").create();
inputField.attr({ type: "text", placeholder: "enter your name" });
inputField.css({ padding: "10px 20px" });
inputField.on("click", function (e) {
    console.log(e);
});
el.add(inputField);

DOM("body").add(
    DOM("button")
        .create()
        .html("HEllo")
        .on("click", () => {
            console.log("DONE Mashallah");
        })
        .attr("me", 1)
        .css({ padding: "10px 20px", backgroundColor: "orange" })
);
