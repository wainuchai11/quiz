import React, { FC, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { PLAYERS } from "../constants";

const Leaderboard: FC = () => {
  const [leaderboardData] = useState(PLAYERS);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      {leaderboardData.map((player, index) => (
        <View key={index} style={styles.playerRow}>
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.playerPoints}>{player.points}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  playerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  playerName: {
    fontSize: 16,
  },
  playerPoints: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Leaderboard;
