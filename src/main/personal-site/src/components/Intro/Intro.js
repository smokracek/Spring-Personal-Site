import portrait from "../resources/sitePortrait.png";

function Intro() {
  return (
    <div class="flex flex-col items-center m-5 p-4 w-1/4 h-auto bg-themeDarkBlue shadow-lg">
      <img
        src={portrait}
        alt="Portrait of me"
        class="w-1/2 rounded-full border-2 border-themeRed"
      />
      <div class="font-sans text-4xl text-themeGreen mb-2 mt-3">{"Hello!"}</div>

      <div class="text-themeText text-justify ml-2 mr-2">
        <p>
          I'm Sam Mokracek, a third-year student at{" "}
          <a
            href="https://www.westmont.edu"
            target="_blank"
            rel="noreferrer noopener"
          >
            Westmont College
          </a>{" "}
          who's studying Data Analytics and Computer Science. This page will
          primarily serve as a spot to post projects, fool around with web
          development, and practice other things.
        </p>
      </div>
      <div class="text-themeGreen text-2xl mt-6">Socials</div>
      <div class="text-themeText text-justify ml-2 mr-2">
        <ul>Instagram</ul>
        <ul>Linkenin</ul>
      </div>
      <div class="flex h-full">
        <p class="self-end text-themeBlack text-xs">
          &copy; Samuel Mokracek MMXXII
        </p>
      </div>
    </div>
  );
}

export default Intro;
