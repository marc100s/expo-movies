import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "@/presentations/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideShow from "@/presentations/components/movies/MainSlideShow";
import MovieHorizontalList from "@/presentations/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topratedQuery, proximaQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp</Text>

        {/* Caroussel de imagenes */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />

        {/* Popular Movies */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
          className="mb-5"
        />

        {/* Top Rated Movies */}
        <MovieHorizontalList
          title="Top Rated"
          movies={topratedQuery.data?.pages.flat() ?? []}
          className="mb-5"
          loadNextPage={topratedQuery.fetchNextPage}
        />

        {/* Upcoming Movies */}
        <MovieHorizontalList
          title="Próximamente"
          movies={proximaQuery.data ?? []}
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
