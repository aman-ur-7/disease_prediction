import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { todoList } = location.state || { todoList: [] };

  const symptomDatabase = {
    "Persistent cough": ["Flu", "COVID-19", "Bronchitis"],
    "Coughing up blood": ["Tuberculosis", "Lung Cancer", "Bronchitis"],
    "Shortness of breath": ["Asthma", "Pneumonia", "COVID-19"],
    "Chest pain": ["Heart Attack", "Angina", "Pneumonia"],
    "Unexplained weight loss": ["Cancer", "Diabetes", "Hyperthyroidism"],
    "Rapid breathing": ["Pneumonia", "Asthma", "COPD"],
    Fatigue: ["Anemia", "Chronic Fatigue Syndrome", "Depression"],
    "Cyanosis (bluish skin)": ["COPD", "Heart Failure", "Pneumonia"],
    "Poor feeding habits": [
      "Congenital Heart Disease",
      "Infections",
      "Metabolic Disorders",
    ],
    "Fever or chills": ["Infection", "Flu", "COVID-19"],
    Cough: ["Flu", "COVID-19", "Common Cold"],
    "Difficulty in breathing": ["Asthma", "Pneumonia", "Heart Failure"],
    "Muscle or body aches": ["Flu", "COVID-19", "Fibromyalgia"],
    "Increased thirst": ["Diabetes", "Dehydration", "Kidney Disease"],
    "Frequent urination": [
      "Diabetes",
      "Urinary Tract Infection",
      "Prostate Problems",
    ],
    "Extreme hunger": ["Diabetes", "Hyperthyroidism", "Hypoglycemia"],
    "Unintended weight loss": ["Diabetes", "Cancer", "Hyperthyroidism"],
  };

  const checkSymptoms = (userSymptoms) => {
    const likelyDiseases = [];
    for (const symptom of userSymptoms) {
      if (Object.prototype.hasOwnProperty.call(symptomDatabase, symptom)) {
        likelyDiseases.push(...symptomDatabase[symptom]);
      }
    }
    const diseaseCounts = {};
    for (const disease of likelyDiseases) {
      diseaseCounts[disease] = (diseaseCounts[disease] || 0) + 1;
    }
    let mostLikelyDisease;
    let maxCount = 0;
    for (const disease in diseaseCounts) {
      if (diseaseCounts[disease] > maxCount) {
        maxCount = diseaseCounts[disease];
        mostLikelyDisease = disease;
      }
    }
    return mostLikelyDisease;
  };

  const likelyDisease = checkSymptoms(todoList);

  return (
    <main className="result">
      <div className="container">
        <div className="content">
          <section>
            <h1 style={{ fontWeight: "400" }}>
              Go to the nearest emergency department
            </h1>
            <p>
              Based on the symptoms you have provided, here is a possible
              diagnosis.
            </p>
          </section>
          <div>
            <h2>Likely Disease Based on Symptoms</h2>
            {likelyDisease ? (
              <p className="disease_result">{likelyDisease}</p>
            ) : (
              <p>
                No matching disease found for the given symptoms.
                <br /> may be you have&apos;t add the symptoms{" "}
              </p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={() => navigate("/symptoms")}
              className="disease_button"
            >
              Go Back
            </button>
            <span
              className="consult"
              style={{
                fontSize: "large",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/consultant");
              }}
            >
              Consult to the doctor&apos;s ?
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Result;
