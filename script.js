const dropDownParents = document.querySelectorAll(".drop-parent");

dropDownParents.forEach((dropParent) =>
  dropParent.addEventListener("click", () => {
    const drop = dropParent.querySelector(".drop-menu");

    if (drop && drop.offsetHeight === 0)
      drop.style.maxHeight = `${drop.children[0].children.length * 100}px`;
    else if (drop) drop.style.maxHeight = "0";
  })
);
