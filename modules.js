// A module in JavaScript is just a file containing related code. In JavaScript,
// we use the import and export keywords to share and receive functionalities respectively
// across different modules. The export keyword is used to make a variable, function, class or object accessible to other modules.

import {user4} from './destructure_Array-Objects.js';
import * as all from './destructure_Array-Objects.js';

console.log(user4.fname4);
console.log(all.user5.fname5);