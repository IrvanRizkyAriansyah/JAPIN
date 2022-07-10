import { FlatList } from "react-native";
import React from "react";
import nilai from "../../../consts/nilai";
import NilaiItem from "./NilaiItem";

export default function Nilai() {
  
  return (
    <FlatList 
      data={nilai}
      horizontal={false}
      renderItem={({ item }) => <NilaiItem item={item} />}
    />
  );
}