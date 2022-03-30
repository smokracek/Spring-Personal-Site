// Serves as the top-level container for all blog
// posts and components therein

/* eslint-disable import/no-webpack-loader-syntax */
import Example from "!@mdx-js/loader!./example.mdx";

function BlogHolder() {
  return (
    <div class="flex flex-col w-full h-auto bg-themeDarkBlue m-5 ml-0 overflow-y-auto overscroll-y-none">
      <Example />
    </div>
  );
}

export default BlogHolder;
