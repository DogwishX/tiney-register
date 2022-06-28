export default function ChildrenList({ list }) {
  return (
    <View testid="children__list">
      {list.map((child) => (
        <ChildItem />
      ))}
    </View>
  );
}
