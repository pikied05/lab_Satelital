type ProjectDescriptionProps = {
  text: string;
};

const instagramLinks: Record<string, string> = {
  "@volcan0_jpg": "https://www.instagram.com/volcan0_jpg/",
  "@thescienceoffeelings": "https://www.instagram.com/thescienceoffeelings/",
  "@conemedemariquita": "https://www.instagram.com/conemedemariquita/",
  "@kds_heart": "https://www.instagram.com/kds_heart/",
  "@mrblueuntitled": "https://www.instagram.com/mrblueuntitled/",
  "@me_dijo": "https://www.instagram.com/me_dijo/",
};

export function ProjectDescription({ text }: ProjectDescriptionProps) {
  const parts = text.split(/(@[a-zA-Z0-9._]+)/g);

  return (
    <>
      {parts.map((part, index) => {
        const href = instagramLinks[part];

        if (!href) {
          return <span key={`${part}-${index}`}>{part}</span>;
        }

        return (
          <a
            key={`${part}-${index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-2 hover:text-black/70"
          >
            {part}
          </a>
        );
      })}
    </>
  );
}
