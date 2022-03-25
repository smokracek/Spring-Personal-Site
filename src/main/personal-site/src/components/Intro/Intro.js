import portrait from "../resources/sitePortrait.png";

function Intro() {
  return (
    <div class="flex flex-col items-center bg-gray-300 p-1 m-3 rounded-xl shadow-inner hover:shadow-none">
      <img
        src={portrait}
        alt="Portrait of me"
        class="w-1/2 rounded-full m-4 shadow-md"
      />
      <div class="pb-3 font-semibold italic text-xl">{"Hello!"}</div>
    </div>
  );
}

export default Intro;
