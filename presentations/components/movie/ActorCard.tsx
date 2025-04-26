import { Image, Text, View } from "react-native";
import { Cast } from "@/infrastructure/interfaces/cast.interface";
import FastImage from "react-native-fast-image";

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  console.log(actor.avatar);
  return (
    <View className="mx-10 w-[60px]">
      {/* <FastImage
        source={{ uri: `https://image.tmdb.org/t/p/w500/${actor.image}` }}
        style={{ width: 100, height: 150, borderRadius: 10 }}
        resizeMode={FastImage.resizeMode.cover}
      /> */}
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${actor.avatar}` }}
        className="w-[100px] h-[150] rounded-2xl shadow"
        resizeMode="cover"
      />
      <Image
        source={{ uri: `${actor.avatar}` }}
        className="w-[100px] h-[150] rounded-2xl shadow"
        resizeMode="cover"
      />
      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className="font-bold text-lg"
        >
          {actor.name}
        </Text>
        <Text className="text-gray-600 text-xs">{actor.character}</Text>
      </View>
    </View>
  );
};
