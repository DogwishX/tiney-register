export default function ChildItem({ childDetails }) {
  const { name, image, signedIn } = childDetails;

  return (
    <View>
      <Text testId="child__name">{name}</Text>
    </View>
  );
}
