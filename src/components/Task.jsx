import { useState } from "react";

const Task = ({ tasks, setTasks, handleCancel }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    if (!title.trim() || !date || !duration || duration <= 0) {
      return; 
    }

    setTasks([...tasks, { title, date, duration }]);
    setTitle("");
    setDate("");
    setDuration("");
  };

  return (
    <div className="rounded-xl w-full text-center">
      <form className="flex flex-col md:flex-row md:justify-center md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-start w-full md:w-auto">
          <label className="text-gray-300 mb-1 md:text-base text-sm">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full md:w-[175px] p-2 rounded-md bg-gray-600 text-white outline-none"
          />
        </div>

        <div className="flex flex-col items-start w-full md:w-auto">
          <label className="text-gray-300 mb-1 md:text-base text-sm">Duration (days)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || (parseInt(value) >= 1 && !value.includes("-"))) {
                setDuration(value);
              }
            }}
            min="1"
            className="w-full md:w-[175px] p-2 rounded-md bg-gray-600 text-white outline-none"
          />
        </div>

        <div className="flex flex-col items-start w-full md:w-auto">
          <label className="text-gray-300 mb-1 md:text-base text-sm">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full md:w-[175px] p-2 rounded-md bg-gray-600 text-white outline-none"
          />
        </div>
      </form>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 justify-center">
        <button
          type="submit"
          onClick={addTask}
          className="bg-blue-500 text-[#c8dceb] px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="bg-blue-500 text-[#c8dceb] px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Task;
