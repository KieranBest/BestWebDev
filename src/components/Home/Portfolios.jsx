import React from "react";

import styles from './Portfolios.module.css';
import portfolios from '../../data/portfolios.json';

import { getImageUrl } from '../../utils';

export const Portfolios = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Portfolio</h1>
                <ul className={styles.portfolios}>
                    {portfolios.map((portfolio, id) => {
                        return (
                            <table className={styles.portfolio} key={id}>
                                <td className={styles.tableImage}>
                                    <img src={getImageUrl(portfolio.imageSrc)} alt={portfolio.title} />
                                </td>
                                <td className={styles.tableText}>
                                    <a href={portfolio.source}>{portfolio.title}</a>
                                </td>
                                <td className={styles.tableText}>
                                    <p>{portfolio.description}</p>
                                </td>
                            </table>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}