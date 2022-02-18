import Field from "../fields/field";
import { Typography } from "@material-ui/core";
import styles from "./questionnaire.module.scss";
import { useState } from "react";

const Question = ({ question, onChange, defaultValues }) => (
  <li className={styles.item}>
    <Typography component="h4" variant="subtitle1" className={styles.text}>
      {question.statement}
    </Typography>

    {question.answer_fields.map((field, index) => {
      const defaultValue = defaultValues
        ? field.sub_types
          ? field.sub_types.map((item) => defaultValues[item.key])
          : defaultValues[field.key]
        : undefined;

      return (
        <Field
          {...field}
          name={field.key || index.toString()}
          key={field.key || index}
          onChange={onChange}
          subTypes={field.sub_types}
          defaultValue={defaultValue}
        />
      );
    })}
  </li>
);

const Subquestionaire = ({ question, display, defaultValues }) => {
  return (
    <>
      {display && (
        <Question question={question} defaultValues={defaultValues} />
      )}
    </>
  );
};

const Questionnaire = ({ sectionId, questionnaire, defaultValues }) => {
  const [selectedSubquestion, setSelectedSubquestion] = useState({});

  const handleChange = (name, value) => {
    setSelectedSubquestion((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <ol className={styles.container}>
      {questionnaire.questions.map((question, qIndex) => (
        <div key={`${sectionId}-${qIndex}`}>
          <Question
            question={question}
            key={`${sectionId}-${qIndex}`}
            onChange={
              question.sub_questionnaires?.length ? handleChange : () => {}
            }
            defaultValues={defaultValues}
          />
          {question.sub_questionnaires?.map((subQuestionnaire, sqIndex) => (
            <div key={`${sectionId}-${qIndex}-${sqIndex}`}>
              {subQuestionnaire.questions.map((subQuestion, i) => (
                <Subquestionaire
                  display={
                    subQuestionnaire.sub_questionnaire_id ===
                    selectedSubquestion[question.answer_fields[0].key]
                  }
                  question={subQuestion}
                  key={`${sectionId}-${qIndex}-${sqIndex}-${i}`}
                  defaultValues={defaultValues}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </ol>
  );
};

export default Questionnaire;
