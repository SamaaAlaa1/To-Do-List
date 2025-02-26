import { useState } from "react";
import Task from "./components/Task";
import To_do_list from "./components/To_do_list";

function App() {
  const [on, setOn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All"); 

  const handleClick = () => setOn(true);
  const handleCancel = () => setOn(false);

  const filteredTasks = filter === "All" 
    ? tasks 
    : tasks.filter(task => new Date(task.date).toLocaleString('en-US', { month: 'short' }) === filter);

  return (
    <div className="md:h-[100vh] h-[130vh] w-full flex flex-col justify-center items-center bg-[#ececec] font-semibold ">
      <div className="flex flex-col justify-center items-center bg-[#101b42] md:w-[45%] md:h-[80%] w-[90%] h-[100vh] p-6 rounded-2xl shadow-xl">
        {on ? (
          <Task tasks={tasks} setTasks={setTasks} handleCancel={handleCancel} />
        ) : (
          <To_do_list handleClick={handleClick} />
        )}
        <div className="flex justify-between items-center w-full mt-4">
          <span className="text-[#c8dceb] font-bold">Filter by month</span>
          <select 
            className="bg-white text-black md:px-3 px-2 py-1 md:w-[12%] w-[25%] rounded-lg font-semibold md:text-base text-xs" 
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="All">All</option>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select>
        </div>

        <div className="mt-4 w-full h-[60%] overflow-y-auto rounded-lg scrollbar-none">
          {filteredTasks.length === 0 ? (
            <p className="text-gray-300 text-center font-semibold">No tasks found</p>
          ) : (
            <ul className="w-full h-full flex flex-col">
              {filteredTasks.map((task, index) => (
                <li key={index} className="bg-[#2b3357] text-[#c8dceb] p-3 rounded-lg flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="flex flex-col items-center bg-blue-500 md:px-3 px-1 rounded-lg md:mr-3 md:font-semibold  border border-[#c8dceb]">
                      <span className="md:text-base text-xs font-bold ">{new Date(task.date).toLocaleString('en-US', { month: 'short' })}</span>
                      <span className="md:text-base text-xs">{new Date(task.date).getDate()}</span>
                    </div>
                    <span className="font-semibold md:text-xl  md:pl-8 pl-2">{task.title}</span>
                  </div>
                  <span className="bg-blue-500 md:px-3 py-1 text-xs px-2  md:text-base rounded-lg  font-semibold border border-[#c8dceb]">
                    {task.duration} Days
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
