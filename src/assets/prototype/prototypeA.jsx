import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PrototypeA() {
  const navigate = useNavigate();

  return (
    <div className="font-poppins">
      <div>
        <h1>font type = poppins</h1>
      </div>
      <br />
      <div className="flex gap-4">
        {/* Button 01 */}
        <h1>Button 01</h1>
        <button className="px-5 py-1 text-[#00256A] border-2 border-[#00256A] rounded-full hover:bg-blue-100 transition-all">
          Submit
        </button>

        {/* Button 02 */}
        <h1>Button 02</h1>
        <button className="px-5 py-1 text-white bg-[#00256A] rounded-lg hover:bg-blue-900 transition-all">
          Submit
        </button>
      </div>
      <br />
      <div className="flex gap-4">
        {/* Textbox */}
        <h1>Textbox</h1>
        <input
          type="text"
          placeholder="Text here"
          className="px-5 py-1 bg-[#057DE8] bg-opacity-10 border-2 border-[#0056A2] border-opacity-30 rounded-lg"
        />
      </div>
      <br />
      <div className="flex gap-4">
        <h1>Drop down</h1>
        <select className="py-1 border-2 border-[#0056A2] border-opacity-30 rounded-lg bg-white text-left">
          <option>select</option>
          <option>select 1</option>
          <option>select 2</option>
          <option>select 3</option>
        </select>
      </div>
      <br />

      <div className="flex justify-center items-center gap-6 p-4">
        {/* Previous Page Link */}
        <button
          className="flex items-center gap-2 px-2 py-2 text-[#00256A] border-2 border-[#00256A] rounded-full hover:bg-blue-100 transition-all"
          onClick={() => navigate("/previous-page")}
        >
          <FaArrowLeft />
        </button>
        {/* Next Page Link */}
        <button
          className="flex items-center gap-2 px-2 py-2 text-[#00256A] border-2 border-[#00256A] rounded-full hover:bg-blue-100 transition-all"
          onClick={() => navigate("/prototypeB")}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default PrototypeA;
