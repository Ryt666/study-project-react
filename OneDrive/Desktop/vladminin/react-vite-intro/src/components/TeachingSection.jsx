import WayToTeach from './WayToTeach';
import {ways} from '../data'

export default function TeachingSection() {
  return (
    <section>
      <h3>our approach to learning</h3>
      <ul>
        {ways.map((way) => {
          return <WayToTeach key={way.title} {...way} />;
        })}

        {/* <WayToTeach {...ways[0]} />
          <WayToTeach {...ways[1]} />
          <WayToTeach {...ways[2]} />
          <WayToTeach {...ways[3]} /> */}
      </ul>
    </section>
  );
}
