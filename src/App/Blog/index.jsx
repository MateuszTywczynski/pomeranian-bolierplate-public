import './styles.css';

export function Blog() {
  return (
    <body>
      <div className="blog-layout">
        <article className="blog-post">
          <time className="blog-post-date">21.09.2023</time>
          <h1 className="blog-post-header">
            Why are we so nostalgic for the 1990s?
          </h1>
          <p className="blog-post-text">
            Pop culture used to define a generation, but it seems the cultural,
            music and fashion trends of the 1990s have been recycled, and what
            Generation X considered its rite of passage into adulthood, is being
            discovered and claimed by fledgling grown-ups as their own.
          </p>
          <p className="blog-post-text">
            There's been the resurgence of vinyl as the trend-setters' choice of
            music consumption rather than the ease of a digital download, and
            now the hipsters have discovered the nostalgic sound of a whirring
            cassette from which to enjoy the dulcet tones of everyone from
            Salt-N-Pepa to Rick Astley.
          </p>
        </article>

        <article className="blog-post">
          <time className="blog-post-date">21.09.2023</time>
          <h1 className="blog-post-header">I make mistakes!</h1>
          <p className="blog-post-text">
            “I’m selfish, impatient and a little insecure. I make mistakes, I am
            out of control and at times hard to handle. But if you can’t handle
            me at my worst, then you sure as hell don’t deserve me at my best.”
          </p>
        </article>

        <article className="blog-post">
          <time className="blog-post-date">21.09.2023</time>
          <h1 className="blog-post-header">
            18 Record-Breaking, Controversial, and Weird Facts
          </h1>
          <p className="blog-post-text">
            The death of Queen Elizabeth II on September 8 at the age of 96
            represents a monumental shift for the British monarchy and the
            people of England. Royals have died before, of course, but the Queen
            ruled for more than 70 years, and represented a certain stability
            and decorum that held the institution of the Royal Family together
            as it slowly grew more visibly anachronistic and battered by endless
            scandals.
          </p>
          <p className="blog-post-text">
            <ul>
              <li>
                <a href="https://www.wp.pl">WP.PL 1</a>
              </li>
              <li>
                <a href="https://www.wp.pl">WP.PL 2</a>
              </li>
              <li>
                <a href="https://www.wp.pl">WP.PL 3</a>
              </li>
            </ul>
          </p>
        </article>
      </div>
    </body>
  );
}
