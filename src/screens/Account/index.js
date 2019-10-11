import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet
} from "react-native";
import { M_BOLD } from "../../theme/fonts";
import { APP_ORANGE } from "../../theme/colors";
import Icon from "react-native-vector-icons/dist/Entypo";
const index = () => {
  const [form, setform] = useState("signIn");

  return (
    <ImageBackground
      source={{
        uri:
          "https://images.unsplash.com/photo-1467226632440-65f0b4957563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=979&q=80"
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CityApp</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.formHeader}>
            <Text style={[styles.activeFormText, styles.formTitle]}>
              Sign In
            </Text>
           
            <Text style={[styles.activeFormText,styles.formTitle]}>Sign Up</Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon name="user" size={20} />
            <TextInput placeholder="EMAIL" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="key" size={20} />
            <TextInput placeholder="PASSWORD" style={styles.input} />
          </View>

          {form != "signIn" && (
            <View style={styles.inputContainer}>
              <Icon name="key" size={20} />
              <TextInput placeholder="CONFIRM PASSWORD" style={styles.input} />
            </View>
          )}

          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {form == "signIn" ? "Sign in" : "Sign up"}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default index;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    height: "100%",
    justifyContent: "space-between"
  },
  headerText: {
    textAlign: "center",
    fontSize: 50,
    fontFamily: M_BOLD
  },
  header: {
    margin: 20
  },
  content: {
    margin: 20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    fontFamily: M_BOLD,
    marginLeft: 10
  },
  button: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#000"
  },
  buttonText: {
    textAlign: "center",
    fontFamily: M_BOLD,
    fontSize: 16,
    color: "#fff",
    textTransform: "uppercase"
  },
  formHeader:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:20
  },
 formTitle:{
   fontSize:25,
   fontFamily:M_BOLD,
   textTransform:'uppercase'
 }
});
