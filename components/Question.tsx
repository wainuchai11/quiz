import React, { FC,useState} from "react";
import { Text, View, Button, ScrollView, StyleSheet, Dimensions } from "react-native";

interface Answer {
  text: string;
  isCorrect: boolean;
}

interface QuestionProps {
  question: string;
  answers: Answer[];
}

const Question: FC<QuestionProps> = ({ question, answers }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);

  const handleAnswerPress = (index: number) => {
    setSelectedAnswerIndex(index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
      <View style={styles.answersContainer}>
        {answers.map((answer, index) => (
          <Button
            key={index}
            title={answer.text}
            onPress={() => handleAnswerPress(index)}
            color={
              selectedAnswerIndex === index
                ? answer.isCorrect
                  ? "green"
                  : "red"
                : undefined
            }
            style={styles.answerButton}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    marginVertical: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  answersContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  answerButton: {
    width: screenWidth * 0.4,
    marginVertical: 5,
  },
});

export default Question;
