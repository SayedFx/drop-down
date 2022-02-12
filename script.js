const dropDowns = document.querySelectorAll(".drop-down");

dropDowns.forEach((dropDown) => {
  dropDown.addEventListener("click", () => {
    const dropMenu = dropDown.querySelector(".drop-menu");
    if (dropMenu) {
      const dropMenuItems = dropMenu.querySelectorAll(".drop-menu-item");

      if (dropMenu.clientHeight === 0) {
        const dropMenuHeight = dropMenuItems
          ? dropMenuItems[0].offsetHeight * dropMenuItems.length
          : 0;
        dropMenu.style.setProperty("max-height", `${dropMenuHeight}px`);
      } else {
        dropMenu.style.setProperty("max-height", `0`);
      }
    }
  });
});

const css = `
.drop-down {
  position: relative;
  display: flex;
  align-items: center;
}

.drop-down::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 5px;
  margin-top: 5px;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
  cursor: pointer;
}

.drop-menu {
  position: absolute;
  top: 75%;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.6s ease-in-out;
  z-index:2;
}

`;
const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
