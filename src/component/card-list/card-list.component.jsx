import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.length ? (
        monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })
      ) : (
        <h3>{`${monsters.length} found in database`}</h3>
      )}
    </div>
  );
};
