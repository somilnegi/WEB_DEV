function customRender(element, container){
    /*
    const domElement = document.createElement(element.type) // Create a DOM element based on the type
    domElement.innerHTML = element.children // Set the inner HTML to the element's children
    domElement.setAttribute('href', element.props.href) // Set the href attribute
    domElement.setAttribute('target', element.props.target) // Set the target attribute

    container.appendChild(domElement) // Append the created element to the container
    */
    
    const domElement = document.createElement(element.type) // Create a DOM element based on the type
    domElement.innerHTML = element.children // Set the text content to the element's children
    for (const prop in element.props) {
        if (prop === 'children') {
            continue;
        }
        domElement.setAttribute(prop, element.props[prop]) // Set each property as an attribute
    }
    container.appendChild(domElement) // Append the created element to the container
}

const reactElement = { // Custom React element structure
    type: 'a', // Element type
    props: { // Element properties
        href: 'https://www.example.com',
        target: '_blank',
    },
    children: 'Click here to visit example.com', // Text content
}
const mainContainer = document.getElementById('root') // Main container for rendering

customRender(reactElement, mainContainer) // Custom render function to display the element