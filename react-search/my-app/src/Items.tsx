type itemsProps = {
  input: string;
  list: string[];
};

export function Items({ input, list }: itemsProps) {
  const result = list.filter((q) =>
    q.toLowerCase().includes(input.toLowerCase())
  );

  const hide = result.length > 0 ? 'hidden' : 'show';

  return (
    <>
      <p className={hide}>No items match the filter.</p>
      <ul>
        {result.map((quote, index) => (
          <li key={index}>{`"${quote}"`}</li>
        ))}
      </ul>
    </>
  );
}
