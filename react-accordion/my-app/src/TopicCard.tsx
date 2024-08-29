type topicCardProps = {
  content: string;
  display: string;
};

export function TopicCard({ content, display }: topicCardProps) {
  return (
    <>
      <p className={`content ${display}`}>{content}</p>
    </>
  );
}
