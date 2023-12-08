import React from 'react';
import data from '../../Data/data.json';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import css from './Statistics.module.css';

export const Statistics = ({ title }) => {
  return (
    <section className={css.statistics}>
      {title ? <h2 className={css.title}>{title}</h2> : null}

      <ul className={css.list}>
        {data.map(el => (
          <StatisticItem
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          />
        ))}
      </ul>
    </section>
  );
};
