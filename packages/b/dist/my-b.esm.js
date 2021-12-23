import a, { func } from '@my/a';

a();
func();
function index () {
  console.log("b");
}

export { index as default };
