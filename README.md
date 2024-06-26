check out no.6
If you enter an email that is not formatted correctly, you will see an HTML5 validation error

check out no.8
The number input should not accept non-numbers, either by preventing you from typing them or by showing an HTML5 validation error (depending on your browser).

**The best way to center content in CSS depends on the specific layout and requirements of your project. However, there are a few commonly used methods:
**
**Using Flexbox:**Flexbox provides a powerful way to align items both horizontally and vertically. You can use the display: flex; property on the parent container and then use justify-content: center; to center horizontally and align-items: center; to center vertically.
`.container {
    display: flex;
    justify-content: center; /* Horizontal centering */
    align-items: center; /* Vertical centering */
}`
**Using Grid:** CSS Grid layout also offers options for centering content. You can use display: grid; on the parent container and place-items: center; to center both horizontally and vertically.

`.container {
    display: grid;
    place-items: center; /* Center content both horizontally and vertically */
}`
**Using margin:** auto;: For horizontally centering a block-level element with a fixed width, you can set margin-left: auto; and margin-right: auto;.


`.element {
    width: 200px; /* Example fixed width */
    margin-left: auto;
    margin-right: auto;
}`
Using text-align: center;: For inline or inline-block elements, you can use text-align: center; on the parent container to center its children horizontally.


`.container {
    text-align: center; /* Center inline or inline-block elements horizontally */
}`
Choose the method that best suits your layout and the type of content you're centering. Flexbox and Grid are more versatile and powerful, especially for complex layouts, while the margin: auto; technique is simpler and works well for simple centering tasks.



