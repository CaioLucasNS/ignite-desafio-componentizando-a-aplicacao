import { Button } from "./Button";

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: Array<{
    id: number,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family',
    title: string,
  }>;
  getSelectedGenreId: number;
  onHandleClickButton: (id: number) => void;
}

export function SideBar(props: SideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onHandleClickButton(genre.id)}
            selected={props.getSelectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}