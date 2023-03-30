import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Card, Text } from "react-native-elements";

const NextPageButton = () => {
  const navigation = useNavigation();
  return (
    <Card>
      <View>
        <Button
          title=" Go to Next Page"
          onPress={() => navigation.navigate("NewPage")}
        />
        <Text style={{ textAlign: "center" }}>
          This component uses navigation hooks.
        </Text>
      </View>
    </Card>
  );
};

export default NextPageButton;

const styles = StyleSheet.create({});
