import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Symptoms = () => {
  const [todoList, setTodoList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const input = e.target.value.trim();
    setSearchInput(input);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set a timeout of 500 milliseconds before executing the search logic
    const timeout = setTimeout(() => {
      // Here you can implement your search logic
      const exampleSymptoms = [
        "Persistent cough",
        "Coughing up blood",
        "Shortness of breath",
        "Chest pain",
        "Unexplained weight loss",
        "Rapid breathing",
        "Fatigue",
        "Cyanosis (bluish skin)",
        "Poor feeding habits",
        "Shortness of breath",
        "Fever or chills",
        "Cough",
        "Difficulty in breathing",
        "Muscle or body aches",
        "Increased thirst",
        "Frequent urination",
        "Extreme hunger",
        "Unintended weight loss",
      ];
      const filteredResults = exampleSymptoms.filter((symptom) =>
        symptom.toLowerCase().includes(input.toLowerCase())
      );
      setSearchResults(filteredResults);
    }, 500);

    setTypingTimeout(timeout);
  };

  const handleAddTodo = (symptom) => {
    setTodoList([...todoList, symptom]);
    setSearchInput("");
    setSearchResults([]);
  };

  const handleDeleteTodo = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  const handleNext = () => {
    navigate("/result", { state: { todoList } });
  };

  return (
    <main className="symptoms">
      <div className="container">
        <div className="symptoms_insider">
          <h1>Add his symptoms</h1>
          <section>
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchChange}
              placeholder="Search for a symptom..."
            />
          </section>
          <div className="over_flow">
            {searchResults.map((result, index) => (
              <div
                key={index}
                onClick={() => handleAddTodo(result)}
                className="search_items"
              >
                {result}
              </div>
            ))}
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "auto",
                maxWidth: "100%",
              }}
            >
              {todoList.length > 0 ? (
                todoList.map((todo, index) => (
                  <span key={index} className="searched_items">
                    {todo}
                    <span onClick={() => handleDeleteTodo(index)}>
                      <RxCross2 />
                    </span>
                  </span>
                ))
              ) : (
                <div className="if_todo_not">
                  Please try to add more symptoms.
                </div>
              )}
            </div>
          </div>
          <span style={{ color: "#1471c9" }}>
            Report an issue with this question?
          </span>
          <hr />
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "larger",
                color: "#1471c9",
                cursor: "pointer",
              }}
              onClick={() => navigate("/dashboards")}
            >
              <IoArrowBackOutline />
              Back
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "larger",
                cursor: "pointer",
                background: "#127F5B",
                padding: "7px 17px",
                borderRadius: "7px",
                color: "white",
              }}
              onClick={handleNext}
            >
              Next
            </span>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Symptoms;
