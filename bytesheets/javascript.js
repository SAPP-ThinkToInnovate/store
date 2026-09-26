[
  {
    course: "JAVASCRIPT",
    description:
      "Master JavaScript from scratch with our comprehensive online course! Learn everything you need to know about JavaScript, including variables, data types, functions, control flow, DOM manipulation, asynchronous programming, ES6 features, and best practices. Get hands-on experience with practical exercises and projects, guiding you from beginner to expert level. Perfect for beginners, developers, designers, and anyone looking to create interactive and dynamic web applications. Enroll now to unlock your potential and start building professional-quality websites and web applications today!",
    keywords:
      "JavaScript, web development, online course, beginner, variables, data types, functions, control flow, DOM manipulation, asynchronous programming, ES6, web applications, loops closures ES6, Javascript interview questions, bytesheets. bytesheets javascript, bytes javascript, javascript classes, arrow functions, string methods, array methods, object methods",
    id: "introduction",
    title: "Introduction",
    about: `<div>
    <h2 style="color: #3498db;">🌟 Welcome to JavaScript Byte course 🌟</h2>
    <p>Welcome aboard to an exciting journey into the world of JavaScript! Whether you're a seasoned developer seeking to deepen your understanding or a newcomer eager to explore the realm of web development, this course promises an enriching experience.</p>
    <p>Throughout this journey, you'll uncover the fundamentals of JavaScript, unravel its powerful capabilities, and delve into the art of crafting dynamic and interactive web applications. Prepare to embark on an adventure where creativity meets functionality, and every line of code unveils endless possibilities.</p>
    <p>Here's a glimpse of what you'll learn:</p>
    <ul>
      <li>Introduction to JavaScript</li>
      <li>Variables and Data Types</li>
      <li>Operators and Expressions</li>
      <li>Control Flow (if...else, switch)</li>
      <li>Functions</li>
      <li>Arrays and Objects</li>
      <li>DOM Manipulation</li>
      <li>Events and Event Handling</li>
      <li>Asynchronous JavaScript (Promises, async/await)</li>
      <li>Error Handling</li>
      <li>Modules and Modularization</li>
      <li>ES6+ Features</li>
      <li>Debugging Techniques</li>
      <li>Testing JavaScript Code</li>
      <li>Best Practices and Code Optimization</li>
    </ul>
    <p>By the end of this course, you'll have a solid understanding of JavaScript fundamentals and advanced topics, empowering you to build robust and engaging web applications with confidence.</p>
    <p>Get ready to embark on an exciting journey of JavaScript mastery! 🚀</p>
    <p>Happy coding!</p>
  </div>
  
  `,

    contents: [
      {
        id: "introduction_1",
        title: "Introduction",
        images: [],
      },
    ],
  },
  {
    id: "Basics",
    title: "Javascript Basics",
    about: `<div ">
<div style="">
  <h3 style="color: #f3722c;">Understanding JavaScript</h3>
  <p style="color: #444; text-align: justify;">
    JavaScript is a powerful programming language that adds interactivity and dynamic behavior to web pages. It's commonly used for front-end web development and can also be applied in back-end development with frameworks like Node.js.
  </p>
  <h3 style="color: #f3722c;">Variables</h3>
  <p style="color: #444; text-align: justify;">
    Variables are containers for storing data values. They are like labeled boxes that hold information. In JavaScript, variables can hold various types of data such as numbers, strings, arrays, objects, and more.
  </p>
  <p style="color: #444; text-align: justify;">
    To declare a variable in JavaScript, we use the <code class="language-javascript">var</code>, <code class="language-javascript">let</code>, or <code class="language-javascript">const</code> keyword followed by the variable name.
  </p>
  <h5 style="color: #f3722c;">Using var</h5>
  <p style="color: #444; text-align: justify;">
    <code class="language-javascript">var</code> is the oldest way to declare variables in JavaScript. Variables declared with <code class="language-javascript">var</code> can be re-declared and re-assigned.
  </p>
  <p style="color: #444; text-align: justify;">
    <strong>Example:</strong>
  </p>
<pre><code class="language-javascript">
  var age = 25;
  var age = 30; // Re-declaration
  age = 35; // Re-assignment
</code></pre>
  <h5 style="color: #f3722c;">Using let</h5>
  <p style="color: #444; text-align: justify;">
    <code class="language-javascript">let</code> allows you to declare block-scoped variables. Variables declared with <code class="language-javascript">let</code> can be re-assigned, but not re-declared.
  </p>
  <p style="color: #444; text-align: justify;">
    <strong>Example:</strong>
  </p>
 <pre><code class="language-javascript">
  let name = 'John';
  name = 'Doe'; // Re-assignment
  let name = 'Jane'; // Error
</code></pre>
  <h5 style="color: #f3722c;">Using const</h5>
  <p style="color: #444; text-align: justify;">
    <code class="language-javascript">const</code> also allows you to declare block-scoped variables. Variables declared with <code class="language-javascript">const</code> cannot be re-declared or re-assigned.
  </p>
  <p style="color: #444; text-align: justify;">
    <strong>Example:</strong>
  </p>
<pre><code class="language-javascript">
  const PI = 3.14;
  PI = 3.14159; // Error
  const PI = 3.14159; // Error
</code></pre>
  <p style="color: #444; text-align: justify;">
    That's just the beginning! Stay tuned as we explore more JavaScript concepts in the upcoming lectures.
  </p>
  <p style="color: #444; text-align: justify;">
    Happy coding! 🚀
  </p>
</div>
</div>

<div style=" background-color: #f9f9f9  ">
    <h2 style="color: #3498db; text-align: center;">Variable Declarations in JavaScript</h2>
    <div style="margin-bottom: 20px;">
        <div style="background-color: #bcbcbc;  padding: 10px; margin-bottom: 10px;">
            <h3 style="color: white;">⚫ var</h3>
            <p style="color: white;">The original variable declaration keyword in JavaScript.</p>
            <p style="color: white;">- Function-scoped or globally scoped.</p>
            <p style="color: white;">- Can be re-declared and updated.</p>
            <p style="color: white;">- Hoisted to the top of their function or global scope.</p>
        </div>
        <div style="background-color: #2ecc71;  padding: 10px; margin-bottom: 10px;">
            <h3 style="color: white;">🔵 let</h3>
            <p style="color: white;">Introduced in ES6, let allows block-scoping of variables.</p>
            <p style="color: white;">- Block-scoped: Limited to the block in which it is defined.</p>
            <p style="color: white;">- Can be reassigned, but not re-declared in the same scope.</p>
            <p style="color: white;">- Not hoisted; must be declared before use.</p>
        </div>
        <div style="background-color: #e74c3c;  padding: 10px; margin-bottom: 10px;">
            <h3 style="color: white;">🟡 const</h3>
            <p style="color: white;">Also introduced in ES6, const creates constants, which are block-scoped.</p>
            <p style="color: white;">- Block-scoped: Limited to the block in which it is defined.</p>
            <p style="color: white;">- Cannot be reassigned or re-declared.</p>
            <p style="color: white;">- Not hoisted; must be declared and assigned a value immediately.</p>
        </div>
    </div>
    <p style="text-align: center;">These are the main differences between var, let, and const. Choose the appropriate one based on your use case and scope requirements.</p>
</div>
<div style="   margin-bottom: 20px; background-color:white">
    <h2 style="color: #3498db; ">Understanding JavaScript Data Types</h2>
    <p style="">JavaScript has two main categories of data types:</p>
    </br>
    <div">
        <div style="margin-bottom: 10px;">
            <h3 style="color: #f39c12; ">1) Primitive Data Types:</h3>
            <ul style=" padding: 0; margin-left:20px">
                <li><strong>String:</strong> Represents textual data, enclosed within single or double quotes. 
                </br>
                Example: <code class="language-javascript">let name = 'John';</code></li>
                </br>
                <li><strong>Number:</strong> Represents numeric data, including integers and floating-point numbers. 
                </br>
                Example: <code class="language-javascript">let age = 30;</code></li>
                </br>
                <li><strong>Boolean:</strong> Represents true or false values. 
                </br>
                Example: <code class="language-javascript">let isTrue = true;</code></li>
                </br>
                <li><strong>Undefined:</strong> Represents a variable that has been declared but not assigned a value. 
                </br>
                Example: <code class="language-javascript">let address;</code></li>
                </br>
                <li><strong>Null:</strong> Represents the intentional absence of any value. Example: <code class="language-javascript">let num = null;</code></li>
            </ul>
        </div>
        <div>
            <h3 style="color: #2ecc71; ">2) Composite Data Types:</h3>
            <ul style=" padding: 0; margin-left:20px">
                <li><strong>Object:</strong> Represents a collection of key-value pairs, where values can be primitive or composite data types. 
                </br>
                Example: <code class="language-javascript">let person = { name: 'John', age: 30 };</code></li>
                </br>
                <li><strong>Array:</strong> Represents an ordered list of values, accessible by numerical indices. 
                </br>
                Example: <code class="language-javascript">let numbers = [1, 2, 3, 4, 5];</code></li>
            </ul>
        </div>
    </div>
    </div>`,
    contents: [
      {
        id: "basics_1",
        title: "Javascript Variables & Data Types",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fvariables%2F1.png?alt=media&token=04149ca2-08ef-49ca-ba22-e18ca8e4ebb2",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fvariables%2F2.png?alt=media&token=3068a4dd-cc9e-4454-8f59-6662df670a9b",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fvariables%2F3.png?alt=media&token=6975a719-335f-4e5f-8709-0b940bbf8ec2",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fvariables%2F4.png?alt=media&token=ce14cc46-69a7-4e86-8739-71720d431cef",
        ],
      },
      {
        id: "basics_2",
        title: "Date Methods",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdate%2F1.jpg?alt=media&token=c7e2fa06-4971-4175-bc76-81df7e3d8351",
        ],
      },
      {
        id: "basics_3",
        title: "Introduction to Spread Operator",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbasics%2Fspread%20operator%2F1.jpg?alt=media&token=489226c3-cb37-4e66-91eb-4a3cb16c3ef1",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbasics%2Fspread%20operator%2F2.jpg?alt=media&token=d75f730e-c2fc-4df8-aab4-a13156a49af4",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbasics%2Fspread%20operator%2F3.jpg?alt=media&token=5591c275-cb4b-4d2c-bbba-d18c688a7dba",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbasics%2Fspread%20operator%2F4.jpg?alt=media&token=8ec20913-7901-4564-8f49-51df46a38f6e",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbasics%2Fspread%20operator%2F5.jpg?alt=media&token=4ed4f23b-33ee-4ea2-aaa2-1ef43a3d7d51",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbasics%2Fspread%20operator%2F6.jpg?alt=media&token=25324298-d190-43a2-b083-df89ed94f960",
        ],
      },
    ],
  },
  {
    id: "scopes",
    title: "JS Scopes",
    contents: [
      {
        id: "scopes_1",
        title: "Overview of JS Scopes",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fscopes%2F1.jpg?alt=media&token=1cd94d69-5ee9-499e-ad5a-a2f605ec1e6a",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fscopes%2F2.jpg?alt=media&token=69b385e7-3e80-4ca4-893b-7c4fe136baae",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fscopes%2F4.jpg?alt=media&token=51345015-9a68-4b7e-bb84-747b306c5ac7",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fscopes%2F5.jpg?alt=media&token=25179074-de3b-425d-9c33-93e144e4d4cb",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fscopes%2F6.jpg?alt=media&token=b025fbbd-8f91-4d42-b0f9-8e0dc3c9a887",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fscopes%2F7.jpg?alt=media&token=a9abc99d-ef11-42d2-b46e-0bdbc3c00f73",
        ],
      },
    ],
  },
  {
    id: "operatorsAndExpressions",
    title: "Operators and Expressions",
    about: `<div>
    <h2 style="color: #3498db;">Introduction to Operators</h2>
    <p>Overview of operators in JavaScript, including arithmetic, assignment, comparison, logical, and bitwise operators. Explanation of their purpose and usage.</p>
  </div>
  
  <div>
  <h2 style="color: #2ecc71;">1. Arithmetic Operators</h2>
  <p>Arithmetic operators are used to perform arithmetic operations on numerical values. These include addition (+), subtraction (-), multiplication (*), division (/), and remainder (%).</p>
  <p><strong>Examples:</strong></p>
  <ul>
    <li><code class="language-javascript">const sum = 10 + 5; // Addition</code></li>
    <li><code class="language-javascript">const difference = 20 - 8; // Subtraction</code></li>
    <li><code class="language-javascript">const product = 6 * 4; // Multiplication</code></li>
    <li><code class="language-javascript">const quotient = 50 / 10; // Division</code></li>
    <li><code class="language-javascript">const remainder = 15 % 4; // Remainder</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #e74c3c;">2. Assignment Operators</h2>
  <p>Assignment operators are used to assign values to variables. The most common assignment operator is the equals sign (=), which assigns the value on the right to the variable on the left.</p>
  <p><strong>Examples:</strong></p>
  <ul>
    <li><code class="language-javascript">let x = 10; // Simple assignment</code></li>
    <li><code class="language-javascript">x += 5; // Increment by 5 (same as x = x + 5)</code></li>
    <li><code class="language-javascript">x -= 3; // Decrement by 3 (same as x = x - 3)</code></li>
    <li><code class="language-javascript">x *= 2; // Multiply by 2 (same as x = x * 2)</code></li>
    <li><code class="language-javascript">x /= 4; // Divide by 4 (same as x = x / 4)</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #3498db;">3. Comparison Operators</h2>
  <p>Comparison operators are used to compare two values and return a boolean result. These include equality (== and ===), inequality (!= and !==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).</p>
  <p><strong>Examples:</strong></p>
  <ul>
    <li><code class="language-javascript">const isEqual = 5 === 5; // true (strict equality)</code></li>
    <li><code class="language-javascript">const isNotEqual = 10 != '10'; // false (loose inequality)</code></li>
    <li><code class="language-javascript">const isGreater = 20 > 15; // true</code></li>
    <li><code class="language-javascript">const isLess = 10 < 7; // false</code></li>
    <li><code class="language-javascript">const isGreaterOrEqual = 30 >= 30; // true</code></li>
    <li><code class="language-javascript">const isLessOrEqual = 25 <= 20; // false</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #9b59b6;">4. Logical Operators</h2>
  <p>Logical operators are used to combine or invert boolean values. These include AND (&&), OR (||), and NOT (!).</p>
  <p><strong>Examples:</strong></p>
  <ul>
    <li><code class="language-javascript">const isTrue = true && false; // false</code></li>
    <li><code class="language-javascript">const isFalse = true || false; // true</code></li>
    <li><code class="language-javascript">const isNot = !true; // false</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #f39c12;">5. Bitwise Operators</h2>
  <p>Bitwise operators are used to perform bitwise operations on integers. These include AND (&), OR (|), XOR (^), NOT (~), left shift (&lt;&lt;), and right shift (&gt;&gt;).</p>
  <p><strong>Examples:</strong></p>
  <ul>
    <li><code class="language-javascript">const bitwiseAnd = 5 & 3; // 1</code></li>
    <li><code class="language-javascript">const bitwiseOr = 5 | 3; // 7</code></li>
    <li><code class="language-javascript">const bitwiseXor = 5 ^ 3; // 6</code></li>
    <li><code class="language-javascript">const bitwiseNot = ~5; // -6</code></li>
    <li><code class="language-javascript">const leftShift = 5 << 1; // 10</code></li>
    <li><code class="language-javascript">const rightShift = 5 >> 1; // 2</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #2ecc71;">6. Unary Operators</h2>
  <p>Unary operators are operators that work on a single operand. These include the unary plus (+) and minus (-), typeof, and increment/decrement operators (++ and --).</p>
  <p><strong>Examples:</strong></p>
  <ul>
    <li><code class="language-javascript">const num = -5;</code> <code class="language-javascript">const positiveNum = +num; // 5</code></li>
    <li><code class="language-javascript">let counter = 0;</code> <code class="language-javascript">counter++; // 1</code></li>
    <li><code class="language-javascript">let value = 10;</code> <code class="language-javascript">value--; // 9</code></li>
    <li><code class="language-javascript">const type = typeof 'Hello'; // 'string'</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #f39c12;">7. Ternary Operator (Conditional Operator)</h2>
  <p>The ternary operator (? :) is a shorthand for an if...else statement. It takes three operands and returns the value of the second operand if the first operand is true, otherwise, it returns the value of the third operand.</p>
  <p><strong>Example:</strong></p>
  <ul>
    <li><code class="language-javascript">const age = 20;</code> <code class="language-javascript">const message = age &gt;= 18 ? 'You are an adult' : 'You are a minor';</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #9b59b6;">8. Operator Precedence</h2>
  <p>Operator precedence determines the order of operations in expressions with multiple operators. It follows the same rules as in mathematics.</p>
  <p><strong>Example:</strong></p>
  <ul>
    <li><code class="language-javascript">const result = 10 + 5 * 2; // 20 (multiplication has higher precedence than addition)</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #3498db;">9. Operator Associativity</h2>
  <p>Operator associativity determines the order in which operators of the same precedence are evaluated. Most operators in JavaScript are left-associative, meaning they are evaluated from left to right.</p>
  <p><strong>Example:</strong></p>
  <ul>
    <li><code class="language-javascript">const result = 10 - 5 + 3; // 8 (left to right evaluation)</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #e74c3c;">10. Exponentiation Operator (**)</h2>
  <p>The exponentiation operator (**), introduced in ECMAScript 2016, raises the left operand to the power of the right operand.</p>
  <p><strong>Example:</strong></p>
  <ul>
    <li><code class="language-javascript">const result = 2 ** 3; // 8 (2 raised to the power of 3)</code></li>
  </ul>
  <p><strong>Advantages:</strong> It provides a concise and readable syntax for exponentiation, especially useful for mathematical calculations or algorithms requiring exponentiation.</p>
</div>

<div>
  <h2 style="color: #2ecc71;">11. Optional Chaining Operator (?.)</h2>
  <p>The optional chaining operator (?.), introduced in ECMAScript 2020, allows you to access properties of an object without the need to explicitly check if each property exists.</p>
  <p><strong>Example:</strong></p>
  <ul>
    <li><code class="language-javascript">const name = user?.profile?.name;</code></li>
  </ul>
  <p><strong>Advantages:</strong></p>
  <ul>
    <li>Reduces boilerplate code: Optional chaining eliminates the need for multiple if statements or ternary operators to check if each nested property exists, resulting in cleaner and more concise code.</li>
    <li>Prevents runtime errors: By automatically handling null or undefined values, the optional chaining operator helps prevent "TypeError: Cannot read property 'x' of undefined" errors that commonly occur when accessing nested properties.</li>
    <li>Enhances code readability: Optional chaining improves code readability by clearly indicating the intent to access nested properties while gracefully handling potential null or undefined values, making the code easier to understand and maintain.</li>
    <li>Enables safer navigation: It allows developers to safely navigate through object properties without worrying about potential null or undefined values, reducing the risk of unexpected crashes or bugs in applications.</li>
  </ul>
</div>

<div>
  <h2 style="color: #f39c12;">12. Nullish Coalescing Operator (??)</h2>
  <p>The nullish coalescing operator (??), introduced in ECMAScript 2020, provides a way to handle default values for null or undefined values without considering falsy values like 0 or an empty string.</p>
  <p><strong>Example:</strong></p>
  <ul>
    <li><code class="language-javascript">const value = userInput ?? 'Default Value';</code></li>
  </ul>
  <p><strong>Advantages:</strong> It provides a more precise way to handle default values, avoiding unintended behavior caused by falsy values like 0 or an empty string, which may be valid values in certain scenarios.</p>
</div>
`,
    contents: [
      {
        id: "operatorsAndExpression_1",
        title: "Operators and Expressions",
      },
    ],
  },
  {
    id: "controlFlow",
    title: "Control Flow (if...else, switch)",
    about: `
    <div>
  <h2 style="color: #3498db;">1. if...else Statement</h2>
  <p>The if...else statement is used to make decisions in JavaScript based on certain conditions. If the condition evaluates to true, the code inside the if block executes; otherwise, the code inside the else block executes.</p>
  <p><strong>Example 1:</strong></p>
  <pre>
  <code class="language-javascript">
    const num = 10;
    if (num > 0) {
      console.log("Number is positive");
    } else {
      console.log("Number is non-positive");
    }
  </code>
</pre>

  
  <p ><strong>Example 2:</strong></p>
  <pre>
  <code class="language-javascript">
    <span>const</span> <span>age</span> <span>=</span> <span>25</span>;
    <span>if</span> (<span>age</span> <span>>=</span> <span>18</span>) {
      <span>console</span>.<span>log</span>("You are eligible to vote");
    } <span>else</span> {
      <span>console</span>.<span>log</span>("You are not eligible to vote");
    }
  </code>
</pre>

  <p><strong>Advantages:</strong></p>
  <ul>
    <li>Provides a simple way to execute different code blocks based on conditions.</li>
    <li>Easy to understand and implement.</li>
    <li>Can be used for a wide range of conditional logic.</li>
  </ul>
</div>

<div>
  <h2 style="color: #e74c3c;">2. Nested if...else Statement</h2>
  <p>Nested if...else statements are if...else statements inside another if...else statement. They are used when multiple conditions need to be checked.</p>
  <p><strong>Example:</strong></p>
  <pre>
  <code class="language-javascript">
    const num = 10;
    if (num > 0) {
      if (num % 2 === 0) {
        console.log("Number is positive and even");
      } else {
        console.log("Number is positive and odd");
      }
    } else {
      console.log("Number is non-positive");
    }
  </code>
</pre>

  <p><strong>Advantages:</strong></p>
  <ul>
    <li>Allows for more complex conditional logic by nesting multiple if...else statements.</li>
    <li>Provides greater flexibility in handling different scenarios.</li>
    <li>Can be used to create more specific conditional checks.</li>
  </ul>
</div>

<div>
  <h2 style="color: #2ecc71;">3. switch Statement</h2>
  <p>The switch statement evaluates an expression and executes the corresponding case statement. It provides an alternative to using multiple if...else statements when multiple conditions need to be checked.</p>
  <p><strong>Example:</strong></p>
  <pre>
  <code class="language-javascript">
    const day = 3;
    switch (day) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednesday");
        break;
      default:
        console.log("Invalid day");
    }
  </code>
</pre>

  <p><strong>Advantages:</strong></p>
  <ul>
    <li>Offers cleaner syntax when handling multiple conditions compared to nested if...else statements.</li>
    <li>Can improve code readability and maintainability for certain scenarios.</li>
    <li>Provides a clear structure for handling multiple cases based on a single expression.</li>
  </ul>
</div>
</div>

<div>
  <h2 style="color: #3498db;">Advantages of if...else Statement:</h2>
  <ul>
    <li>Provides flexibility in handling various conditions and scenarios.</li>
    <li>Can include complex conditional logic with nested if...else statements.</li>
    <li>Allows for easy incorporation of logical operators (&&, ||) for more precise condition checking.</li>
    <li>Suitable for scenarios where conditions are based on different types of data or complex expressions.</li>
  </ul>
  <h2 style="color: #e74c3c;">Disadvantages of if...else Statement:</h2>
  <ul>
    <li>May lead to code duplication when multiple conditions have similar code blocks.</li>
    <li>Can become verbose and harder to read for deeply nested conditions.</li>
    <li>May not be the most efficient choice for scenarios with many conditions, as each condition must be evaluated sequentially.</li>
    <li>May result in less maintainable code when handling a large number of conditions.</li>
  </ul>
</div>

<div>
  <h2 style="color: #2ecc71;">Advantages of switch Statement:</h2>
  <ul>
    <li>Offers cleaner syntax and structure compared to nested if...else statements, especially when handling multiple conditions.</li>
    <li>Provides better performance in scenarios with a large number of conditions, as it uses direct evaluation.</li>
    <li>Enhances code readability by clearly separating different cases based on a single expression.</li>
    <li>Allows for fall-through behavior when multiple cases share the same code block, reducing duplication.</li>
  </ul>
  <h2 style="color: #f39c12;">Disadvantages of switch Statement:</h2>
  <ul>
    <li>Does not support complex conditions or expressions directly; it can only evaluate a single expression.</li>
    <li>Requires the use of break statements to prevent fall-through behavior, which can be error-prone if omitted.</li>
    <li>May not be suitable for scenarios where conditions involve non-constant expressions or dynamic values.</li>
    <li>Cannot handle conditions involving range checks or relational operations directly.</li>
  </ul>
</div>

`,
    contents: [
      {
        id: "controlFlow_1",
        title: "Control Flow (if...else, switch)",
        images: [],
      },
    ],
  },
  {
    id: "loops",
    title: "Loops",
    about: `
    <div>
  <h2 style="color: #3498db;">1. for Loop</h2>
  <p>The for loop is used to iterate over a block of code multiple times. It consists of three optional expressions: initialization, condition, and iteration. The loop continues as long as the condition evaluates to true.</p>
  <p><strong>Example 1:</strong> Iterate over an array:</p>
  <pre>
  <code class="language-javascript">
    const numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
    }
  </code>
</pre>
  <p ><strong>Example 2:</strong> Generate a sequence of numbers:</p>
  <pre>
  <code class="language-javascript">
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }
  </code>
</pre>
  <p><strong>Advantages:</strong></p>
  <ul>
    <li>Offers precise control over loop initialization, condition, and iteration.</li>
    <li>Provides a compact syntax for iterating over arrays and other iterable objects.</li>
    <li>Can be used for both fixed and dynamic iteration scenarios.</li>
  </ul>
</div>
<div>
  <h2 style="color: #e74c3c;">2. while Loop</h2>
  <p>The while loop executes a block of code as long as the specified condition evaluates to true. It is typically used when the number of iterations is unknown or determined by a condition.</p>
  <p><strong>Example 1:</strong> Generate random numbers until a condition is met:</p>
  <pre>
  <code class="language-javascript">
    let randomNumber;
    while (randomNumber !== 5) {
      randomNumber = Math.floor(Math.random() * 10) + 1;
      console.log(randomNumber);
    }
  </code>
</pre> 
  <p ><strong>Example 2:</strong> Calculate factorial of a number:</p>
  <pre>
  <code class="language-javascript">
    let number = 5;
    let factorial = 1;
    while (number > 0) {
      factorial *= number;
      number--;
    }
    console.log(factorial);
  </code>
</pre>
  <p><strong>Advantages:</strong></p>
  <ul>
    <li>Provides flexibility in controlling loop execution based on a condition.</li>
    <li>Useful for scenarios where the number of iterations is not predetermined.</li>
    <li>Can be used to create infinite loops with proper termination conditions.</li>
  </ul>
</div>

<div>
  <h2 style="color: #2ecc71;">3. do...while Loop</h2>
  <p>The do...while loop is similar to the while loop, but it always executes the block of code at least once before checking the condition. It is useful when you want to ensure that the code inside the loop runs at least once.</p>
  <p><strong>Example 1:</strong> Prompt the user until valid input is provided:</p>
  <pre>
  <code class="language-javascript">
    let userInput;
    do {
      userInput = prompt("Enter a number greater than 10:");
    } while (userInput <= 10);
    console.log("Valid input:", userInput);
  </code>
</pre>
<p><strong>Example 2:</strong> Sum the digits of a number:</p>
<pre>
  <code class="language-javascript">
    let number = 12345;
    let sum = 0;
    do {
      sum += number % 10;
      number = Math.floor(number / 10);
    } while (number > 0);
    console.log("Sum of digits:", sum);
  </code>
</pre>
  <p><strong>Advantages:</strong></p>
  <ul>
    <li>Guarantees that the loop body executes at least once before checking the condition.</li>
    <li>Helpful in scenarios where initialization code needs to run before the loop condition is checked.</li>
    <li>Provides a concise syntax for executing code repeatedly with a post-loop condition check.</li>
  </ul>
</div>
</div>

<div>
  <h2 style="color: #3498db;">4. forEach Loop</h2>
  <p>The forEach loop is used specifically for iterating over arrays in JavaScript. It executes a provided function once for each array element.</p>
  <p><strong>Example 1:</strong> Logging each element of an array:</p>
  <pre>
  <code class="language-javascript">
    const colors = ['red', 'green', 'blue'];
    colors.forEach(function(color) {
      console.log(color);
    });
  </code>
</pre>
<p ><strong>Example 2:</strong> Summing the elements of an array:</p>
<pre>
  <code class="language-javascript">
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0;
    numbers.forEach(function(number) {
      sum += number;
    });
    console.log("Sum:", sum);
  </code>
</pre>
  <p><strong>Advantages:</strong></p>
  <ul>
    <li>Provides a concise syntax for iterating over array elements without the need for manual index management.</li>
    <li>Improves code readability and maintainability by encapsulating iteration logic within a callback function.</li>
    <li>Supports callback functions that take three arguments: currentValue, index, and array, providing flexibility in handling array elements.</li>
  </ul>
</div>

<div>
  <h2 style="color: #3498db;">For Loop vs. forEach Loop</h2>
  <p>The for loop and forEach loop are both used for iteration in JavaScript, but they have different syntax and usage.</p>
  <h3 style="color: #e74c3c;">For Loop</h3>
  <p>The for loop is a traditional looping construct that provides more control over the iteration process. It is commonly used when you need to iterate over an array or perform a specific task a certain number of times.</p>
  <p><strong>Example:</strong> Iterating over an array using a for loop:</p>
  <pre>
  <code class="language-javascript">
    const numbers = [1, 2, 3, 4, 5];
    for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
    }
  </code>
</pre>
<h3 style="color: #2ecc71;">forEach Loop</h3>
<p >The forEach loop is a method available on arrays in JavaScript that executes a provided function once for each array element. It is a higher-order function and offers a more declarative approach to iteration.</p>
<p ><strong>Example:</strong> Iterating over an array using forEach:</p>
<pre>
  <code class="language-javascript">
    const colors = ['red', 'green', 'blue'];
    colors.forEach(function(color) {
      console.log(color);
    });
  </code>
</pre>
  <h3 style="color: #f39c12;">Differences</h3>
  <ul>
    <li><strong>Syntax:</strong> The syntax for a for loop involves initializing a counter, defining a condition, and specifying an increment or decrement operation. In contrast, the forEach loop takes a callback function as an argument.</li>
    <li><strong>Control:</strong> For loops provide more control over the iteration process, allowing you to customize the loop behavior based on specific conditions. forEach loops, on the other hand, abstract away the loop control logic, resulting in cleaner and more concise code.</li>
    <li><strong>Performance:</strong> In some cases, for loops may offer better performance compared to forEach loops, especially when dealing with large arrays or performance-sensitive operations.</li>
  </ul>
  <h3 style="color: #9b59b6;">Conclusion</h3>
  <p>Choose the appropriate loop construct based on the specific requirements of your task. Use for loops when you need fine-grained control over the iteration process, and opt for forEach loops for simpler, more declarative iteration over array elements.</p>
</div>
`,
    contents: [
      {
        id: "loops_1",
        title: "Loops In JS",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Floops%2F1.jpg?alt=media&token=49319f40-5cc6-442f-b089-837813fc39a4",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Floops%2F2.jpg?alt=media&token=8a362da1-41a1-4c4b-ad0f-cb2bdff33827",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Floops%2F3.jpg?alt=media&token=0fcca841-7b3c-4b37-8f97-e8f5afbb635d",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Floops%2F4.jpg?alt=media&token=a4875f75-31ed-4c24-bdad-cf1fa5e85dd2",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Floops%2F5.jpg?alt=media&token=b7b30f45-a688-40c8-96e8-f2bbe17abcc6",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Floops%2F6.jpg?alt=media&token=ff19cace-201c-4b71-8d2e-62e49f33f0b9",
        ],
      },
    ],
  },
  {
    id: "functions",
    title: "Functions",
    about: `
    <div>
  <h2 style="color: #3498db;">Functions in JavaScript</h2>
  <p>Functions are a fundamental concept in JavaScript, allowing you to encapsulate reusable code blocks and organize your code into modular units. They play a crucial role in enabling abstraction, code reuse, and maintainability.</p>
  <h3 style="color: #e74c3c;">Function Declaration</h3>
  <p>A function declaration defines a named function that can be invoked later in your code. It consists of the function keyword followed by the function name and a block of code enclosed in curly braces.</p>
  <p><strong>Example:</strong> Declaration of a simple function that adds two numbers:</p>
  <pre>
  <code class="language-javascript">
    function add(a, b) {
      return a + b;
    }
  </code>
</pre>
  <h3 style="color: #2ecc71;">Function Expression</h3>
  <p>A function expression defines an unnamed function (often referred to as an anonymous function) and assigns it to a variable. This variable can then be used to invoke the function.</p>
  <p><strong>Example:</strong> Declaration of a function expression that multiplies two numbers:</p>
  <pre>
  <code class="language-javascript">
    const multiply = function(a, b) {
      return a * b;
    };
  </code>
</pre>
  <h3 style="color: #f39c12;">Arrow Functions</h3>
  <p>Arrow functions provide a concise syntax for writing functions in JavaScript. They are often used for inline functions and provide implicit return and lexical scoping of the this keyword.</p>
  <p><strong>Example:</strong> Declaration of an arrow function that squares a number:</p>
  <pre><code class="language-javascript">
const square = (num) => num * num;
  </code></pre>
  <h3 style="color: #9b59b6;">Function Parameters</h3>
  <p>Functions in JavaScript can accept parameters, which are placeholders for values passed to the function when it is invoked. Parameters enable functions to be more versatile and adaptable to different use cases.</p>
  <p><strong>Example:</strong> Function that concatenates two strings:</p>
  <pre><code class="language-javascript">
function concatenate(str1, str2) {
  return str1 + str2;
}
  </code></pre>
  <h3 style="color: #3498db;">Return Statement</h3>
  <p>The return statement is used to specify the value that a function should return when it is called. It can be used to exit a function prematurely and provide a result back to the caller.</p>
  <p><strong>Example:</strong> Function that checks if a number is even and returns true or false:</p>
  <pre><code class="language-javascript">
function isEven(number) {
  return number % 2 === 0;
}
  </code></pre>
  <h3 style="color: #e74c3c;">Function Scope</h3>
  <p>JavaScript functions have their own scope, which means variables declared inside a function are only accessible within that function. This concept helps prevent variable pollution and maintains code encapsulation.</p>
  <p><strong>Example:</strong> Function with a locally scoped variable:</p>
  <pre>
  <code class="language-javascript">
    function greet() {
      const message = 'Hello, World!';
      console.log(message);
    }
    greet(); // Output: "Hello, World!"
    console.log(message); // Throws ReferenceError: message is not defined
  </code>
</pre>
  <h3 style="color: #2ecc71;">Hoisting</h3>
  <p>Function declarations in JavaScript are hoisted to the top of their containing scope during the compilation phase. This allows you to call a function before it is declared in your code.</p>
  <p><strong>Example:</strong> Function hoisting:</p>
  <pre>
  <code class="language-javascript">
    sayHello(); // Output: "Hello!"
    function sayHello() {
      console.log('Hello!');
    }
  </code>
</pre>
  <h3 style="color: #f39c12;">Function Invocation</h3>
  <p>Functions are invoked or called using parentheses after the function name. You can pass arguments to a function when invoking it, and these arguments are used as values for the function parameters.</p>
  <p><strong>Example:</strong> Invoking a function:</p>
  <pre><code class="language-javascript">
const result = add(3, 5); // Calling the add function with arguments 3 and 5
console.log(result); // Output: 8
  </code></pre>
  <h3 style="color: #9b59b6;">Advantages of Functions</h3>
  <ul>
    <li><strong>Modularity:</strong> Functions allow you to break down complex tasks into smaller, manageable units of code, promoting code reuse and maintainability.</li>
    <li><strong>Abstraction:</strong> Functions encapsulate implementation details and provide a higher-level interface, allowing you to focus on the functionality rather than the implementation details.</li>
    <li><strong>Organization:</strong> Functions help organize code into logical units, making it easier to understand, debug, and maintain.</li>
    <li><strong>Scoping:</strong> Functions create their own scope, preventing variable name clashes and promoting encapsulation and information hiding.</li>
  </ul>
</div>

<div>
  <h3 style="color: #3498db;">Higher-Order Functions</h3>
  <p>Higher-order functions are functions that operate on other functions by taking them as arguments or returning them as results. They enable powerful functional programming paradigms in JavaScript.</p>
  <p><strong>Example:</strong> Higher-order function that applies a callback function to each element of an array:</p>
  <pre>
  <code class="language-javascript">
    function map(arr, callback) {
      const result = [];
      for (const elem of arr) {
          result.push(callback(elem));
      }
      return result;
    }

    const numbers = [1, 2, 3, 4, 5];
    const squaredNumbers = map(numbers, (num) => num * num);
    console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  </code>
</pre>
</div>
<div>
  <h3 style="color: #e74c3c;">Closures</h3>
  <p>Closures are a powerful and often misunderstood concept in JavaScript. A closure is created whenever a nested function accesses variables from its containing scope, even after the outer function has finished executing.</p>
  <p><strong>Example:</strong> Closure capturing the value of a variable from its enclosing scope:</p>
  <pre>
  <code class="language-javascript">
    function createCounter() {
      let count = 0;
      return function() {
        return ++count;
      };
    }
    const counter = createCounter();
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2
  </code>
</pre>
  <p>We will explore more about closures and their applications in upcoming sections.</p>
</div>
<div>
  <h3 style="color: #2ecc71;">Recursive Functions</h3>
  <p>Recursive functions are functions that call themselves, either directly or indirectly, in order to solve problems by breaking them down into smaller, more manageable subproblems.</p>
  <p><strong>Example:</strong> Recursive function to calculate the factorial of a number:</p>
  <pre>
  <code class="language-javascript">
    function factorial(n) {
      if (n === 0 || n === 1) {
          return 1;
      } else {
          return n * factorial(n - 1);
      }
  }
  console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
  </code>
</pre>
</div>
<div>
  <h3 style="color: #f39c12;">Function Composition</h3>
  <p>Function composition is the process of combining multiple functions to create a new function. This technique enables you to build complex behaviors by chaining together simple, reusable functions.</p>
  <p><strong>Example:</strong> Function composition using higher-order functions:</p>
  <pre>
<code class="language-javascript">
  function compose(...fns) {
    return function(x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);
    };
}
const add5 = (x) => x + 5;
const double = (x) => x * 2;
const add5ThenDouble = compose(double, add5);
console.log(add5ThenDouble(10)); // Output: 30 ((10 + 5) * 2)
</code>
</pre>
</div>
</div>`,
    contents: [
      {
        id: "functions_1",
        title: "Functions",
      },
      {
        id: "functions_2",
        title: "Bind Method",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FBind%20method%2F1.jpg?alt=media&token=f2ba9711-2611-4f6d-8374-d6c44355e3ef",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FBind%20method%2F2.jpg?alt=media&token=d3f0b735-dd66-4fc1-acab-a35e9b87747b",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FBind%20method%2F3.jpg?alt=media&token=43653b4f-35e1-48d5-97ea-c045fd541a97",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FBind%20method%2F4.jpg?alt=media&token=f4ad3d98-3b23-4ca4-af8b-1b8dd2668328",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FBind%20method%2F5.jpg?alt=media&token=e2bf2f30-179f-49d8-97a5-3251da090b3e",
        ],
      },
      {
        id: "functions_3",
        title: "Function Types Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2Ffunction%20types%2F1.jpg?alt=media&token=fbc33cef-da6f-4b9b-b4e2-1c008655b698",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2Ffunction%20types%2F2.jpg?alt=media&token=feb3e168-4c8d-4a0d-99f8-7d2a2d9eb509",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2Ffunction%20types%2F3.jpg?alt=media&token=ce567040-167b-4813-93ca-806ae90ce4a1",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2Ffunction%20types%2F4.jpg?alt=media&token=6d98833f-24e4-40b9-9113-ec30c009f6f9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2Ffunction%20types%2F5.jpg?alt=media&token=cc5940ff-ff7e-4a77-ac3e-4ef8ad8940f9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2Ffunction%20types%2F6.jpg?alt=media&token=40e2115c-8d5c-49e3-9d1e-5c8d13be0108",
        ],
      },
      {
        id: "functions_4",
        title: "Global Functions",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2Fglobal%20functions%2F1.jpg?alt=media&token=85b66b49-5c6e-4af7-8953-b44ab30db898",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2Fglobal%20functions%2F2.jpg?alt=media&token=8877288d-d229-4a16-8fc8-79c732801772",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2Fglobal%20functions%2F3.jpg?alt=media&token=8f388c3b-71d8-4a80-9524-ea04e9117846",
        ],
      },
      {
        id: "functions_5",
        title: "Important Built In Functions",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FImportant%20Built%20In%20Functions%2F1.jpg?alt=media&token=4c8e0d9d-015e-4e0f-ac3d-e2addc5acafb",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FImportant%20Built%20In%20Functions%2F2.jpg?alt=media&token=5956db71-969b-491f-a3b0-3ecd8013bc82",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FImportant%20Built%20In%20Functions%2F3.jpg?alt=media&token=2d38c3e5-3234-4fbd-877f-d1bdd40acc66",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FImportant%20Built%20In%20Functions%2F4.jpg?alt=media&token=b18abdfb-232c-4286-9351-a29fc3a4549a",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FImportant%20Built%20In%20Functions%2F5.jpg?alt=media&token=8b888e84-5a92-4d5b-bb81-816e5bb93829",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FImportant%20Built%20In%20Functions%2F6.jpg?alt=media&token=7f33eee7-84b6-4043-96be-7eb502f8e7e0",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Ffunction%2FImportant%20Built%20In%20Functions%2F7.jpg?alt=media&token=519ceed1-db54-41d8-a366-df234a6e3853",
        ],
      },
    ],
  },
  {
    id: "debouncing",
    title: "Debouncing in Javascript",
    contents: [
      {
        id: "debouncing_1",
        title: "Introduction to Debouncing",
        about: `
        <div>
  <h2 style="color: #3498db;">Debouncing in JavaScript</h2>
  <p style="color: #444;">
    Debouncing is a technique used in JavaScript to improve performance by delaying the execution of a function until after a certain amount of time has passed since the last time it was invoked. It helps in handling tasks such as autocomplete suggestions, scroll event handling, and resizing events efficiently.
  </p>
  <p style="color: #444;">
    The necessity of debouncing arises when you have functions that are called frequently, potentially causing performance issues or unnecessary resource consumption. By debouncing these functions, you can control the rate at which they execute, preventing them from being invoked too frequently.
  </p>
  <p style="color: #444;">
    One common use case for debouncing is in handling user input, such as search queries in a search bar. Rather than executing the search function every time the user types a character, you debounce the function so that it only runs after the user has stopped typing for a certain period, reducing the number of unnecessary API calls.
  </p>
  <h3 style="color: #3498db;">Example:</h3>
  <pre>
    <code class="language-javascript">
      const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func(...args);
          }, delay);
        };
      };
      
      const search = () => {
        // Simulating API call or search operation
        console.log('Searching...');
      };
      
      const debouncedSearch = debounce(search, 300);
      
      // Attach debounced function to input event
      const searchInput = document.getElementById('searchInput');
      searchInput.addEventListener('input', debouncedSearch);
    </code>
  </pre>
  <p style="color: #444;">
    In this example, the <code style="color: #f07178;">debounce</code> function takes another function <code style="color: #f07178;">func</code> and a delay <code style="color: #f07178;">delay</code> as parameters. It returns a new function that will execute the original function <code style="color: #f07178;">func</code> after the specified <code style="color: #f07178;">delay</code> has elapsed since the last invocation.
  </p>
</div>
`,
      },
      {
        id: "debouncing_2",
        title: "Available Debouncing Packages",
        about: `
        <div>
  <h2 style="color: #3498db;">Other Debouncing Packages</h2>
  <p style="color: #444;">
    While you can implement debouncing manually as shown in the previous example, there are several packages available that provide utility functions for debouncing in JavaScript. These packages can simplify your code and handle edge cases more efficiently.
  </p>
  <h3 style="color: #3498db;">1. Lodash</h3>
  <p style="color: #444;">
    Lodash is a popular JavaScript utility library that provides a <code style="color: #f07178;">debounce</code> function among many other useful utilities.
  </p>
  <pre>
  <code class="language-javascript">
    import { debounce } from 'lodash';

    const search = () => {
      // Simulating API call or search operation
      console.log('Searching...');
    };

    const debouncedSearch = debounce(search, 300);

    // Attach debounced function to input event
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', debouncedSearch);
  </code>
</pre>
  <h3 style="color: #3498db;">2. Underscore</h3>
  <p style="color: #444;">
    Underscore is a JavaScript library similar to Lodash, and it also provides a <code style="color: #f07178;">debounce</code> function.
  </p>
  <pre>
  <code class="language-javascript">
    import _ from 'underscore';

    const search = () => {
      // Simulating API call or search operation
      console.log('Searching...');
    };

    const debouncedSearch = _.debounce(search, 300);

    // Attach debounced function to input event
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', debouncedSearch);
  </code>
</pre>
  <p style="color: #444;">
    These libraries provide battle-tested implementations of debouncing and offer additional utility functions for common tasks in JavaScript development.
  </p>
</div>
`,
      },
    ],
  },
  {
    id: "thisKeyword",
    title: "This Keyword",
    contents: [
      {
        id: "thisKeyword_1",
        title: "this Keyword Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fthis%20Keyword%2F1.jpg?alt=media&token=b0687022-ce85-4305-9e35-a04c0a203f39",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fthis%20Keyword%2F2.jpg?alt=media&token=6f95b5b7-b007-407c-8c67-b8f52517bac1",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fthis%20Keyword%2F3.jpg?alt=media&token=bda31e60-693b-48f6-8b87-861d711e9803",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fthis%20Keyword%2F4.jpg?alt=media&token=489fd2c2-8853-40de-a3be-87ca060392c0",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fthis%20Keyword%2F5.jpg?alt=media&token=8260a8d6-d999-4243-a368-aa75bd9f1f82",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fthis%20Keyword%2F6.jpg?alt=media&token=6ce71d33-eca8-4f13-9846-8de8252c4052",
        ],
      },
    ],
  },
  {
    id: "domManipulation",
    title: "DOM Manipulation",
    about: `
    <div>
  <h3 style="color: #e74c3c;">DOM Manipulation</h3>
  <p>DOM manipulation is a crucial aspect of web development, allowing JavaScript to interact with HTML and CSS to dynamically modify webpage content and structure.</p>
  <p><strong>Example:</strong> Adding an event listener to a button element and updating its text content:</p>
  <pre><code class="language-javascript">
// HTML: &lt;button id="myButton"&gt;Click Me&lt;/button&gt;
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  this.textContent = 'Button Clicked';
});
  </code></pre>
  <p>Through DOM manipulation, you can create interactive user interfaces, respond to user actions, and dynamically update webpage content based on various events and conditions.</p>
</div>

<div>
  <h3 style="color: #e74c3c;">DOM Manipulation: Adding Elements</h3>
  <p>One common task in DOM manipulation is adding new elements to the HTML document dynamically.</p>
  <p><strong>Example:</strong> Creating a new paragraph element and appending it to the body:</p>
  <pre><code class="language-javascript">
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a dynamically created paragraph.';
document.body.appendChild(newParagraph);
  </code></pre>
  <p>This example demonstrates how to use JavaScript to create a new <p>element, set its text content, and append it to the
  <body > of the HTML document.</p>
</div>

<div>
  <h3 style="color: #2ecc71;">DOM Manipulation: Modifying Styles</h3>
  <p>JavaScript can also be used to modify the CSS styles of HTML elements, allowing for dynamic visual changes.</p>
  <p><strong>Example:</strong> Changing the background color of a div element:</p>
  <pre><code class="language-javascript">
const divElement = document.getElementById('myDiv');
divElement.style.backgroundColor = 'lightblue';
  </code></pre>
  <p>In this example, the background color of a <div>element with the ID 'myDiv' is changed to 'lightblue' using JavaScript.</p>
</div>

<div>
  <h3 style="color: #f39c12;">DOM Manipulation: Event Handling</h3>
  <p>Event handling is a fundamental aspect of DOM manipulation, allowing JavaScript to respond to user interactions.</p>
  <p><strong>Example:</strong> Adding a click event listener to a button element:</p>
  <pre><code class="language-javascript">
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  alert('Button clicked!');
});
  </code></pre>
  <p>In this example, an event listener is attached to a button element, causing an alert to be displayed when the button is clicked.</p>
</div>

<div>
  <h3 style="color: #9b59b6;">DOM Manipulation: Removing Elements</h3>
  <p>JavaScript also enables the removal of existing HTML elements from the document.</p>
  <p><strong>Example:</strong> Removing a paragraph element with a specific ID:</p>
  <pre><code class="language-javascript">
const paragraphToRemove = document.getElementById('paragraphToRemove');
paragraphToRemove.remove();
  </code></pre>
  <p>In this example, the paragraph element with the ID 'paragraphToRemove' is removed from the HTML document using JavaScript.</p>
</div>

<div>
  <h3 style="color: #e74c3c;">DOM Manipulation: Querying Elements</h3>
  <p>Querying elements from the DOM is essential for accessing and manipulating specific parts of a web page.</p>
  <p><strong>Example:</strong> Using querySelector to select the first paragraph element:</p>
  <pre><code class="language-javascript">
const firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent);
  </code></pre>
  <p>This example selects the first <p >element in the document and logs its text content to the console.</p>
</div>

<div>
  <h3 style="color: #2ecc71;">DOM Manipulation: Modifying Attributes</h3>
  <p>JavaScript can also be used to modify HTML attributes of elements, such as src, href, class, etc.</p>
  <p><strong>Example:</strong> Changing the source of an image:</p>
  <pre><code class="language-javascript">
const image = document.getElementById('myImage');
image.src = 'new-image.jpg';
  </code></pre>
  <p>In this example, the src attribute of an image element is updated to point to a new image file.</p>
</div>

<div>
  <h3 style="color: #f39c12;">DOM Manipulation: Creating Event Handlers</h3>
  <p>Creating event handlers allows JavaScript to respond to user actions such as clicks, mouse movements, key presses, etc.</p>
  <p><strong>Example:</strong> Adding a hover effect to a button:</p>
  <pre><code class="language-javascript">
const button = document.getElementById('myButton');
button.addEventListener('mouseenter', function() {
  button.style.backgroundColor = 'lightgray';
});
button.addEventListener('mouseleave', function() {
  button.style.backgroundColor = 'white';
});
  </code></pre>
  <p>This example changes the background color of a button when the mouse enters and leaves the button area.</p>
</div>

<div>
  <h3 style="color: #9b59b6;">DOM Manipulation: Traversing the DOM</h3>
  <p>Traversing the DOM involves navigating between parent, child, and sibling elements to access specific elements or modify their properties.</p>
  <p><strong>Example:</strong> Accessing the parent element of a given element:</p>
  <pre><code class="language-javascript">
const childElement = document.getElementById('myChildElement');
const parentElement = childElement.parentElement;
console.log(parentElement.tagName);
  </code></pre>
  <p>This example retrieves the parent element of a specified child element and logs its tag name to the console.</p>
</div>

<div>
  <h3 style="color: #3498db;">DOM Manipulation: Creating Elements</h3>
  <p>JavaScript can dynamically create new HTML elements and append them to the document, enabling the generation of content on the fly.</p>
  <p><strong>Example:</strong> Creating a new paragraph element and appending it to the body:</p>
  <pre><code class="language-javascript">
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a dynamically created paragraph.';
document.body.appendChild(newParagraph);
  </code></pre>
  <p>In this example, a new <p >element is created, its text content is set, and then it is appended to the end of the document body.</p>
</div>

<div>
  <h3 style="color: #e74c3c;">DOM Manipulation: Removing Elements</h3>
  <p>JavaScript can remove existing elements from the DOM, allowing for dynamic content management and user interface updates.</p>
  <p><strong>Example:</strong> Removing a paragraph element with a specific ID:</p>
  <pre><code class="language-javascript">
const paragraphToRemove = document.getElementById('paragraphToRemove');
paragraphToRemove.parentNode.removeChild(paragraphToRemove);
  </code></pre>
  <p>In this example, the paragraph element with the specified ID is removed from its parent node, effectively deleting it from the document.</p>
</div>

<div>
  <h3 style="color: #2ecc71;">DOM Manipulation: Modifying Styles</h3>
  <p>JavaScript can manipulate CSS styles of HTML elements to dynamically change their appearance or layout.</p>
  <p><strong>Example:</strong> Changing the font color of a heading element:</p>
  <pre><code class="language-javascript">
const heading = document.getElementById('myHeading');
heading.style.color = 'red';
  </code></pre>
  <p>This example alters the color of a heading element to red by directly modifying its color style property.</p>
</div>

<div>
  <h3 style="color: #f39c12;">DOM Manipulation: Event Delegation</h3>
  <p>Event delegation is a technique that involves attaching a single event listener to a parent element to handle events for multiple child elements.</p>
  <p><strong>Example:</strong> Using event delegation to handle clicks on multiple buttons:</p>
  <pre><code class="language-javascript">
const parentElement = document.getElementById('parentElement');
parentElement.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked:', event.target.textContent);
  }
});
  </code></pre>
  <p>In this example, a click event listener is added to a parent element, and clicks on its child buttons are handled dynamically.</p>
</div>


`,
    contents: [
      {
        id: "domManipulation_1",
        title: "DOM Manipulation",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdom%2F1.a.jpg?alt=media&token=f1f4543d-806f-4b87-8da9-bcf11aec0528",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdom%2F1.jpg?alt=media&token=87cf3052-20ed-4080-bb49-03eeec6c50e1",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdom%2F2.jpg?alt=media&token=b0950ad0-e4f5-450d-ac1a-410c4a463a2d",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdom%2F3.jpg?alt=media&token=b7f11607-15d8-41db-8415-7a057e327faf",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdom%2F4.jpg?alt=media&token=7e7b357c-812c-4979-bbee-5089ae086968",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdom%2F5.jpg?alt=media&token=7b5e6cff-e642-4870-be7a-2662cd5f63d6",
        ],
      },
    ],
  },
  {
    id: "events",
    title: "Events and Events Handling",
    about: `
    <div>
  <h3 style="color: #3498db;">Events and Event Handling</h3>
  <p>Events are actions or occurrences that happen in the system. They can be triggered by the user or the system. Event handling is the process of writing code to respond to these events.</p>
</div>

<div>
  <h3 style="color: #e74c3c;">Event Types</h3>
  <p>There are various types of events in JavaScript, including:</p>
  <ul>
    <li>Mouse events (click, hover, etc.)</li>
    <li>Keyboard events (keydown, keyup, etc.)</li>
    <li>Form events (submit, input, etc.)</li>
    <li>Document and window events (load, resize, etc.)</li>
    <li>Custom events (defined by the developer)</li>
  </ul>
</div>

<div>
  <h3 style="color: #2ecc71;">Event Handling</h3>
  <p>Event handling involves attaching event listeners to HTML elements to respond to specific events.</p>
  <p><strong>Example:</strong> Adding a click event listener to a button element:</p>
  <pre><code class="language-javascript">
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
});
  </code></pre>
  <p>This example adds a click event listener to a button element. When the button is clicked, the provided function is executed.</p>
</div>

<div>
  <h3 style="color: #f39c12;">Event Object</h3>
  <p>When an event occurs, the browser creates an event object that contains information about the event. This object is passed as an argument to the event handler function.</p>
  <p><strong>Example:</strong> Accessing event properties such as target and type:</p>
  <pre><code class="language-javascript">
document.addEventListener('click', function(event) {
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
});
  </code></pre>
  <p>In this example, we log the type of the event and the target element that triggered the event.</p>
</div>

<div>
  <h3 style="color: #9b59b6;">Event Bubbling and Capturing</h3>
  <p>Events in JavaScript follow a propagation model where they can bubble up from the target element through its ancestors (event bubbling) or capture down from the document root to the target element (event capturing).</p>
  <p><strong>Example:</strong> Demonstrating event bubbling and capturing:</p>
  <pre><code class="language-javascript">
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', function() {
  console.log('Parent clicked!');
}, true); // UseCapture flag set to true for event capturing

child.addEventListener('click', function() {
  console.log('Child clicked!');
}, false); // UseCapture flag set to false for event bubbling
  </code></pre>
  <p>In this example, when clicking on the child element, the event first captures down from the document root to the child (event capturing), then bubbles up from the child to the parent (event bubbling).</p>
</div>

<div>
  <h3 style="color: #3498db;">Advantages of Event Delegation</h3>
  <p>Event delegation is a technique where a single event listener is attached to a parent element to handle events for its descendants. This approach offers several advantages:</p>
  <ul>
    <li><strong>Improved Performance:</strong> By attaching fewer event listeners, event delegation can improve performance, especially in applications with many dynamically generated elements.</li>
    <li><strong>Dynamic Element Handling:</strong> Event delegation allows dynamically added elements to be handled without the need to attach new event listeners explicitly.</li>
    <li><strong>Simplified Code:</strong> With event delegation, you write less code since you only need to attach one event listener to a parent element instead of multiple listeners to individual child elements.</li>
    <li><strong>Flexibility:</strong> Event delegation provides flexibility when dealing with nested elements or elements added or removed from the DOM dynamically.</li>
  </ul>
</div>
<div>
  <h3 style="color: #3498db;">Window Size and Events</h3>
  <p>To get the width and height of the window, you can use the properties <code class="language-javascript">window.innerWidth</code> and <code class="language-javascript">window.innerHeight</code>.</p>
  <p><strong>Example:</strong> Logging the window width and height on resize event:</p>
  <pre><code class="language-javascript">
window.addEventListener('resize', function() {
  console.log('Window width:', window.innerWidth);
  console.log('Window height:', window.innerHeight);
});
  </code></pre>
</div>

<div>
  <h3 style="color: #e74c3c;">Common Event Listeners</h3>
  <p>Some of the most commonly used event listeners in JavaScript include:</p>
  <ul>
    <li><strong>click:</strong> Triggered when a mouse click event occurs.</li>
    <li><strong>mouseover:</strong> Triggered when the mouse pointer enters the target element.</li>
    <li><strong>mouseout:</strong> Triggered when the mouse pointer leaves the target element.</li>
    <li><strong>keydown:</strong> Triggered when a keyboard key is pressed down.</li>
    <li><strong>keyup:</strong> Triggered when a keyboard key is released.</li>
    <li><strong>submit:</strong> Triggered when a form is submitted.</li>
    <li><strong>input:</strong> Triggered when the value of an input element changes.</li>
    <li><strong>load:</strong> Triggered when a resource and its dependent resources have finished loading.</li>
  </ul>
</div>

<div>
  <h3 style="color: #2ecc71;">Additional Examples</h3>
  <p>Here are some additional examples of event listeners:</p>
  <ul>
    <li><strong>Scroll Event:</strong> Detecting when the user scrolls the page.</li>
    <li><strong>Focus and Blur Events:</strong> Handling focus and blur events on form elements.</li>
    <li><strong>Mousemove Event:</strong> Tracking the movement of the mouse pointer.</li>
    <li><strong>Touch Events:</strong> Handling touch events on touch-enabled devices.</li>
  </ul>
  <p>Each of these events can be useful in different scenarios, allowing you to create interactive and responsive web applications.</p>
</div>


`,
    contents: [
      {
        id: "events_1",
        title: "Events and Events Handling",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fevents%2F1.jpg?alt=media&token=c7a031ad-c359-4076-b2bc-65a9dc3ee7f1",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fevents%2F2.jpg?alt=media&token=78a826cd-862a-4da5-b585-c1c41c5a1d7d",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fevents%2F3.jpg?alt=media&token=4b0e786f-81fa-41df-9850-c5add6de9316",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fevents%2F4.jpg?alt=media&token=ae3fd2ae-0fe2-47a1-8458-a056e660a5fb",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fevents%2F5.jpg?alt=media&token=47c21639-4f2f-44c4-ac27-ce75c8522762",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fevents%2F6.jpg?alt=media&token=0bb1f14a-044b-4488-848f-93fb3e88fc16",
        ],
      },
    ],
  },
  {
    id: "stringMethods",
    title: "String Methods",
    about: `<div>
        <h2 style="color: #3498db;">1. String Length: length</h2>
        <p>Get the length of a string using the <code class="language-javascript">length</code> property.</p>
        <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.length);</strong> // Output: 11</p>
      </div>
  
      <div >
        <h2 style="color: #e74c3c;">2. Finding Substrings: indexOf, lastIndexOf</h2>
        <p>Find the position of a substring within a string using <code class="language-javascript">indexOf</code> and <code class="language-javascript">lastIndexOf</code> methods.</p>
        <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.indexOf('o'));</strong> // Output: 4</p>
      </div>
  
      <div >
        <h2 style="color: #2ecc71;">3. Extracting Substrings: substring, slice, substr</h2>
        <p>Extract substrings from a string using <code class="language-javascript">substring</code>, <code class="language-javascript">slice</code>, and <code class="language-javascript">substr</code>.</p>
        <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.slice(6));</strong> // Output: "World"</p>
      </div>
  
      <div >
        <h2 style="color: #f39c12;">4. Changing Case: toUpperCase, toLowerCase</h2>
        <p>Convert the case of a string using <code class="language-javascript">toUpperCase</code> and <code class="language-javascript">toLowerCase</code> methods.</p>
        <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.toUpperCase());</strong> // Output: "HELLO WORLD"</p>
      </div>
  
      <div >
        <h2 style="color: #9b59b6;">5. Removing Whitespace: trim</h2>
        <p>Remove leading and trailing whitespace from a string using the <code class="language-javascript">trim</code> method.</p>
        <p><strong>Example:</strong> <code class="language-javascript">const str = "   Hello World   ";</code> <strong>console.log(str.trim());</strong> // Output: "Hello World"</p>
      </div>
  
      <div >
        <h2 style="color: #3498db;">6. Replacing Substrings: replace</h2>
        <p>Replace substrings within a string using the <code class="language-javascript">replace</code> method.</p>
        <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.replace('World', 'Universe'));</strong> // Output: "Hello Universe"</p>
      </div>
  
      <div >
        <h2 style="color: #e74c3c;">7. Splitting a String: split</h2>
        <p>Split a string into an array of substrings using the <code class="language-javascript">split</code> method.</p>
        <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.split(' '));</strong> // Output: ["Hello", "World"]</p>
      </div>
  
      <div >
        <h2 style="color: #2ecc71;">8. Concatenating Strings: concat</h2>
        <p>Concatenate strings using the <code class="language-javascript">concat</code> method.</p>
        <p><strong>Example:</strong> <code class="language-javascript">const str1 = "Hello";</code> <code class="language-javascript">const str2 = "World";</code> <strong>console.log(str1.concat(' ', str2));</strong> // Output: "Hello World"</p>
      </div>
  
      <div >
        <h2 style="color: #f39c12;">9. Checking for Substrings: includes, startsWith, endsWith</h2>
        <p>Check for the presence of substrings within a string using <code class="language-javascript">includes</code>, <code class="language-javascript">startsWith</code>, and <code class="language-javascript">endsWith</code>.</p>
        <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.includes('World'));</strong> // Output: true</p>
      </div>
  
      <div >
        <h2 style="color: #9b59b6;">10. Converting to Unicode: charCodeAt, fromCharCode</h2>
        <p>Convert characters to Unicode using <code class="language-javascript">charCodeAt</code> and convert Unicode values to characters using <code class="language-javascript">fromCharCode</code>.</p>
        <p><strong>Example:</strong> <code class="language-javascript">console.log(String.fromCharCode(65));</code> // Output: "A"</p>
      </div>
  
      <div >
        <h2 style="color: #3498db;">11. Template Literals: Template Strings</h2>
        <p>Utilize template literals or template strings for more flexible and readable string formatting.</p>
        <p><strong>Example:</strong> <code class="language-javascript">const name = "John";</code> <code class="language-javascript">const age = 30;</code> <strong>console.log(\`My name is \${name} and I am \${age} years old.\`);</strong> // Output: "My name is John and I am 30 years old."</p>
      </div>

      <div >
      <h2 style="color: #3498db;">12. Searching Patterns: search</h2>
      <p>Search for a specified pattern within a string using the <code class="language-javascript">search</code> method.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.search('World'));</strong> // Output: 6</p>
    </div>

    <div >
      <h2 style="color: #e74c3c;">13. Regular Expressions: match, replace, split</h2>
      <p>Use regular expressions with the <code class="language-javascript">match</code>, <code class="language-javascript">replace</code>, and <code class="language-javascript">split</code> methods for advanced string manipulation.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.match(/o/g));</strong> // Output: ["o", "o"]</p>
    </div>

    <div >
      <h2 style="color: #2ecc71;">14. Checking Prefixes and Suffixes: startsWith, endsWith</h2>
      <p>Determine if a string starts or ends with a specified substring using the <code class="language-javascript">startsWith</code> and <code class="language-javascript">endsWith</code> methods.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.startsWith('Hello'));</strong> // Output: true</p>
    </div>

    <div >
      <h2 style="color: #f39c12;">15. Repeating Strings: repeat</h2>
      <p>Repeat a string a specified number of times using the <code class="language-javascript">repeat</code> method.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello";</code> <strong>console.log(str.repeat(3));</strong> // Output: "HelloHelloHello"</p>
    </div>

    <div >
      <h2 style="color: #9b59b6;">16. Extracting Characters: charAt, charCodeAt</h2>
      <p>Access individual characters within a string using the <code class="language-javascript">charAt</code> and <code class="language-javascript">charCodeAt</code> methods.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello";</code> <strong>console.log(str.charCodeAt(0));</strong> // Output: 72</p>
    </div>

    <div >
      <h2 style="color: #3498db;">17. Converting Case: toLocaleUpperCase, toLocaleLowerCase</h2>
      <p>Convert the case of a string based on the current locale using <code class="language-javascript">toLocaleUpperCase</code> and <code class="language-javascript">toLocaleLowerCase</code>.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello World";</code> <strong>console.log(str.toLocaleUpperCase());</strong> // Output: "HELLO WORLD"</p>
    </div>

    <div >
      <h2 style="color: #e74c3c;">18. Iterating Characters: forEach, for...of</h2>
      <p>Iterate over characters in a string using the <code class="language-javascript">forEach</code> method or the <code class="language-javascript">for...of</code> loop.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const str = "Hello";</code> <strong>for (const char of str) { console.log(char); }</strong> // Output: "H", "e", "l", "l", "o"</p>
    </div>

    <div >
      <h2 style="color: #2ecc71;">19. Checking Empty Strings: isEmpty</h2>
      <p>Determine if a string is empty using custom logic or helper functions.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const str = "";</code> <strong>console.log(str.isEmpty());</strong> // Output: true</p>
    </div>

    <div >
      <h2 style="color: #f39c12;">20. Parsing Strings: parseInt, parseFloat</h2>
      <p>Convert string representations of numbers to actual numeric values using <code class="language-javascript">parseInt</code> and <code class="language-javascript">parseFloat</code>.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const str = "10";</code> <strong>console.log(parseInt(str));</strong> // Output: 10</p>
    </div>

    <div >
      <h2 style="color: #9b59b6;">21. Checking Equality: localeCompare</h2>
      <p>Compare strings based on their Unicode values using <code class="language-javascript">localeCompare</code>.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const str1 = "apple";</code> <code class="language-javascript">const str2 = "banana";</code> <strong>console.log(str1.localeCompare(str2));</strong> // Output: -1</p>
    </div>

    <div >
      <h2 style="color: #3498db;">22. Formatting Strings: Intl.DateTimeFormat, Intl.NumberFormat</h2>
      <p>Format strings for dates and numbers using the <code class="language-javascript">Intl.DateTimeFormat</code> and <code class="language-javascript">Intl.NumberFormat</code> objects.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const date = new Date();</code> <strong>console.log(new Intl.DateTimeFormat('en-US').format(date));</strong> // Output: "1/19/2024"</p>
    </div>

    <div>
  <h2 style="color: #3498db;">23. Repeating Strings: repeat</h2>
  <p>Repeating a string a specified number of times using the <code class="language-javascript">repeat</code> method.</p>
  <pre>
    <code class="language-javascript">
const str = 'Hello ';
const repeatedStr = str.repeat(3);
console.log(repeatedStr); 
// Output: 'Hello Hello Hello '
    </code>
  </pre>
</div>

<div>
  <h2 style="color: #e74c3c;">24. Checking Empty Strings: isEmpty</h2>
  <p>Determining if a string is empty using custom logic or helper functions.</p>
  <pre>
    <code class="language-javascript">
function isEmptyString(str) {
  return str.trim() === '';
}

console.log(isEmptyString(''));      
// Output: true
console.log(isEmptyString('   '));   
// Output: true
console.log(isEmptyString('Hello')); 
// Output: false
    </code>
  </pre>
</div>

<div>
  <h2 style="color: #2ecc71;">25. Converting Case: toLocaleUpperCase, toLocaleLowerCase</h2>
  <p>Converting the case of a string based on the current locale using <code class="language-javascript">toLocaleUpperCase</code> and <code class="language-javascript">toLocaleLowerCase</code>.</p>
  <pre>
    <code class="language-javascript">
const str = 'Hello WORLD!';
console.log(str.toLocaleUpperCase()); 
// Output: 'HELLO WORLD!'
console.log(str.toLocaleLowerCase()); 
// Output: 'hello world!'
    </code>
  </pre>
</div>

<div>
  <h2 style="color: #f39c12;">26. Iterating Characters: forEach, for...of</h2>
  <p>Iterating over characters in a string using the <code class="language-javascript">forEach</code> method or the <code class="language-javascript">for...of</code> loop.</p>
  <pre>
    <code class="language-javascript">
const str = 'Hello';
// Using forEach
str.split('').forEach(char => {
  console.log(char);
});

// Using for...of loop
for (const char of str) {
  console.log(char);
}
    </code>
  </pre>
</div>

    `,
    contents: [
      {
        id: "stringMethods_1",
        title: "String Methods",
        images: [],
      },
    ],
  },
  {
    id: "arrayMethods",
    title: "Array Methods",
    about: `<div >
  <h2 style="color: #3498db;">1. Adding Elements: push, unshift</h2>
  <p>Add elements to the end or beginning of an array using the <code class="language-javascript">push</code> or <code class="language-javascript">unshift</code> methods.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const fruits = ['apple', 'banana'];</code> <strong>fruits.push('orange');</strong> <code class="language-javascript">console.log(fruits);</code> // Output: ["apple", "banana", "orange"]</p>
</div>

<div >
  <h2 style="color: #e74c3c;">2. Removing Elements: pop, shift</h2>
  <p>Remove elements from the end or beginning of an array using the <code class="language-javascript">pop</code> or <code class="language-javascript">shift</code> methods.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const fruits = ['apple', 'banana', 'orange'];</code> <strong>fruits.pop();</strong> <code class="language-javascript">console.log(fruits);</code> // Output: ["apple", "banana"]</p>
</div>

<div >
  <h2 style="color: #2ecc71;">3. Concatenating Arrays: concat</h2>
  <p>Concatenate two or more arrays together using the <code class="language-javascript">concat</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const fruits1 = ['apple', 'banana'];</code> <code class="language-javascript">const fruits2 = ['orange', 'grape'];</code> <strong>const allFruits = fruits1.concat(fruits2);</strong> <code class="language-javascript">console.log(allFruits);</code> // Output: ["apple", "banana", "orange", "grape"]</p>
</div>

<div >
  <h2 style="color: #f39c12;">4. Joining Array Elements: join</h2>
  <p>Join all elements of an array into a string using the <code class="language-javascript">join</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const fruits = ['apple', 'banana', 'orange'];</code> <strong>const fruitString = fruits.join(', ');</strong> <code class="language-javascript">console.log(fruitString);</code> // Output: "apple, banana, orange"</p>
</div>

<div >
  <h2 style="color: #9b59b6;">5. Reversing Array Elements: reverse</h2>
  <p>Reverse the order of elements in an array using the <code class="language-javascript">reverse</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>numbers.reverse();</strong> <code class="language-javascript">console.log(numbers);</code> // Output: [5, 4, 3, 2, 1]</p>
</div>

<div >
  <h2 style="color: #3498db;">6. Sorting Array Elements: sort</h2>
  <p>Sort the elements of an array in place and return the sorted array using the <code class="language-javascript">sort</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const fruits = ['banana', 'apple', 'orange'];</code> <strong>fruits.sort();</strong> <code class="language-javascript">console.log(fruits);</code> // Output: ["apple", "banana", "orange"]</p>
</div>

<div >
  <h2 style="color: #e74c3c;">7. Slicing Array: slice</h2>
  <p>Extract a section of an array and return a new array using the <code class="language-javascript">slice</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>const slicedNumbers = numbers.slice(1, 4);</strong> <code class="language-javascript">console.log(slicedNumbers);</code> // Output: [2, 3, 4]</p>
</div>

<div >
  <h2 style="color: #2ecc71;">8. Splicing Array: splice</h2>
  <p>Add or remove elements from an array at a specified index using the <code class="language-javascript">splice</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>numbers.splice(2, 0, 6, 7);</strong> <code class="language-javascript">console.log(numbers);</code> // Output: [1, 2, 6, 7, 3, 4, 5]</p>
</div>

<div >
  <h2 style="color: #f39c12;">9. Finding Elements: indexOf, lastIndexOf</h2>
  <p>Find the index of the first or last occurrence of an element in an array using the <code class="language-javascript">indexOf</code> or <code class="language-javascript">lastIndexOf</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5, 3];</code> <strong>console.log(numbers.indexOf(3));</strong> // Output: 2</p>
</div>

<div >
  <h2 style="color: #9b59b6;">10. Checking Array Contents: includes</h2>
  <p>Check if an array contains a certain element using the <code class="language-javascript">includes</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>console.log(numbers.includes(3));</strong> // Output: true</p>
</div>

<div >
  <h2 style="color: #3498db;">11. Flattening Nested Arrays: flat</h2>
  <p>Flatten a nested array structure using the <code class="language-javascript">flat</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const nestedArray = [1, [2, 3], [4, [5, 6]]];</code> <strong>console.log(nestedArray.flat(2));</strong> // Output: [1, 2, 3, 4, 5, 6]</p>
</div>

<div >
  <h2 style="color: #e74c3c;">12. Checking Array Length: length</h2>
  <p>Get the number of elements in an array using the <code class="language-javascript">length</code> property.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>console.log(numbers.length);</strong> // Output: 5</p>
</div>
<div >
<h2 style="color: #2ecc71;">13. Checking if All Elements Pass a Test: every</h2>
<p>Check if all elements in an array pass a certain condition using the <code class="language-javascript">every</code> method.</p>
<p><strong>Example:</strong> <code class="language-javascript">const numbers = [2, 4, 6, 8, 10];</code> <strong>console.log(numbers.every(num => num % 2 === 0));</strong> // Output: true</p>
</div>

<div >
<h2 style="color: #f39c12;">14. Checking if Any Element Passes a Test: some</h2>
<p>Check if any element in an array passes a certain condition using the <code class="language-javascript">some</code> method.</p>
<p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>console.log(numbers.some(num => num % 2 === 0));</strong> // Output: true</p>
</div>

<div >
<h2 style="color: #9b59b6;">15. Filtering Elements: filter</h2>
<p>Create a new array with elements that pass a certain condition using the <code class="language-javascript">filter</code> method.</p>
<p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>const evenNumbers = numbers.filter(num => num % 2 === 0);</strong> <code class="language-javascript">console.log(evenNumbers);</code> // Output: [2, 4]</p>
</div>

<div >
<h2 style="color: #3498db;">16. Mapping Elements: map</h2>
<p>Create a new array by applying a function to each element in the original array using the <code class="language-javascript">map</code> method.</p>
<p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>const squaredNumbers = numbers.map(num => num * num);</strong> <code class="language-javascript">console.log(squaredNumbers);</code> // Output: [1, 4, 9, 16, 25]</p>
</div>

<div >
<h2 style="color: #e74c3c;">17. Reducing Elements: reduce</h2>
<p>Reduce the elements of an array to a single value using the <code class="language-javascript">reduce</code> method.</p>
<p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>const sum = numbers.reduce((total, num) => total + num, 0);</strong> <code class="language-javascript">console.log(sum);</code> // Output: 15</p>
</div>

<div >
<h2 style="color: #2ecc71;">18. Finding Elements: find, findIndex</h2>
<p>Find the first element in an array that satisfies a provided testing function using the <code class="language-javascript">find</code> method. Find the index of the first element in an array that satisfies a provided testing function using the <code class="language-javascript">findIndex</code> method.</p>
<p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>console.log(numbers.find(num => num > 3));</strong> // Output: 4</p>
</div>

<div >
<h2 style="color: #f39c12;">19. Copying Arrays: slice, spread operator</h2>
<p>Create a shallow copy of an array using the <code class="language-javascript">slice</code> method or the spread operator (<code class="language-javascript">...</code>).</p>
<p><strong>Example:</strong> <code class="language-javascript">const originalArray = [1, 2, 3];</code> <strong>const copyArray1 = originalArray.slice();</strong> <strong>const copyArray2 = [...originalArray];</strong> <code class="language-javascript">console.log(copyArray1);</code> // Output: [1, 2, 3]</p>
</div>

<div >
<h2 style="color: #9b59b6;">20. Filling Arrays: fill</h2>
<p>Fill all elements of an array from a start index to an end index with a static value using the <code class="language-javascript">fill</code> method.</p>
<p><strong>Example:</strong> <code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code> <strong>numbers.fill(0, 2, 4);</strong> <code class="language-javascript">console.log(numbers);</code> // Output: [1, 2, 0, 0, 5]</p>
</div>

<div style="margin-bottom: 20px;    padding: 15px;">
  <h2 style="color: #3498db; ">21. Converting Array-Like Objects: Array.from</h2>
  <p>Create a new array instance from an array-like or iterable object using <code class="language-javascript">Array.from</code>.</p>
  <p><strong>Example 1:</strong> <code class="language-javascript">const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };</code><br><strong>const newArray = Array.from(arrayLike);</strong><br><code class="language-javascript">console.log(newArray);</code> <br>// Output: ['a', 'b', 'c']</p>
  <p><strong>Example 2:</strong> <code class="language-javascript">const iterable = 'hello';</code><br><strong>const newArray = Array.from(iterable, x => x.toUpperCase());</strong><br><code class="language-javascript">console.log(newArray);</code> <br>// Output: ['H', 'E', 'L', 'L', 'O']</p>
</div>
`,
    contents: [
      {
        id: "arrayMethods_1",
        title: "Array Methods",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FarrayMethods%2F1.jpg?alt=media&token=fd300cbc-82d0-4879-86a0-929b6cc67c21",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FarrayMethods%2F2.jpg?alt=media&token=7a4ed848-4909-44b0-a2b4-1c11d9b3e0d4",
        ],
      },
      {
        id: "arrayMethods_2",
        title: "Sort() vs toSorted()",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FarrayMethods%2FsortVsToBeSorted%2F1.jpg?alt=media&token=37c5b390-cca0-42ce-b4f3-00c0b64d1313",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FarrayMethods%2FsortVsToBeSorted%2F2.jpg?alt=media&token=7ff0d7b8-9d14-4bbb-a724-f64837a21817",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FarrayMethods%2FsortVsToBeSorted%2F3.jpg?alt=media&token=e553ba91-ff3b-4d08-83fe-492ca1ce76e0",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FarrayMethods%2FsortVsToBeSorted%2F4.jpg?alt=media&token=78120bb1-1067-4441-a722-f83ff7f8b2b0",
        ],
      },
    ],
  },
  {
    id: "objectMethods",
    title: "Object Methods",
    about: `<div >
      <h2 style="color: #e74c3c;">1. Accessing Object Properties: dot notation, bracket notation</h2>
      <p>Access properties of an object using dot notation or bracket notation.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> 
      <strong>console.log(person.name);</strong> // Output: "John"</p>
    </div>
    
    <div >
      <h2 style="color: #2ecc71;">2. Adding or Updating Object Properties: dot notation, bracket notation</h2>
      <p>Add new properties to an object or update existing properties using dot notation or bracket notation.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> <strong>person.city = 'New York';</strong> 
      <code class="language-javascript">console.log(person);</code> // Output: { name: 'John', age: 30, city: 'New York' }</p>
    </div>
    
    <div >
      <h2 style="color: #f39c12;">3. Removing Object Properties: delete keyword</h2>
      <p>Remove properties from an object using the <code class="language-javascript">delete</code> keyword.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> 
      <strong>delete person.age;</strong> <code class="language-javascript">console.log(person);</code> // Output: { name: 'John' }</p>
    </div>
    
    <div >
      <h2 style="color: #9b59b6;">4. Checking if Object has Property: in operator</h2>
      <p>Check if an object has a specific property using the <code class="language-javascript">in</code> operator.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> 
      <strong>console.log('age' in person);</strong> // Output: true</p>
    </div>
    
    <div >
      <h2 style="color: #3498db;">5. Getting Object Keys: Object.keys</h2>
      <p>Retrieve an array of all keys in an object using the <code class="language-javascript">Object.keys</code> method.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> 
      <strong>console.log(Object.keys(person));</strong> // Output: ["name", "age"]</p>
    </div>
    
    <div >
      <h2 style="color: #e74c3c;">6. Getting Object Values: Object.values</h2>
      <p>Retrieve an array of all values in an object using the <code class="language-javascript">Object.values</code> method.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> 
      <strong>console.log(Object.values(person));</strong> // Output: ["John", 30]</p>
    </div>
    
    <div >
      <h2 style="color: #2ecc71;">7. Getting Object Entries: Object.entries</h2>
      <p>Retrieve an array of all key-value pairs in an object using the <code class="language-javascript">Object.entries</code> method.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> 
      <strong>console.log(Object.entries(person));</strong> // Output: [["name", "John"], ["age", 30]]</p>
    </div>
    
    <div >
      <h2 style="color: #f39c12;">8. Copying Objects: Object.assign, spread operator</h2>
      <p>Create a shallow copy of an object using <code class="language-javascript">Object.assign</code> method or the spread operator (<code class="language-javascript">...</code>).</p>
      <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> <strong>const copiedPerson = Object.assign({}, person);
      </strong> <code class="language-javascript">console.log(copiedPerson);</code> // Output: { name: 'John', age: 30 }</p>
    </div>
    
    <div >
      <h2 style="color: #9b59b6;">9. Merging Objects: Object.assign</h2>
      <p>Merge two or more objects into a single object using <code class="language-javascript">Object.assign</code> method.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John' };</code> <code class="language-javascript">const info = { age: 30, city: 'New York' };</code> 
      <strong>const mergedObject = Object.assign({}, person, info);</strong> <code class="language-javascript">console.log(mergedObject);</code> 
      // Output: { name: 'John', age: 30, city: 'New York' }</p>
    </div>
    
    <div >
      <h2 style="color: #3498db;">10. Checking Object Equality: JSON.stringify</h2>
      <p>Check if two objects are equal by converting them to JSON strings using <code class="language-javascript">JSON.stringify</code> method.</p>
      <p><strong>Example:</strong> <code class="language-javascript">const obj1 = { name: 'John', age: 30 };</code> <code class="language-javascript">const obj2 = { age: 30, name: 'John' };</code> 
      <strong>console.log(JSON.stringify(obj1) === JSON.stringify(obj2));</strong> // Output: true</p>
    </div>

    <div >
  <h2 style="color: #e74c3c;">11. Checking Object Equality: isEqual method (library like lodash)</h2>
  <p>Check if two objects are deeply equal using a method like <code class="language-javascript">isEqual</code> from a library like lodash.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const obj1 = { name: 'John', age: 30 };</code> <code class="language-javascript">const obj2 = { age: 30, name: 'John' };</code> 
  <strong>console.log(_.isEqual(obj1, obj2));</strong> // Output: true</p>
</div>

<div >
  <h2 style="color: #2ecc71;">12. Freezing Objects: Object.freeze</h2>
  <p>Prevent any modifications to an object, including adding, updating, or deleting properties, using <code class="language-javascript">Object.freeze</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> <strong>Object.freeze(person);</strong> <code class="language-javascript">person.age = 40;</code> 
  <strong>console.log(person.age);</strong> // Output: 30</p>
</div>

<div >
  <h2 style="color: #f39c12;">13. Sealing Objects: Object.seal</h2>
  <p>Prevent adding or deleting properties from an object, but still allow property values to be changed using <code class="language-javascript">Object.seal</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> <strong>Object.seal(person);</strong> <code class="language-javascript">person.age = 40;</code> 
  <strong>console.log(person.age);</strong> // Output: 40</p>
</div>

<div >
  <h2 style="color: #9b59b6;">14. Cloning Objects: Object.create</h2>
  <p>Create a new object that inherits properties from another object using <code class="language-javascript">Object.create</code> method.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> <code class="language-javascript">const clonedPerson = Object.create(person);</code> 
  <strong>console.log(clonedPerson.name);</strong> // Output: "John"</p>
</div>

<div >
  <h2 style="color: #3498db;">15. Object Prototypes and Prototypal Inheritance: Prototype Chain</h2>
  <p>Understand the concept of object prototypes and prototypal inheritance, where objects inherit properties and methods from other objects through the prototype chain.</p>
  <p><strong>Example:</strong> <code class="language-javascript">function Person(name, age) { this.name = name; this.age = age; }</code> <code class="language-javascript">Person.prototype.greet = function() { console.log('Hello, my name is' + this.name); };</code> <code class="language-javascript">const john = new Person('John', 30);</code> <strong>john.greet();
  </strong> // Output: "Hello, my name is John"</p>
</div>
<div >
  <h2 style="color: #e74c3c;">16. Object Destructuring: Destructuring Assignment</h2>
  <p>Extract specific properties from an object and assign them to variables using destructuring assignment.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> <code class="language-javascript">const { name, age } = person;</code> 
  <strong>console.log(name, age);</strong> // Output: "John 30"</p>
</div>

<div >
  <h2 style="color: #2ecc71;">17. Object Spread Syntax: Spread Operator</h2>
  <p>Copy properties from one object into another object using the spread operator.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> <code class="language-javascript">const details = { ...person, city: 'New York' };</code> 
  <strong>console.log(details);</strong> // Output: { name: 'John', age: 30, city: 'New York' }</p>
</div>

<div >
  <h2 style="color: #f39c12;">18. Object.keys, Object.values, Object.entries</h2>
  <p>Get the keys, values, or key-value pairs of an object using <code class="language-javascript">Object.keys</code>, <code class="language-javascript">Object.values</code>, or <code class="language-javascript">Object.entries</code>.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const person = { name: 'John', age: 30 };</code> 
  <strong>console.log(Object.keys(person));</strong> // Output: ['name', 'age']</p>
</div>

<div >
  <h2 style="color: #9b59b6;">19. Object.fromEntries</h2>
  <p>Create an object from an array of key-value pairs using <code class="language-javascript">Object.fromEntries</code>.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const entries = [['name', 'John'], ['age', 30]];</code> 
  <strong>console.log(Object.fromEntries(entries));</strong> // Output: { name: 'John', age: 30 }</p>
</div>

<div >
  <h2 style="color: #3498db;">20. Object.assign</h2>
  <p>Copy the values of all enumerable own properties from one or more source objects to a target object using <code class="language-javascript">Object.assign</code>.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const target = { a: 1, b: 2 };</code> <code class="language-javascript">const source = { b: 4, c: 5 };</code>
  <strong>console.log(Object.assign(target, source));</strong> // Output: { a: 1, b: 4, c: 5 }</p>
</div>

<div >
  <h2 style="color: #e74c3c;">21. Object.defineProperty, Object.defineProperties</h2>
  <p>Add a new property to an object, or modify an existing one, using <code class="language-javascript">Object.defineProperty</code> or <code class="language-javascript">Object.defineProperties</code>.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const obj = {};</code> <code class="language-javascript">Object.defineProperty(obj, 'name', { value: 'John', writable: true });
  </code> <strong>console.log(obj.name);</strong> // Output: "John"</p>
</div>

<div >
  <h2 style="color: #2ecc71;">22. Object.getOwnPropertyDescriptors</h2>
  <p>Get all own property descriptors of an object using <code class="language-javascript">Object.getOwnPropertyDescriptors</code>.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const obj = { name: 'John' };
  </code> <strong>console.log(Object.getOwnPropertyDescriptors(obj));</strong>
  // Output: { name: { value: 'John', writable: true, enumerable: true, configurable: true } }</p>
</div>

<div >
  <h2 style="color: #f39c12;">23. Object.preventExtensions</h2>
  <p>Prevent new properties from being added to an object using <code class="language-javascript">Object.preventExtensions</code>.</p>
  <p><strong>Example:</strong> <code class="language-javascript">const obj = { name: 'John' };</code>
  <strong>Object.preventExtensions(obj);</strong> <code class="language-javascript">obj.age = 30;</code>
  <strong>console.log(obj.age);</strong>
  // Output: undefined</p>
</div>

<div style="   

    `,
    contents: [
      {
        id: "objectMethods_1",
        title: "Important Topics",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FObjectMethods%2Fimportant%20topics%20overview%2F1.jpg?alt=media&token=c5717440-0ee3-4c83-be49-4a923f1d9b2c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FObjectMethods%2Fimportant%20topics%20overview%2F2.jpg?alt=media&token=f1299e2f-b831-425c-938f-d5a24ec24c1d",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FObjectMethods%2Fimportant%20topics%20overview%2F3.jpg?alt=media&token=122f62ed-8325-4e61-b33e-c466f94c095f",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FObjectMethods%2Fimportant%20topics%20overview%2F4.jpg?alt=media&token=6f33bcb4-f8f1-40c7-b991-52b3be10d25a",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FObjectMethods%2Fimportant%20topics%20overview%2F5.jpg?alt=media&token=75a56391-d8af-4b79-8eb2-7e98ba1b9912",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FObjectMethods%2Fimportant%20topics%20overview%2F6.jpg?alt=media&token=6a6f89d3-4ec7-4a8c-8967-2444d048ac02",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FObjectMethods%2Fimportant%20topics%20overview%2F7.jpg?alt=media&token=865788b5-2431-40cf-9e73-8910d8c5525b",
        ],
      },
    ],
  },

  {
    id: "prototypes",
    title: "Prototypes",
    contents: [
      {
        id: "prototypes_1",
        title: "Prototypes Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fprotoypes%2F1.jpg?alt=media&token=43e17287-4062-4b93-87d8-f95aa10db6c8",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fprotoypes%2F2.jpg?alt=media&token=04f9065a-ae4c-4314-9df1-e1bc0e1d64f9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fprotoypes%2F3.jpg?alt=media&token=3389cfdf-a9eb-40b6-9472-a350237dc320",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fprotoypes%2F4.jpg?alt=media&token=646a6dba-55e6-47df-a46f-d0826a864500",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fprotoypes%2F5.jpg?alt=media&token=e59c8220-8b35-4f56-8cae-3343ecd11e9e",
        ],
      },
    ],
  },
  {
    id: "nullishCoalescingOperator",
    title: "Nullish Coalescing Operator",
    contents: [
      {
        id: "nullishCoalescingOperator_1",
        title: "Nullish Coalescing Operator",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FNullish%20coalescing%20operator%2F1.jpg?alt=media&token=98f0f665-3920-4602-8ad4-1fa83ebfdf74",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FNullish%20coalescing%20operator%2F2.jpg?alt=media&token=c94c81dc-9d45-4735-8eb7-bae9dbf06550",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FNullish%20coalescing%20operator%2F3.jpg?alt=media&token=c324bbb1-0275-4566-8a71-8eab682c32c9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FNullish%20coalescing%20operator%2F4.jpg?alt=media&token=469b296a-3d73-4c00-b67e-072f1c7c6b09",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FNullish%20coalescing%20operator%2F5.jpg?alt=media&token=b9ff1ba4-342b-4333-a3b6-c93bace2a266",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FNullish%20coalescing%20operator%2F6.jpg?alt=media&token=351ac763-9c63-4fb4-80f1-550f7a1a5d51",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FNullish%20coalescing%20operator%2F7.jpg?alt=media&token=3622ab16-55df-43c2-9df2-be0c9129fa99",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FNullish%20coalescing%20operator%2F8.jpg?alt=media&token=fbcebda1-3eb5-4bae-8436-3698d222a3be",
        ],
      },
    ],
  },
  {
    id: "destructuring",
    title: "Destructuring",
    about: `
      <div>
        <h2 style="color: #3498db;">1. Introduction to Destructuring</h2>
        <p>Understanding the need for destructuring in JavaScript. Overview of how destructuring enhances code readability.</p>
      </div>
  
      <div>
        <h2 style="color: #e74c3c;">2. Basic Object Destructuring</h2>
        <p>Syntax and usage of object destructuring. Practical examples illustrating basic object destructuring.</p>
      </div>
  
      <div>
        <h2 style="color: #2ecc71;">3. Array Destructuring</h2>
        <p>Syntax and usage of array destructuring. Examples demonstrating array destructuring in different scenarios.</p>
      </div>
  
      <div>
        <h2 style="color: #f39c12;">4. Destructuring with Default Values</h2>
        <p>Handling undefined values using default values. Use cases for providing default values during destructuring.</p>
      </div>
  
      <div>
        <h2 style="color: #9b59b6;">5. Destructuring with Aliases</h2>
        <p>Creating aliases for variables during destructuring. Enhancing code clarity and readability.</p>
      </div>
  
      <div>
        <h2 style="color: #3498db;">6. Nested Destructuring</h2>
        <p>Handling nested structures with destructuring. Extracting values from nested objects and arrays.</p>
      </div>
  
      <div>
        <h2 style="color: #e74c3c;">7. Destructuring Function Parameters</h2>
        <p>Utilizing destructuring for cleaner function parameter syntax. Passing objects and arrays as function arguments.</p>
      </div>
  
      <div>
        <h2 style="color: #2ecc71;">8. Rest and Spread in Destructuring</h2>
        <p>Understanding the use of rest and spread operators in destructuring. Managing variable assignment dynamically.</p>
      </div>
  
      <div>
        <h2 style="color: #f39c12;">9. Destructuring in ES6 Modules</h2>
        <p>Applying destructuring in ES6 modules. Efficiently importing and exporting variables from module scripts.</p>
      </div>
  
      <div>
        <h2 style="color: #9b59b6;">10. Advanced Destructuring Techniques</h2>
        <p>Exploring advanced techniques such as dynamic property names and object restructuring patterns.</p>
      </div>
    `,
    contents: [
      {
        id: "destructuring_1",
        title: "Introduction",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdestructuring%2Fintroduction%2F1.png?alt=media&token=3e66820f-56d7-4fe4-860d-7afcdab90dae",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdestructuring%2Fintroduction%2F2.png?alt=media&token=e029094f-a56f-47f7-8187-925870bf6e16",
        ],
      },
      {
        id: "destructuring_2",
        title: "Object Destructuring",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdestructuring%2Fobject%2F1.png?alt=media&token=dfe739dc-f316-421e-8659-8cacd97f12a1",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdestructuring%2Fobject%2F2.png?alt=media&token=b3545076-1223-4128-a6fc-e6599facc53b",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdestructuring%2Fobject%2F3.png?alt=media&token=d107c21c-2383-4130-abd9-424cf92e0f1c",
        ],
      },
      {
        id: "destructuring_3",
        title: "Array Destructuring",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdestructuring%2Farray%2F1.png?alt=media&token=3507bb26-941b-44f2-9f2c-25391c1b91a8",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fdestructuring%2Farray%2F2.png?alt=media&token=fb2ea2b5-1ae0-4cc7-a4e1-dc5e6e72b12d",
        ],
      },
    ],
  },
  {
    id: "asynchronousJavaScript",
    title: "Asynchronous JavaScript",
    about: `<div>
    <h2 style="color: #3498db;">1. Introduction to Fetch API</h2>
    <p>Overview of the Fetch API in JavaScript for making network requests. Understanding the basic syntax and usage of the Fetch API.</p>
    <p><strong>Example:</strong> <code class="language-javascript">fetch('https://api.example.com/data')</code></p>
  </div>

  <div>
    <h2 style="color: #e74c3c;">2. Fetching Data with Fetch API</h2>
    <p>Learn how to use the Fetch API to make GET requests to fetch data from a server or external API. Handling response data using promises.</p>
    <p><strong>Example:</strong> <code class="language-javascript">fetch('https://api.example.com/data')</code></p>
  </div>

  <div>
    <h2 style="color: #2ecc71;">3. Error Handling with Fetch API</h2>
    <p>Understanding how to handle errors when using the Fetch API. Techniques for catching and handling different types of errors.</p>
    <p><strong>Example:</strong> <pre><code class="language-javascript">fetch('https://api.example.com/data').catch(error => console.error(error))</code></pre></p>
  </div>

  <div>
    <h2 style="color: #f39c12;">4. Making POST Requests with Fetch API</h2>
    <p>Exploring how to use the Fetch API to make POST requests to send data to a server. Examples of sending form data and JSON data.</p>
    <p><strong>Example:</strong> </p>
    <pre>
    <code class="language-javascript">
    fetch('https://api.example.com/data',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key: 'value'})
    })
    </code>
    </pre>
    
    
  </div>

  <div>
    <h2 style="color: #9b59b6;">5. Introduction to Async/Await</h2>
    <p>Introduction to asynchronous programming in JavaScript using async and await keywords. Simplifying asynchronous code with async functions.</p>
    <p><strong>Example:</strong> </p>
    <pre>
    <code class="language-javascript">
    async function fetchData() {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    }
    </code>
    </pre>    
  </div>

  <div>
    <h2 style="color: #3498db;">6. Using Async/Await with Fetch API</h2>
    <p>Combining async/await with the Fetch API for making asynchronous network requests. Writing cleaner and more readable asynchronous code.</p>
    <p><strong>Example:</strong> </p>
    <pre>
<code class="language-javascript">
async function fetchData() { 
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
</code>
</pre>
  </div>
  <div>
    <h2 style="color: #e74c3c;">7. Error Handling with Async/Await</h2>
    <p>Learn how to handle errors when using async/await for asynchronous operations. Using try...catch blocks to handle errors gracefully.</p>
    <p><strong>Example:</strong> </p>
    <pre>
    <code class="language-javascript">
    async function fetchData() { 
        try { 
            const response = await fetch('https://api.example.com/data'); 
            const data = await response.json(); 
            return data; 
        } catch(error) { 
            console.error(error); 
        } 
    }
    </code>
    </pre>    
  </div>
  <div>
    <h2 style="color: #2ecc71;">8. Chaining Async Functions</h2>
    <p>Techniques for chaining multiple async functions together for sequential asynchronous operations. Understanding the order of execution.</p>
    <p><strong>Example:</strong> </p>
    <pre>
    <code class="language-javascript">
    async function getData() {
        const data1 = await fetch('https://api.example.com/data1');
        const data2 = await fetch('https://api.example.com/data2');
        return [data1, data2];
    }
    </code>
    </pre>    
  </div>
  <div>
    <h2 style="color: #f39c12;">9. Handling Multiple Concurrent Requests</h2>
    <p>Strategies for handling multiple concurrent requests using the Fetch API. Exploring Promise.all() and Promise.race() for managing multiple asynchronous operations.</p>
    <p><strong>Example:</strong> </p>
    <pre>
<code class="language-javascript">
const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
const requests = urls.map(url => fetch(url));

Promise.all(requests).then((responses) => 
    responses.forEach((response) => 
        console.log(response)));
</code>
</pre>
  </div>
  <div>
    <h2 style="color: #9b59b6;">10. Fetch API and Cross-Origin Requests</h2>
    <p>Understanding cross-origin requests and how the Fetch API handles them. Techniques for enabling cross-origin resource sharing (CORS) on servers.</p>
    <p><strong>Example:</strong> <code class="language-javascript">fetch('https://api.example.com/data', { mode: 'cors' })</code></p>
  </div>

  <div>
    <h2 style="color: #3498db;">11. Fetch API and Authentication</h2>
    <p>Using the Fetch API to handle authentication in JavaScript applications. Examples of sending authentication tokens and credentials with Fetch requests.</p>
    <p><strong>Example:</strong> </p>
    <pre>
<code class="language-javascript">
fetch('https://api.example.com/login', {
    method: 'POST',
    body: JSON.stringify({ username: 'user', password: 'pass' }),
    headers: { 'Content-Type': 'application/json' }
})
</code>
</pre>
  </div>
  <div>
    <h2 style="color: #e74c3c;">12. Introduction to Promises</h2>
    <p>Understanding the concept of promises in JavaScript for handling asynchronous operations. Syntax and usage of promises for cleaner asynchronous code.</p>
    <p><strong>Example:</strong> </p>
    <pre>
    <code class="language-javascript">
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve('Data fetched successfully'); 
        }, 2000); 
    });
    
    fetchData.then(data => console.log(data)).catch(error => console.error(error));
    </code>
    </pre>    
  </div>
  <div>
    <h2 style="color: #2ecc71;">13. Promise Methods: then(), catch(), finally()</h2>
    <p>Exploring the various methods available on promises such as then(), catch(), and finally(). Understanding their usage and order of execution.</p>
    <p><strong>Example:</strong> </p>
    <pre>
    <code class="language-javascript">
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        .finally(() => console.log('Request completed.'));
    </code>
    </pre>    
  </div>

  <div>
    <h2 style="color: #f39c12;">14. Promisify Callback-Based Functions</h2>
    <p>Converting callback-based functions to promise-based functions using the util.promisify() method in Node.js. Simplifying callback hell with promises.</p>
    <p><strong>Example:</strong> </p>
    <pre>
<code class="language-javascript">
const util = require('util');
const fs = require('fs');
const readFileAsync = util.promisify(fs.readFile);
readFileAsync('example.txt', 'utf8')
    .then(data => console.log(data))
    .catch(error => console.error(error));
</code>
</pre>
  </div>
  <div>
    <h2 style="color: #9b59b6;">15. Advanced Promise Patterns: Promise.allSettled(), Promise.any()</h2>
    <p>Discover advanced promise patterns introduced in ES2020 including Promise.allSettled() and Promise.any(). Handling multiple promises with different resolution states.</p>
    <p><strong>Example:</strong> </p>
    <pre>
    <code class="language-javascript">
    const promises = [fetch('https://api.example.com/data1'), fetch('https://api.example.com/data2')];
    Promise.allSettled(promises)
        .then(results => results.forEach(result => console.log(result.status)));
    </code>
    </pre>
  </div>
  `,
    contents: [
      {
        id: "asynchornousJs_1",
        title: "Introduction to Fetch API",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fintroduction%2F1.jpg?alt=media&token=081a7849-d890-4205-9350-d8c3a2b704f9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fintroduction%2F2.jpg?alt=media&token=8d1c07a9-a182-448d-b039-23ffb2509ec3",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fintroduction%2F3.jpg?alt=media&token=ed79e8b3-914f-4bdf-aaf5-10635e380a76",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fintroduction%2F4.png?alt=media&token=1db40648-c990-4c31-ad50-c8c93536a9ae",
        ],
      },
      {
        id: "asynchornousJs_2",
        title: "Fetch Methods",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fadditionals%2F1.jpg?alt=media&token=05ac6bc3-b85f-4093-9c00-0271041c0984",
        ],
      },
      {
        id: "asynchornousJs_3",
        title: "Making GET and POST request",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fget%20and%20post%20api%2F1.png?alt=media&token=6e615ded-86d1-48ed-b67f-fc452f663623",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fget%20and%20post%20api%2F2.png?alt=media&token=6ab5b023-491d-4e8f-b406-584d63d3f700",
        ],
      },
      {
        id: "asynchornousJs_4",
        title: "Error handling",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Ferror%20handling%2F1.png?alt=media&token=8e8da748-55d1-4427-97c1-a65717979b51",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Ferror%20handling%2F2.png?alt=media&token=8d5d4921-fc16-4788-a95b-e32ca57bf5ef",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Ferror%20handling%2F3.png?alt=media&token=27f1fde5-2c6c-4666-a0b4-4900b3bf69a2",
        ],
      },
      {
        id: "asynchronusJs_5",
        title: "API Request Using AXIOS",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FAxios%2F1.jpg?alt=media&token=d5ced8fd-0963-4660-9e4f-252c6f1aae43",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FAxios%2F2.jpg?alt=media&token=fb69bd68-701f-46f5-936a-43bb08a8d7e2",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FAxios%2F3.jpg?alt=media&token=afb622a3-7832-40dd-8914-9c434ae0766a",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FAxios%2F4.jpg?alt=media&token=bda36ae6-014c-4cbc-b507-3670147fd8a0",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FAxios%2F5.jpg?alt=media&token=c18c01c2-d1c1-4a2f-84c3-8d5fa3001ef5",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FAxios%2F6.jpg?alt=media&token=b26129f0-61c3-4ad9-9610-6faf5d1658ad",
        ],
      },
      {
        id: "asynchronusJs_6",
        title: "What is Asynchronus",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FIntroduction%20to%20Asynchronus%2F1.jpg?alt=media&token=09a2f489-c310-4ddc-bcc2-2827dc2886f7",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FIntroduction%20to%20Asynchronus%2F2.jpg?alt=media&token=31525edd-c49f-4559-ac82-0a08a15e3a2a",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FIntroduction%20to%20Asynchronus%2F3.jpg?alt=media&token=ff1c08d9-bcea-4a02-8374-bcdd3fec03f6",
        ],
      },
      {
        id: "asynchornousJs_7",
        title: "Async Await",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FasyncAwait%2F1.png?alt=media&token=557183ef-c19e-4d71-9d1c-6e3e418f11a3",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FasyncAwait%2F2.png?alt=media&token=7ba32647-a232-462e-8809-adf0c98a0c91",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FasyncAwait%2F3.png?alt=media&token=6bcf48de-bfe6-4236-8a67-f94ed60dc2e8",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2FasyncAwait%2F4.png?alt=media&token=7f871bca-32e4-4371-8e0d-97a7e4d8d6fa",
        ],
      },
      {
        id: "asynchornousJs_8",
        title: "Error Handling -Async Await",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Ferror%20handling%20with%20async%20await%2F1.png?alt=media&token=3fa427d5-62ab-4ca1-a45b-e7d1aa706dfa",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Ferror%20handling%20with%20async%20await%2F2.png?alt=media&token=2bc75bf3-5a74-4cf8-9513-afecb5d9e019",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Ferror%20handling%20with%20async%20await%2F3.png?alt=media&token=cb9b0d38-5688-4000-9dd9-c7f847ebcc69",
        ],
      },
      {
        id: "asynchornousJs_9",
        title: "Promise in JS",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fpromise%2F1.png?alt=media&token=0259f782-f8c2-4172-a68f-a19fd6a172b3",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fpromise%2F2.png?alt=media&token=93b736ef-dfd7-430c-a32b-15fdac03d29c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fpromise%2F3.png?alt=media&token=994fddbf-838a-415a-9dc1-d0507ade18d5",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fpromise%2F4.png?alt=media&token=e08a542f-c140-451f-b83a-40cbdc700292",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fpromise%2F5.png?alt=media&token=55eed454-963e-491a-82f7-382106509541",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fpromise%2F6.png?alt=media&token=8d6f5e79-9a02-4664-b39a-49308f3de0bf",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fpromise%2F7.png?alt=media&token=dbab3dc6-0fe9-4caa-ac99-cc6c935c6925",
        ],
      },
      {
        id: "asynchornousJs_10",
        title: "Advanced Promises",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fadvanced%20promises%2F1.png?alt=media&token=97f7bfc4-5b71-448c-a439-658688417a65",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fadvanced%20promises%2F2.png?alt=media&token=0f9f8dff-da14-46cb-83ce-0646d770bead",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fadvanced%20promises%2F3.png?alt=media&token=c888b2fc-38b2-498b-8220-d032f67ce489",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fadvanced%20promises%2F4.png?alt=media&token=cd68da74-ade1-4d55-b9e1-9404a6c00f8e",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FasynchronusJavascript%2Fadvanced%20promises%2F5.png?alt=media&token=44847ff6-6230-4b9a-87c2-fc1397f54014",
        ],
      },
    ],
  },
  {
    id: "modules",
    title: "Modules",
    about: `
    <div>
  <h2 style="color: #3498db;">1. Introduction to Modules</h2>
  <p>Modules in JavaScript provide a way to organize code into reusable components. With modules, you can encapsulate related functionality, variables, and data into separate files, making your codebase more manageable and maintainable.</p>
  <p>Example:</p>
  <pre>
    <code class="language-javascript">// module.js
    export const PI = 3.14;
    export function square(x) {
        return x * x;
    }
    </code>
  </pre>
</div>

<div>
  <h2 style="color: #e74c3c;">2. Exporting and Importing Modules</h2>
  <p>To export members from a module, you can use the <code class="language-javascript">export</code> keyword. Then, in another module, you can import those exported members using the <code class="language-javascript">import</code> statement.</p>
  <p>Example:</p>
  <pre>
    <code class="language-javascript">// main.js
    import { PI, square } from './module.js';
    console.log(PI); // Output: 3.14
    console.log(square(2)); // Output: 4
    </code>
  </pre>
</div>

<div>
  <h2 style="color: #2ecc71;">3. Module Default Export</h2>
  <p>In addition to named exports, you can have a default export in a module. A default export represents the main value or functionality of the module.</p>
  <p>Example:</p>
  <pre>
    <code class="language-javascript">// module.js
    export default function greet(name) {
        console.log('Hello'+name);
    }
    </code>
  </pre>
  <pre>
    <code class="language-javascript">// main.js
    import myGreet from './module.js';
    myGreet('Alice'); // Output: Hello, Alice!
    </code>
  </pre>
</div>
<div>
  <h2 style="color: #3498db;">4. When to Use Named Exports vs Default Export</h2>
  <p>Named exports are ideal when you want to export multiple values or functions from a module, allowing you to import specific members by name in other modules.</p>
  <p>Default export is suitable for exporting a single value or primary functionality from a module, providing a simpler import syntax in consuming modules.</p>
  <p><strong>Use Case:</strong></p>
  <p>Suppose you have a utility module that contains several helper functions. In this scenario, you can use named exports to export each function individually, allowing consumers to import only the functions they need. However, if your module provides a main functionality or class, you might choose default export to export that primary entity, making it more convenient for consumers to import without worrying about the specific names.</p>
</div>

<div>
  <h2 style="color: #3498db;">5. More About JavaScript Modules</h2>
  <p>JavaScript modules are a way to organize code into reusable and maintainable units. They allow you to break down your application into smaller, manageable pieces, making it easier to develop, test, and maintain.</p>
  </br>
  <p><strong>Advantages of Using Modules:</strong></p>
  <ul>
    <li><strong>Encapsulation:</strong> Modules encapsulate code, preventing global namespace pollution and conflicts between variables and functions.</li>
    <li><strong>Reusability:</strong> Modules promote code reuse by allowing you to import and use functionality across different parts of your application.</li>
    <li><strong>Maintainability:</strong> Modular code is easier to maintain and refactor, as changes made to one module are less likely to impact other parts of the application.</li>
    <li><strong>Dependency Management:</strong> Modules help manage dependencies by clearly defining the dependencies of each module and ensuring they are resolved correctly.</li>
    <li><strong>Scalability:</strong> As your application grows, modules provide a scalable architecture that allows you to add new features and functionality without introducing complexity.</li>
  </ul>
  </br>
  <p>JavaScript supports two main types of modules: CommonJS and ES modules (ESM). CommonJS modules are primarily used in Node.js environments, while ES modules are the standard for modern web browsers and newer versions of Node.js.</p>
  <p><strong>CommonJS Modules:</strong> CommonJS modules use <code class="language-javascript">require</code> and <code class="language-javascript">module.exports</code> to import and export functionality. They are synchronous and loaded on demand.</p>
  <p><strong>ES Modules (ESM):</strong> ES modules use <code class="language-javascript">import</code> and <code class="language-javascript">export</code> to define dependencies and expose functionality. They are asynchronous and support static analysis for better optimization.</p>
  <p>When choosing between CommonJS and ES modules, consider the environment in which your code will run and the features you require. For web development, ES modules are recommended due to their native support in modern browsers and improved performance characteristics.</p>
</div>

`,
    contents: [
      {
        id: "modules_1",
        title: "Modules",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fmodules%2F1.jpg?alt=media&token=2b584477-30ae-47cb-8c56-42c87a7b0fe9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fmodules%2F2.jpg?alt=media&token=db69d77b-37ac-488a-bf29-2bcd10723875",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fmodules%2F3.jpg?alt=media&token=050d80a8-2efc-4faf-998b-d4e23f3dfd67",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fmodules%2F4.jpg?alt=media&token=d002e10e-f702-453c-a091-64c91cb943dd",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fmodules%2F5.jpg?alt=media&token=9f7a58bf-1b3b-4625-9fdf-de8e5b7386c3",
        ],
      },
    ],
  },
  {
    id: "es6andNewFeatures",
    title: "ES6 & Other New Features",
    about: `
    <div>
  <h2 style="color: #3498db;">1. Introduction to ECMAScript 6 (ES6)</h2>
  <p>ECMAScript 6 (ES6), also known as ECMAScript 2015, is the sixth major release of the ECMAScript language specification. It brought significant enhancements and new features to JavaScript, making it more powerful and expressive for developers.</p>
</div>

<div>
  <h2 style="color: #e74c3c;">2. Key Features of ES6</h2>
  <p>ES6 introduced several key features and syntax enhancements, revolutionizing the way developers write JavaScript code. Some of the most notable features include:</p>
  <ul>
    <li><strong>Arrow Functions:</strong> A concise syntax for writing function expressions.</li>
    <li><strong>Template Literals:</strong> Enhanced string literals with embedded expressions.</li>
    <li><strong>Let and Const:</strong> Block-scoped variable declarations.</li>
    <li><strong>Destructuring:</strong> Extracting values from arrays and objects.</li>
    <li><strong>Default Parameters:</strong> Specifying default values for function parameters.</li>
    <li><strong>Rest and Spread Operators:</strong> Working with variable-length argument lists and iterable objects.</li>
    <li><strong>Classes:</strong> A more familiar syntax for defining constructor functions and prototypes.</li>
    <li><strong>Modules:</strong> A standardized way to organize and share code between files.</li>
    <li><strong>Promise:</strong> A cleaner syntax for handling asynchronous operations.</li>
    <li><strong>Async/Await:</strong> Simplifying asynchronous code and error handling.</li>
  </ul>
</div>

<div>
  <h2 style="color: #2ecc71;">3. New Changes in ES6 Code</h2>
  <p>In addition to introducing new features, ES6 also brought changes to the way JavaScript code is written. Some of the notable changes include:</p>
  <ul>
    <li><strong>Strict Mode:</strong> ES6 modules are automatically in strict mode, improving code safety and enabling optimizations.</li>
    <li><strong>Block-Scoped Variables:</strong> The introduction of <code class="language-javascript">let</code> and <code class="language-javascript">const</code> keywords allows for block-scoped variables, enhancing variable management and reducing bugs.</li>
    <li><strong>Enhanced Object Literals:</strong> Object literals can now have computed property names and method definitions, making object creation more flexible.</li>
    <li><strong>for...of Loop:</strong> The <code class="language-javascript">for...of</code> loop provides a cleaner syntax for iterating over iterable objects such as arrays and strings.</li>
    <li><strong>Symbol Data Type:</strong> ES6 introduced the <code class="language-javascript">Symbol</code> data type, which allows for the creation of unique identifiers, enhancing object property privacy and preventing naming collisions.</li>
    <li><strong>Template Strings:</strong> Template literals allow for multi-line strings and string interpolation, improving code readability.</li>
    <li><strong>Arrow Functions:</strong> Arrow functions provide a shorter syntax for defining functions and lexically bind the <code class="language-javascript">this</code> value, simplifying function context management.</li>
  </ul>
</div>

<div>
  <h2 style="color: #e74c3c;">4. Arrow Functions</h2>
  <p>Arrow functions, introduced in ECMAScript 6, provide a concise syntax for writing function expressions. They offer several advantages over traditional function expressions:</p>
  <ul>
    <li><strong>Shorter Syntax:</strong> Arrow functions allow you to write functions with a more concise syntax, reducing boilerplate code.</li>
    <li><strong>Lexical <code class="language-javascript">this</code>:</strong> Arrow functions do not have their own <code class="language-javascript">this</code> context; instead, they inherit <code class="language-javascript">this</code> from the surrounding code, which can help avoid common pitfalls related to <code class="language-javascript">this</code> binding in JavaScript.</li>
    <li><strong>No <code class="language-javascript">arguments</code> Object:</strong> Arrow functions do not have their own <code class="language-javascript">arguments</code> object, making them more predictable and easier to reason about.</li>
    <li><strong>Implicit Return:</strong> Arrow functions with a single expression automatically return the result of that expression, eliminating the need for explicit <code class="language-javascript">return</code> statements.</li>
    <li><strong>Non-Binding of <code class="language-javascript">arguments</code> Object:</strong> Since arrow functions do not have their own <code class="language-javascript">arguments</code> object, they do not shadow the <code class="language-javascript">arguments</code> of the enclosing scope, which can lead to more predictable behavior.</li>
  </ul>
  <p><strong>Example:</strong></p>
  <ul>
    <li><code class="language-javascript">// Traditional function expression</code></li>
    <li><code class="language-javascript">const add = function(a, b) {</code></li>
    <li><code class="language-javascript">  return a + b;</code></li>
    <li><code class="language-javascript">}</code></li>
    <br>
    <li><code class="language-javascript">// Arrow function</code></li>
    <li><code class="language-javascript">const add = (a, b) => a + b;</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #2ecc71;">5. Template Literals</h2>
  <p>Template literals, introduced in ECMAScript 6, provide an improved way to create strings in JavaScript, offering several advantages over traditional string concatenation:</p>
  <ul>
    <li><strong>Multi-line Strings:</strong> Template literals allow for multi-line strings without the need for escape characters, making code more readable.</li>
    <li><strong>String Interpolation:</strong> Template literals support string interpolation, enabling you to embed expressions directly within strings using placeholders.</li>
    <li><strong>Expression Evaluation:</strong> Expressions within template literals are evaluated, allowing for dynamic content generation.</li>
    <li><strong>Tagged Templates:</strong> Template literals can be tagged with a function, known as a tag function, which allows for custom string processing.</li>
  </ul>
  <p><strong>Example:</strong></p>
  <ul>
    <li><code class="language-javascript">// Traditional string concatenation</code></li>
    <li><code class="language-javascript">const name = 'John';</code></li>
    <li><code class="language-javascript">const greeting = 'Hello, ' + name + '!';</code></li>
    <br>
    <li><code class="language-javascript">// Template literal</code></li>
    <li><code class="language-javascript">const name = 'John';</code></li>
    <li><code class="language-javascript">const greeting = Hello, $ {name}!;</code></li>
  </ul>
</div>

<div>
  <h2 style="color: #f39c12;">6. for...of Loop</h2>
  <p>The for...of loop, introduced in ECMAScript 6, provides a more concise and readable syntax for iterating over iterable objects such as arrays, strings, maps, sets, and more. It offers several advantages over traditional for loops:</p>
  <ul>
    <li><strong>Iterable Objects:</strong> The for...of loop can iterate over any object that is iterable, including arrays, strings, maps, sets, and custom iterable objects.</li>
    <li><strong>Readability:</strong> The syntax of the for...of loop is simpler and more readable compared to traditional for loops, especially when iterating over arrays.</li>
    <li><strong>Automatic Termination:</strong> The for...of loop automatically terminates when all elements of the iterable have been processed, eliminating the need for explicit loop condition management.</li>
    <li><strong>Iteration Order:</strong> The for...of loop iterates over elements in the order they appear in the iterable, making it suitable for scenarios where the order of iteration matters.</li>
    <li><strong>Support for Iterators:</strong> The for...of loop internally uses iterators, allowing for greater flexibility and customization in defining iterable behavior.</li>
  </ul>
  <p><strong>Example:</strong></p>
  <ul>
    <li><code class="language-javascript">// Iterating over an array</code></li>
    <li><code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code></li>
    <li><code class="language-javascript">for (const num of numbers) {</code></li>
    <li><code class="language-javascript">  console.log(num);</code></li>
    <li><code class="language-javascript">}</code></li>
    <br>
    <li><code class="language-javascript">// Iterating over a string</code></li>
    <li><code class="language-javascript">const str = 'Hello';</code></li>
    <li><code class="language-javascript">for (const char of str) {</code></li>
    <li><code class="language-javascript">  console.log(char);</code></li>
    <li><code class="language-javascript">}</code></li>
  </ul>
</div>


`,
    contents: [
      {
        id: "es6_1",
        title: "ES6 Features",
      },
      {
        id: "es6_2",
        title: "New JS Features",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fnew%20features%2F1.jpg?alt=media&token=b5f35b72-bb4b-4d38-8560-f5564a6cbf99",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fnew%20features%2F2.jpg?alt=media&token=19de38c5-dd28-4a96-b014-55bba96670a3",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fnew%20features%2F3.jpg?alt=media&token=1a70b20e-790e-40e5-8ffd-982adc9edf24",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fnew%20features%2F4.jpg?alt=media&token=b3a92ad4-60b8-4b87-a25a-6f8cd7fbca77",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fnew%20features%2F5.jpg?alt=media&token=1af6f0fd-61f2-4ee1-bf22-bdbe89326cd1",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fnew%20features%2F6.jpg?alt=media&token=f2bbf441-00c8-40eb-82e1-9d8e045b8d0f",
        ],
      },
    ],
  },
  {
    id: "classes",
    title: "Classes",
    about: `
    <div>
  <h3 style="color: #e74c3c;">Exploring Classes in JavaScript</h3>
  <p>Classes in JavaScript provide a way to create objects based on a blueprint called a class. They encapsulate data for the object and methods to manipulate that data. Here's an in-depth look at classes and their features:</p>
  <h3 style="color: #3498db;">Class Declaration</h3>
  <p>A class declaration defines a new class using the class keyword, followed by the class name.</p>
  <pre>
  <code class="language-javascript">
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Methods
    calculateArea() {
      return this.width * this.height;
    }
  }
  </code>
  </pre>
  <h3 style="color: #3498db;">Constructor Method</h3>
  <p>The constructor method is a special method for creating and initializing objects created with a class. It is called automatically when a new instance of the class is created.</p>
  <h3 style="color: #3498db;">Instance Methods</h3>
  <p>Instance methods are defined within the class and are accessible on instances of the class. They are used to perform operations on individual instances of the class.</p>
  <h3 style="color: #3498db;">Static Methods</h3>
  <p>Static methods are defined using the static keyword and are called on the class itself rather than on instances of the class. They are often used for utility functions that are not specific to individual instances.</p>
  <h3 style="color: #3498db;">Inheritance</h3>
  <p>JavaScript classes support inheritance through the extends keyword. This allows a subclass to inherit properties and methods from a superclass.</p>
  <pre>
<code class="language-javascript">
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}
</code>
</pre>
  <h3 style="color: #3498db;">Getters and Setters</h3>
  <p>Getters and setters are special methods that allow you to define how properties on an object are accessed and modified. They are defined using the get and set keywords respectively.</p>
  <pre>
<code class="language-javascript">
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }
}
</code>
</pre>
</div>

<div>
  <h3 style="color: #3498db;">Class Expressions</h3>
  <p>In addition to class declarations, classes can also be defined using class expressions. Class expressions can be named or unnamed.</p>
  <pre>
<code class="language-javascript">
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}
</code>
</pre>
  <h3 style="color: #3498db;">Prototype Methods</h3>
  <p>Under the hood, JavaScript classes use prototypal inheritance. Methods defined within a class are added to the prototype of the class, allowing all instances of the class to share the same method implementation.</p>
  <h3 style="color: #3498db;">Extending Built-in Objects</h3>
  <p>JavaScript allows you to extend built-in objects like Array, Object, and others using class syntax. However, it's generally not recommended to modify built-in prototypes due to potential conflicts.</p>
  <pre>
<code class="language-javascript">
class CustomArray extends Array {
  // Custom methods can be added here
}

const arr = new CustomArray(1, 2, 3);
console.log(arr instanceof Array); // true
</code>
</pre>
<h3 style="color: #3498db;">Constructor Overloading</h3>
<p>In JavaScript, you cannot define multiple constructors for a class like in some other languages. However, you can achieve constructor overloading by using default parameter values or conditional logic within the constructor.</p>
<pre>
<code class="language-javascript">
class Person {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }
}

const john = new Person('John');
const jane = new Person('Jane', 30);
</code></pre>
</div>
<div>
  <h3 style="color: #3498db;">Static Methods and Properties</h3>
  <p>Static methods and properties are associated with the class itself rather than instances of the class. They are accessed using the class name, not an instance.</p>
  <pre>
  <code class="language-javascript">
  class MathUtils {
    static sum(a, b) {
      return a + b;
    }
  
    static PI = 3.14159;
  }
  
  console.log(MathUtils.sum(2, 3)); // 5
  console.log(MathUtils.PI); // 3.14159
  </code>
  </pre>
  <h3 style="color: #3498db;">Getters and Setters</h3>
  <p>Getters and setters are special methods that allow you to define computed properties and control access to properties of an object.</p>
  <pre>
  <code class="language-javascript">
  class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      if (value < 0) {
        throw new Error('Radius cannot be negative');
      }
      this._radius = value;
    }
  
    get area() {
      return Math.PI * this._radius ** 2;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.radius); // 5
  console.log(circle.area); // 78.53981633974483
  circle.radius = 10;
  console.log(circle.radius); // 10
  console.log(circle.area); // 314.1592653589793
  </code>
  </pre>
  <h3 style="color: #3498db;">Inheritance</h3>
  <p>Classes in JavaScript support single inheritance through the <code class="language-javascript">extends</code> keyword, allowing you to create a subclass that inherits from a parent class.</p>
  <pre>
  <code class="language-javascript">
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(this.name + ' barks.');
    }
  }
  
  const dog = new Dog('Buddy');
  dog.speak(); // Buddy barks.
  </code>
  </pre>
</div>

<div>
  <h3 style="color: #3498db;">Constructor Method</h3>
  <p>The constructor method is a special method that is automatically called when a class is instantiated. It is used to initialize object properties and perform other setup tasks.</p>
  <pre>
  <code class="language-javascript">
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log('Hello, my name is ' + this.name + ' and I\'m ' + this.age + ' years old.');
    }
  }
  
  const person1 = new Person('Alice', 30);
  person1.greet(); // Hello, my name is Alice and I'm 30 years old.
  </code>
  </pre>
<h3 style="color: #3498db;">Inheritance with Super</h3>
<p>The <code class="language-javascript">super</code> keyword is used to call methods of the parent class within a subclass. It allows access to the parent's properties and methods.</p>
<pre>
  <code class="language-javascript">
    class Animal {
      constructor(name) {
        this.name = name;
      }

      speak() {
        console.log(this.name + ' makes a noise.');
      }
    }

    class Dog extends Animal {
      constructor(name, breed) {
        super(name);
        this.breed = breed;
      }

      speak() {
        console.log(this.name + ' barks.');
      }
    }

    const dog = new Dog('Buddy', 'Golden Retriever');
    dog.speak(); // Buddy barks.
    console.log(dog.breed); // Golden Retriever
  </code>
</pre>
  <h3 style="color: #3498db;">Private Fields and Methods</h3>
  <p>Private fields and methods are accessible only within the class where they are defined. They are denoted by a hash (#) prefix.</p>
  <pre>
  <code class="language-javascript">
    class Counter {
      #count = 0;

      #increment() {
        this.#count++;
      }

      getCount() {
        return this.#count;
      }

      incrementCount() {
        this.#increment();
      }
    }

    const counter = new Counter();
    counter.incrementCount();
    console.log(counter.getCount()); // 1
  </code>
</pre>
</div>`,
    contents: [
      {
        id: "classes_1",
        title: "Classes",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fclasses%2F2.jpg?alt=media&token=a861e2f4-6197-4a3a-8d18-7a877b8815e3",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fclasses%2F3.jpg?alt=media&token=a8e3aa65-5e44-44da-bdd2-9cf0b3c7f710",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fclasses%2F4.jpg?alt=media&token=70c8ff44-8dfe-4ba2-9944-370ec9fc10a9",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fclasses%2F5.jpg?alt=media&token=6a99bf3f-c300-463f-acdf-7ad5476f92d0",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fclasses%2F6.jpg?alt=media&token=520e7899-fe06-4854-9981-4ad7ef423c34",
        ],
      },
    ],
  },
  {
    id: "browserFunctionalities",
    title: "Browser",
    contents: [
      {
        id: "browserFunctionalities_1",
        title: "Window Objects",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbrowser%2FwindowObjects%2F2.jpg?alt=media&token=1141cca8-cace-43b3-8fa3-8fe4b4034c6f",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbrowser%2FwindowObjects%2F3.jpg?alt=media&token=a465c48e-992d-45d8-95fb-a9a009825dc0",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbrowser%2FwindowObjects%2F4.jpg?alt=media&token=0ad55a23-de24-4d65-88d9-e80146d18eb6",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbrowser%2FwindowObjects%2F5.jpg?alt=media&token=2936fc42-c8f2-447a-96f8-59e9f9588624",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbrowser%2FwindowObjects%2F6.jpg?alt=media&token=cf805177-5c4f-4aa1-8053-05eaafb0badc",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2Fbrowser%2FwindowObjects%2F7.jpg?alt=media&token=b8fc090b-2e5e-42ec-88e5-e4da7dd586ec",
        ],
      },
    ],
  },
  {
    id: "browserStorages",
    title: "Browser Storages",
    about: `
    <div >
  <h2 style="color: #3498db;">Browser Storage: LocalStorage and SessionStorage</h2>
  <p>Modern web browsers provide two main mechanisms for storing data locally within the user's browser: <strong>LocalStorage</strong> and <strong>SessionStorage</strong>.</p>
  <div >
    <h3 style="color: #2ecc71;">1. LocalStorage</h3>
    <p>LocalStorage allows you to store key-value pairs locally in the user's browser. The data persists even after the browser is closed and reopened.</p>
    <ul >
      <li><strong>Advantages:</strong></li>
      <ul>
        <li>Supports larger data capacity compared to cookies (typically 5-10 MB per domain).</li>
        <li>Data persists even after the browser is closed and reopened.</li>
        <li>Simple API for setting, getting, and removing data.</li>
      </ul>
      <li><strong>Example:</strong></li>
      <ul>
        <li><code class="language-javascript">window.localStorage.setItem('key', 'value');</code></li>
        <li><code class="language-javascript">window.localStorage.getItem('key');</code></li>
        <li><code class="language-javascript">window.localStorage.removeItem('key');</code></li>
      </ul>
    </ul>
  </div>
  <div>
    <h3 style="color: #2ecc71;">2. SessionStorage</h3>
    <p>SessionStorage is similar to LocalStorage but scoped to the current browser tab. The data is cleared when the tab is closed.</p>
    <ul >
      <li><strong>Advantages:</strong></li>
      <ul>
        <li>Data is isolated to the current tab and is cleared when the tab is closed.</li>
        <li>Similar API to LocalStorage.</li>
        <li>Useful for temporary storage needs during a user's session.</li>
      </ul>
      <li><strong>Example:</strong></li>
      <ul>
        <li><code class="language-javascript">window.sessionStorage.setItem('key', 'value');</code></li>
        <li><code class="language-javascript">window.sessionStorage.getItem('key');</code></li>
        <li><code class="language-javascript">window.sessionStorage.removeItem('key');</code></li>
      </ul>
    </ul>
  </div>
</div>

<div >
  <h2 style="color: #3498db;">Browser Storage: Cookies</h2>
  <p>Cookies are small pieces of data stored on the user's computer by the web browser while browsing a website. They are commonly used for session management, personalization, and tracking.</p>
  <div >
    <h3 style="color: #2ecc71;">1. Types of Cookies</h3>
    <ul>
      <li><strong>Session Cookies:</strong> Temporary cookies that are erased when the browser is closed.</li>
      <li><strong>Persistent Cookies:</strong> Cookies with expiration dates that persist even after the browser is closed.</li>
      <li><strong>Secure Cookies:</strong> Cookies sent over HTTPS connections, providing additional security.</li>
      <li><strong>HttpOnly Cookies:</strong> Cookies that cannot be accessed via JavaScript, enhancing security by preventing cross-site scripting attacks.</li>
    </ul>
  </div>
  <div>
    <h3 style="color: #2ecc71;">2. Using Cookies in JavaScript</h3>
    <p>JavaScript provides a simple API for working with cookies:</p>
    <ul>
      <li><strong>Setting a Cookie:</strong> Use the <code class="language-javascript">document.cookie</code> property to set a cookie.</li>
      <li><strong>Getting a Cookie:</strong> Read the <code class="language-javascript">document.cookie</code> property to retrieve a cookie value.</li>
      <li><strong>Deleting a Cookie:</strong> To delete a cookie, set its expiration date to a past date.</li>
    </ul>
    <p><strong>Example:</strong></p>
    <ul>
      <li><strong>Setting a Cookie:</strong> <code class="language-javascript">document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";</code></li>
      <li><strong>Getting a Cookie:</strong> <code class="language-javascript">const username = document.cookie.split('; ').find(row => row.startsWith('username')).split('=')[1];</code></li>
      <li><strong>Deleting a Cookie:</strong> <code class="language-javascript">document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";</code></li>
    </ul>
  </div>
</div>

`,
    contents: [
      {
        id: "browserStorages_1",
        title: "Local Storage",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbrowserStorages%2FlocalStorage%2F1.jpg?alt=media&token=cfddd0e5-0cb3-4333-bd3e-043b05522244",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbrowserStorages%2FlocalStorage%2F2.jpg?alt=media&token=ce9766a6-d982-4e81-9640-485fe7ca3ee6",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbrowserStorages%2FlocalStorage%2F3.jpg?alt=media&token=aa5b4a33-2d43-409c-80b1-796c33d7504c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbrowserStorages%2FlocalStorage%2F4.jpg?alt=media&token=2d1a1ef7-7b38-4700-969f-d004c35090f7",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbrowserStorages%2FlocalStorage%2F5.jpg?alt=media&token=4d37c43e-3d47-4af9-aa2f-75c0c8b74d44",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbrowserStorages%2FlocalStorage%2F6.jpg?alt=media&token=d4c327fd-7223-481c-b56d-678230c5d6ee",
        ],
      },
      {
        id: "browserStorages_2",
        title: "Local vs Session Storage",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbrowserStorages%2Fdifferences%2F1.jpg?alt=media&token=449997ab-0a0a-4691-b483-b3a561e2003d",
        ],
      },
    ],
  },
  {
    id: "uniqueFeatures",
    title: "Other Unique Features",
    contents: [
      {
        id: "uniqueFeatures_1",
        title: "Console.table()",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FOther%20Unique%20Features%2F1.jpg?alt=media&token=7fce593a-da26-4096-8ccf-662332092122",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FOther%20Unique%20Features%2F2.jpg?alt=media&token=c4e4acbc-ca4a-48c7-a53f-a5bf3d276fa6",
        ],
      },
    ],
  },
  {
    id: "debuggingTechniques",
    title: "Debugging Techniques",
    about: `
    <div>
  <h2 style="color: #3498db;">Debugging Techniques</h2>
  <p>Debugging is a crucial skill for developers to identify and fix issues in their code efficiently. Here are some advanced debugging techniques:</p>
  <ol>
    <li><strong>Conditional Breakpoints:</strong> Setting breakpoints with conditions to pause code execution only when specific conditions are met, which helps isolate complex issues.</li>
    <li><strong>Call Stack Inspection:</strong> Examining the call stack in debugging tools to trace the sequence of function calls leading to an error, aiding in understanding the code flow.</li>
    <li><strong>Network Debugging:</strong> Analyzing network requests and responses in browser developer tools to debug issues related to API calls, AJAX requests, or resource loading.</li>
    <li><strong>Performance Profiling:</strong> Profiling code execution and analyzing performance metrics to identify bottlenecks, memory leaks, or inefficient algorithms.</li>
    <li><strong>Remote Debugging:</strong> Debugging code running on remote devices or environments by connecting to them using tools like Chrome Remote Debugging or Visual Studio Code's Remote Development extension.</li>
    <li><strong>Memory Leak Detection:</strong> Using memory profiling tools to detect and analyze memory leaks, which can lead to performance degradation and application crashes.</li>
    <li><strong>Error Monitoring Services:</strong> Integrating error monitoring services like Sentry or Bugsnag into applications to track and log errors in production environments, facilitating proactive issue resolution.</li>
    <li><strong>Browser Compatibility Testing:</strong> Testing code across different browsers and devices to identify and debug issues related to browser-specific behaviors or inconsistencies.</li>
    <li><strong>Code Coverage Analysis:</strong> Analyzing code coverage reports generated by testing frameworks to ensure adequate test coverage and identify areas of code that require additional testing.</li>
    <li><strong>Static Code Analysis:</strong> Utilizing static code analysis tools like ESLint or TypeScript's type checker to identify potential bugs, enforce coding standards, and improve code quality.</li>
  </ol>
  <p>By mastering these advanced debugging techniques, developers can efficiently troubleshoot complex issues, optimize performance, and deliver high-quality software solutions.</p>
</div>

<div>
  <h2 style="color: #3498db;">Browser Developer Tools</h2>
  <p>Browser Developer Tools are essential utilities provided by modern web browsers to assist developers in debugging, testing, and optimizing web applications. These tools offer various tabs, each serving specific purposes:</p>
  <ol>
    <li><strong>Elements:</strong> This tab allows developers to inspect and manipulate the HTML and CSS of a webpage in real-time. It provides a DOM tree view, CSS styles panel, and the ability to modify elements and styles directly.</li>
    <li><strong>Console:</strong> The Console tab is where developers can view and interact with JavaScript output and execute JavaScript code snippets. It's invaluable for logging messages, debugging JavaScript code, and testing small code snippets.</li>
    <li><strong>Sources:</strong> In the Sources tab, developers can debug JavaScript code, set breakpoints, step through code execution, and analyze the call stack. It also provides features for debugging transpiled or minified code.</li>
    <li><strong>Network:</strong> The Network tab displays network requests made by the webpage, including HTTP requests, responses, and timings. Developers can analyze network performance, inspect request and response headers, and simulate network conditions.</li>
    <li><strong>Performance:</strong> This tab allows developers to assess the performance of their web applications by recording and analyzing various performance metrics such as loading times, rendering performance, and JavaScript execution.</li>
    <li><strong>Memory:</strong> Developers can use the Memory tab to profile memory usage and identify memory leaks in their web applications. It provides insights into JavaScript memory allocations, heap snapshots, and garbage collection activity.</li>
    <li><strong>Application:</strong> The Application tab is used for inspecting and debugging web application resources such as local storage, session storage, cookies, and cache storage. Developers can view, modify, and delete stored data.</li>
    <li><strong>Security:</strong> This tab provides insights into the security aspects of a webpage, including SSL certificate information, mixed content warnings, and insecure origins. It helps developers identify security vulnerabilities and ensure secure communication.</li>
    <li><strong>Audits:</strong> The Audits tab performs automated audits on webpages to evaluate performance, accessibility, SEO, and best practices. It provides actionable insights and recommendations to improve website quality and user experience.</li>
    <li><strong>Console Drawer:</strong> This collapsible drawer in the Console tab provides access to additional tools and features such as the Console sidebar, Sensors for emulating device sensors, and other settings.</li>
  </ol>
  <p>Browser Developer Tools empower developers to diagnose issues, optimize performance, and enhance the quality of web applications by providing a comprehensive suite of debugging and testing capabilities.</p>
</div>

`,
    contents: [
      {
        id: "debuggingTechniques_1",
        title: "Debugging Techniques",
      },
    ],
  },
  {
    id: "bestPractices",
    title: "Best Practices",
    about: `
    <div>
  <h2 style="color: #3498db;">Best Practices for Writing Neat JavaScript Code</h2>
</div>

<div>
  <ol>
    <li><strong>Use Descriptive Variable Names:</strong> Choose meaningful and descriptive names for variables, functions, and classes. This enhances code readability and understanding.</li>
  </ol>
</div>

<div>
  <ol start="2">
    <li><strong>Follow Consistent Naming Conventions:</strong> Adopt a consistent naming convention such as camelCase or snake_case and apply it consistently throughout the codebase.</li>
  </ol>
</div>

<div>
  <ol start="3">
    <li><strong>Use Constants for Immutable Values:</strong> Use const for values that should not be reassigned and let for variables that may be reassigned. Avoid using var.</li>
  </ol>
</div>

<div>
  <ol start="4">
    <li><strong>Keep Functions Small and Focused:</strong> Break down complex functions into smaller, more manageable functions that perform a single task. This improves code readability and promotes reusability.</li>
  </ol>
</div>

<div>
  <ol start="5">
    <li><strong>Avoid Deep Nesting:</strong> Minimize nested code blocks and use early returns or guard clauses to handle exceptional cases. This reduces cognitive complexity and makes code easier to understand.</li>
  </ol>
</div>

<div>
  <ol start="6">
    <li><strong>Write Self-Documenting Code:</strong> Use descriptive comments, meaningful variable names, and clear function signatures to make the code self-explanatory.</li>
  </ol>
</div>

<div>
  <ol start="7">
    <li><strong>Use Strict Mode:</strong> Enable strict mode ('use strict';) at the beginning of JavaScript files or functions to enforce stricter parsing and error handling, which helps identify potential issues.</li>
  </ol>
</div>

<div>
  <ol start="8">
    <li><strong>Handle Errors Gracefully:</strong> Use try...catch blocks to handle exceptions and errors gracefully. Provide meaningful error messages and implement appropriate error-handling logic.</li>
  </ol>
</div>

<div>
  <ol start="9">
    <li><strong>Use Modularization:</strong> Organize code into modular components or modules to promote code reuse, maintainability, and scalability. Use ES6 modules or a module bundler like Webpack.</li>
  </ol>
</div>

<div>
  <ol start="10">
    <li><strong>Apply DRY Principle (Don't Repeat Yourself):</strong> Avoid duplicating code by extracting common functionality into reusable functions, classes, or modules.</li>
  </ol>
</div>

<div>
  <ol start="11">
    <li><strong>Thoroughly Test Code:</strong> Write comprehensive unit tests using testing frameworks like Jest or Mocha to ensure code correctness and reliability. Embrace test-driven development (TDD) practices.</li>
  </ol>
</div>

<div>
  <ol start="12">
    <li><strong>Use Version Control:</strong> Utilize version control systems like Git to track changes, collaborate with team members, and maintain a history of code revisions.</li>
  </ol>
</div>

<div>
  <ol start="13">
    <li><strong>Document Code:</strong> Provide documentation for functions, classes, and modules using JSDoc or other documentation tools. Document code structure, usage, parameters, return values, and examples.</li>
  </ol>
</div>

<div>
  <ol start="14">
    <li><strong>Stay Updated:</strong> Stay informed about the latest JavaScript features, best practices, and industry trends. Continuously improve your skills through learning resources, tutorials, and community engagement.</li>
  </ol>
</div>
`,
    contents: [
      {
        id: "bestPractices_1",
        title: "Quick Overview",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbestPractices%2F1.jpg?alt=media&token=2c1fba50-b0f5-4ea7-92a3-6796c9ee395a",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbestPractices%2F2.jpg?alt=media&token=d52bcf4c-e08e-4ddf-930f-f1fd291df368",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbestPractices%2F3.jpg?alt=media&token=006678b8-e6cb-4736-907b-5cf3960fc505",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbestPractices%2F4.jpg?alt=media&token=19a77146-2790-44e0-8521-e4ff5afab23c",
          "https://firebasestorage.googleapis.com/v0/b/sapp-67c15.appspot.com/o/cheatSheets%2Fjavascript%2FbestPractices%2F5.jpg?alt=media&token=4850077d-d8b6-4cb8-8060-07d27bf61bf6",
        ],
      },
    ],
  },
];
