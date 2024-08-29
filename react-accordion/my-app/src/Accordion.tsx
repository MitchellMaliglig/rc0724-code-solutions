import React from 'react';
import { Topic } from './App';
import { TopicCard } from './TopicCard';

type accordionProps = {
  topics: Topic[];
  currentTopic: string;
  onClickTopic: (e: React.MouseEvent) => void;
};

export function Accordion({
  topics,
  currentTopic,
  onClickTopic,
}: accordionProps) {
  return (
    <>
      {topics.map((topic, index) => (
        <div key={topic.id}>
          <p className="topic" onClick={onClickTopic}>
            {topic.title}
          </p>
          <TopicCard
            content={topics[index].content}
            display={
              currentTopic === topic.title ? 'show' : 'hidden'
            }></TopicCard>
        </div>
      ))}
    </>
  );
}
