/**
 * Creates a section HTML element with specified attribute and value
 * @param {string} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @returns {HTMLElement} - The created section element
 */
export function createSection(attributeName, attributeValue) {
    const section = document.createElement('section');
    section.setAttribute(attributeName, attributeValue);
    return section;
}

/**
 * Creates a div HTML element with a specified attribute name and value
 * @param {object} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @returns {HTMLDivElement} - The created div element
 */
export function createDiv(attributeName, attributeValue) {
    const div = document.createElement('div');
    div.setAttribute(attributeName, attributeValue);
    return div;
}

/**
 * Creates a picture element with provided attributes and sources
 * @param {object} attributeName - Name of the attribute
 * @param {string} attributeValue  - Value for the attribute
 * @param {object} imageSources - Object containing picture sources for different screen sizes
 * @returns {HTMLPictureElement} - The created picture element
 */
export function createPicture(attributeName, attributeValue, imageSources) {
    const picture = document.createElement('picture');
    picture.setAttribute(attributeName, attributeValue);

    Object.keys(imageSources).forEach((key) => {
        if (key === 'img') {
            const img = document.createElement('img');
            setAttributes(img, imageSources[key]);
            picture.appendChild(img);
        } else {
            const source = document.createElement('source');
            setAttributes(source, imageSources[key]);
            picture.appendChild(source);
        }
    });

    return picture;
}

/**
 * Creates a list (ul) element with provided attributes. The list items are created using a rendering export function passed as an argument
 * @param {string} attributeName - Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - Value for the attribute (e.g., 'cs-stats')
 * @param {object} itemData - Data to populate the list with. Expects an object where each property can be rendered as a list item
 * @param {Function} renderItem - export function that takes an item of data and returns a list item (li) element
 * @returns {HTMLUListElement} - The created unordered list element
 */
export function createList(
    attributeName,
    attributeValue,
    itemData,
    renderItem
) {
    const list = document.createElement('ul');
    list.setAttribute(attributeName, attributeValue);

    for (let key in itemData) {
        if (itemData.hasOwnProperty(key)) {
            list.appendChild(renderItem(itemData[key]));
        }
    }

    return list;
}

/**
 * Creates a list item (li) element using a provided rendering export function for the item's content
 * @param {string} attributeName - Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - Value for the attribute (e.g., 'cs-stat')
 * @param {object} item - Data item to be rendered inside the list item
 * @param {Function} renderContent - export function that takes the item and returns the content to be placed inside the list item
 * @returns {HTMLLIElement} - The created list item
 */
export function createListItem(
    attributeName,
    attributeValue,
    item,
    renderContent
) {
    const listItem = document.createElement('li');
    listItem.setAttribute(attributeName, attributeValue);

    const content = renderContent(item);
    listItem.appendChild(content);

    return listItem;
}

/**
 * Creates a span element with a specified class and text content
 * @param {string} attributeName - Name of the attribute
 * @param {string} attributeValue - Value for the attribute
 * @param {string} text - Text content for the span
 * @returns {HTMLElement} - The created span element
 */
export function createSpan(attributeName, attributeValue, text) {
    const span = document.createElement('span');
    span.setAttribute(attributeName, attributeValue);
    span.innerText = text;

    return span;
}

/**
 * Creates a topper element (span) with a specified class and text content
 * @param {string} attributeName - Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - Value for the attribute
 * @param {string} text - Text content for the topper
 * @returns {HTMLElement} - The created topper element
 */
export function createTopper(attributeName, attributeValue, text) {
    const topper = document.createElement('span');
    topper.setAttribute(attributeName, attributeValue);
    topper.innerText = text;

    return topper;
}

/**
 * Creates a title element (h2) with a specified class and text content
 * @param {string} attributeName - Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - Value for the attribute
 * @param {string} text - Text content for the title
 * @returns {HTMLHeadingElement} - The created title element
 */
export function createTitle(attributeName, attributeValue, text) {
    const title = document.createElement('h2');
    title.setAttribute(attributeName, attributeValue);
    title.textContent = text;

    return title;
}

/**
 * Creates a paragraph element (p) with a specified class and text content
 * @param {string} attributeName - Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - Value for the attribute
 * @param {string} text - Text content for the paragraph
 * @returns {HTMLParagraphElement} - The created paragraph element
 */
export function createParagraph(attributeName, attributeValue, text) {
    const paragraph = document.createElement('p');
    paragraph.setAttribute(attributeName, attributeValue);
    paragraph.textContent = text;

    return paragraph;
}

