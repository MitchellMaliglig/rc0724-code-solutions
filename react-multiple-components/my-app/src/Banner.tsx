type bannerProps = {
  item: string;
};

export function Banner({ item }: bannerProps) {
  return <h2 id="banner">{item}</h2>;
}
