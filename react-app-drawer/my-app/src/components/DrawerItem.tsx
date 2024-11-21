import { Link } from 'react-router-dom';
import { MenuItem } from './Header';

type DrawerItemProps = {
  item: MenuItem;
  hidden: string;
};

export function DrawerItem({ item, hidden }: DrawerItemProps) {
  return (
    <li>
      <Link className="row" to={item.path}>
        <img src={item.iconUrl} alt={item.name} />
        <h3 className={hidden}>{item.name}</h3>
      </Link>
    </li>
  );
}
