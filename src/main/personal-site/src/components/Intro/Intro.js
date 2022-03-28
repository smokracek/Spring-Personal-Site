import portrait from "../resources/sitePortrait.png";

function Intro() {
  return (
    <div class="flex flex-col items-center m-5 p-4 w-1/6 bg-themeDarkBlue h-min shadow-xl">
      <img src={portrait} alt="Portrait of me" class="w-1/2 rounded-full" />
      <div class="font-sans text-4xl text-themeGreen mb-2 mt-3">{"Hello!"}</div>

      <div class="text-themeText">
        {
          "I'm Sam Mokracek, a third-year student at Westmont College who's studying Data Analytics and Computer Science. \
          This page will primarily serve as a spot to post projects, fool around with web development, and practice other things."
        }
      </div>
    </div>
  );
}

export default Intro;
