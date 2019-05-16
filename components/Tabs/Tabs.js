class Tabs {
  constructor(links) {
    this.tabLinks = [...links].map(link => new TabLink(link, this));
    this.selectedTab = this.tabLinks[0];
  }

  changeSelection(newSelection) {
    if (newSelection === this.selectedTab) return;
    this.selectedTab.deselect();
    this.selectedTab.tabItem.deselect();
    this.selectedTab = newSelection;
    this.selectedTab.tabItem.select();
  }
}

class TabLink {
  constructor(element, tabs) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    this.tabs = tabs;
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab="${this.data}"]`
    );
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => {
      this.select();
      this.tabs.changeSelection(this);
    });
  }

  select() {
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
  }

  deselect() {
    this.element.classList.remove("tabs-link-selected");
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    this.element.classList.add("tabs-item-selected");
  }

  deselect() {
    this.element.classList.remove("tabs-item-selected");
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll(".tabs-link");

new Tabs(links);
