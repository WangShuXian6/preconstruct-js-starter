import func from '../func/dist/my-a-func.esm.js';
export { default as func } from '../func/dist/my-a-func.esm.js';

func();
function index () {
  console.log("a");
}

export { index as default };
