import React, { FC, useState } from "react";
import { StyleSheet, View, ScrollView, Button } from "react-native";

import Question from "./components/Question";
import Leaderboard from "./components/Leaderboard";
import { QUESTIONS_AND_ANSWER } from "./constants";

const App: FC = () => {
  const [questions] = useState(QUESTIONS_AND_ANSWER);
  const [isDisplayLeaderboard, setIsDisplayLeaderboard] = useState(false);

  const displayLeaderboard = () => {
    setIsDisplayLeaderboard(!isDisplayLeaderboard);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.leftColumn}>
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question.question}
            answers={question.answers}
          />
        ))}
      </View>
      <View style={styles.rightColumn}>
        <Button title="LeaderBoard" onPress={displayLeaderboard} />
        {isDisplayLeaderboard && <Leaderboard />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  leftColumn: {
    flex: 1,
    paddingHorizontal: 20,
  },
  rightColumn: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default App;
