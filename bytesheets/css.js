[
  {
    id: "introduction",
    description:
      "Master CSS from scratch with our comprehensive online course! Learn everything you need to know about Cascading Style Sheets (CSS), including selectors, properties, layout techniques, responsive design, Flexbox, Grid, animations, and best practices. Get hands-on experience with practical exercises and projects, guiding you from beginner to expert level. Perfect for beginners, developers, designers, and anyone looking to style websites and create stunning user interfaces. Enroll now to unlock your potential and start building professional-quality websites with CSS today!",
    keywords:
      "CSS, Cascading Style Sheets, web development, online course, beginner, selectors, properties, layout, responsive design, Flexbox, Grid, animations, bytesheets, bytes css course, bytes, css course, css selectors, css media queries",
    course: "CSS",
    title: "Introduction to CSS",
    about: `<div>
  <h2 style="color: #3498db;">Introduction to CSS</h2>
  <p>CSS, short for Cascading Style Sheets, is a style sheet language used to control the presentation and layout of HTML documents. It allows web developers to style elements on a webpage, defining how they should appear to users.</p>
</div>
<div>
  <h2 style="color: #2ecc71;">What is CSS?</h2>
  <p>CSS describes how HTML elements should be displayed on screen, in print, or spoken by a screen reader. It allows for the separation of content and presentation, enabling developers to style the appearance of web pages independently from their structure.</p>
</div>
<div>
  <h2 style="color: #e74c3c;">Why CSS is Used?</h2>
  <p>CSS is used to enhance the visual presentation of web pages, making them more engaging and user-friendly. It allows developers to control aspects such as layout, colors, fonts, spacing, and responsiveness, leading to a better user experience.</p>
</div>
<div>
  <h2 style="color: #9b59b6;">CSS Versions and Evolution</h2>
  <p>CSS has evolved over time with various versions and specifications. The latest major version is CSS3, which introduced many new features and enhancements over its predecessors. CSS is continually evolving, with new modules and updates being developed to address the needs of modern web development.</p>
</div>
`,
    contents: [
      {
        id: "introduction_1",
        title: "Introduction to CSS",
      },
      {
        id: "introduction_2",
        title: "CSS Types",
        about: `<div><h2 style="color: #3498db;">CSS Types: Inline, Internal, and External Styles</h2>
        <p>This example demonstrates different ways to apply CSS styles: inline, internal, and external stylesheets.</p>
        <div>
        </br>
          <h2 style="color: #3498db;">Inline Styles</h2>
          <p>Inline styles are applied directly to HTML elements using the style attribute.</p>
          <code>style="background-color: #f39c12; color: #fff; "</code>
          <div style="background-color: #f39c12; color: #fff; ">This is a box with inline styles</div>
          </br>
          <h2 style="color: #3498db;">Internal Styles</h2>
          <p>Internal styles are defined within the <code>&lt;style&gt;</code> element in the HTML document.</p>
          <pre>
            <code >
              &lt;style&gt;
                .internal-style-box {
                  background-color: #0074d9;
                  color: #fff;
                  
                }
              &lt;/style&gt;
            </code>
          </pre>
          </br>
          <h2 style="color: #3498db;">External Styles</h2>
          <p>External styles are defined in separate CSS files and linked to the HTML document using the <code>&lt;link&gt;</code> element.</p>
          <pre>
            <code >
              &lt;link rel="stylesheet" href="styles.css"&gt;
            </code>
          </pre>
          <p>Example: <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></p>
        </div>
        <h3 style="color: #3498db;">Explanation:</h3>
        <ul >
          <li>Inline styles are applied directly to HTML elements using the style attribute.</li>
          <li>Internal styles are defined within the <code>&lt;style&gt;</code> element in the HTML document.</li>
          <li>External styles are defined in separate CSS files and linked to the HTML document using the <code>&lt;link&gt;</code> element.</li>
        </ul>
      </div>`,
      },
    ],
  },
  {
    id: "basicCSSSyntax",
    title: "Basic CSS Syntax",
    about: `
    <div>
  <h2 style="color: #3498db;">CSS Rule Structure (Selector, Property, Value)</h2>
  <p>In CSS, rules are composed of a selector, followed by one or more declarations enclosed in curly braces. Each declaration consists of a property and its corresponding value. The selector specifies which elements the rule applies to, while the property determines the aspect of the element to be styled, and the value specifies the style itself.</p>
  <p><strong>Example:</strong></p>
<pre>
  <code >
    <span style="color: #0074D9;">h1</span> {
      <span style="color: #6f42c1;">color:</span> blue;
      <span style="color: #6f42c1;">font-size:</span> 24px;
    }
  </code>
</pre>

</div>

<div>
  <h2 style="color: #2ecc71;">CSS Comments</h2>
  <p>CSS comments are used to add notes or explanations within the CSS code. They are ignored by the browser and are only visible to developers when viewing the source code. Comments can be single-line (//) or multi-line (/* */), and they are helpful for documenting code and providing context for future reference.</p>
  <p><strong>Example:</strong></p>
<pre>
  <code >
    <span style="color: #6f42c1;">/* This is a multi-line comment */</span>
    <span style="color: #0074D9;">p</span> {
      <span style="color: #6f42c1;">color:</span> red; <span style="color: #6f42c1;">/* This is a single-line comment */</span>
    }
  </code>
</pre>

</div>

<div>
  <h2 style="color: #e74c3c;">CSS Selectors (Type, Class, ID, Universal, Attribute)</h2>
  <p>CSS selectors are patterns used to select and style elements in an HTML document. There are various types of selectors, each with its own syntax and specificity.</p>
  <ul>
    <li>Type Selector: Selects all elements of a specified type.</li>
    <li>Class Selector: Selects elements with a specific class attribute.</li>
    <li>ID Selector: Selects a single element with a specific ID attribute.</li>
    <li>Universal Selector: Selects all elements in the document.</li>
    <li>Attribute Selector: Selects elements based on their attribute values.</li>
  </ul>
  <p><strong>Examples:</strong></p>
<pre>
  <code >
    <span style="color: #6f42c1;">/* Type Selector */</span>
    <span style="color: #0074D9;">p</span> {
      <span style="color: #6f42c1;">color:</span> blue;
    }

    <span style="color: #6f42c1;">/* Class Selector */</span>
    <span style="color: #2ecc71;">.highlight</span> {
      <span style="color: #6f42c1;">background-color:</span> #ffd28a;
    }

    <span style="color: #6f42c1;">/* ID Selector */</span>
    <span style="color: #d35400;">#header</span> {
      <span style="color: #6f42c1;">font-size:</span> 28px;
    }

    <span style="color: #6f42c1;">/* Universal Selector */</span>
    <span style="color: #2ecc71;">*</span> {
      <span style="color: #6f42c1;">margin:</span> 0;
      <span style="color: #6f42c1;">padding:</span> 0;
    }

    <span style="color: #6f42c1;">/* Attribute Selector */</span>
    <span style="color: #0074D9;">input</span>[<span style="color: #6f42c1;">type</span>="<span style="color: #2ecc71;">text</span>"] {
      <span style="color: #6f42c1;">border:</span> 1px solid #ccc;
    }
  </code>
</pre>

</div>
    `,
    contents: [
      {
        id: "basicCSSSyntax",
        title: "Explore Basic CSS Syntax",
      },
    ],
  },
  {
    id: "boxModel",
    title: "CSS Box Model",
    about: `
    <div>
  <h2 style="color: #3498db;">Understanding the Box Model</h2>
  <p>The CSS box model defines the layout and sizing of elements on a web page. It consists of four main components: margin, border, padding, and content. Each component contributes to the overall dimensions and spacing of an element.</p>
  <ul>
    <li><strong>Content:</strong> The actual content of the element, such as text, images, or other media.</li>
    <li><strong>Padding:</strong> The space between the content and the border. It helps create internal spacing within the element.</li>
    <li><strong>Border:</strong> The border surrounding the padding and content. It defines the visual boundary of the element.</li>
    <li><strong>Margin:</strong> The space outside the border. It determines the gap between the element and its neighboring elements.</li>
  </ul>
  <p>By understanding the box model, you can control the size, spacing, and layout of elements more effectively.</p>
</div>

<div>
  <h2 style="color: #e74c3c;">Box Sizing: content-box vs. border-box</h2>
  <p>In CSS, the <code>box-sizing</code> property determines how the total width and height of an element are calculated, including padding and border.</p>
  <ul>
    <li><strong>content-box:</strong> This is the default value. The width and height of the element only include the content, excluding padding and border.</li>
    <li><strong>border-box:</strong> The width and height of the element include the content, padding, and border. This means that the content area stays constant, and any changes to padding or border size will affect the overall dimensions of the element.</li>
  </ul>
  <p>Using <code>border-box</code> can simplify layout calculations and make it easier to create responsive designs.</p>
</div>
<div>
  <h2 style="color: #3498db;">Understanding Margins, Borders, Padding, and Content</h2>
  <p>Let's delve deeper into each component of the box model:</p>
  <ul>
    <li><strong>Margin:</strong> Margins create space around an element, separating it from other elements. You can apply margin to all sides or individually using properties like <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code>.</li>
    <li><strong>Border:</strong> Borders provide a visual boundary around an element. You can specify the border's width, style, and color using properties like <code>border-width</code>, <code>border-style</code>, and <code>border-color</code>.</li>
    <li><strong>Padding:</strong> Padding is the space between an element's content and its border. It helps control the spacing within the element. You can set padding for individual sides or all sides using properties like <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code>.</li>
    <li><strong>Content:</strong> Content refers to the actual content of the element, such as text, images, or other elements. It is the innermost part of the box model and does not include padding, border, or margin.</li>
  </ul>
</div>
<div>
  <h2 style="color: #2ecc71;">Margin Collapse</h2>
  <p>Margin collapse is a phenomenon in CSS where the vertical margins of adjacent elements collapse into a single margin. This can sometimes lead to unexpected spacing between elements.</p>
  <p><strong>Example:</strong> When two adjacent elements have vertical margins, the larger margin value between them collapses, resulting in a single margin space.</p>
</div>

<div>
  <h2 style="color: #f39c12;">Box Model Hack</h2>
  <p>Box model hack is a technique used in CSS to compensate for the inconsistencies in box model handling by different browsers. It involves adjusting the width and height of elements to accommodate padding and border.</p>
  <p><strong>Example:</strong> Adding extra width to elements in Internet Explorer 6 to account for padding and border.</p>
</div>
`,
    contents: [
      {
        id: "boxModel_1",
        title: "Box Model Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fbox%20model%2F3.png?alt=media&token=c200a54f-06ef-4b62-abb6-5025e1b82579",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fbox%20model%2F1.jpg?alt=media&token=51caf3fe-5b28-4a56-b086-5d709d8ec0c3",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fbox%20model%2F2.jpg?alt=media&token=8217ef3a-5094-4940-a960-71d6153f5db0",
        ],
      },
      {
        id: "boxModel_2",
        title: "Box Model Explanation",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fbox%20model%2Fexplanation%2F1.jpg?alt=media&token=ee386a2f-466e-40c1-805c-60b7a13531f1",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fbox%20model%2Fexplanation%2F2.jpg?alt=media&token=a751a07d-fcb3-4140-ab6b-8dede702495f",
        ],
      },
    ],
  },
  {
    id: "cssPropertiesAndValues",
    title: "CSS Properties and Values",
    about: `
    <div>
  <h2 style="color: #3498db;">Text Properties</h2>
  <p>Text properties in CSS allow you to control the appearance of text within elements:</p>
  <ul>
    <li><strong>font:</strong> Set the font family, size, weight, style, and variant of text.</li>
    <li><strong>color:</strong> Define the color of text using keywords, hex values, RGB, or HSL.</li>
    <li><strong>text-align:</strong> Align text within its container horizontally (left, center, right).</li>
    <li><strong>text-decoration:</strong> Add decorations like underline, overline, line-through, or none.</li>
    <li><strong>text-transform:</strong> Change the case of text (uppercase, lowercase, capitalize).</li>
  </ul>
</div>

<div>
  <h2 style="color: #e74c3c;">Background Properties</h2>
  <p>Background properties allow you to style the background of elements:</p>
  <ul>
    <li><strong>background-color:</strong> Set the background color of an element.</li>
    <li><strong>background-image:</strong> Specify an image to use as the background.</li>
    <li><strong>background-position:</strong> Position the background image horizontally and vertically.</li>
    <li><strong>background-repeat:</strong> Control how background images are repeated (repeat, no-repeat, repeat-x, repeat-y).</li>
    <li><strong>background-size:</strong> Define the size of the background image (cover, contain, specific dimensions).</li>
  </ul>
</div>

<div>
  <h2 style="color: #2ecc71;">Border Properties</h2>
  <p>Border properties are used to style the borders of elements:</p>
  <ul>
    <li><strong>border-color:</strong> Set the color of the border.</li> 
    <li><strong>border-style:</strong> Define the style of the border (solid, dashed, dotted, etc.).</li>
    <li><strong>border-width:</strong> Specify the width of the border.</li>
    <li><strong>border-radius:</strong> Round the corners of the border.</li>
    <li><strong>border-collapse:</strong> Collapse or separate the borders of table cells.</li>
    <p>Example:</p>
    </br>
    <p style="border:1px; border-color:red; border-style:solid; border-width:2px; border-radius:5px; width:150px">Border Style</p>
  </ul>
</div>

<div>
  <h2 style="color: #f39c12;">Margin, Padding, and Spacing Properties</h2>
  <p>Margin and padding properties control the spacing around elements:</p>
  <ul>
    <li><strong>margin:</strong> Set the margin space outside the border of an element.</li>
    <li><strong>padding:</strong> Define the padding space between the element's content and its border.</li>
    <li><strong>spacing:</strong> Use margin and padding to create space between elements, improving layout and readability.</li>
  </ul>
</div>

<div>
  <h2 style="color: #3498db;">Dimension Properties</h2>
  <p>Dimension properties control the width and height of elements:</p>
  <ul>
    <li><strong>width:</strong> Set the width of an element.</li>
    <li><strong>height:</strong> Define the height of an element.</li>
    <li><strong>min-width, max-width:</strong> Specify minimum and maximum widths for responsive design.</li>
    <li><strong>min-height, max-height:</strong> Define minimum and maximum heights for responsive design.</li>
  </ul>
</div>

<div>
  <h2 style="color: #9b59b6;">Display and Positioning Properties</h2>
  <p>Display and positioning properties control the layout and positioning of elements:</p>
  <ul>
    <li><strong>display:</strong> Specify how an element should be displayed (block, inline, inline-block, none).</li>
    <li><strong>position:</strong> Determine the positioning method of an element (static, relative, absolute, fixed).</li>
    <li><strong>float:</strong> Float elements to the left or right within their containers.</li>
    <li><strong>clear:</strong> Clear floats to prevent elements from wrapping around floated elements.</li>
  </ul>
  <p>We will see more about display & position properties in next sheets</p>
</div>
`,
    contents: [
      {
        id: "cssPropertiesAndValues_1",
        title: "Text Properties",
        about: `
        <div>
  <h2 style="color: #3498db;">Text Properties in CSS</h2>
  <h3 style="color: #3498db;">1. Color:</h3>
  <p>
    The <span style="color: #ff5733;">color</span> property sets the color of text.
  </p>
  <div style="color: #3498db;">Color Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .text {
        <span style="color: #e74c3c;">color:</span> #3498db;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">2. Font Family:</h3>
  <p>
    The <span style="color: #ff5733;">font-family</span> property sets the font family for text.
  </p>
  <div style="font-family: Arial, sans-serif;">Font Family Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .text {
        <span style="color: #e74c3c;">font-family:</span> Arial, sans-serif;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">3. Font Size:</h3>
  <p>
    The <span style="color: #ff5733;">font-size</span> property sets the size of the text.
  </p>
  <div style="font-size: 20px;">Font Size Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .text {
        <span style="color: #e74c3c;">font-size:</span> 20px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">4. Font Style:</h3>
  <p>
    The <span style="color: #ff5733;">font-style</span> property sets the style of the font (italic or normal).
  </p>
  <div style="font-style: italic;">Font Style Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .text {
        <span style="color: #e74c3c;">font-style:</span> italic;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">5. Font Weight:</h3>
  <p>
    The <span style="color: #ff5733;">font-weight</span> property sets the weight of the font (bold or normal).
  </p>
  <div style="font-weight: bold;">Font Weight Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .text {
        <span style="color: #e74c3c;">font-weight:</span> bold;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">6. Text Decoration:</h3>
  <p>
    The <span style="color: #ff5733;">text-decoration</span> property sets the decoration of text (underline, overline, line-through, or none).
  </p>
  <div style="text-decoration: underline;">Text Decoration Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .text {
        <span style="color: #e74c3c;">text-decoration:</span> underline;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">7. Text Transform:</h3>
  <p>
    The <span style="color: #ff5733;">text-transform</span> property controls the capitalization of text.
  </p>
  <div style="text-transform: uppercase;">Text Transform Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .text {
        <span style="color: #e74c3c;">text-transform:</span> uppercase;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">8. Text Align:</h3>
  <p>
    The <span style="color: #ff5733;">text-align</span> property sets the alignment of text within its containing element.
  </p>
  <div style="text-align: center;">Text Align Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .text {
        <span style="color: #e74c3c;">text-align:</span> center;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">9. Text Shadow:</h3>
  <p>
    The <span style="color: #ff5733;">text-shadow</span> property adds shadow to text.
  </p>
  <div style="text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Text Shadow Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .text {
        <span style="color: #e74c3c;">text-shadow:</span> 2px 2px 4px rgba(0,0,0,0.5);
      }
    </code>
  </pre>
</div>
`,
      },
      {
        id: "cssPropertiesAndValues_2",
        title: "Filter Property",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F1.jpg?alt=media&token=5c04aef4-1a1c-4244-843a-13c81772b403",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F2.jpg?alt=media&token=2fa0b20e-572f-48f8-8ca9-6764ad9d936a",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F3.jpg?alt=media&token=698f55bd-160d-45c7-82f4-0d65b96e0af9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F4.jpg?alt=media&token=c5cf63dd-6131-4ed4-b959-a7d5d5510063",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F5.jpg?alt=media&token=7befac1b-1365-4d5b-bfe7-9dc03480f70c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F6.jpg?alt=media&token=c2507411-23db-49eb-baca-0a239b8aa05b",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Ffilter%2F7.jpg?alt=media&token=8fe93e02-88f1-4c5b-8e59-c68545b5a5f1",
        ],
      },
      {
        id: "cssProperitesAndValues_3",
        title: "Background Properties",
        about: `
        <div>
  <h3 style="color: #3498db;">8. Background Attachment:</h3>
  <p>
    The <span style="color: #ff5733;">background-attachment</span> property specifies whether the background image scrolls with the content or remains fixed in place. It can be set to <span style="color: #ff5733;">scroll</span> or <span style="color: #ff5733;">fixed</span>.
  </p>
  <div style="background-image: url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg'); background-attachment: fixed; height: 200px; color: #fff; ">Background Attachment Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">background-image:</span> url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg');
        <span style="color: #e74c3c;">background-attachment:</span> fixed;
        <span style="color: #e74c3c;">height:</span> 200px;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 20px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">9. Background Position:</h3>
  <p>
    The <span style="color: #ff5733;">background-position</span> property specifies the initial position of the background image. It can be set using keywords such as <span style="color: #ff5733;">left</span>, <span style="color: #ff5733;">right</span>, <span style="color: #ff5733;">top</span>, <span style="color: #ff5733;">bottom</span>, or using length units or percentages.
  </p>
  <div style="background-image: url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg'); background-position: center; height: 200px; color: #fff; ">Background Position Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">background-image:</span> url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg');
        <span style="color: #e74c3c;">background-position:</span> center;
        <span style="color: #e74c3c;">height:</span> 200px;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 20px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">10. Background Repeat:</h3>
  <p>
    The <span style="color: #ff5733;">background-repeat</span> property specifies how the background image is repeated. It can be set to <span style="color: #ff5733;">repeat</span>, <span style="color: #ff5733;">repeat-x</span>, <span style="color: #ff5733;">repeat-y</span>, or <span style="color: #ff5733;">no-repeat</span>.
  </p>
  <div style="background-image: url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg'); background-repeat: no-repeat; height: 200px; color: #fff; ">Background Repeat Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">background-image:</span> url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg');
        <span style="color: #e74c3c;">background-repeat:</span> no-repeat;
        <span style="color: #e74c3c;">height:</span> 200px;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 20px;
      }
    </code>
  </pre>

  <h3 style="color: #3498db;">11. Background Clip:</h3>
  <p>
    The <span style="color: #ff5733;">background-clip</span> property specifies whether the background extends underneath the border or not. It can be set to <span style="color: #ff5733;">border-box</span> or <span style="color: #ff5733;">padding-box</span>.
  </p>
  <div style="background-image: url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg'); background-clip: padding-box; height: 200px; color: #fff; ">Background Clip Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">background-image:</span> url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg');
        <span style="color: #e74c3c;">background-clip:</span> padding-box;
        <span style="color: #e74c3c;">height:</span> 200px;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 20px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">12. Background Origin:</h3>
  <p>
    The <span style="color: #ff5733;">background-origin</span> property specifies the positioning area of the background images. It can be set to <span style="color: #ff5733;">border-box</span>, <span style="color: #ff5733;">padding-box</span>, or <span style="color: #ff5733;">content-box</span>.
  </p>
  <div style="background-image: url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg'); background-origin: content-box; height: 200px; color: #fff; ">Background Origin Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">background-image:</span> url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg');
        <span style="color: #e74c3c;">background-origin:</span> content-box;
        <span style="color: #e74c3c;">height:</span> 200px;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 20px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">13. Background Size:</h3>
  <p>
    The <span style="color: #ff5733;">background-size</span> property specifies the size of the background images. It can be set to length values, percentages, or keywords such as <span style="color: #ff5733;">cover</span> or <span style="color: #ff5733;">contain</span>.
  </p>
  <div style="background-image: url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg'); background-size: cover; height: 200px; color: #fff; ">Background Size Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">background-image:</span> url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg');
        <span style="color: #e74c3c;">background-size:</span> cover;
        <span style="color: #e74c3c;">height:</span> 200px;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 20px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">14. Multiple Backgrounds:</h3>
  <p>
    The <span style="color: #ff5733;">background</span> property allows multiple background images to be set on an element. Each background image is separated by a comma.
  </p>
  <div style="background: url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg') center/cover no-repeat, url('https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_640.jpg') center/cover no-repeat; height: 200px; color: #fff; ">Multiple Backgrounds Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">background:</span> url('https://cdn.pixabay.com/photo/2023/12/26/10/34/hochkonig-8469932_640.jpg') center/cover no-repeat,
                    url('https://cdn.pixabay.com/photo/2024/01/27/18/24/squirrel-8536537_640.jpg') center/cover no-repeat;
        <span style="color: #e74c3c;">height:</span> 200px;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 20px;
      }
    </code>
  </pre>
</div>
`,
      },
      {
        id: "cssPropertiesAndValues_4",
        title: "Border Properties",
        about: `
        <div>
  <h2 style="color: #3498db;">Understanding Border Radius and Border in CSS</h2>
  <p>In CSS, the <code style="color: #e74c3c;">border-radius</code> property is used to create rounded corners on elements, while the <code style="color: #e74c3c;">border</code> property is used to define the border of an element. Let's explore these properties with examples:</p>
  
  <h3 style="color: #2ecc71;">1. Border Radius</h3>
  <p>The <code style="color: #e74c3c;">border-radius</code> property allows you to control the curvature of the corners of an element. You can specify either a single value to create uniformly rounded corners or separate values for each corner to create different radii for each corner.</p>
  
  <p>Here's an example demonstrating the use of <code style="color: #e74c3c;">border-radius</code>:</p>
  
  <div style="background-color: #3498db; color: #fff;  border-radius: 20px;">
    <p>This is an element with rounded corners.</p>
  </div>
  
  <h3 style="color: #2ecc71;">2. Border</h3>
  <p>The <code style="color: #e74c3c;">border</code> property is used to define the border of an element. It can include the border width, style, and color. You can also specify individual properties such as <code style="color: #e74c3c;">border-width</code>, <code style="color: #e74c3c;">border-style</code>, and <code style="color: #e74c3c;">border-color</code>.</p>
  
  <p>Here's an example demonstrating the use of <code style="color: #e74c3c;">border</code>:</p>
  
  <div style="border: 2px solid #e74c3c; ">
    <p>This is an element with a border.</p>
  </div>
  
  <h3 style="color: #2ecc71;">3. Visual Examples</h3>
  <p>Below are visual examples of an element with different border radius values and border styles:</p>
  
  <div style="display: flex; justify-content: space-around; margin-top: 20px;">
    <div style="background-color: #3498db; color: #fff;  border-radius: 0px;">No Border Radius</div>
    <div style="background-color: #3498db; color: #fff;  border-radius: 10px;">Border Radius: 10px</div>
    <div style="background-color: #3498db; color: #fff;  border-radius: 20px;">Border Radius: 20px</div>
  </div>
  
  <div style="display: flex; justify-content: space-around; margin-top: 20px;">
    <div style="background-color: #3498db; color: #fff;  border: 2px solid #e74c3c;">Solid Border</div>
    <div style="background-color: #3498db; color: #fff;  border: 2px dashed #e74c3c;">Dashed Border</div>
    <div style="background-color: #3498db; color: #fff;  border: 2px dotted #e74c3c;">Dotted Border</div>
  </div>
</div>
<div>
  <h2 style="color: #3498db;">Border and Border Radius Shorthands in CSS</h2>
  <p>In CSS, you can use shorthand properties to set border and border-radius more efficiently. Let's explore these shorthands along with examples:</p>
  
  <h3 style="color: #2ecc71;">1. Border Shorthand</h3>
  <p>The <code style="color: #e74c3c;">border</code> shorthand property allows you to set the width, style, and color of all four borders of an element in a single declaration.</p>
  
  <p>Here's the syntax for the <code style="color: #e74c3c;">border</code> shorthand:</p>
  
  <pre>
    <code>
      border: <span style="color: #e74c3c;">[border-width]</span> <span style="color: #e74c3c;">[border-style]</span> <span style="color: #e74c3c;">[border-color]</span>;
    </code>
  </pre>
  
  <p>Here's an example demonstrating the use of <code style="color: #e74c3c;">border</code> shorthand:</p>
  
  <div style="border: 2px solid #e74c3c; ">
    <p>This is an element with a solid red border using the border shorthand property.</p>
  </div>
  
  <h3 style="color: #2ecc71;">2. Border Radius Shorthand</h3>
  <p>The <code style="color: #e74c3c;">border-radius</code> shorthand property allows you to set the radius for all four corners of an element in a single declaration.</p>
  
  <p>Here's the syntax for the <code style="color: #e74c3c;">border-radius</code> shorthand:</p>
  
  <pre>
    <code>
      border-radius: <span style="color: #e74c3c;">[top-left]</span> <span style="color: #e74c3c;">[top-right]</span> <span style="color: #e74c3c;">[bottom-right]</span> <span style="color: #e74c3c;">[bottom-left]</span>;
    </code>
  </pre>
  
  <p>Here's an example demonstrating the use of <code style="color: #e74c3c;">border-radius</code> shorthand:</p>
  
  <div style="background-color: #3498db; color: #fff;  border-radius: 20px;">
    <p>This is an element with rounded corners using the border-radius shorthand property.</p>
  </div>
  
  <h3 style="color: #2ecc71;">3. Border Direction Styles</h3>
  <p>Each border direction (top, right, bottom, left) can have its own style, width, and color. Here are the available border direction styles:</p>
  
  <ul>
    <li><strong>Top Border:</strong> solid, dashed, dotted, double, groove, ridge, inset, outset.</li>
    <li><strong>Right Border:</strong> solid, dashed, dotted, double, groove, ridge, inset, outset.</li>
    <li><strong>Bottom Border:</strong> solid, dashed, dotted, double, groove, ridge, inset, outset.</li>
    <li><strong>Left Border:</strong> solid, dashed, dotted, double, groove, ridge, inset, outset.</li>
  </ul>
  
  <p>Here's an example demonstrating different border styles for each direction:</p>
  
  <div style="display: flex; justify-content: space-around;">
    <div style="border-top: 2px solid #e74c3c; ">Top Border</div>
    <div style="border-right: 2px dashed #e74c3c; ">Right Border</div>
    <div style="border-bottom: 2px dotted #e74c3c; ">Bottom Border</div>
    <div style="border-left: 2px double #e74c3c; ">Left Border</div>
  </div>
</div>`,
      },
      {
        id: "cssPropertiesAndValues_5",
        title: "Margin & Padding",
        about: `
        <div>
  <h2 style="color: #3498db;">Margin, Spacing, and Padding in CSS</h2>
  <h3 style="color: #3498db;">1. Margin:</h3>
  <p>
    The <span style="color: #ff5733;">margin</span> property sets the margin of an element. It creates space around the element.
  </p>
  <div style="margin: 20px; background-color: #3498db; color: #fff; padding: 10px;">Margin Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">margin:</span> 20px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">2. Padding:</h3>
  <p>
    The <span style="color: #ff5733;">padding</span> property sets the padding of an element. It creates space inside the element.
  </p>
  <div style=" background-color: #3498db; color: #fff;">Padding Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">padding:</span> 20px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">3. Margin Shorthand:</h3>
  <p>
    The <span style="color: #ff5733;">margin</span> property can also be specified using shorthand, which allows setting all margins at once or individually.
  </p>
  <div style="margin: 20px 10px; background-color: #3498db; color: #fff; padding: 10px;">Margin Shorthand Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">margin:</span> 20px 10px; /*(top & bottom) (left & right) */
      }
      .element {
        <span style="color: #e74c3c;">margin:</span> 20px 20px 20px 10px; /*top right bottom left) */
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">4. Padding Shorthand:</h3>
  <p>
    The <span style="color: #ff5733;">padding</span> property can also be specified using shorthand, which allows setting all paddings at once or individually.
  </p>
  <div style="padding: 20px 10px; background-color: #3498db; color: #fff;">Padding Shorthand Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">padding:</span> 20px 10px; /*(top & bottom) (left & right) */
        <span style="color: #e74c3c;">padding:</span> 20px 20px 20px 10px; /*top right bottom left) */
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">5. Margin Collapse:</h3>
  <p>
    Margin collapse occurs when the vertical margins of two adjacent elements overlap. The larger margin value between the adjacent elements will be applied.
  </p>
  <div style="margin-top: 20px; background-color: #3498db; color: #fff; padding: 10px;">Element 1</div>
  <div style="margin-top: 30px; background-color: #e74c3c; color: #fff; padding: 10px;">Element 2</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element1, .element2 {
        <span style="color: #e74c3c;">margin-top:</span> 20px;
      }
      .element2 {
        <span style="color: #e74c3c;">margin-top:</span> 30px;
      }
    </code>
  </pre>
</div>
`,
      },
      {
        id: "cssPropertiesAndValues_6",
        title: "Dimension Properties",
        about: `<div>
        <h2 style="color: #3498db;">Dimension Properties in CSS</h2>
        <h3 style="color: #3498db;">1. Width and Height:</h3>
        <p>
          The <span style="color: #ff5733;">width</span> and <span style="color: #ff5733;">height</span> properties set the width and height of an element, respectively.
        </p>
        <div style="width: 200px; height: 100px; background-color: #3498db; color: #fff;  text-align: center;">Width: 200px, Height: 100px</div>
        <h3 style="color: #3498db;">CSS:</h3>
       <pre>
          <code style="color: #3498db;">
            .element {
              <span style="color: #e74c3c;">width:</span> 200px;
              <span style="color: #e74c3c;">height:</span> 100px;
            }
          </code>
        </pre>
        <h3 style="color: #3498db;">2. Min-Width and Min-Height:</h3>
        <p>
          The <span style="color: #ff5733;">min-width</span> and <span style="color: #ff5733;">min-height</span> properties set the minimum width and height of an element, respectively.
        </p>
        <div style="min-width: 150px; min-height: 50px; background-color: #3498db; color: #fff;  text-align: center;">Min-Width: 150px, Min-Height: 50px</div>
        <h3 style="color: #3498db;">CSS:</h3>
       <pre>
          <code style="color: #3498db;">
            .element {
              <span style="color: #e74c3c;">min-width:</span> 150px;
              <span style="color: #e74c3c;">min-height:</span> 50px;
            }
          </code>
        </pre>
        <h3 style="color: #3498db;">3. Max-Width and Max-Height:</h3>
        <p>
          The <span style="color: #ff5733;">max-width</span> and <span style="color: #ff5733;">max-height</span> properties set the maximum width and height of an element, respectively.
        </p>
        <div style="max-width: 300px; max-height: 150px; background-color: #3498db; color: #fff;  text-align: center;">Max-Width: 300px, Max-Height: 150px</div>
        <h3 style="color: #3498db;">CSS:</h3>
       <pre>
          <code style="color: #3498db;">
            .element {
              <span style="color: #e74c3c;">max-width:</span> 300px;
              <span style="color: #e74c3c;">max-height:</span> 150px;
            }
          </code>
        </pre>
      </div>
      `,
      },
      {
        id: "cssPropertiesAndValues_7",
        title: "Aspect Ratio",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Faspect%20ratio%2F1.jpg?alt=media&token=86e2a74c-ae58-4cfb-b181-f204354e4dee",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Faspect%20ratio%2F2.jpg?alt=media&token=e9c90b38-6486-4e65-b2ee-d127677f4b93",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fproperties%2Faspect%20ratio%2F3.jpg?alt=media&token=e7497cee-e34c-4d09-a1c2-574b88962184",
        ],
      },
    ],
  },
  {
    id: "position",
    title: "CSS Position Property",
    about: `
    <div>
  <h2 style="color: #3498db;">Understanding Positions in CSS</h2>
  <p>In CSS, you can control the positioning of elements using the following position properties:</p>
  
  <h3 style="color: #2ecc71;">1. Static Position</h3>
  <p>The default position property of an element is <code style="color: #e74c3c;">static</code>. Elements with a static position are positioned according to the normal flow of the document. This means they appear in the order they are written in the HTML and cannot be moved using top, bottom, left, or right properties.</p>
  
  <p>Example:</p>
  
  <div style="background-color: #3498db; color: #fff; ">
    <p>This is a paragraph with static position.</p>
  </div>
  
  <h3 style="color: #2ecc71;">2. Relative Position</h3>
  <p>Elements with a <code style="color: #e74c3c;">relative</code> position are positioned relative to their normal position. This means you can use top, bottom, left, or right properties to offset the element from its normal position without affecting the layout of other elements.</p>
  
  <p>Example:</p>
  
  <div style="position: relative;left:10%; background-color: #2ecc71; color: #fff;width:50%; ">
    <p>style="position: relative;left:10%;width:50%; "</p>
  </div>
  
  <h3 style="color: #2ecc71;">3. Absolute Position</h3>
  <p>Elements with an <code style="color: #e74c3c;">absolute</code> position are positioned relative to their nearest positioned ancestor. If no ancestor is positioned, the element is positioned relative to the initial containing block (usually the viewport).</p>
  
  <p>Example:</p>
  
  <div style="position: relative; background-color: #e74c3c; color: #fff;width:100%;height:100px ">
    <div style="position: absolute; top: 10px; left: 30px; background-color: #3498db; color: #fff; height:60px;width:90%;">
      <p>style="position: absolute; top: 10px; left: 30px; height:60px;width:90%;</p>
    </div>
  </div>
  
  <h3 style="color: #2ecc71;">4. Fixed Position</h3>
  <p>Elements with a <code style="color: #e74c3c;">fixed</code> position are positioned relative to the viewport. They do not move when the page is scrolled.</p>
  
  <p>Example: See the right bottom side of window</p>
  
  <div style="position: fixed; bottom: 20px; right: 20px; background-color: #9b59b6; color: #fff; padding: 10px; z-index:10">
    <p style="width:100px">style="position: fixed; bottom: 20px; right: 20px"</p>
  </div>
</div>

    `,
    contents: [
      {
        id: "positions_1",
        title: "Position Overview",
      },
    ],
  },
  {
    id: "display",
    title: "Display Property",
    about: `
    <div>
  <h2 style="color: #3498db;">CSS Display Property</h2>
  <p>
    The <span style="color: #ff5733;">CSS</span> <span style="color: #ff5733;">display</span> property specifies the type of rendering box used for an element. It determines how an element is displayed within the document layout.
  </p>
  <h3 style="color: #3498db;">1. Block:</h3>
  <p>
    Elements with <span style="color: #ff5733;">display: block;</span> render as block-level elements, which create a line break before and after the element, and stretch to fill the available horizontal space.
  </p>
  <div style="display: block; background-color: #3498db; color: #fff;  margin-bottom: 10px;">Block Element</div>
  <h3 style="color: #3498db;">HTML:</h3>
  <pre>
  <code >
    &lt;<span style="color: #ff5733;">div</span> <span style="color: #ff5733;">style</span>=<span style="color: #ff5733;">"display:</span> <span style="color: #00b894;">block;</span> <span style="color: #ff5733;">background-color:</span> #3498db;<span style="color: #ff5733;">color:</span> #fff;<span style="color: #ff5733;">padding:</span> 20px;<span style="color: #ff5733;">margin-bottom:</span> 10px;"&gt;Block Element&lt;/<span style="color: #ff5733;">div</span>&gt;
  </code>
</pre>
  <h3 style="color: #3498db;">2. Inline:</h3>
  <p>
    Elements with <span style="color: #ff5733;">display: inline;</span> render as inline-level elements, which do not create line breaks before or after them, and only take up as much width as necessary.
  </p>
  <div style="display:flex;flex-direction:row">
  <span style="display: inline; background-color: #2ecc71; color: #fff; padding: 10px; ">Inline Element 1</span>
  <span style="display: inline; background-color: #2ecc71; color: #fff; padding: 10px;">Inline Element 2</span>
  </div>
  <h3 style="color: #3498db;">HTML:</h3>
  <pre>
  <code >
    &lt;<span style="color: #ff5733;">span</span> <span style="color: #ff5733;">style</span>=<span style="color: #ff5733;">"display:</span> <span style="color: #00b894;">inline;</span> <span style="color: #ff5733;">background-color:</span> #2ecc71;<span style="color: #ff5733;">color:</span> #fff;<span style="color: #ff5733;">padding:</span> 10px;"&gt;Inline Element 1&lt;/<span style="color: #ff5733;">span</span>&gt;
    &lt;<span style="color: #ff5733;">span</span> <span style="color: #ff5733;">style</span>=<span style="color: #ff5733;">"display:</span> <span style="color: #00b894;">inline;</span> <span style="color: #ff5733;">background-color:</span> #2ecc71;<span style="color: #ff5733;">color:</span> #fff;<span style="color: #ff5733;">padding:</span> 10px;"&gt;Inline Element 2&lt;/<span style="color: #ff5733;">span</span>&gt;
  </code>
</pre>
  <h3 style="color: #3498db;">3. Inline-Block:</h3>
  <p>
    Elements with <span style="color: #ff5733;">display: inline-block;</span> render as inline-level elements, but they can have a width and height, and vertical margins, similar to block-level elements.
  </p>
  <div style="display: inline-block; background-color: #e74c3c; color: #fff;  margin-bottom: 10px;">Inline-Block Element</div>
  <h3 style="color: #3498db;">HTML:</h3>
  <pre>
  <code >
    &lt;<span style="color: #ff5733;">div</span> <span style="color: #ff5733;">style</span>=<span style="color: #ff5733;">"display:</span> <span style="color: #00b894;">inline-block;</span> <span style="color: #ff5733;">background-color:</span> #e74c3c;<span style="color: #ff5733;">color:</span> #fff;<span style="color: #ff5733;">padding:</span> 20px;<span style="color: #ff5733;">margin-bottom:</span> 10px;"&gt;Inline-Block Element&lt;/<span style="color: #ff5733;">div</span>&gt;
  </code>
</pre>
  <h3 style="color: #3498db;">4. None:</h3>
  <p>
    Elements with <span style="color: #ff5733;">display: none;</span> are completely removed from the document flow, and they do not take up any space on the page. They are effectively invisible.
  </p>
  <div style="display: none; background-color: #9b59b6; color: #fff; ">This element is not displayed</div>
  <h3 style="color: #3498db;">HTML:</h3>
  <pre>
  <code >
    &lt;<span style="color: #ff5733;">div</span> <span style="color: #ff5733;">style</span>=<span style="color: #ff5733;">"display:</span> <span style="color: #00b894;">none;</span> <span style="color: #ff5733;">background-color:</span> #9b59b6;<span style="color: #ff5733;">color:</span> #fff;<span style="color: #ff5733;">padding:</span> 20px;"&gt;This element is not displayed&lt;/<span style="color: #ff5733;">div</span>&gt;
  </code>
</pre>
  <h3 style="color: #3498db;">5. Flex:</h3>
  <p>
    Elements with <span style="color: #ff5733;">display: flex;</span> create a flex container, enabling a flex layout context for their children. They can be laid out in any direction and reorder themselves to best fit the available space.
  </p>
  <div style="display: flex; background-color: #3498db; color: #fff; ">
    <div style="background-color: #2ecc71; color: #fff; padding: 10px; margin-right: 10px;">Flex Item 1</div>
    <div style="background-color: #2ecc71; color: #fff; padding: 10px;">Flex Item 2</div>
  </div>
  <h3 style="color: #3498db;">HTML:</h3>
  <pre>
  <code >
    &lt;<span style="color: #ff5733;">div</span> <span style="color: #ff5733;">style</span>=<span style="color: #ff5733;">"display:</span> <span style="color: #00b894;">flex;</span> <span style="color: #ff5733;">background-color:</span> #3498db;<span style="color: #ff5733;">color:</span> #fff;<span style="color: #ff5733;">padding:</span> 20px;"&gt;
      &lt;<span style="color: #ff5733;">div</span> <span style="color: #ff5733;">style</span>=<span style="color: #ff5733;">"background-color:</span> #2ecc71;<span style="color: #ff5733;">color:</span> #fff;<span style="color: #ff5733;">padding:</span> 10px;<span style="color: #ff5733;">margin-right:</span> 10px;"&gt;Flex Item 1&lt;/<span style="color: #ff5733;">div</span>&gt;
      &lt;<span style="color: #ff5733;">div</span> <span style="color: #ff5733;">style</span>=<span style="color: #ff5733;">"background-color:</span> #2ecc71;<span style="color: #ff5733;">color:</span> #fff;<span style="color: #ff5733;">padding:</span> 10px;"&gt;Flex Item 2&lt;/<span style="color: #ff5733;">div</span>&gt;
    &lt;/<span style="color: #ff5733;">div</span>&gt;
  </code>
</pre>
</div>

    `,
    contents: [
      {
        id: "display_1",
        title: "Display Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F1.jpg?alt=media&token=f38876fb-8d25-4386-bc38-ac0bc65ca25e",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F2.jpg?alt=media&token=5acbeee9-7bcf-4bc1-841b-8718f0ad5a5b",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F3.jpg?alt=media&token=1d651284-35ce-4cf8-85c4-012226ddb1a5",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F4.jpg?alt=media&token=ab39fac5-8adc-4a2c-bfbc-8ea191d25926",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F5.jpg?alt=media&token=99dc5e3d-88fc-463e-bf7d-6f38b0cd16dc",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2F6.jpg?alt=media&token=ade9f404-c5d6-424c-ab2c-110e27c15d8f",
        ],
      },
      {
        id: "display_2",
        title: "Diff. D/B opacity, visiblity & display",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F1.jpg?alt=media&token=729de219-4fae-45d5-ac93-aa8b11ccd5e9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F2.jpg?alt=media&token=5d31d2a6-ea79-4eab-b392-a7f2610a989c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F3.jpg?alt=media&token=a4fb1a9d-d75b-4e5e-9812-6221cc03bc2c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F4.jpg?alt=media&token=b07994de-8c7f-48bd-9da5-8281215d89cd",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F5.jpg?alt=media&token=2b041a0a-2064-4974-9313-36fd4673d006",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F6.jpg?alt=media&token=cf01ed28-2f66-4a21-b7e2-a7d1db31ce30",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fdisplay%2Fdifference%20bw%20opacity%20visibility%20display%2F7.jpg?alt=media&token=04f45ecb-b97c-4c13-956b-2ca0a28df53e",
        ],
      },
    ],
  },
  {
    id: "overflowProperty",
    title: "Overflow Property",
    about: `
    <div>
  <h2 style="color: #3498db;">Overflow Properties in CSS</h2>
  <h3 style="color: #3498db;">1. Overflow</h3>
  <p>
    The <span style="color: #ff5733;">overflow</span> property specifies whether to clip content, render scrollbars, or overflow content when it exceeds the box's dimensions.
  </p>
  <div style="width: 200px; height: 100px; overflow: auto; border: 1px solid #ccc;">
    <p style="margin: 0 10px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel aliquet risus.</p>
  </div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .box {
        <span style="color: #e74c3c;">width:</span> 200px;
        <span style="color: #e74c3c;">height:</span> 100px;
        <span style="color: #e74c3c;">overflow:</span> auto;
        <span style="color: #e74c3c;">border:</span> 1px solid #ccc;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">2. Overflow-X and Overflow-Y</h3>
  <p>
    The <span style="color: #ff5733;">overflow-x</span> and <span style="color: #ff5733;">overflow-y</span> properties specify whether to clip content horizontally or vertically, respectively.
  </p>
  <div style="width: 200px; height: 100px; overflow-x: auto; overflow-y: hidden; border: 1px solid #ccc;">
    <p style="margin: 0 10px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel aliquet risus.</p>
  </div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .box {
        <span style="color: #e74c3c;">width:</span> 200px;
        <span style="color: #e74c3c;">height:</span> 100px;
        <span style="color: #e74c3c;">overflow-x:</span> auto;
        <span style="color: #e74c3c;">overflow-y:</span> hidden;
        <span style="color: #e74c3c;">border:</span> 1px solid #ccc;
      }
    </code>
  </pre>
  <div style="width: 200px; height: 100px; overflow-x: hidden; overflow-y: hidden; border: 1px solid #ccc;">
    <p style="margin: 0 10px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel aliquet risus.</p>
  </div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .box {
        <span style="color: #e74c3c;">width:</span> 200px;
        <span style="color: #e74c3c;">height:</span> 100px;
        <span style="color: #e74c3c;">overflow-x:</span> hidden;
        <span style="color: #e74c3c;">overflow-y:</span> hidden;
        <span style="color: #e74c3c;">border:</span> 1px solid #ccc;
      }
    </code>
  </pre>
</div>
`,
    contents: [
      {
        id: "overflow_1",
        title: "Overview",
      },
    ],
  },
  {
    id: "zIndex",
    title: "Z-index Property",
    contents: [
      {
        id: "zIndex_1",
        title: "Overview",
        about: `
      <div>
  <h2 style="color: #3498db;">Understanding the z-index Property in CSS</h2>
  <p>
    The <span style="color: #ff5733;">z-index</span> property specifies the stacking order of positioned elements. Elements with a higher <span style="color: #ff5733;">z-index</span> value are displayed in front of elements with lower values.
  </p>
  <h3 style="color: #3498db;">1. Basics of z-index</h3>
  <p>
    The <span style="color: #ff5733;">z-index</span> property only applies to elements with a <span style="color: #ff5733;">position</span> value other than <span style="color: #ff5733;">static</span>. By default, the stacking order follows the document flow, with non-positioned elements painted first, followed by positioned elements in the order they appear in the HTML source.
  </p>
  <h3 style="color: #3498db;">2. Usage</h3>
  <p>
    To use <span style="color: #ff5733;">z-index</span>, you need to specify a <span style="color: #ff5733;">position</span> value other than <span style="color: #ff5733;">static</span> for the element. Common values for <span style="color: #ff5733;">position</span> include <span style="color: #ff5733;">relative</span>, <span style="color: #ff5733;">absolute</span>, and <span style="color: #ff5733;">fixed</span>.
  </p>
  <h3 style="color: #3498db;">3. Values</h3>
  <p>
    The <span style="color: #ff5733;">z-index</span> property accepts integer values. Elements with higher values are stacked in front of elements with lower values. The default value is <span style="color: #ff5733;">auto</span>, which means the stacking order is determined by the document flow.
  </p>
  <h3 style="color: #3498db;">4. Minimum and Maximum Values</h3>
  <p>
    The minimum value for <span style="color: #ff5733;">z-index</span> is <span style="color: #ff5733;">-2147483648</span>, and the maximum value is <span style="color: #ff5733;">2147483647</span>. Values outside this range are clamped to the nearest limit.
  </p>
  <h3 style="color: #3498db;">5. Example</h3>
  <span style="position:relative;width:300px, height:300px; margin-bottom:100px">
    <div style="background-color: red; color: #fff; height: 30px;padding:10px; position: absolute; z-index: 2; ">Element 2 (z-index: 2)</div>
    <div style="background-color: green; color: #fff; height: 50px;padding:40px; position: absolute; z-index: 1; ">Element 1 (z-index: 1)</div>
  </span>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element2 {
        <span style="color: #e74c3c;">position:</span> absolute;
        <span style="color: #e74c3c;">z-index:</span> 2;
      }
      .element1 {
        <span style="color: #e74c3c;">position:</span> absolute;
        <span style="color: #e74c3c;">z-index:</span> 1;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">Explanation:</h3>
  <p>
    In this example, we have two absolutely positioned elements. The first element has a higher <span style="color: #ff5733;">z-index</span> value, so it appears in front of the second element, even though element 2 is arranged after the element 1 in HTML Source
  </p>
</div>
      `,
      },
    ],
  },
  {
    id: "floatProperty",
    title: "Float Property",
    contents: [
      {
        id: "floatProperty_1",
        title: "Overview",
        about: `
        <div>
  <h2 style="color: #3498db;">Understanding the Float Property in CSS</h2>
  <p>
    The <span style="color: #ff5733;">float</span> property in CSS is used to specify whether an element should be floated to the left or right side of its containing block, allowing other elements to wrap around it.
  </p>
  <h3 style="color: #3498db;">1. Basics of Float</h3>
  <p>
    When an element is floated, it is taken out of the normal document flow and positioned to the left or right edge of its containing block. Other elements then flow around it, depending on their position and the float value.
  </p>
  <h3 style="color: #3498db;">2. Usage</h3>
  <p>
    To float an element, you can use the <span style="color: #ff5733;">float</span> property in CSS, specifying either <span style="color: #ff5733;">left</span> or <span style="color: #ff5733;">right</span> as the value. Elements can also be cleared to prevent wrapping around floated elements.
  </p>
  <h3 style="color: #3498db;">3. Examples</h3>
  <p>
    Below are examples demonstrating how floating elements affect the layout of surrounding elements.
  </p>
  <span style="overflow: hidden; border: 1px solid #ccc;">
    <span style="float: left; width: 100px; height: 100px; background-color: #3498db; color: #fff; padding: 10px;">Float Left</span>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</span>
  </span>
  <span style="overflow: hidden; border: 1px solid #ccc; margin-top: 10px; height:100px">
    <span style="float: right; width: 100px; height: 10px; background-color: #e74c3c; color: #fff; padding: 10px;">Float Right</span>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</span>
  </span>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .left-float {
        <span style="color: #e74c3c;">float:</span> left;
        <span style="color: #e74c3c;">width:</span> 100px;
        <span style="color: #e74c3c;">height:</span> 100px;
        <span style="color: #e74c3c;">background-color:</span> #3498db;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 10px;
      }
      .right-float {
        <span style="color: #e74c3c;">float:</span> right;
        <span style="color: #e74c3c;">width:</span> 100px;
        <span style="color: #e74c3c;">height:</span> 10px;
        <span style="color: #e74c3c;">background-color:</span> #e74c3c;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 10px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">Explanation:</h3>
  <p>
    In these examples, two <span style="color: #ff5733;">div</span> elements are floated left and right respectively. Surrounding text flows around these floated elements, adapting to their positions.
  </p>
</div>
<div>
  <h2 style="color: #3498db;">Understanding Clear and Clearfix for Floats</h2>
  <p>
    The <span style="color: #ff5733;">clear</span> property in CSS is used to control the behavior of elements following floated elements. It specifies whether an element should be moved below any preceding floated elements, preventing them from wrapping around it.
  </p>
  <h3 style="color: #3498db;">1. Basics of Clear</h3>
  <p>
    When an element is cleared, it is moved below any preceding floated elements in the same containing block, ensuring that it starts on a new line. This is often used to prevent layout issues when elements should not wrap around floated elements.
  </p>
  <h3 style="color: #3498db;">2. Usage</h3>
  <p>
    The <span style="color: #ff5733;">clear</span> property accepts values such as <span style="color: #ff5733;">left</span>, <span style="color: #ff5733;">right</span>, <span style="color: #ff5733;">both</span>, and <span style="color: #ff5733;">none</span>. These values determine which side of floated elements the element should clear.
  </p>
  <h3 style="color: #3498db;">3. Clearfix for Floats</h3>
  <p>
    The clearfix technique is commonly used to contain floated elements within a container and prevent layout issues. It involves adding a clearfix class to the container, which applies a clearfix hack to ensure proper rendering of floated elements.
  </p>
  <h3 style="color: #3498db;">Example:</h3>
  <p>
    Below is an example demonstrating the use of the clear property and clearfix for floats.
  </p>
  <div style="overflow: hidden;">
    <div style="float: left; width: 100px; height: 100px; background-color: #3498db; color: #fff; padding: 10px;">Float Left</div>
    <div style="clear: both; padding-top: 20px;">This div is cleared, so it starts on a new line below the floated element.</div>
  </div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .clearfix::after {
        content: "";
        display: table;
        clear: both;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">Explanation:</h3>
  <p>
    In the example above, the second div is cleared using the clear property, ensuring it starts on a new line below the floated element. The clearfix class applies a clearfix hack to the container, preventing layout issues caused by floated elements.
  </p>
  <h3 style="color: #3498db;">More Examples and Explanation:</h3>
  <p>
    Clearing floats is essential for creating predictable layouts, especially when dealing with floated elements. Here are some additional examples and explanations to further understand the clear property and clearfix technique:
  </p>
  <h3 style="color: #3498db;">Example 1: Clearing Floats</h3>
  <p>
    Let's consider a scenario where we have multiple floated elements inside a container. Without clearing, subsequent non-floated elements would wrap around the floated ones, resulting in an undesirable layout. To prevent this, we can use the clear property to ensure that following elements start on new lines.
  </p>
  <div style=" padding: 10px; border: 1px solid #ccc;">
    <div style="float: left; width: 100px; height: 100px; background-color: #3498db; color: #fff; padding: 10px;">Float 1</div>
    <div style="float: left; width: 100px; height: 100px; background-color: #2ecc71; color: #fff; padding: 10px;">Float 2</div>
    <div style="clear: both; padding-top: 20px;">This div is cleared, so it starts on a new line below the floated elements.</div>
  </div>
  <h3 style="color: #3498db;">Example 2: Clearfix Hack</h3>
  <p>
    Sometimes, clearing floats using the clear property may not be sufficient, especially when dealing with parent containers that collapse due to containing only floated elements. In such cases, the clearfix technique is used to force the container to expand and contain its floated children properly.
  </p>
  <div style=" padding: 10px; border: 1px solid #ccc;" class="clearfix">
    <div style="float: left; width: 100px; height: 100px; background-color: #e74c3c; color: #fff; padding: 10px;">Float 1</div>
    <div style="float: left; width: 100px; height: 100px; background-color: #9b59b6; color: #fff; padding: 10px;">Float 2</div>
  </div>
</div>
`,
      },
    ],
  },
  {
    id: "transformationProperties",
    title: "CSS Transformations",
    about: `
    <div>
  <h2 style="color: #3498db;">CSS Transformation Properties</h2>
  <p>
    CSS transformation properties allow you to transform elements in 2D or 3D space. Here are some commonly used transformation properties:
  </p>
  <h3 style="color: #3498db;">1. Translate:</h3>
  <p>
    The <span style="color: #ff5733;">translate()</span> function moves an element from its current position along the X and Y axes. It accepts two values: <i>tx</i> and <i>ty</i>, representing the horizontal and vertical translation, respectively.
  </p>
  <div style="transform: translate(300px, 20px); background-color: #e74c3c; color: #fff;  width:150px;"></div>
  </br>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code >
      .element {
        <span style="color: #ff5733;">transform:</span> <span style="color: #ffa600;">translate(300px, 20px);</span>
        <span style="color: #ff5733;">background-color:</span> <span style="color: #ffa600;">#e74c3c;</span>
        <span style="color: #ff5733;">color:</span> <span style="color: #ffa600;">#fff;</span>
        <span style="color: #ff5733;">padding:</span> <span style="color: #ffa600;">20px;</span>
        <span style="color: #ff5733;">width:</span> <span style="color: #ffa600;">100px;</span>
      }
    </code>
  </pre>

  <h3 style="color: #3498db;">2. Rotate:</h3>
  <p>
    The <span style="color: #ff5733;">rotate()</span> function rotates an element around a fixed point defined by the transform-origin property. It accepts one parameter: <i>angle</i>, which specifies the rotation angle in degrees.
  </p>
  </br>
  <div style="transform: rotate(45deg); background-color: #3498db; color: #fff; width:60px; margin:auto;"></div>
  </br></br>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
  <code >
    .element {
      <span style="color: #ff5733;">transform:</span> <span style="color: #ffa600;">rotate(45deg);</span>
      <span style="color: #ff5733;">background-color:</span> <span style="color: #ffa600;">#3498db;</span>
      <span style="color: #ff5733;">color:</span> <span style="color: #ffa600;">#fff;</span>
      <span style="color: #ff5733;">padding:</span> <span style="color: #ffa600;">20px;</span>
    }
  </code>
</pre>

  <h3 style="color: #3498db;">3. Scale:</h3>
  <p>
    The <span style="color: #ff5733;">scale()</span> function scales an element along the X and Y axes. It accepts two parameters: <i>sx</i> and <i>sy</i>, representing the horizontal and vertical scaling factors, respectively.
  </p>
  <div style="transform: scale(1.5, 0.5); background-color: #2ecc71; color: #fff; width:80px;height:70px; margin:auto;">Scale Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
  <code >
    .element {
      <span style="color: #ff5733;">transform:</span> <span style="color: #ffa600;">scale(1.5, 0.5);</span>
      <span style="color: #ff5733;">background-color:</span> <span style="color: #ffa600;">#2ecc71;</span>
      <span style="color: #ff5733;">color:</span> <span style="color: #ffa600;">#fff;</span>
      <span style="color: #ff5733;">padding:</span> <span style="color: #ffa600;">20px;</span>
      <span style="color: #ff5733;">width:</span> <span style="color: #ffa600;">80px;</span>
      <span style="color: #ff5733;">margin:</span> <span style="color: #ffa600;">auto;</span>
    }
  </code>
</pre>

  <h3 style="color: #3498db;">4. Skew:</h3>
  <p>
    The <span style="color: #ff5733;">skew()</span> function skews an element along the X and Y axes. It accepts two parameters: <i>ax</i> and <i>ay</i>, representing the skew angles in degrees.
  </p>
  </br>
  <div style="transform: skew(20deg, 10deg); background-color: #9b59b6; color: #fff;  width:60px; margin:auto;"></div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
  <code >
    .element {
      <span style="color: #ff5733;">transform:</span> <span style="color: #ffa600;">skew(20deg, 10deg);</span>
      <span style="color: #ff5733;">background-color:</span> <span style="color: #ffa600;">#9b59b6;</span>
      <span style="color: #ff5733;">color:</span> <span style="color: #ffa600;">#fff;</span>
      <span style="color: #ff5733;">padding:</span> <span style="color: #ffa600;">20px;</span>
    }
  </code>
</pre>



  <h3 style="color: #3498db;">5. Transform Origin:</h3>
  <p>
    The <span style="color: #ff5733;">transform-origin</span> property specifies the origin point around which transformations are applied. It accepts values in length units or percentages.
  </p>
  <div style="transform: rotate(45deg); transform-origin: top left; background-color: #e74c3c; color: #fff; width:50px;margin-left:30px"></div>
  </br>
  </br>
  </br>
  </br>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">transform:</span> rotate(45deg);
        <span style="color: #e74c3c;">transform-origin:</span> top left;
        <span style="color: #e74c3c;">background-color:</span> #e74c3c;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 20px;
        <span style="color: #e74c3c;">width:</span> 50px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">6. Perspective:</h3>
  <p>
    The <span style="color: #ff5733;">perspective</span> property defines the perspective from which an element is viewed in 3D space. It affects the distance between the Z plane and the viewer.
  </p>
  </br>
  <div style="transform: perspective(500px) rotateY(45deg); background-color: #3498db; color: #fff; width:100px">Perspective Example</div>
  </br>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">transform:</span> perspective(500px) rotateY(45deg);
        <span style="color: #e74c3c;">background-color:</span> #3498db;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 20px;
        <span style="color: #e74c3c;">width:</span> 100px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">7. Transform Style:</h3>
  <p>
    The <span style="color: #ff5733;">transform-style</span> property determines whether child elements maintain their 3D position in relation to their parent element. It can be set to <span style="color: #ff5733;">flat</span> or <span style="color: #ff5733;">preserve-3d</span>.
  </p>
  <div style="transform-style: preserve-3d; background-color: #2ecc71; color: #fff; ">Transform Style Example</div>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
    <code style="color: #3498db;">
      .element {
        <span style="color: #e74c3c;">transform-style:</span> preserve-3d;
        <span style="color: #e74c3c;">background-color:</span> #2ecc71;
        <span style="color: #e74c3c;">color:</span> #fff;
        <span style="color: #e74c3c;">padding:</span> 20px;
      }
    </code>
  </pre>
</div>
`,
    contents: [
      {
        id: "transformationProperties_1",
        title: "Transformations Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Ftransformation%20properties%2F1.jpg?alt=media&token=6ac03155-3a60-4d85-b678-8d71d4e4db38",
        ],
      },
    ],
  },
  {
    id: "cssUnits",
    title: "CSS Units",
    about: `
    <div>
  <h2 style="color: #3498db;">CSS Units and Their Usage</h2>
  <p>In CSS, various units are used to specify lengths, sizes, and other property values. Understanding these units is crucial for creating responsive and visually appealing designs. Below are some commonly used units along with their use cases and examples:</p>
  
  <h3 style="color: #2ecc71;">1. Pixels (px)</h3>
  <p>Pixels are a fixed unit of measurement and are commonly used for setting precise sizes.</p>
  <p><strong>Example:</strong> Setting font size to 16 pixels.</p>
  <pre>
  <code>
    body {
      font-size: 16px;
    }
  </code>
  </pre>
  
  <h3 style="color: #2ecc71;">2. Percentages (%)</h3>
  <p>Percentages are relative to the parent element's size and are often used in responsive design.</p>
  <p><strong>Example:</strong> Setting width to 50% of the parent element.</p>
  <pre>
  <code>
    .container {
      width: 50%;
    }
  </code>
  </pre>
  
  <h3 style="color: #2ecc71;">3. EM and REM</h3>
  <p>EM and REM are relative units based on the font-size of the element or the root element respectively.</p>
  <p><strong>Example:</strong> Setting margin to 1.5 times the font size of the parent element.</p>
  <pre>
  <code>
    p {
      margin: 1.5em;
    }
  </code>
  </pre>
  <div>
  <h2 style="color: #3498db;">Difference Between REM and EM Units</h2>
  <p>In CSS, both REM and EM units are relative units used for sizing properties. However, they differ in their reference points:</p>
  
  <h3 style="color: #2ecc71;">EM Units:</h3>
  <p style="color: #555;">EM units are relative to the font-size of the <strong>element itself</strong>. When you set a property using EM, it will be relative to the font-size of the element's <strong>parent</strong>. If the font-size of the parent element changes, all properties set with EM units within it will scale accordingly.</p>
  <p style="color: #555;"><strong>Example:</strong> If you set the font-size of a paragraph to <span style="color: #0074D9;">1.5em</span>, it will be 1.5 times the font-size of its parent element.</p>
  
  <h3 style="color: #2ecc71;">REM Units:</h3>
  <p style="color: #555;">REM units are relative to the font-size of the <strong>root element</strong> (usually &lt;html&gt;). When you set a property using REM, it will be relative to the font-size of the root element, regardless of the font-size of the element itself or its parents. REM units provide a more consistent way to control layout, especially in complex nested structures.</p>
  <p style="color: #555;"><strong>Example:</strong> If you set the font-size of the root element to <span style="color: #0074D9;">16px</span>, then <span style="color: #0074D9;">1rem</span> would be equal to <span style="color: #0074D9;">16px</span>.</p>
  
</div>
  
<h3 style="color: #2ecc71;">4. Viewport Width (vw) and Viewport Height (vh)</h3>
<p>Viewport units are relative to the size of the browser viewport. VW represents 1% of the viewport's width, while VH represents 1% of the viewport's height.</p>
<p><strong>Example:</strong> Setting a div's width to 50% of the viewport's width.</p>
<pre>
<code>
  .full-width {
    width: 50vw;
  }
</code>
</pre>

<h3 style="color: #2ecc71;">5. Viewport Minimum (vmin) and Viewport Maximum (vmax)</h3>
<p>Vmin represents 1% of the minimum of the viewport's width or height, while Vmax represents 1% of the maximum of the viewport's width or height.</p>
<p><strong>Example:</strong> Setting font size to 5% of the viewport's minimum dimension.</p>
<pre>
<code>
  .responsive-text {
    font-size: 5vmin;
  }
</code>
</pre>
</div>
`,
    contents: [
      {
        id: "cssUnits_1",
        title: "CSS Units Overview",
        images: [],
      },
    ],
  },
  {
    id: "flex",
    title: "Flex Design",
    about: `
  <div>
  <h2 style="color: #3498db;">Introduction to CSS Flexbox</h2>
  <p>CSS Flexbox, or Flexible Box Layout, is a powerful layout model introduced in CSS3 that allows you to design flexible and responsive layouts with ease. It provides a more efficient way to distribute space and align items in a container, regardless of their size or content.</p>
  
  <h3 style="color: #2ecc71;">Key Features of Flexbox:</h3>
  <ul>
    <li>Direction-agnostic layout: Flexbox allows you to lay out elements in either horizontal or vertical directions, making it suitable for a wide range of designs.</li>
    <li>Efficient space distribution: Flexbox automatically adjusts the size of flex items and distributes available space among them, eliminating the need for complex calculations or additional markup.</li>
    <li>Alignment controls: Flexbox provides precise control over the alignment of items along the main axis and the cross axis, enabling you to achieve consistent and visually appealing designs.</li>
    <li>Flexible order: Flexbox allows you to easily change the order of flex items without modifying the HTML structure, making it ideal for responsive designs and reordering content based on screen size or other criteria.</li>
    <li>Wrapping capabilities: Flexbox supports wrapping of flex items onto multiple lines, enabling you to create more complex layouts while maintaining flexibility and responsiveness.</li>
  </ul>
  
  <h3 style="color: #2ecc71;">How Flexbox Works:</h3>
  <p>In Flexbox, elements are laid out within a flex container, which is created by setting the <code>display</code> property of a parent element to <code>flex</code>. Flex items inside the container are then arranged along a main axis and a cross axis, based on various properties and values specified by the developer.</p>
  
  <p>Flexbox introduces a new set of properties specifically designed for controlling the layout and behavior of flex containers and flex items. These properties include <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code>, <code>flex-grow</code>, <code>flex-shrink</code>, and many more.</p>
  
  <p>By understanding and leveraging these properties, developers can create versatile and responsive layouts that adapt to different screen sizes and devices, improving the overall user experience of their websites or applications.</p>
</div>
<div>
  <h2 style="color: #3498db;">CSS Flexbox Properties</h2>
  <p>CSS Flexbox provides a set of properties for creating flexible and responsive layouts. Below are some commonly used properties along with their descriptions:</p>
  
  <ul>
    <li><strong>display:</strong> Specifies the display behavior of the flex container.</li>
   
    <li><strong>flex-direction:</strong> Defines the direction of the main axis along which flex items are laid out in the flex container.</li>
   
    <li><strong>flex-wrap:</strong> Determines whether flex items are forced onto a single line or can wrap onto multiple lines.</li>
   
    <li><strong>flex-flow:</strong> Shorthand property for setting both the flex-direction and flex-wrap properties in a single declaration.</li>
   
    <li><strong>justify-content:</strong> Aligns flex items along the main axis of the flex container.</li>
   
    <li><strong>align-items:</strong> Aligns flex items along the cross axis of the flex container.</li>
   
    <li><strong>align-content:</strong> Aligns flex lines within the flex container when there is extra space on the cross axis.</li>
   
    <li><strong>order:</strong> Specifies the order in which a flex item appears in the flex container.</li>
   
    <li><strong>flex-grow:</strong> Defines the ability for a flex item to grow if necessary.</li>
   
    <li><strong>flex-shrink:</strong> Defines the ability for a flex item to shrink if necessary.</li>
   
    <li><strong>flex-basis:</strong> Specifies the initial size of a flex item before any remaining space is distributed.</li>
   
    <li><strong>flex:</strong> Shorthand property for setting the flex-grow, flex-shrink, and flex-basis properties in a single declaration.</li>
   
    <li><strong>align-self:</strong> Allows individual flex items to override the align-items property for their own alignment.</li>
  </ul>
  
  <p>These properties provide developers with fine-grained control over the layout and behavior of flex containers and flex items, enabling the creation of flexible and responsive designs.</p>
</div>
<div>
  <h2 style="color: #3498db;">Flexbox: Main and Cross Axis</h2>
  <p>
    This example demonstrates the main and cross axes in Flexbox layout with both flex-direction: row and flex-direction:column directions.
  </p>
  </br>
  <h3 style="color: #3498db;">When flex-direction:row</h3>
  <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; background-color: #f39c12; color: #fff; ">
    <div style="background-color: #3498db; color: #fff; padding: 10px;">1</div>
    <div style="background-color: #3498db; color: #fff; padding: 10px;">2</div>
    <div style="background-color: #3498db; color: #fff; padding: 10px;">3</div>
  </div>
  <p>Explanation</p>
  <ul >
  <li>Main Axis: Horizontal</li>
  <li>Cross Axis: Vertical</li>
  </ul>
  </br>
  <h3 style="color: #3498db;">When flex-direction:column</h3>
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #2ecc71; color: #fff;  margin-top: 20px;">
    <div style="background-color: #3498db; color: #fff; padding: 10px;">1</div>
    <div style="background-color: #3498db; color: #fff; padding: 10px;">2</div>
    <div style="background-color: #3498db; color: #fff; padding: 10px;">3</div>
  </div>
  <p>Explanation</p>
  <ul >
    <li>Main Axis: Vertical</li>
    <li>Cross Axis: Horizontal</li>
  </ul>
</div>

<div>
  <h2 style="color: #3498db;">Creating Flexible Designs with CSS Flexbox</h2>
  <p>CSS Flexbox provides powerful tools for creating flexible layouts. Let's explore how to create a basic flex design and align items both vertically and horizontally using flex direction.</p>
  
  <h3 style="color: #2ecc71;">1. Creating a Basic Flex Design</h3>
  <p>To create a flex design, first, define a flex container by setting its display property to <code style="color: #e74c3c;">flex</code>. Then, add flex items inside the container.</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
      }
      
      .item {
        /* Styles for flex items */
      }
    </code>
  </pre>
  
  <p>By default, flex items will be laid out in a row. You can adjust the layout by setting the <code style="color: #e74c3c;">flex-direction</code> property to <code style="color: #e74c3c;">row</code>, <code style="color: #e74c3c;">column</code>, <code style="color: #e74c3c;">row-reverse</code>, or <code style="color: #e74c3c;">column-reverse</code>.</p>
  
  <h3 style="color: #2ecc71;">2. Aligning Items Horizontally</h3>
  <p>To align items horizontally, use the <code style="color: #e74c3c;">justify-content</code> property. Setting it to <code style="color: #e74c3c;">center</code> will align items to the center along the main axis.</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
        justify-content: <span style="color: #e74c3c;">center</span>;
      }
    </code>
  </pre>
  
  <h3 style="color: #2ecc71;">3. Aligning Items Vertically</h3>
  <p>To align items vertically, use the <code style="color: #e74c3c;">align-items</code> property. Setting it to <code style="color: #e74c3c;">center</code> will align items to the center along the cross axis.</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
        align-items: <span style="color: #e74c3c;">center</span>;
      }
    </code>
  </pre>
  
  <h3 style="color: #2ecc71;">4. Aligning Items Both Vertically and Horizontally</h3>
  <p>To align items both vertically and horizontally, combine <code style="color: #e74c3c;">justify-content</code> and <code style="color: #e74c3c;">align-items</code> properties. This will center items both along the main axis and the cross axis.</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
        justify-content: <span style="color: #e74c3c;">center</span>;
        align-items: <span style="color: #e74c3c;">center</span>;
      }
    </code>
  </pre>
  
  <p>With these techniques, you can create flexible designs and easily align items both vertically and horizontally using CSS Flexbox.</p>
</div>

<div>
  <h2 style="color: #3498db;">Understanding justify-content and align-items in CSS Flexbox</h2>
  <p>The <code style="color: #e74c3c;">justify-content</code> and <code style="color: #e74c3c;">align-items</code> properties in CSS Flexbox allow you to control the alignment of flex items along the main axis and cross axis respectively. Let's explore the various values they can take:</p>
  
  <h3 style="color: #2ecc71;">1. justify-content Values</h3>
  <p>The <code style="color: #e74c3c;">justify-content</code> property controls how flex items are aligned along the main axis of the flex container. It can take the following values:</p>
  
  <ul>
    <li><strong>flex-start:</strong> Aligns items to the start of the main axis (default).</li>
    <li><strong>flex-end:</strong> Aligns items to the end of the main axis.</li>
    <li><strong>center:</strong> Aligns items to the center of the main axis.</li>
    <li><strong>space-between:</strong> Distributes items evenly along the main axis; first item is at the start, last item is at the end.</li>
    <li><strong>space-around:</strong> Distributes items evenly along the main axis with equal space around them.</li>
    <li><strong>space-evenly:</strong> Distributes items evenly along the main axis with equal space between them.</li>
  </ul>
  
  <h3 style="color: #2ecc71;">2. align-items Values</h3>
  <p>The <code style="color: #e74c3c;">align-items</code> property controls how flex items are aligned along the cross axis of the flex container. It can take the following values:</p>
  
  <ul>
    <li><strong>stretch:</strong> Default value. Stretch items to fill the container along the cross axis.</li>
    <li><strong>flex-start:</strong> Aligns items to the start of the cross axis.</li>
    <li><strong>flex-end:</strong> Aligns items to the end of the cross axis.</li>
    <li><strong>center:</strong> Aligns items to the center of the cross axis.</li>
    <li><strong>baseline:</strong> Aligns items to their baselines.</li>
  </ul>
  
  <h3 style="color: #2ecc71;">3. align-self Property</h3>
  <p>The <code style="color: #e74c3c;">align-self</code> property allows individual flex items to override the <code style="color: #e74c3c;">align-items</code> property for their own alignment along the cross axis. It can take the same values as <code style="color: #e74c3c;">align-items</code>.</p>
  
  <p>Here are examples demonstrating the usage of these properties:</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
        justify-content: <span style="color: #e74c3c;">center</span>; /* Align items horizontally */
        align-items: <span style="color: #e74c3c;">center</span>; /* Align items vertically */
      }
      
      .item {
        align-self: <span style="color: #e74c3c;">flex-end</span>; /* Align this item to the end */
      }
    </code>
  </pre>
  
  <p>With these properties and values, you have fine control over the alignment of flex items in a flex container, allowing you to create a variety of layouts and designs.</p>
</div>

<div>
  <h2 style="color: #3498db;">Understanding Alignment in CSS Flexbox</h2>
  <p>The alignment behavior in CSS Flexbox can vary based on the flex direction and the combination of alignment properties used. Let's explore how different alignment properties behave in various scenarios:</p>
  
  <h3 style="color: #2ecc71;">1. Alignment Behavior with Flex Direction: Row</h3>
  <p>When the flex direction is set to <code style="color: #e74c3c;">row</code>, items are laid out horizontally along the main axis. Here's how different alignment properties behave:</p>
  
  <ul>
    <li><strong>justify-content:</strong> Controls horizontal alignment. For example, setting it to <code style="color: #e74c3c;">flex-start</code> will align items to the start of the row.</li>
    <li><strong>align-items:</strong> Controls vertical alignment. For example, setting it to <code style="color: #e74c3c;">center</code> will align items vertically in the center of the row.</li>
    <li><strong>align-self:</strong> Allows individual items to override the <code style="color: #e74c3c;">align-items</code> property for their own alignment along the cross axis.</li>
  </ul>
  
  <p>Here's an example demonstrating alignment behavior with flex direction set to <code style="color: #e74c3c;">row</code>:</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
        flex-direction: <span style="color: #e74c3c;">row</span>;
        justify-content: <span style="color: #e74c3c;">center</span>; /* Align items horizontally center*/
        align-items: <span style="color: #e74c3c;">center</span>; /* Align items vertically center */
      }
      
      .item {
        align-self: <span style="color: #e74c3c;">flex-end</span>; /* Align this item to the end */
      }
    </code>
  </pre>
  
  <h3 style="color: #2ecc71;">2. Alignment Behavior with Flex Direction: Column</h3>
  <p>When the flex direction is set to <code style="color: #e74c3c;">column</code>, items are laid out vertically along the main axis. Here's how different alignment properties behave:</p>
  
  <ul>
    <li><strong>justify-content:</strong> Controls vertical alignment. For example, setting it to <code style="color: #e74c3c;">center</code> will align items to the center of the column.</li>
    <li><strong>align-items:</strong> Controls horizontal alignment. For example, setting it to <code style="color: #e74c3c;">flex-start</code> will align items horizontally at the start of the column.</li>
    <li><strong>align-self:</strong> Allows individual items to override the <code style="color: #e74c3c;">align-items</code> property for their own alignment along the cross axis.</li>
  </ul>
  
  <p>Here's an example demonstrating alignment behavior with flex direction set to <code style="color: #e74c3c;">column</code>:</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
        flex-direction: <span style="color: #e74c3c;">column</span>;
        justify-content: <span style="color: #e74c3c;">center</span>; /* Align items vertically center */
        align-items: <span style="color: #e74c3c;">center</span>; /* Align items horizontally center */
      }
      
      .item {
        align-self: <span style="color: #e74c3c;">flex-end</span>; /* Align this item to the end */
      }
    </code>
  </pre>
  
  <p>Understanding how alignment properties behave based on the flex direction is crucial for creating complex and responsive layouts in CSS Flexbox.</p>
</div>

<div>
  <h2 style="color: #3498db;">Understanding Flex Items in CSS Flexbox</h2>
  <p>In CSS Flexbox, flex items are the elements inside a flex container. They can be manipulated using various properties to control their behavior and appearance. Let's explore some of these properties:</p>
  
  <h3 style="color: #2ecc71;">1. Flex Grow</h3>
  <p>The <code style="color: #e74c3c;">flex-grow</code> property specifies the ability of a flex item to grow relative to other items in the container. By default, all items have a <code style="color: #e74c3c;">flex-grow</code> value of 0, meaning they won't grow.</p>
  
  <p>When a flex container has extra space along the main axis, flex items with a positive <code style="color: #e74c3c;">flex-grow</code> value will grow to fill that space proportionally.</p>
  
  <p>Here's an example demonstrating <code style="color: #e74c3c;">flex-grow</code> with two flex items:</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
      }
      
      .item {
        flex-grow: <span style="color: #e74c3c;">1</span>; /* Both items will grow equally */
      }
      
      .item1 {
        /* Styles for item 1 */
      }
      
      .item2 {
        /* Styles for item 2 */
      }
    </code>
  </pre>

  <h3 style="color: #2ecc71;">2. Flex Grow with Different Values</h3>
  <p>When flex items have different <code style="color: #e74c3c;">flex-grow</code> values, they will grow proportionally based on these values relative to each other.</p>
  
  <p>For example:</p>
  
  <ul>
    <li>If one item has <code style="color: #e74c3c;">flex-grow: 1</code> and the other has <code style="color: #e74c3c;">flex-grow: 0</code>, the item with <code style="color: #e74c3c;">flex-grow: 1</code> will grow to fill any available space, while the other item won't grow.</li>
    <li>If one item has <code style="color: #e74c3c;">flex-grow: 2</code> and the other has <code style="color: #e74c3c;">flex-grow: 1</code>, the item with <code style="color: #e74c3c;">flex-grow: 2</code> will grow twice as much as the other item when there's extra space available.</li>
  </ul>
  
  <p>Here's an example:</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
      }
      
      .item1 {
        flex-grow: <span style="color: #e74c3c;">1</span>;
      }
      
      .item2 {
        flex-grow: <span style="color: #e74c3c;">0</span>;
      }
    </code>
  </pre>
  
  <h3 style="color: #2ecc71;">3. Flex Shrink</h3>
  <p>The <code style="color: #e74c3c;">flex-shrink</code> property specifies the ability of a flex item to shrink relative to other items in the container when there's not enough space.</p>
  
  <p>By default, all items have a <code style="color: #e74c3c;">flex-shrink</code> value of 1, meaning they can shrink equally when necessary.</p>
  
  <h3 style="color: #2ecc71;">3. Flex Shorthand</h3>
  <p>The <code style="color: #e74c3c;">flex</code> shorthand property allows you to set the <code style="color: #e74c3c;">flex-grow</code>, <code style="color: #e74c3c;">flex-shrink</code>, and <code style="color: #e74c3c;">flex-basis</code> properties in a single declaration.</p>
  
  <p>Here's an example using the <code style="color: #e74c3c;">flex</code> shorthand:</p>
  
  <pre>
    <code>
      .item {
        flex: <span style="color: #e74c3c;">1 1 200px</span>; /* flex-grow, flex-shrink, flex-basis */
      }
    </code>
  </pre>

  <h3 style="color: #2ecc71;">4. Flex Wrap</h3>
  <p>The <code style="color: #e74c3c;">flex-wrap</code> property determines whether flex items are forced onto a single line or can wrap onto multiple lines if necessary. By default, flex items are laid out in a single line.</p>
  
  <p>When set to <code style="color: #e74c3c;">wrap</code>, if there's not enough space for all flex items to fit in a single line, they will wrap onto additional lines as needed.</p>
  
  <p>Here's an example:</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
        flex-wrap: <span style="color: #e74c3c;">wrap</span>;
      }
    </code>
  </pre>
<p>With these properties and shorthands, you have fine control over the sizing and behavior of flex items in a flex container, allowing you to create versatile and responsive layouts.</p>
</div>

<div>
  <h2 style="color: #3498db;">Centering Content with Flexbox</h2>
  <p>You can easily center content horizontally and vertically within the display using CSS Flexbox. Let's explore different alignment scenarios:</p>
  
  <h3 style="color: #2ecc71;">1. Centering Content Horizontally and Vertically</h3>
  <p>To center content both horizontally and vertically, you can use the following CSS:</p>
  <pre>
    <code>
      body {
        display: <span style="color: #e74c3c;">flex</span>;
        justify-content: <span style="color: #e74c3c;">center</span>;
        align-items: <span style="color: #e74c3c;">center</span>;
        height: 100vh; /* Ensure full viewport height */
      }
    </code>
  </pre>
  
  <p>This will center content both horizontally and vertically within the display.</p>
  
  <h3 style="color: #2ecc71;">2. Other Alignment Scenarios</h3>
  <p>Here are examples for other alignment scenarios:</p>
  
  <ul>
    <li><strong>Top Left:</strong></li>
    <pre>
      <code>
        body {
          display: <span style="color: #e74c3c;">flex</span>;
          justify-content: <span style="color: #e74c3c;">flex-start</span>;
          align-items: <span style="color: #e74c3c;">flex-start</span>;
          height: 100vh; /* Ensure full viewport height */
        }
      </code>
    </pre>
    
    <li><strong>Top Right:</strong></li>
    <pre>
      <code>
        body {
          display: <span style="color: #e74c3c;">flex</span>;
          justify-content: <span style="color: #e74c3c;">flex-end</span>;
          align-items: <span style="color: #e74c3c;">flex-start</span>;
          height: 100vh; /* Ensure full viewport height */
        }
      </code>
    </pre>
    
    <li><strong>Bottom Left:</strong></li>
    <pre>
      <code>
        body {
          display: <span style="color: #e74c3c;">flex</span>;
          justify-content: <span style="color: #e74c3c;">flex-start</span>;
          align-items: <span style="color: #e74c3c;">flex-end</span>;
          height: 100vh; /* Ensure full viewport height */
        }
      </code>
    </pre>
    
    <li><strong>Bottom Right:</strong></li>
    <pre>
      <code>
        body {
          display: <span style="color: #e74c3c;">flex</span>;
          justify-content: <span style="color: #e74c3c;">flex-end</span>;
          align-items: <span style="color: #e74c3c;">flex-end</span>;
          height: 100vh; /* Ensure full viewport height */
        }
      </code>
    </pre>
  </ul>
  
  <p>With CSS Flexbox, you have the flexibility to align content in various positions within the display, allowing you to create versatile layouts.</p>
</div>

<div>
  <h2 style="color: #3498db;">Setting Limited Content in Each Row with Flexbox</h2>
  <p>In CSS Flexbox, you can control how content is distributed across multiple rows by setting a limit for the content in each row and allowing it to wrap to a new row if it exceeds the available space. Let's explore how to achieve this:</p>
  
  <h3 style="color: #2ecc71;">1. Setting Limited Content in Each Row</h3>
  <p>To set a limit for the content in each row, you can use the <code style="color: #e74c3c;">flex-basis</code> property along with the <code style="color: #e74c3c;">flex-wrap</code> property set to <code style="color: #e74c3c;">wrap</code>.</p>
  
  <pre>
    <code>
      .container {
        display: <span style="color: #e74c3c;">flex</span>;
        flex-wrap: <span style="color: #e74c3c;">wrap</span>;
      }
      
      .item {
        flex: <span style="color: #e74c3c;">1 0 200px</span>; /* flex-grow, flex-shrink, flex-basis */
        max-width: <span style="color: #e74c3c;">200px</span>; /* Limit content width */
        margin: <span style="color: #e74c3c;">10px</span>; /* Add margin between items */
      }
    </code>
  </pre>
  
  <p>This will ensure that each row contains content with a maximum width of 200 pixels and will wrap to a new row if the content exceeds the available space.</p>
  
  <h3 style="color: #2ecc71;">2. Example</h3>
  <p>Here's an example demonstrating content wrapping to new rows:</p>
  
  <div class="container" style="display: flex; flex-direction:row; flex-wrap: wrap; width:100%">
    <div class="item" style="width: 200px; margin: 10px; background-color: #3498db; color: #fff; text-align: center;">Item 1</div>
    <div class="item" style="width: 200px; margin: 10px; background-color: #2ecc71; color: #fff; text-align: center;">Item 2</div>
    <div class="item" style="width: 200px; margin: 10px; background-color: #e74c3c; color: #fff; text-align: center;">Item 3</div>
    <div class="item" style="width: 200px; margin: 10px; background-color: #9b59b6; color: #fff; text-align: center;">Item 5</div>
    <div class="item" style="width: 200px; margin: 10px; background-color: #9b59b6; color: #fff; text-align: center;">Item 5</div>
    <div class="item" style="width: 200px; margin: 10px; background-color: #f39c12; color: #fff; text-align: center;">Item 4</div>
    <div class="item" style="width: 200px; margin: 10px; background-color: red; color: #fff; text-align: center;">Item 4</div>
   </div>
  
  <p>With these techniques, you can create flexible layouts where content wraps to new rows as needed, ensuring a clean and organized display.</p>
</div>





`,
    contents: [
      {
        id: "flex_1",
        title: "Flex Box Properties",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fflex%20box%2F1.jpg?alt=media&token=e1482887-d779-4497-80b5-c98993bbc563",
        ],
      },
      {
        id: "flex_2",
        title: "Flex Box Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fflex%20box%2F2.jpg?alt=media&token=0040a6e6-1a7e-48b5-bc5d-8ef0539c7c4c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fflex%20box%2F3.jpg?alt=media&token=c4a740d7-92c2-4af2-bea1-2ef73d1e5224",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fflex%20box%2F4.jpg?alt=media&token=b46d1b3b-8ad9-4f9d-8c3a-e9bf2a0c6220",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fflex%20box%2F5.jpg?alt=media&token=28268b7a-8ae0-43d2-a2cd-efe2e7e0cf47",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fflex%20box%2F6.jpg?alt=media&token=35eeb3d4-fece-4241-9aeb-205d112c1d08",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fflex%20box%2F7.jpg?alt=media&token=7adb96e4-3ec7-4b13-85a8-8d8f4230537e",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fflex%20box%2F8.jpg?alt=media&token=7ea41ec2-2810-47d1-aa0f-01a7462cd071",
        ],
      },
    ],
  },
  {
    id: "cssGrid",
    title: "CSS Grid",
    about: `
    <div>
  <h2 style="color: #3498db;">Introduction to CSS Grid</h2>
  <p>
    CSS Grid Layout is a powerful tool for creating two-dimensional grid-based layouts in CSS. It allows you to create complex layouts with rows and columns, providing control over both the placement and alignment of elements.
  </p>

  <h3 style="color: #3498db;">What is CSS Grid?</h3>
  <p>
    CSS Grid is a layout system that allows you to create grids with rows and columns, similar to a spreadsheet. It provides a flexible and powerful way to arrange elements on a webpage.
  </p>

  <h3 style="color: #3498db;">Key Concepts</h3>
  <p>
    Before diving into CSS Grid, it's essential to understand some key concepts:
  </p>
  <ul>
    <li><strong>Grid Container:</strong> The parent element that contains grid items. You define a grid container by applying the <code>display: grid;</code> property.</li>
    <li><strong>Grid Item:</strong> The children of the grid container. These are the elements that participate in the grid layout.</li>
    <li><strong>Grid Line:</strong> The lines that define the boundaries of the grid cells. They can be horizontal or vertical and are numbered starting from 1.</li>
    <li><strong>Grid Cell:</strong> The intersection of a row and a column. It's the smallest unit in a grid layout.</li>
    <li><strong>Grid Area:</strong> A rectangular area of the grid defined by four grid lines. It's formed by merging multiple grid cells together.</li>
  </ul>

  <h3 style="color: #3498db;">Basic Properties</h3>
  <p>
    Now let's look at some basic properties used to create a CSS Grid layout:
  </p>
  <ul>
    <li><code>display: grid;</code>: Defines a grid container.</li>
    <li><code>grid-template-rows</code>: Specifies the size of each row in the grid.</li>
    <li><code>grid-template-columns</code>: Specifies the size of each column in the grid.</li>
    <li><code>grid-gap</code>: Specifies the gap (space) between grid items.</li>
  </ul>
</div>

<div>
  <h2 style="color: #3498db;">Understanding the "fr" Unit</h2>
  <p>
    In CSS Grid, the "fr" unit stands for "fractional unit" and is used to define flexible sizes within the grid layout. It allows you to distribute available space proportionally among grid tracks (rows or columns).
  </p>

  <h3 style="color: #3498db;">How Does it Work?</h3>
  <p>
    When you specify a size with the "fr" unit, the available space in the grid container is divided into fractions, and each track (row or column) receives a share of those fractions based on its proportion.
  </p>

  <h3 style="color: #3498db;">Example</h3>
  <p>
    Let's say you have a grid with two columns, where one column is set to <code>1fr</code> and the other is set to <code>2fr</code>. This means that the second column will receive twice as much space as the first column.
  </p>
  <pre style="background-color: #f1f1f1; padding: 10px;  overflow-x: auto; margin-bottom: 20px;">
    <code >
      .grid-container {
        display: grid;
        grid-template-columns: 1fr 2fr; /* First column takes 1 fraction, second column takes 2 fractions */
      }
    </code>
  </pre>

  <p>
    The "fr" unit is particularly useful for creating flexible layouts that adapt to different screen sizes and content lengths. It allows you to create grids where some tracks expand or shrink to accommodate content dynamically while maintaining the overall layout structure.
  </p>
</div>

  <div>
  <h2 style="color: #3498db;">Example 1: Simple Grid Layout</h2>
  <p>
    This example demonstrates a basic grid layout with two rows and three columns.
  </p>

  <div style="display: grid;grid-template-columns: repeat(3, 100px);grid-template-rows: repeat(2, 100px);gap: 10px;">
  <div style="background-color: #3498db;color: #fff;text-align: center;">Box 1</div>
  <div style="background-color: #3498db;color: #fff;text-align: center;">Box 2</div>
  <div style="background-color: #3498db;color: #fff;text-align: center;">Box 3</div>
  <div style="background-color: #3498db;color: #fff;text-align: center;">Box 4</div>
  <div style="background-color: #3498db;color: #fff;text-align: center;">Box 5</div>
  <div style="background-color: #3498db;color: #fff;text-align: center;">Box 6</div>
</div>

  <h3 style="color: #3498db;">HTML:</h3>
  <pre>
  <code>
    &lt;<span style="color: #61afef;">div</span> <span >class</span>=<span style="color: #98c379;">"grid-container"</span>&gt;
      &lt;<span style="color: #61afef;">div</span> <span >class</span>=<span style="color: #98c379;">"item"</span>&gt;<span >1</span>&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span> <span >class</span>=<span style="color: #98c379;">"item"</span>&gt;<span >2</span>&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span> <span >class</span>=<span style="color: #98c379;">"item"</span>&gt;<span >3</span>&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span> <span >class</span>=<span style="color: #98c379;">"item"</span>&gt;<span >4</span>&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span> <span >class</span>=<span style="color: #98c379;">"item"</span>&gt;<span >5</span>&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span> <span >class</span>=<span style="color: #98c379;">"item"</span>&gt;<span >6</span>&lt;/<span style="color: #61afef;">div</span>&gt;
    &lt;/<span style="color: #61afef;">div</span>&gt;
  </code>
</pre>

  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
  <code >
    <span style="color: #f07178;">.grid-container</span> {
      <span style="color: #c678dd;">display:</span> grid;
      <span style="color: #c678dd;">grid-template-columns:</span> repeat(<span style="color: #56b6c2;">3,</span> 100px);
      <span style="color: #c678dd;">grid-template-rows:</span> repeat(<span style="color: #56b6c2;">2,</span> 100px);
      <span style="color: #c678dd;">gap:</span> 10px;
    }
    
    <span style="color: #f07178;">.item</span> {
      <span style="color: #c678dd;">background-color:</span> #3498db;
      <span style="color: #c678dd;">color:</span> #fff;
      <span style="color: #c678dd;">padding:</span> 20px;
      <span style="color: #c678dd;">text-align:</span> center;
    }
  </code>
</pre>

  <p>
    In this example, we have a grid container with two rows and three columns. Each grid item has a fixed size of 100px by 100px, with a 10px gap between them. The background color is set to #3498db, and text color is white.
  </p>
</div>

<div>
  <h2 style="color: #3498db;">Example 2: Responsive Grid Layout</h2>
  <p>
    This example demonstrates a responsive grid layout with varying column widths based on screen size.
  </p>
  <div style="display: grid;grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));gap: 10px;">
    <div style="background-color: #f39c12;color: #fff;text-align: center;">Box 1</div>
    <div style="background-color: #0074d9;color: #fff;text-align: center;">Box 2</div>
    <div style="background-color: #2ecc71;color: #fff;text-align: center;">Box 3</div>
    <div style="background-color: #e74c3c;color: #fff;text-align: center;">Box 4</div>
    <div style="background-color: #9b59b6;color: #fff;text-align: center;">Box 5</div>
    <div style="background-color: #34495e;color: #fff;text-align: center;">Box 6</div>
  </div>
  <h3 style="color: #3498db;">HTML:</h3>
  <pre>
  <code >
    &lt;<span style="color: #61afef;">div</span> <span >class</span>=<span style="color: #98c379;">"grid-container"</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;Box 1/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;<span>Box 2</span>&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;Box 3<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;Box 4/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;Box 5/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;Box 6/<span style="color: #61afef;">div</span>&gt;
    &lt;/<span style="color: #61afef;">div</span>&gt;
  </code>
</pre>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
  <code >
    <span style="color: #f07178;">.grid-container</span> {
      <span style="color: #c678dd;">display:</span> grid;
      <span style="color: #c678dd;">grid-template-columns:</span> repeat(auto-fit, minmax(100px, 1fr));
      <span style="color: #c678dd;">gap:</span> 10px;
    }
  </code>
</pre>
<p>
<code>.grid-container</code> is a class selector targeting a container element.
<br>
<code>display: grid;</code> sets the display property of the container to grid, establishing a grid formatting context for its contents.
<br>
<code>grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));</code> defines the size and structure of grid columns. 
Here, <code>auto-fit</code> allows the grid to automatically adjust the number of columns based on available space, while <code>minmax(100px, 1fr)</code> sets the minimum width of each column to 100 pixels and allows them to grow to occupy available space equally.
<br>
<code>gap: 10px;</code> sets the gap (spacing) between grid items to 10 pixels.
</p>
</div>

<div>
  <h2 style="color: #3498db;">Example 3: Grid Template Areas</h2>
  <p>
    This example demonstrates the use of grid template areas to create a layout with defined areas for different content sections.
  </p>
  <div style="display: grid;grid-template-areas: 'header header' 'sidebar content' 'footer footer';grid-template-rows: auto 1fr auto;grid-template-columns: 200px 1fr;gap: 10px;">
    <div style="background-color: #f39c12;color: #fff;">Header</div>
    <div style="background-color: #0074d9;color: #fff;">Sidebar</div>
    <div style="background-color: #2ecc71;color: #fff;">Content</div>
    <div style="background-color: #e74c3c;color: #fff;">Footer</div>
  </div>
  <h3 style="color: #3498db;">HTML:</h3>
  <pre>
  <code >
    &lt;<span style="color: #61afef;">div</span> <span >style</span>=<span style="color: #98c379;">"display: grid;grid-template-areas: 'header header' 'sidebar content' 'footer footer';
              grid-template-rows: auto 1fr auto;grid-template-columns: 200px 1fr;gap: 10px;"</span>&gt;
      &lt;<span style="color: #61afef;">div</span> <span >style</span>=<span style="color: #98c379;">"background-color: #f39c12;color: #fff;"</span>&gt;<span >Header</span>&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span> <span >style</span>=<span style="color: #98c379;">"background-color: #0074d9;color: #fff;"</span>&gt;<span >Sidebar</span>&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span> <span >style</span>=<span style="color: #98c379;">"background-color: #2ecc71;color: #fff;"</span>&gt;<span >Content</span>&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span> <span >style</span>=<span style="color: #98c379;">"background-color: #e74c3c;color: #fff;"</span>&gt;<span >Footer</span>&lt;/<span style="color: #61afef;">div</span>&gt;
    &lt;/<span style="color: #61afef;">div</span>&gt;
  </code>
</pre>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
  <code >
    <span style="color: #f07178;">.grid-container</span> {
      <span style="color: #c678dd;">display:</span> grid;
      <span style="color: #c678dd;">grid-template-areas:</span> 'header header' 'sidebar content' 'footer footer';
      <span style="color: #c678dd;">grid-template-rows:</span> auto 1fr auto;
      <span style="color: #c678dd;">grid-template-columns:</span> 200px 1fr;
      <span style="color: #c678dd;">gap:</span> 10px;
    }
  </code>
</pre>
<p>
In this example, we have a grid container with three rows and two columns. The layout is defined using grid template areas, specifying areas for the header, sidebar, content, and footer. Each area's content is then placed accordingly within the grid.
</p>
<h3 style="color: #3498db;">Explanation:</h3>
<ul>
<li><code>display: grid;</code>: Sets the display property of the container to grid, establishing a grid formatting context for its contents.</li>
<li><code>grid-template-areas:</code>: Defines named grid areas, specifying the layout of the grid in terms of rows and columns.</li>
<li><code>grid-template-rows:</code>: Defines the size of each row in the grid. Here, 'auto 1fr auto' means the first and third rows will have their height determined by their content, while the middle row will take up available space.</li>
<li><code>grid-template-columns:</code>: Defines the size of each column in the grid. Here, '200px 1fr' means the first column will be 200 pixels wide, while the second column will take up the remaining available space.</li>
<li><code>gap:</code>: Sets the gap (spacing) between grid items to 10 pixels.</li>
</ul>
</div>

<div>
  <h2 style="color: #3498db;">Example 5: Grid Auto Placement</h2>
  <p>
    This example demonstrates grid auto placement, where grid items are automatically placed without explicit placement using grid-row and grid-column properties.
  </p>
  <div style="display: grid;grid-template-columns: repeat(3, 1fr);gap: 10px;">
    <div style="background-color: #f39c12;color: #fff;">Box 1</div>
    <div style="background-color: #0074d9;color: #fff;">Box 2</div>
    <div style="background-color: #2ecc71;color: #fff;">Box 3</div>
    <div style="background-color: #e74c3c;color: #fff;">Box 4</div>
    <div style="background-color: #9b59b6;color: #fff;">Box 5</div>
    <div style="background-color: #34495e;color: #fff;">Box 6</div>
  </div>
  <h3 style="color: #3498db;">HTML:</h3>
  <pre>
  <code >
    &lt;<span style="color: #61afef;">div</span> <span >style</span>=<span style="color: #98c379;">"display: grid;grid-template-columns: repeat(3, 1fr);gap: 10px;"</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;Box 1&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;<span >Box 2</span>&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;Box 3&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;Box 4&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;Box 5&lt;/<span style="color: #61afef;">div</span>&gt;
      &lt;<span style="color: #61afef;">div</span>&gt;Box 6&lt;/<span style="color: #61afef;">div</span>&gt;
    &lt;/<span style="color: #61afef;">div</span>&gt;
  </code>
</pre>
  <h3 style="color: #3498db;">CSS:</h3>
 <pre>
  <code >
    <span style="color: #f07178;">.grid-container</span> {
      <span style="color: #c678dd;">display:</span> grid;
      <span style="color: #c678dd;">grid-template-columns:</span> repeat(3, 1fr);
      <span style="color: #c678dd;">gap:</span> 10px;
    }
  </code>
</pre>
<p>
<code>.grid-container</code> is a class selector targeting a container element.
<br>
<code>display: grid;</code> sets the display property of the container to grid, establishing a grid formatting context for its contents.
<br>
<code>grid-template-columns:</code> defines the size and structure of grid columns.
<br>
<code>repeat(3, 1fr)</code> specifies that the grid should have three columns with equal width.
<br>
<code>gap:</code> sets the gap (spacing) between grid items.
</p>
</div>
`,
    contents: [
      {
        id: "cssGrid_1",
        title: "Grid Properties",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fgrid%2F1.jpg?alt=media&token=23e94402-312e-4914-9c66-b8ac06fd557e",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fgrid%2F2.jpg?alt=media&token=7559e05c-b7aa-46ba-81e6-988ad0bcbae7",
        ],
      },
      {
        id: "cssGrid_2",
        title: "flex vs grid",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fgrid%2Fflex%20vs%20grid%2F1.jpg?alt=media&token=06868c00-e593-462f-8421-50301a57ebb1",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fgrid%2Fflex%20vs%20grid%2F2.jpg?alt=media&token=6b2102ba-1f1a-49ba-b5f6-08238988a274",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fgrid%2Fflex%20vs%20grid%2F3.jpg?alt=media&token=e36d6037-945a-4c10-be54-5722b84263af",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fgrid%2Fflex%20vs%20grid%2F4.jpg?alt=media&token=6745e127-039d-4c99-8145-bf36604d9e57",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fcss%2Fgrid%2Fflex%20vs%20grid%2F5.jpg?alt=media&token=0755d77a-084e-497e-8b6f-571d4f6ce6d8",
        ],
      },
    ],
  },
  {
    id: "pseudoClasses",
    title: "CSS Pseudo Classes",
    about: `
    <div>
        <h2 style="color: #3498db;">Introduction to CSS Pseudo-classes</h2>
        <p>
          Pseudo-classes are used to style elements based on their state or position in relation to user interaction.
        </p>
        <h3 style="color: #3498db;">Syntax</h3>
        <p>
          Pseudo-classes are denoted by a colon (:) followed by the name of the pseudo-class. The syntax is as follows:
        </p>
   <pre>
    <code style="color: #f07178;">selector:pseudo-class {</code>
    <code style="color: #61afef;">  /* CSS properties */</code>
    <code style="color: #f07178;">}</code></pre>
        <p>
          Here, <code>selector</code> is the CSS selector for the element you want to style, and <code>pseudo-class</code> is the name of the pseudo-class you want to style.
        </p>
      </div>`,
    contents: [
      {
        id: "pseudoClasses_1",
        title: "Overview",
        about: `    
<div>
  <h2 style="color: #3498db;">Understanding CSS Pseudo-classes</h2>
  <h3 style="color: #3498db;">1. :hover</h3>
  <p>
    The :hover pseudo-class applies styles when an element is being hovered over by the mouse pointer.
  </p>
 <pre>
    <code style="color: #f07178;">button:hover {</code>
    <code style="color: #61afef;">  opacity:</code> <code style="color: #e5c07b;">0.9</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <button style="background-color:rgb(50,50,250);color:white">Hover over me</button>
  <br>
  <h3 style="color: #3498db;">2. :nth-child()</h3>
  <p>
    The :nth-child() pseudo-class selects elements based on their position within a parent element.
  </p>
 <pre>
    <code style="color: #f07178;">ul li:nth-child(2) {</code>
    <code style="color: #61afef;">  background-color:</code> <code style="color: #e5c07b;">#1e1e1e;</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #e5c07b;">white;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <ul>
    <li>Item 1</li>
    <li style="background-color: #1e1e1e; color:white">Item 2</li>
    <li>Item 3</li>
    <li>Item 5</li>
  </ul>
  <br>
  <h3 style="color: #3498db;">3. :focus</h3>
  <p>
    The :focus pseudo-class applies styles to an element when it is focused, usually through keyboard navigation.
  </p>
 <pre>
    <code style="color: #f07178;">input:focus {</code>
    <code style="color: #61afef;">  border:</code> <code style="color: #98c379;">2px solid black;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <input type="text" placeholder="Focus here">
  </br>
  <h3 style="color: #3498db;">4. :first-child</h3>
  <p>
    The :first-child pseudo-class selects elements that are the first child of their parent element.
  </p>
 <pre>
    <code style="color: #f07178;">ul li:first-child {</code>
    <code style="color: #61afef;">  font-weight:</code> <code style="color: #98c379;">bold;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <ul>
    <li style="font-weight:bold">First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
  <br>
  <h3 style="color: #3498db;">5. :last-child</h3>
  <p>
    The :last-child pseudo-class selects elements that are the last child of their parent element.
  </p>
 <pre>
    <code style="color: #f07178;">ul li:last-child {</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #e74c3c;">#e74c3c;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <ul>
    <li>First item</li>
    <li>Second item</li>
    <li style="color:#e74c3c">Last item</li>
  </ul>
  <br>
  <h3 style="color: #3498db;">6. :not()</h3>
  <p>
    The :not() pseudo-class selects elements that do not match a given selector.
  </p>
  <p>In Below example ".special" is a class name provided in html for an element </p>
 <pre>
    <code style="color: #f07178;">p:not(.special) {</code>
    <code style="color: #61afef;">  font-style:</code> <code style="color: #d19a66;">italic;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <p style="font-style:italic">This paragraph is special.</p>
  <p>This paragraph is not special.</p>
  <br>
  <h3 style="color: #3498db;">7. :nth-child()</h3>
  <p>
    The :nth-child() pseudo-class selects elements based on their position in a group of siblings.
  </p>
  <p>
    This example will select the even childs(li) of the parent element (ul) irrespective of the element type
  </p>
 <pre>
    <code style="color: #f07178;">ul li:nth-child(2n) {</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #d19a66;">#d19a66;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <ul>
    <li>1: item</li>
    <span style="color:#d19a66">2: item (this is a span element not an li)</span>
    <li>3: item</li>
    <li style="color:#d19a66">4: item</li>
    <li>5: item</li>
  </ul>
  <br>
  <h3 style="color: #3498db;">8. :nth-last-child()</h3>
  <p>
    The :nth-last-child() pseudo-class selects elements based on their position in a group of siblings, counting from the last child.
  </p>
  <p>
    This example will select the second last child element(li) of the parent element (ul).
  </p>
 <pre>
    <code style="color: #f07178;">ul li:nth-last-child(2) {</code>
    <code style="color: #61afef;">  text-decoration:</code> <code style="color: #56b6c2;">underline;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <ul>
    <li>First item</li>
    <li>Second item</li>
    <li style="text-decoration:underline">Third item</li>
    <li>Fourth item</li>
  </ul>
  <br>
  <h3 style="color: #3498db;">9. :nth-of-type()</h3>
  <p>
    The :nth-of-type() pseudo-class selects elements based on their type and position among siblings of the same type.
  </p>
 <pre>
  <code style="color: #f07178;">p:nth-of-type(odd) {</code>
  <code style="color: #61afef;">  background-color:</code> <code >#f39c12;</code>
  <code style="color: #f07178;">}</code>
  </pre>
  <p style=" background-color:#f39c12">1: paragraph</p>
  <p>2: paragraph</p>
  <span>3:This is a span, and this will not be considered even though it's position is odd, as it is not of type paragraph (p)</span>
  <p>4: paragraph</p>
  <p style=" background-color:#f39c12">5: paragraph</p>
  </br>
  
  <p>
    But nth-child() selector will work like below
  </p>
 <pre>
    <code style="color: #f07178;">p:nth-child(odd) {</code>
    <code style="color: #61afef;">  background-color:</code> <code style="color: #e5c07b;">#1e1e1e;</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #e5c07b;">white;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <p style=" background-color:#f39c12">1: paragraph</p>
  <p>2: paragraph</p>
  <span style=" background-color:#f39c12">3:This is a span, and this will be considered even though it is not of type paragraph (p)</span>
  <p>4: paragraph</p>
  <p style=" background-color:#f39c12">5: paragraph</p>

  </br>
  <p>This is the difference between nth-of-type() and nth-child()</p>
</div>
`,
      },
    ],
  },
  {
    id: "pseudoElements",
    title: "Pseudo Elements",
    about: `
    <div>
  <h2 style="color: #3498db;">Introduction to CSS Pseudo-elements</h2>
  <p>
    Pseudo-elements are used to style certain parts of an element's content. They allow you to style elements based on their position in relation to the content.
  </p>
  <h3 style="color: #3498db;">Syntax</h3>
  <p>
    Pseudo-elements are denoted by two colons (::) followed by the name of the pseudo-element. The syntax is as follows:
  </p>
 <pre>
    <code style="color: #f07178;">selector::pseudo-element {</code>
    <code style="color: #61afef;">  /* CSS properties */</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <p>
    Here, <code>selector</code> is the CSS selector for the element you want to style, and <code>pseudo-element</code> is the name of the pseudo-element you want to style.
  </p>
</div>`,
    contents: [
      {
        id: "pseudoElements_1",
        title: "Overview",
        about: `
<div>
  <h2 style="color: #3498db;">Understanding CSS Pseudo-elements</h2>
  <h3 style="color: #3498db;">1. ::before</h3>
  <p>
    The ::before pseudo-element allows you to insert content before the content of an element.
  </p>
 <pre>
    <code style="color: #f07178;">p::before {</code>
    <code style="color: #61afef;">  content:</code> <code style="color: #98c379;">"🌟";</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <p>🌟This is a paragraph.</p>
  <h3 style="color: #3498db;">2. ::after</h3>
  <p>
    The ::after pseudo-element allows you to insert content after the content of an element.
  </p>
 <pre>
    <code style="color: #f07178;">p::after {</code>
    <code style="color: #61afef;">  content:</code> <code style="color: #98c379;">"🚀";</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <p>This is another paragraph.🚀</p>
  <h3 style="color: #3498db;">3. ::first-letter</h3>
  <p>
    The ::first-letter pseudo-element allows you to style the first letter of an element.
  </p>
 <pre>
    <code style="color: #f07178;">p::first-letter {</code>
    <code style="color: #61afef;">  font-size:</code> <code style="color: #d19a66;">2em;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <p><span style="font-size:2em">T</span>his is yet another paragraph.</p>
  <br>
  <h3 style="color: #3498db;">4. ::first-line</h3>
  <p>
    The ::first-line pseudo-element allows you to style the first line of text in an element.
  </p>
 <pre>
    <code style="color: #f07178;">p::first-line {</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #d19a66;">#ff6347;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <p style="color:#ff6347">This is a paragraph's first line</p>
  <p>This is second line.</p>
  <br>
  <h3 style="color: #3498db;">5. ::selection</h3>
  <p>
    The ::selection pseudo-element allows you to style the portion of text selected by the user.
  </p>
 <pre>
    <code style="color: #f07178;">::selection {</code>
    <code style="color: #61afef;">  background:</code> <code style="color: #d19a66;">#3498db;</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #d19a66;">#fff;</code>
    <code style="color: #f07178;">}</code>
  </pre>
</div>
`,
      },
    ],
  },
  {
    id: "combinators",
    title: "CSS Combinators",
    contents: [
      {
        id: "combinators_1",
        title: "Overview",
        about: `
        <div>
  <h2 style="color: #3498db;">Understanding CSS Combinators</h2>
  <p>
    CSS combinators are symbols used to combine two or more selectors in order to target specific elements in a document tree. Below are the most common CSS combinators with examples and explanations.
  </p>
  <h3 style="color: #004dca;">1. Descendant Selector (Whitespace)</h3>
  <p>
    The descendant selector, denoted by a whitespace character, selects all elements that are descendants of a specified element.
  </p>
 <pre>
    <code style="color: #f07178;">div p {</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #e5c07b;">#004dca;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <div style="background-color: #f39c12; color: #fff; padding: 10px;">
      <p style="color:#004dca">This is a paragraph inside a div.</p>
  </div>
  </br></br>
  <h3 style="color: #004dca;">2. Child Selector (>)</h3>
  <p>
    The child selector, denoted by the greater than symbol (>), selects all direct children of a specified element.
  </p>
 <pre>
    <code style="color: #f07178;">div > p {</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #e5c07b;">#004dca;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <div style="background-color: #ffd28a; color: #fff; padding: 10px;border:2px solid black">
  This is the main div
    <div style="border:2px solid black; background-color:grey">
    This is the inner div
      <p>This is a paragraph inside the inner div. (This is not targeted)</p>
    </div>
    <p style="color:#004dca">This is a paragraph 1 outside the inner div and inside the main div.(This is targeted)</p>
    <p style="color:#004dca">This is a paragraph 2 outside the inner div and inside the main div.(This is targeted)</p>
  </div>
  </br></br>
  <h3 style="color: #004dca;">3. Adjacent Sibling Selector (+)</h3>
  <p>
    The adjacent sibling selector, denoted by the plus symbol (+), selects the element that is immediately preceded by a specified element.
  </p>
 <pre>
    <code style="color: #f07178;">h2 + p {</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #e5c07b;">#004dca;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <div style="background-color: #f39c12; color: #fff; padding: 10px;">
    <h2>Title</h2>
    <p style="color:#004dca">This paragraph 1 is targeted.</p>
    <p>This paragraph 2 is not targeted.</p>
  </div>
  </br></br>
  <h3 style="color: #004dca;">4. General Sibling Selector (~)</h3>
  <p>
    The general sibling selector, denoted by the tilde symbol (~), selects all elements that are siblings of a specified element.
    This symbol selects all the elements as denoted, which are as long as comes after the specified element.
  </p>
 <pre>
    <code style="color: #f07178;">h2 ~ p {</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #e5c07b;">#004dca;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <p>In this example even though the second Paragraph is inside another div, this selecor selects the 2nd paragraph as well because this paragraph is anyways comes after the h2 tag.
  <div style="background-color: #ffd28a; color: #fff; padding: 10px; border:2px solid black">
    <h2>Title</h2>
    <p style="color:#004dca">This paragraph is targeted.</p>
    <div style="2px solid black;background-color:grey">Another div
    <p style="color:#004dca">This paragraph is inside the inner div (This also targeted).</p>
    </div>
  </div>
  </br></br>
  <h3 style="color: #004dca;">5. Universal Selector (*)</h3>
  <p>
    The universal selector, denoted by an asterisk (*), selects all elements in a document.
  </p>
 <pre>
    <code style="color: #f07178;">* {</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #e5c07b;">#004dca;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <div style="background-color: #f39c12; color: #fff; padding: 10px;">
    <p style="color:#004dca">This is a paragraph is targetted.</p>
    <h2 style="color:#004dca">This is a heading is targetted.</h2>
    <div style="color:#004dca">This is a div is targetted.</div>
    <span style="color:#004dca">This is a span is targetted.</span>
  </div>
  </br></br>
  <h3 style="color: #004dca;">6. Grouping Selector (,)</h3>
  <p>
    The grouping selector allows you to group multiple selectors together to apply the same styles to them.
  </p>
 <pre>
    <code style="color: #f07178;">h1, h2, h3 {</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #e5c07b;">#004dca;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <h1 style="color:#004dca">This is a heading 1 is targetted</h1>
  <h2 style="color:#004dca">This is a heading 2 is targetted</h2>
  <h3 style="color:#004dca">This is a heading 3 is targetted</h3>
  </br></br>
  <h3 style="color: #004dca;">7. Child and Adjacent Sibling Combination</h3>
  <p>
    You can also combine different combinators for more specific targeting.
  </p>
 <pre>
    <code style="color: #f07178;">div > p + span {</code>
    <code style="color: #61afef;">  color:</code> <code style="color: #e5c07b;">#004dca;</code>
    <code style="color: #f07178;">}</code>
  </pre>
  <div style="background-color: #ffd28a; color: #fff; padding: 10px;">
    <div>
      <p>This is a paragraph is not targetted</p>
      <span style="color:#004dca">This is a span is targetted.</span>
    </div>
    <p>This paragraph is not targeted.</p>
    <span>This span is not targeted.</span>
  </div>
</div>



        `,
      },
    ],
  },
  {
    id: "responsiveWebDesign",
    title: "Responsive Web Designs",
    about: `
    
    <div>
  <h2 style="color: #3498db;">CSS Media Queries</h2>
  <p>
    This example demonstrates the use of media queries to apply different styles based on the device's screen size.
  </p>

    <h3 style="color: #3498db;">Media Queries</h3>
    <p>Media queries allow you to apply different CSS styles based on the characteristics of the device, such as its screen width or height.</p>
    <p>For example, you can use media queries to apply specific styles for mobile devices, tablets, or desktops.</p>
    <h3 style="color: #3498db;">Available Media Features</h3>
    <p>Media queries support various features that enable you to target specific device characteristics. Some common media features include:</p>
    <ul >
      <li><code>width</code>: Specifies the width of the viewport.</li>
      <li><code>height</code>: Specifies the height of the viewport.</li>
      <li><code>orientation</code>: Specifies the orientation of the device (landscape or portrait).</li>
      <li><code>aspect-ratio</code>: Specifies the aspect ratio of the viewport.</li>
      <li><code>resolution</code>: Specifies the resolution of the device.</li>
    </ul>
    <h3 style="color: #3498db;">Example 1: Max Width</h3>
    <p>This example applies styles when the viewport width is less than or equal to 600 pixels.</p>
    <pre>
    <code >
      @<span style="color: #98c379;">media</span> screen and (<span style="color: #c678dd;">max-width:</span> 600px) {
        <span style="color: #61afef;">body</span> {
          <span style="color: #c678dd;">background-color:</span> lightblue;
        }
      }
    </code>
  </pre>
    <h3 style="color: #3498db;">Example 2: Min Width</h3>
    <p>This example applies styles when the viewport width is greater than or equal to 768 pixels.</p>
    <pre>
    <code >
      @<span style="color: #98c379;">media</span> screen and (<span style="color: #c678dd;">min-width:</span> 768px) {
        <span style="color: #61afef;">body</span> {
          <span style="color: #c678dd;">font-size:</span> 20px;
        }
      }
    </code>
  </pre>
    <h3 style="color: #3498db;">Example 3: Min and Max Width</h3>
    <p>This example applies styles when the viewport width is between 600 and 900 pixels.</p>
    <pre>
  <code >
    @<span style="color: #98c379;">media</span> screen and (<span style="color: #c678dd;">min-width:</span> 600px) and (<span style="color: #c678dd;">max-width:</span> 900px) {
      <span style="color: #61afef;">body</span> {
        <span style="color: #c678dd;">background-color:</span> lightgreen;
      }
    }
  </code>
</pre>
  <h3 style="color: #3498db;">Explanation:</h3>
  <ul >
    <li>Media queries allow you to conditionally apply CSS styles based on the characteristics of the viewport.</li>
    <li>Examples 1 and 2 demonstrate the use of <code>max-width</code> and <code>min-width</code> to target specific viewport widths.</li>
    <li>Example 3 combines <code>min-width</code> and <code>max-width</code> to target a range of viewport widths.</li>
  </ul>

  <h3 style="color: #3498db;">More CSS Media Queries Examples</h3>
  <p>
    Here are some additional examples demonstrating various functionalities and features of CSS media queries.
  </p>

    <h3 style="color: #3498db;">Example 1: Orientation</h3>
    <p>This example applies styles when the device is in portrait orientation.</p>
    <pre>
  <code >
    @<span style="color: #98c379;">media</span> (<span style="color: #c678dd;">orientation:</span> portrait) {
      <span style="color: #61afef;">body</span> {
        <span style="color: #c678dd;">background-color:</span> #ffcccc;
      }
    }
  </code>
</pre>
    <h3 style="color: #3498db;">Example 2: Aspect Ratio</h3>
    <p>This example applies styles when the aspect ratio is 16:9.</p>
    <pre>
    <code >
      @<span style="color: #98c379;">media</span> (<span style="color: #c678dd;">aspect-ratio:</span> 16/9) {
        <span style="color: #61afef;">body</span> {
          <span style="color: #c678dd;">font-family:</span> 'Arial', sans-serif;
        }
      }
    </code>
  </pre>
    <h3 style="color: #3498db;">Example 3: Light Level</h3>
    <p>This example applies styles when the ambient light level is dim.</p>
    <pre>
  <code >
    @<span style="color: #98c379;">media</span> (<span style="color: #c678dd;">light-level:</span> dim) {
      <span style="color: #61afef;">body</span> {
        <span style="color: #c678dd;">color:</span> #333;
      }
    }
  </code>
</pre>
  <h3 style="color: #3498db;">Explanation:</h3>
  <ul >
    <li>Media queries can target various device characteristics beyond just viewport width and height.</li>
    <li>Example 1 demonstrates the use of the orientation feature to target devices in portrait mode.</li>
    <li>Example 2 targets devices with a specific aspect ratio, such as widescreen displays.</li>
    <li>Example 3 shows how media queries can be used to adjust styles based on ambient light conditions.</li>
  </ul>
    <h3 style="color: #3498db;">Example 4: Pointer</h3>
    <p>This example applies styles when the primary input mechanism is a coarse pointer like a finger.</p>
    <pre>
    <code >
      @<span style="color: #98c379;">media</span> (<span style="color: #c678dd;">pointer:</span> coarse) {
        <span style="color: #61afef;">.menu</span> {
          <span style="color: #c678dd;">font-size:</span> 18px;
        }
      }
    </code>
  </pre>
    <h3 style="color: #3498db;">Example 5: Hover</h3>
    <p>This example applies styles when the primary input mechanism can hover over elements.</p>
    <pre>
    <code >
      @<span style="color: #98c379;">media</span> (<span style="color: #c678dd;">hover:</span> hover) {
        <span style="color: #61afef;">.btn</span> {
          <span style="color: #c678dd;">background-color:</span> #007bff;
          <span style="color: #c678dd;">color:</span> #fff;
        }
      }
    </code>
  </pre>
    <h3 style="color: #3498db;">Example 6: Print</h3>
    <p>This example applies styles when the document is being printed.</p>
    <pre>
    <code >
      @<span style="color: #98c379;">media</span> print {
        <span style="color: #61afef;">.header</span>, <span style="color: #61afef;">.footer</span> {
          <span style="color: #c678dd;">display:</span> none;
        }
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">Explanation:</h3>
  <ul >
    <li>Media queries can target specific input mechanisms, such as touchscreens or mice, using the pointer feature.</li>
    <li>The hover feature allows media queries to apply styles based on whether the primary input mechanism can hover over elements.</li>
    <li>Media queries can also be used to style documents specifically for print using the print feature.</li>
  </ul>
  
</div>

`,
    contents: [
      {
        id: "responsiveWebDesign_1",
        title: "Media Queries",
      },
    ],
  },
  {
    id: "gradients",
    title: "CSS Grdaients",
    about: `
    <div>
  <h2 style="color: #3498db;">CSS Gradients: Introduction and Properties</h2>
  <p>
    CSS gradients allow you to smoothly transition between multiple colors, creating visually appealing backgrounds or decorations.
  </p>
</div>
`,
    contents: [
      {
        id: "gradients_1",
        title: "Gradient Types",
        about: `
        <div>
        <h3 style="color: #3498db;">1) Linear Gradient</h3>
        <p>
          A linear gradient transitions colors along a straight line.
        </p>
        <p>Example:</p>
        <div style="background-image: linear-gradient(to right, #ff5733, #f7dc6f, #92a8d1); height: 100px; width: 100%; margin-bottom: 20px;"></div>
<pre>
  <code>
    &lt;div 
      <span style="color: #ff5733;">style</span>="<span style="color: #92a8d1;">
      background-image</span>: <span style="color: #f7dc6f;">
      linear-gradient</span>(to right, <span style="color: #ff5733;">#ff5733</span>, 
                    <span style="color: #f7dc6f;">#f7dc6f</span>, <span style="color: #92a8d1;">#92a8d1</span>);
      <span style="color: #ff5733;">height</span>: <span style="color: #92a8d1;">100px</span>;<span style="color: #ff5733;">width</span>:<span style="color: #92a8d1;">100%</span>;
      <span style="color: #ff5733;">margin-bottom</span>: <span style="color: #92a8d1;">20px</span>;"&gt;
    &lt;/div&gt;
  </code>
</pre>
<h3 style="color: #3498db;">Syntax:</h3>
       <pre>
          <code >selector {</code>
          <code style="color: #f07178;">  background-image: linear-gradient</code><span style="color: #98c379;">(direction,</span> <span style="color: #98c379;">color-stop1,</span> <span style="color: #98c379;">color-stop2,...,)</span>;
          <code >}</code>
        </pre>
        <p>
          Here, <code>direction</code> defines the direction of the gradient, and <code>color-stop</code> specifies the color stops along the gradient line.
        </p>
        <br>
        <h3 style="color: #3498db;">2) Radial Gradient</h3>
        <p>
          A radial gradient transitions colors outward from a defined center point.
        </p>
        <p>Example:</p>
        <div style="background-image: radial-gradient(circle, #ff5733, #f7dc6f, #92a8d1); height: 100px; width: 100%; margin-bottom: 20px;"></div>
<pre>
  <code>
    &lt;div 
      <span style="color: #ff5733;">style</span>="<span style="color: #92a8d1;">background-image</span>: <span style="color: #f7dc6f;">radial-gradient</span>(circle, <span style="color: #ff5733;">#ff5733</span>, <span style="color: #f7dc6f;">#f7dc6f</span>, <span style="color: #92a8d1;">#92a8d1</span>); <span style="color: #ff5733;">height</span>: <span style="color: #92a8d1;">100px</span>; <span style="color: #ff5733;">width</span>: <span style="color: #92a8d1;">100%</span>; <span style="color: #ff5733;">margin-bottom</span>: <span style="color: #92a8d1;">20px</span>;"&gt;
    &lt;/div&gt;
  </code>
</pre>
<h3 style="color: #3498db;">Syntax:</h3>
       <pre>
          <code >selector {</code>
          <code style="color: #f07178;">  background-image: radial-gradient</code><span style="color: #98c379;">(shape size,</span> <span style="color: #98c379;">color-stop1,</span> <span style="color: #98c379;">color-stop2,...,)</span>;
          <code >}</code>
        </pre>
        <p>
          In radial gradients, <code>shape</code> defines the shape of the gradient, and <code>size</code> determines the size of the shape.
        </p>
        <br>

        <h3 style="color: #3498db;">3) Repeating Gradients</h3>
  <p>
    Repeating gradients allow you to repeat a gradient pattern instead of creating a single gradient.
  </p>
  <br>
  <h3 style="color: #3498db;">Repeating Linear Gradient</h3>
  <p>Example:<p>
  <div style="background-image: repeating-linear-gradient(to right, #ff5733, #f7dc6f 20%, #92a8d1 30%); height: 100px; width: 100%; margin-bottom: 20px;"></div>
<pre>
<code>
&lt;div <span style="color: #ff5733;">style</span>="<span style="color: #92a8d1;">
background-image</span>: <span style="color: #f7dc6f;">repeating-linear-gradient</span>(to right, <span style="color: #ff5733;">#ff5733</span>, <span style="color: #f7dc6f;">#f7dc6f</span> 20%, <span style="color: #92a8d1;">#92a8d1</span> 30%);
<span style="color: #ff5733;">height</span>: <span style="color: #92a8d1;">100px</span>;<span style="color: #ff5733;">width</span>: <span style="color: #92a8d1;">100%</span>; <span style="color: #ff5733;">margin-bottom</span>: <span style="color: #92a8d1;">20px</span>;"&gt;&lt;/div&gt;
</code>
</pre>
<h3 style="color: #3498db;">Syntax:</h3>
 <pre>
    <code >selector {</code>
    <code style="color: #f07178;">  background-image:repeating-linear-gradient</code><span style="color: #98c379;">(direction,</span> <span style="color: #98c379;">color-stop1,</span> <span style="color: #98c379;">color-stop2,...)</span>;
    <code >}</code>
  </pre>
  <p>
    The repeating-linear-gradient function works similarly to linear-gradient but repeats the gradient pattern indefinitely.
  </p>
  <br>
  <h3 style="color: #3498db;">4) Repeating Radial Gradient</h3>
  <p>Example:</p>
  <div style="background-image: repeating-radial-gradient(circle, #ff5733, #f7dc6f 20%, #92a8d1 30%); height: 100px; width: 100%; margin-bottom: 20px;"></div>
  <pre>
  <code>
  &lt;div <span style="color: #ff5733;">style</span>="<span style="color: #92a8d1;">
  background-image</span>: <span style="color: #f7dc6f;">repeating-radial-gradient</span>(circle, <span style="color: #ff5733;">#ff5733</span>, <span style="color: #f7dc6f;">#f7dc6f</span> 20%, <span style="color: #92a8d1;">#92a8d1</span> 30%); <span style="color: #ff5733;">height</span>: <span style="color: #92a8d1;">100px</span>; <span style="color: #ff5733;">width</span>: <span style="color: #92a8d1;">100%</span>; <span style="color: #ff5733;">margin-bottom</span>: <span style="color: #92a8d1;">20px</span>;"&gt;&lt;/div&gt;
  </code>
  </pre>

  <h3 style="color: #3498db;">Syntax:</h3>
 <pre>
    <code >selector {</code>
    <code style="color: #f07178;">  background-image: repeating-radial-gradient</code><span style="color: #98c379;">(shape size,</span> <span style="color: #98c379;">color-stop1,</span> <span style="color: #98c379;">color-stop2,...)</span>);
    <code >}</code>
  </pre>
  <p>
    The repeating-radial-gradient function repeats the radial gradient pattern indefinitely.
  </p>
 </div>`,
      },
    ],
  },
  {
    id: "mathFunctions",
    title: "Math Functions",
    about: ` 
    <h3 style="color: #fff;">CSS Math Functions</h3>
    <p style="color: #fff;">
      CSS math functions allow you to perform mathematical operations within CSS property values.
    </p>`,
    contents: [
      {
        id: "mathFunctions_1",
        title: "Overview",
        about: `<div>
        <h3 style="color: #3498db;">calc()</h3>
        <p>
          The <code>calc()</code> function performs mathematical calculations to determine property values.
        </p>
        <h5 style="color: #3498db;">Example:</h5>
        <pre>
          <code >selector {</code>
          <code style="color: #f07178;">  width:</code> calc(50% - 20px);
          <code >}</code>
        </pre>
        <p>
          In this example, the width of the element is calculated as 50% of its container's width minus 20 pixels.
        </p>
        <h3 style="color: #3498db;">min()</h3>
        <p>
          The <code>min()</code> function returns the smallest value from a list of comma-separated expressions.
        </p>
        <h5 style="color: #3498db;">Example:</h5>
        <pre>
          <code >selector {</code>
          <code style="color: #f07178;">  width:</code> min(100px, 50%);
          <code >}</code>
        </pre>
        <p>
          In this example, the width of the element is set to the minimum value between 100 pixels and 50% of its container's width.
        </p>
        <h3 style="color: #3498db;">max()</h3>
        <p>
          The <code>max()</code> function returns the largest value from a list of comma-separated expressions.
        </p>
        <h5 style="color: #3498db;">Example:</h5>
        <pre style="overflow-x: auto; margin-bottom: 20px;">
          <code >selector {</code>
          <code style="color: #f07178;">  width:</code> max(200px, 50%);
          <code >}</code>
        </pre>
        <p>
          In this example, the width of the element is set to the maximum value between 200 pixels and 50% of its container's width.
        </p>
      </div>
      `,
      },
    ],
  },
  {
    id: "cssAttributeSelector",
    title: "Attribute Selector",
    contents: [
      {
        id: "cssAttributeSelector_1",
        title: "Attribute Selector Overview",
        about: `
        <div>
  <h3 style="color: #3498db;">CSS Attribute Selector</h3>
  <p>
    The attribute selector in CSS allows you to target elements based on the presence or value of their attributes. It is denoted by square brackets <code>[]</code> and can be used in various ways.
  </p>
  <p>
    Here's an example demonstrating the use of the attribute selector:
  </p>
 <pre>
    <code >
      /* Selects all &lt;a&gt; elements with a title attribute */
      a[title] {
        color: #3498db;
        text-decoration: none;
      }
      
      /* Selects all &lt;input&gt; elements with a type attribute set to "text" */
      input[type="text"] {
        border: 1px solid #3498db;
        padding: 5px;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">Explanation</h3>
  <ul >
    <li><strong>a[title]:</strong> This selector targets all <code>&lt;a&gt;</code> elements that have a <code>title</code> attribute.</li>
    <li><strong>input[type="text"]:</strong> This selector targets all <code>&lt;input&gt;</code> elements with a <code>type</code> attribute set to "text".</li>
  </ul>
  <p>
    The attribute selector is useful for styling elements based on specific attribute conditions, allowing for more precise targeting in CSS.
  </p>

  <p>
    In addition to targeting elements based on the presence of attributes, attribute selectors can also match specific attribute values and even partial values using various operators.
  </p>
  <p>
    Here are some examples of attribute selectors with different operators:
  </p>
 <pre>
    <code >
      /* Selects all &lt;a&gt; elements with a href attribute starting with "https://" */
      a[href^="https://"] {
        color: #3498db;
        text-decoration: none;
      }
      
      /* Selects all &lt;a&gt; elements with a href attribute containing "example.com" */
      a[href*="example.com"] {
        color: #3498db;
        text-decoration: none;
      }
      
      /* Selects all &lt;a&gt; elements with a href attribute ending with ".pdf" */
      a[href$=".pdf"] {
        color: #3498db;
        text-decoration: none;
      }
    </code>
  </pre>
  <h3 style="color: #3498db;">Explanation</h3>
  <ul >
    <li><strong>a[href^="https://"]:</strong> This selector targets all <code>&lt;a&gt;</code> elements with an <code>href</code> attribute that starts with "https://".</li>
    <li><strong>a[href*="example.com"]:</strong> This selector targets all <code>&lt;a&gt;</code> elements with an <code>href</code> attribute containing "example.com" anywhere within its value.</li>
    <li><strong>a[href$=".pdf"]:</strong> This selector targets all <code>&lt;a&gt;</code> elements with an <code>href</code> attribute that ends with ".pdf".</li>
  </ul>
  <p>
    Attribute selectors with operators provide more flexibility in selecting and styling elements based on specific attribute conditions.
  </p>
</div>

<div>
  <h3 style="color: #3498db;">CSS Input Attribute Selector</h3>
  <p>
    Input attribute selectors in CSS allow you to target form elements based on their attributes such as type, value, or state.
  </p>
  <p>
    Here's an example of using input attribute selectors to style input elements:
  </p>
 
  <h3 style="color: #3498db;">Explanation</h3>
  <ul >
    <li><strong>input[type="text"]:</strong> This selector targets all input elements with a type attribute set to "text".</li>
    <li><strong>input[type="submit"]:</strong> This selector targets all input elements with a type attribute set to "submit".</li>
    <li><strong>input[type="checkbox"]:</strong> This selector targets all input elements with a type attribute set to "checkbox".</li>
  </ul>
  <p>
    Input attribute selectors are useful for applying specific styles to different types of form elements.
  </p>
</div>

`,
      },
    ],
  },
  {
    id: "otherImportantCSSProperties",
    title: "Other Important CSS properties",

    contents: [
      {
        id: "otherImportantCSSProperties_1",
        title: "!important",
        about: `
    <div>
    <h3 style="color: #3498db;">CSS Important Property</h3>
    <p>
      The <code>!important</code> property is used to give certain CSS declarations priority over others. It overrides any other styles applied to an element, except those defined with a higher specificity.
    </p>
    <h3 style="color: #3498db;">Syntax:</h3>
   <pre>
      <code >selector {</code>
      <code style="color: #f07178;">  property:</code><span style="color:white"> value </span> <code style="color: #f07178;">!important;</code>
      <code >}</code>
    </pre>
    <h3 style="color: #3498db;">Example:</h3>
   <pre>
      <code >.important-text {</code>
      <code style="color: #f07178;">  color:</code><span style="color:white"> red</span> <code style="color: #f07178;">!important;</code>
      <code >}</code>
    </pre>
    <p>
      In this example, the text color of elements with the class <code>.important-text</code> is set to red, and the <code>!important</code> property ensures that this style takes precedence over any other conflicting styles.
    </p>
  </div>`,
      },
    ],
  },
];
