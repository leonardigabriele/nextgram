import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {photos.map((id) => (
        <Link className="card" key={id} href={`/photos/${id}`} passHref prefetch={false}>
          {id}
        </Link>
      ))}
    </section>
  );
}
