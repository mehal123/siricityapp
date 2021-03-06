import React from "react";
import { View } from "react-native";
import { Placeholder, PlaceholderLine, Fade } from "rn-placeholder";

const CategoryPlaceholder = () => (
  <View style={{ height: 100 }}>
    <Placeholder Animation={Fade}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <PlaceholderLine
          width={30}
          height={100}
          style={{ borderRadius: 0, marginHorizontal: 10 }}
        />
        <PlaceholderLine
          width={30}
          height={100}
          style={{ borderRadius: 0, marginRight: 10 }}
        />
        <PlaceholderLine
          width={30}
          height={100}
          style={{ borderRadius: 0, marginRight: 10 }}
        />
      </View>
    </Placeholder>
  </View>
);

export default CategoryPlaceholder;
