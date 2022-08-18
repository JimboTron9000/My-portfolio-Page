import Link from "next/link";

export default function Custom404() {
  return (
    <main>
      <h1>404 -That page does not seem to exist... NOW GET OUT ME SWAMP</h1>
      <iframe
        src="https://giphy.com/embed/toYIS95xETUPLmU9WP"
        width="1000"
        height="393"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link href="/">
        <button className="btn-blue">LEAVE THE SWAMP</button>
      </Link>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221767219&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div>
        <a
          href="https://soundcloud.com/declan-mccue-1"
          title="DecMcCue"
          target="_blank"
        >
          DecMcCue
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/declan-mccue-1/shrek-remix"
          title="Shrek Remix"
          target="_blank"
        >
          Shrek Remix
        </a>
      </div>
    </main>
  );
}
