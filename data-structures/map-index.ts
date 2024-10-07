export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const documentIndex = new Map<string, Set<Document>>();
  docs.forEach((document) => {
    const words = document.content.match(/\b(\w+)\b/g);
    words?.forEach((word) => {
      const documentSet = documentIndex.get(word.toLowerCase()) ?? new Set();
      documentSet.add(document);
      documentIndex.set(word.toLowerCase(), documentSet);
    });
  });
  return documentIndex;
}
