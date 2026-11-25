import { ExternalLink } from "lucide-react";
import { publicationGroups, publicationNote } from "@/data/cv";

export function AuthorNames({ authors }: { authors: string }) {
  return (
    <>
      {authors.split(/(S\. Rai(?:†)?)/g).map((part, index) =>
        part === "S. Rai" || part === "S. Rai†" ? (
          <strong key={index} className="font-semibold">{part}</strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

const PublicationList = () => {
  let publicationNumber = 0;

  return (
    <div className="space-y-8">
      {publicationGroups.map((group) => (
        <div key={group.heading} className="space-y-4">
          <h3 className="font-heading font-semibold text-lg text-foreground">{group.heading}</h3>
          <ol className="space-y-5">
            {group.items.map((publication) => {
              publicationNumber += 1;
              return (
                <li key={publication.title} className="border-l-2 border-accent pl-4">
                  <p className="text-foreground leading-relaxed">
                    <span className="font-medium">[{publicationNumber}]</span> <AuthorNames authors={publication.authors} />,{" "}
                    {publication.venue ? (
                      <>“{publication.title},” <em>{publication.venue}</em></>
                    ) : (
                      <>“{publication.title}.”</>
                    )}
                  </p>
                  <p className="text-sm text-foreground mt-2">
                    <span className="font-semibold">Status:</span> {publication.status}
                    {publication.tags.map((tag) => (
                      <span key={tag} className="ml-2 px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-xs">{tag}</span>
                    ))}
                  </p>
                  {publication.links && publication.links.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-2">
                      {publication.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-secondary underline transition-smooth"
                        >
                          {link.label}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      ))}
      <p className="text-sm text-foreground">{publicationNote}</p>
    </div>
  );
};

export default PublicationList;
