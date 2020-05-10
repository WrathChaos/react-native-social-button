import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import SocialLoginButton from "react-native-social-button";

const backgroundImage = require("./assets/dave-unsplash.jpg");
const logoImage = require("./assets/logo-example.png");

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={backgroundImage}
        style={{ height: "100%", width: "100%" }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              bottom: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={logoImage} style={{ height: 350, width: 350 }} />
            <Text
              style={{
                bottom: 52,
                fontSize: 32,
                color: "#fdfdfd",
                fontWeight: "800",
                shadowRadius: 5,
                shadowOpacity: 0.9,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
              }}
            >
              RN Social Button
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginBottom: 32,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <View style={{ marginBottom: 16 }}>
              <SocialLoginButton
                name="twitter"
                color="#52a9e8"
                text="Continue with Twitter"
              />
            </View>
            <View style={{ marginBottom: 16 }}>
              <SocialLoginButton />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default App;
