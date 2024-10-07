import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const documentSet = new Set<Document>();
  const terms = query.match(/\b(\w+)\b/g);
  terms?.forEach((term) => {
    const docSet = index.get(term.toLowerCase());
    docSet?.forEach((doc) => documentSet.add(doc));
  });
  return documentSet;
}
