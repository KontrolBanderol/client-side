import { Button } from '@/components/ui/button';
import Link from 'next/link';
import styles from './dataMetrics.module.scss'
import CardDataMetrics from './cardDataMetrics';

type IDataMetricsEntry = {
    quantity: string
    category: string
 }

export default function DataAndMetrics() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title + ' text-primary'}>
        Статистика
      </p>
      <div className={styles.cardsGroup}>
        <CardDataMetrics />
      </div>
      <Link href={'/stats'}>
        <Button>Смотреть все</Button>
      </Link>
    </div>
  );
};