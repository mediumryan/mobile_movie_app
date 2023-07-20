import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import styled from "styled-components/native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { movieData } from "./data";

const { width: WinWidth } = Dimensions.get("window");

export default function App() {
  const [movie, setMovie] = useState(movieData.results);
  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <MainContainer horizontal pagingEnabled>
      {movie.map((item, index) => {
        return (
          <SubContainer key={item.id}>
            <MovieImg>
              <Image
                source={{
                  uri: BASE_URL + item.poster_path,
                }}
                style={{ flex: 1 }} // 이미지를 올바르게 표시하기 위해 스타일 추가
              />
            </MovieImg>
            <MovieDescription>
              <MovieIndex>{index + 1}</MovieIndex>
              <MovieTitle>{item.title}</MovieTitle>
              <MovieVote>
                <AntDesign name="star" size={24} color="white" />
                {item.vote_average}
              </MovieVote>
            </MovieDescription>
          </SubContainer>
        );
      })}
      <StatusBar style="auto" />
    </MainContainer>
  );
}

const MainContainer = styled.ScrollView``;

const SubContainer = styled.View`
  width: ${WinWidth};
`;

const MovieImg = styled.View`
  flex: 5;
`;

const MovieDescription = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: black;
`;

const MovieIndex = styled.Text`
  flex: 1;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

const MovieTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin: 0 12px;
  flex: 10;
  color: white;
  text-align: center;
`;

const MovieVote = styled.Text`
  font-size: 18px;
  flex: 1;
  color: white;
`;