/**
 * Sets multiple attributes on a DOM element based on a provided object
 * @param {HTMLElement} element - The DOM element to set attributes on
 * @param {object} attributes - Object containing key-value pairs for attributes
 */
export function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    });
}

/**
 * Clears the content of a specified parent element
 * @param {HTMLElement} parent - The parent element whose content is to be cleared
 * @returns {boolean} - Returns true to indicate the operation was successful
 */
export function clearPage(parent) {
    parent.textContent = '';

    return true;
}

/**
 * Creates a link (anchor) element with specified attributes and text content
 * @param {string} href - The attribute name to set on the link (e.g., 'href')
 * @param {string} hrefValue - The value for the href attribute
 * @param {string} attributeName - the Name of the attribute (e.g., 'class')
 * @param {string} attributeValue - The value for the attribute
 * @param {string} text - The text content for the link
 * @returns {HTMLAnchorElement} - The created anchor element
 */
export function createLink(
    href,
    hrefValue,
    attributeName,
    attributeValue,
    text
) {
    const link = document.createElement('a');

    link.setAttribute(href, hrefValue);
    link.innerText = text;
    link.setAttribute(attributeName, attributeValue);
    link.setAttribute('target', '_blank');

    return link;
}

/**
 * Creates an element containing SVG code for a bin icon representing a delete action.
 * This function serves as workaround because SVG did not render in the DOM with the icon inside of it.
 * All fill values are left empty so that they can be redefined from the parent element's CSS properties,
 * allowing for easier customization of the icon's color.
 * @returns {HTMLDivElement} - The created 'SVG' div element.
 */

export function createDeleteIcon() {
    const deleteIcon = document.createElement('div');
    const svgCode = `<svg viewBox="0 0 28 28" fill="" xmlns="http://www.w3.org/2000/svg"><path d="M11.8489 22.6922C11.5862 22.7201 11.3509 22.5283 11.3232 22.2638L10.4668 14.0733C10.4392 13.8089 10.6297 13.5719 10.8924 13.5441L11.368 13.4937C11.6307 13.4659 11.8661 13.6577 11.8937 13.9221L12.7501 22.1126C12.7778 22.3771 12.5873 22.614 12.3246 22.6418L11.8489 22.6922Z" fill=""/><path d="M16.1533 22.6418C15.8906 22.614 15.7001 22.3771 15.7277 22.1126L16.5841 13.9221C16.6118 13.6577 16.8471 13.4659 17.1098 13.4937L17.5854 13.5441C17.8481 13.5719 18.0387 13.8089 18.011 14.0733L17.1546 22.2638C17.127 22.5283 16.8916 22.7201 16.6289 22.6922L16.1533 22.6418Z" fill=""/><path clip-rule="evenodd" d="M11.9233 1C11.3494 1 10.8306 1.34435 10.6045 1.87545L9.54244 4.37037H4.91304C3.8565 4.37037 3 5.23264 3 6.2963V8.7037C3 9.68523 3.72934 10.4953 4.67218 10.6145L7.62934 26.2259C7.71876 26.676 8.11133 27 8.56729 27H20.3507C20.8242 27 21.2264 26.6513 21.2966 26.1799L23.4467 10.5956C24.3313 10.4262 25 9.64356 25 8.7037V6.2963C25 5.23264 24.1435 4.37037 23.087 4.37037H18.4561L17.394 1.87545C17.1679 1.34435 16.6492 1 16.0752 1H11.9233ZM16.3747 4.37037L16.0083 3.50956C15.8576 3.15549 15.5117 2.92593 15.1291 2.92593H12.8694C12.4868 2.92593 12.141 3.15549 11.9902 3.50956L11.6238 4.37037H16.3747ZM21.4694 11.0516C21.5028 10.8108 21.3154 10.5961 21.0723 10.5967L7.1143 10.6285C6.86411 10.6291 6.67585 10.8566 6.72212 11.1025L9.19806 24.259C9.28701 24.7317 9.69985 25.0741 10.1808 25.0741H18.6559C19.1552 25.0741 19.578 24.7058 19.6465 24.2113L21.4694 11.0516ZM22.1304 8.7037C22.6587 8.7037 23.087 8.27257 23.087 7.74074V7.25926C23.087 6.72743 22.6587 6.2963 22.1304 6.2963H5.86957C5.34129 6.2963 4.91304 6.72743 4.91304 7.25926V7.74074C4.91304 8.27257 5.34129 8.7037 5.86956 8.7037H22.1304Z" fill="" fill-rule="evenodd"/></svg>`;
    deleteIcon.innerHTML = svgCode;

    return deleteIcon;
}
