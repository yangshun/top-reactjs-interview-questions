export type QuestionMetadata = Readonly<{
  published: boolean;
  slug: string;
  ranking: number;
  importance: string;
  featured: boolean;
}>;

export type QuestionFrontmatter = Readonly<{
  title: string;
}>;

export type QuestionItem = Readonly<{
  metadata: QuestionMetadata;
  href: string;
  title: string;
  titleSlug: string;
  locale: string;
  content: string;
}>;

// From parsed CSV.
export type QuestionRaw = Readonly<{
  slug: string;
  title: string;
  ranking: number;
  section: string;
}>;
